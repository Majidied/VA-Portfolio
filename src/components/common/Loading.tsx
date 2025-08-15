import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingProps {
  isLoading?: boolean;
  onComplete?: () => void;
  className?: string;
}

const Loading: React.FC<LoadingProps> = ({
  isLoading = true,
  onComplete,
  className = '',
}) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [showPortal, setShowPortal] = useState(false);

  const loadingSteps = [
    "Initializing Virtual Assistant...",
    "Connecting to the cosmos...",
    "Loading stellar portfolio...",
    "Preparing magical experience...",
    "Almost ready for launch..."
  ];

  useEffect(() => {
    if (!isLoading) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15 + 5;
        const clampedProgress = Math.min(newProgress, 100);
        
        // Update current step based on progress
        const stepIndex = Math.floor((clampedProgress / 100) * loadingSteps.length);
        setCurrentStep(Math.min(stepIndex, loadingSteps.length - 1));
        
        // Show portal effect at 95%
        if (clampedProgress >= 95) {
          setShowPortal(true);
        }
        
        if (clampedProgress >= 100) {
          setTimeout(() => {
            onComplete?.();
          }, 800);
          clearInterval(interval);
        }
        
        return clampedProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isLoading, onComplete, loadingSteps.length]);

  if (!isLoading) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 ${className}`}
      >
        {/* Animated Space Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated stars */}
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: Math.random() * 3 + 1 + 'px',
                height: Math.random() * 3 + 1 + 'px',
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, -100],
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: Math.random() * 4 + 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}

          {/* Nebula-like gradient overlays */}
          <motion.div
            className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>

        {/* Main Loading Content */}
        <div className="relative z-10 text-center max-w-md mx-auto px-8">
          {/* Central Loading Animation */}
          <div className="relative mb-8">
            {/* Outer rotating ring */}
            <motion.div
              className="w-32 h-32 mx-auto border-4 border-transparent border-t-blue-400 border-r-purple-400 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Inner rotating ring */}
            <motion.div
              className="absolute inset-4 border-2 border-transparent border-l-blue-300 border-b-purple-300 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            />
            
            {/* Central pulsing core */}
            <motion.div
              className="absolute inset-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
              animate={{
                scale: [0.8, 1.2, 0.8],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Portal effect when near completion */}
            <AnimatePresence>
              {showPortal && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.5, opacity: 1 }}
                  exit={{ scale: 2, opacity: 0 }}
                  className="absolute inset-0 bg-gradient-radial from-white/30 to-transparent rounded-full"
                  transition={{ duration: 0.8 }}
                />
              )}
            </AnimatePresence>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </div>
            <motion.div
              className="mt-2 text-blue-300 font-semibold text-lg"
              key={progress}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              {Math.round(progress)}%
            </motion.div>
          </div>

          {/* Loading Text */}
          <motion.div
            className="text-white text-lg font-medium mb-4"
            key={currentStep}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {loadingSteps[currentStep]}
          </motion.div>

          {/* Animated dots */}
          <div className="flex justify-center space-x-1">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Magical sparkles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={`sparkle-${i}`}
                className="absolute text-yellow-300 text-xs"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: Math.random() * 2 + 1,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                ✨
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom branding */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="text-white/70 text-sm">
            Crafted with magic ✨
          </div>
          <motion.div
            className="mt-2 w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"
            animate={{
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Loading;
