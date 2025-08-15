import React, { useEffect, useRef, useMemo } from "react";

/**
 * SpaceBackground
 * A high-performance, configurable, and accessible animated space backdrop.
 *
 * Features
 * - Multi-layer parallax starfield with depth.
 * - Planets with subtle drift + rotation.
 * - Occasional comets / shooting stars.
 * - Nebula fog using soft radial gradients for depth.
 * - Mouse parallax and auto drift; respects reduced-motion.
 * - Works as a wrapper: place your hero content as children.
 *
 * Usage:
 * <SpaceBackground density={1} speed={1}>
 *   <YourHero />
 * </SpaceBackground>
 */

interface Star {
    x: number;
    y: number;
    r: number;
    twinkle: number;
    twinkleSpeed: number;
}

interface StarLayer {
    depth: number;
    speed: number;
    size: [number, number];
    alpha: number;
    stars: Star[];
}

interface NebulaBlob {
    x: number;
    y: number;
    r: number;
    hue: number;
    alpha: number;
    driftX: number;
    driftY: number;
}

interface Planet {
    x: number;
    y: number;
    r: number;
    ring: boolean;
    hue: number;
    speed: number;
    drift: { x: number; y: number };
}

interface Comet {
    x: number;
    y: number;
    vx: number;
    vy: number;
    life: number;
    len: number;
    hue: number;
}

interface CometState {
    next: number;
    active: Comet | null;
}

interface MousePosition {
    x: number;
    y: number;
}

interface SpaceBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    /** 0.5 = sparse, 1 = normal, 2 = dense */
    density?: number;
    /** 0.5 = slow, 1 = normal, 2 = fast */
    speed?: number;
    /** base hue for accents (0-360). e.g., 200 = blue, 280 = purple */
    accentHue?: number;
    /** Whether to render nebula fog */
    nebula?: boolean;
    /** Whether to render planets */
    planets?: boolean;
    /** Whether to render comets/shooting stars */
    comets?: boolean;
}

const clamp = (n: number, min: number, max: number): number => Math.min(Math.max(n, min), max);

const usePrefersReducedMotion = (): boolean => {
    return useMemo(() =>
        typeof window !== "undefined" && window.matchMedia
            ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
            : false,
    []);
};

const rand = (min: number, max: number): number => Math.random() * (max - min) + min;

const TWO_PI = Math.PI * 2;

export default function SpaceBackground({
    children,
    className = "",
    density = 1,
    speed = 1,
    accentHue = 220,
    nebula = true,
    planets = true,
    comets = true,
}: SpaceBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const rafRef = useRef<number>(0);
    const mouseTargetRef = useRef<MousePosition>({ x: 0.5, y: 0.5 });
    const mouseRef = useRef<MousePosition>({ x: 0.5, y: 0.5 });
    const tRef = useRef<number>(0);
    const reduced = usePrefersReducedMotion();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        let width = 0,
            height = 0,
            dpr = 1;

        const resize = () => {
            const { clientWidth, clientHeight } = containerRef.current || document.body;
            dpr = clamp(window.devicePixelRatio || 1, 1, 2);
            width = Math.max(1, clientWidth);
            height = Math.max(1, clientHeight);
            canvas.width = Math.floor(width * dpr);
            canvas.height = Math.floor(height * dpr);
            canvas.style.width = width + "px";
            canvas.style.height = height + "px";
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(containerRef.current || document.body);

        // Scene objects --------------------------------------------------------
        const layers = createStarLayers(width, height, density);
        const nebulae = nebula ? createNebula(width, height, accentHue) : [];
        const worldPlanets = planets ? createPlanets(width, height, accentHue) : [];
        const cometState: CometState = { next: nowMs() + rand(3000, 8000) / speed, active: null };

        const onMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;
            mouseTargetRef.current.x = clamp(x, 0, 1);
            mouseTargetRef.current.y = clamp(y, 0, 1);
        };
        
        const onTouchMove = (e: TouchEvent) => {
            if (e.touches && e.touches[0]) {
                const rect = canvas.getBoundingClientRect();
                const x = (e.touches[0].clientX - rect.left) / rect.width;
                const y = (e.touches[0].clientY - rect.top) / rect.height;
                mouseTargetRef.current.x = clamp(x, 0, 1);
                mouseTargetRef.current.y = clamp(y, 0, 1);
            }
        };

        window.addEventListener("mousemove", onMove, { passive: true });
        window.addEventListener("touchmove", onTouchMove, { passive: true });

        const tick = () => {
            const t = (tRef.current += (reduced ? 0.2 : 0.8) * speed);
            // ease mouse towards target for smooth parallax
            mouseRef.current.x += (mouseTargetRef.current.x - mouseRef.current.x) * 0.05;
            mouseRef.current.y += (mouseTargetRef.current.y - mouseRef.current.y) * 0.05;

            ctx.clearRect(0, 0, width, height);

            // Background gradient (deep space)
            drawSpaceGradient(ctx, width, height, accentHue);

            // Nebula (back-most)
            nebulae.forEach((n) => drawNebula(ctx, n, width, height, t));

            // Stars (3 parallax layers)
            layers.forEach((layer, i) => drawStars(ctx, layer, width, height, t, mouseRef.current, i));

            // Planets
            worldPlanets.forEach((p) => drawPlanet(ctx, p, width, height, t, mouseRef.current));

            // Comets / shooting stars
            if (comets) {
                handleComets(ctx, width, height, t, speed, cometState, mouseRef.current, accentHue);
            }

            rafRef.current = requestAnimationFrame(tick);
        };

        rafRef.current = requestAnimationFrame(tick);

        return () => {
            cancelAnimationFrame(rafRef.current);
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("touchmove", onTouchMove);
            ro.disconnect();
        };
    }, [density, speed, accentHue, nebula, planets, comets]);

    return (
        <div ref={containerRef} className={`relative w-full h-dvh overflow-hidden ${className}`}>
            <canvas
                ref={canvasRef}
                className="absolute inset-0 -z-10 block"
                aria-hidden="true"
            />

            {/* Subtle vignette */}
            <div className="pointer-events-none absolute inset-0 -z-10" style={{
                background: "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.6) 100%)"
            }} />

            {/* Content slot */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}

// Helpers ------------------------------------------------------------------
function nowMs(): number { 
    return (typeof performance !== 'undefined' ? performance.now() : Date.now()); 
}

function drawSpaceGradient(ctx: CanvasRenderingContext2D, w: number, h: number, hue: number): void {
    const g = ctx.createLinearGradient(0, 0, 0, h);
    g.addColorStop(0, `hsl(${hue}, 60%, 6%)`);
    g.addColorStop(1, `hsl(${(hue+60)%360}, 50%, 3%)`);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
}

function createStarLayers(w: number, h: number, density: number): StarLayer[] {
    const base = 2200 * density; // total baseline stars
    const layers: StarLayer[] = [
        { depth: 0.25, speed: 0.02, size: [0.6, 1.1], alpha: 0.45, stars: [] },
        { depth: 0.5,  speed: 0.06, size: [0.7, 1.4], alpha: 0.65, stars: [] },
        { depth: 1.0,  speed: 0.12, size: [0.8, 1.8], alpha: 0.95, stars: [] },
    ];
    const area = w * h;
    const factor = clamp(area / (1440 * 900), 0.6, 2.0);
    const total = Math.floor(base * factor);

    // Distribute stars across layers
    const ratios = [0.45, 0.35, 0.20];
    layers.forEach((layer, i) => {
        const count = Math.max(1, Math.floor(total * ratios[i]));
        for (let s = 0; s < count; s++) {
            layer.stars.push({
                x: Math.random() * w,
                y: Math.random() * h,
                r: rand(layer.size[0], layer.size[1]),
                twinkle: Math.random() * TWO_PI,
                twinkleSpeed: rand(0.002, 0.02),
            });
        }
    });
    return layers;
}

function drawStars(ctx: CanvasRenderingContext2D, layer: StarLayer, w: number, h: number, t: number, mouse: MousePosition, index: number): void {
    const parallax = (mouse.x - 0.5) * layer.depth * 20;
    const drift = t * layer.speed;
    ctx.save();
    ctx.globalAlpha = layer.alpha;
    for (let i = 0; i < layer.stars.length; i++) {
        const s = layer.stars[i];
        // vertical scroll to fake infinite field
        let y = (s.y + drift) % h;
        // slight horizontal parallax
        let x = (s.x + parallax) % w;
        if (x < 0) x += w;

        // twinkle
        const a = 0.6 + Math.sin(s.twinkle + t * s.twinkleSpeed) * 0.4;
        ctx.globalAlpha = layer.alpha * a;

        ctx.beginPath();
        ctx.arc(x, y, s.r, 0, TWO_PI);
        ctx.fillStyle = index === 2 ? "#ffffff" : index === 1 ? "#dbeafe" : "#c7d2fe";
        ctx.fill();
    }
    ctx.restore();
}

function createNebula(w: number, h: number, hue: number): NebulaBlob[] {
    const blobs: NebulaBlob[] = [];
    const count = 4;
    for (let i = 0; i < count; i++) {
        blobs.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r: rand(w * 0.2, w * 0.5),
            hue: (hue + rand(-30, 30) + 360) % 360,
            alpha: rand(0.05, 0.12),
            driftX: rand(-0.05, 0.05),
            driftY: rand(-0.02, 0.02),
        });
    }
    return blobs;
}

function drawNebula(ctx: CanvasRenderingContext2D, n: NebulaBlob, w: number, h: number, t: number): void {
    const x = (n.x + Math.sin(t * 0.0005) * n.driftX * t) % (w + n.r * 2);
    const y = (n.y + Math.cos(t * 0.0005) * n.driftY * t) % (h + n.r * 2);
    const cx = (x + w + n.r) % (w + n.r * 2) - n.r;
    const cy = (y + h + n.r) % (h + n.r * 2) - n.r;

    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, n.r);
    g.addColorStop(0, `hsla(${n.hue}, 90%, 65%, ${n.alpha})`);
    g.addColorStop(1, `hsla(${n.hue}, 90%, 50%, 0)`);
    ctx.globalCompositeOperation = "lighter";
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(cx, cy, n.r, 0, TWO_PI);
    ctx.fill();
    ctx.globalCompositeOperation = "source-over";
}

function createPlanets(w: number, h: number, hue: number): Planet[] {
    const count = 2 + Math.round(Math.random());
    const list: Planet[] = [];
    for (let i = 0; i < count; i++) {
        const r = rand(40, 110);
        list.push({
            x: Math.random() * w,
            y: Math.random() * h,
            r,
            ring: false,
            hue: (hue + rand(-80, 80) + 360) % 360,
            speed: rand(0.01, 0.03),
            drift: { x: rand(-0.04, 0.04), y: rand(-0.02, 0.02) },
        });
    }
    return list;
}

function drawPlanet(ctx: CanvasRenderingContext2D, p: Planet, w: number, h: number, t: number, mouse: MousePosition): void {
    const parallax = { x: (mouse.x - 0.5) * 30, y: (mouse.y - 0.5) * 30 };
    const x = ((p.x + parallax.x + p.drift.x * t) % (w + p.r * 2) + (w + p.r)) % (w + p.r * 2) - p.r;
    const y = ((p.y + parallax.y + p.drift.y * t) % (h + p.r * 2) + (h + p.r)) % (h + p.r * 2) - p.r;

    // Planet body
    const g = ctx.createRadialGradient(x - p.r * 0.3, y - p.r * 0.3, p.r * 0.2, x, y, p.r);
    g.addColorStop(0, `hsl(${p.hue}, 80%, 70%)`);
    g.addColorStop(1, `hsl(${p.hue}, 60%, 20%)`);
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, p.r, 0, TWO_PI);
    ctx.fill();

    // Simple terminator (night side)
    ctx.globalAlpha = 0.3;
    ctx.beginPath();
    ctx.arc(x + p.r * 0.2, y + p.r * 0.2, p.r, 0, TWO_PI);
    ctx.fillStyle = "#000";
    ctx.fill();
    ctx.globalAlpha = 1;

    // Ring (optional)
    if (p.ring) {
        ctx.save();
        ctx.translate(x, y);
        const tilt = Math.sin(t * 0.001 * p.speed) * 0.6;
        ctx.rotate(tilt);
        ctx.scale(1.8, 0.5);
        const ringGrad = ctx.createLinearGradient(-p.r * 2, 0, p.r * 2, 0);
        ringGrad.addColorStop(0, "rgba(255,255,255,0)");
        ringGrad.addColorStop(0.5, "rgba(255,255,255,0.5)");
        ringGrad.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = ringGrad;
        ctx.beginPath();
        ctx.ellipse(0, 0, p.r * 1.6, p.r * 1.6, 0, 0, TWO_PI);
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.restore();
    }
}

function handleComets(ctx: CanvasRenderingContext2D, w: number, h: number, _t: number, speed: number, state: CometState, _mouse: MousePosition, hue: number): void {
    const now = nowMs();
    if (!state.active && now > state.next) {
        const fromTop = Math.random() < 0.5;
        state.active = {
            x: fromTop ? rand(-w * 0.2, w * 0.8) : -w * 0.2,
            y: fromTop ? -h * 0.2 : rand(-h * 0.2, h * 0.8),
            vx: rand(3, 6) * speed,
            vy: rand(2, 4) * speed,
            life: 1,
            len: rand(80, 160),
            hue: (hue + rand(-30, 30) + 360) % 360,
        };
    }

    const c = state.active;
    if (c) {
        // trail
        const grad = ctx.createLinearGradient(c.x, c.y, c.x - c.len, c.y - c.len);
        grad.addColorStop(0, `hsla(${c.hue}, 100%, 85%, 0.9)`);
        grad.addColorStop(1, `hsla(${c.hue}, 100%, 85%, 0)`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.len, c.y - c.len);
        ctx.stroke();

        // head
        ctx.beginPath();
        ctx.arc(c.x, c.y, 2.5, 0, TWO_PI);
        ctx.fillStyle = `hsl(${c.hue}, 100%, 90%)`;
        ctx.fill();

        c.x += c.vx;
        c.y += c.vy;
        c.life -= 0.01 * speed;

        if (c.x > w + c.len || c.y > h + c.len || c.life <= 0) {
            state.active = null;
            state.next = now + rand(4000, 12000) / speed;
        }
    }
}
