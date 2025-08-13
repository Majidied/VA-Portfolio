import { useTheme } from "../../hooks/useTheme";
import { Button } from "@/components/ui/button"


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 items-center">
      <Button
        onClick={() => setTheme("light")}
        className={`p-2 rounded transition-colors ${
          theme === "light" 
            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" 
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        title="Light mode"
      >
        ☀️
      </Button>

      <Button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded transition-colors ${
          theme === "dark" 
            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" 
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        title="Dark mode"
      >
        🌙
      </Button>

      <Button
        onClick={() => setTheme("system")}
        className={`p-2 rounded transition-colors ${
          theme === "system" 
            ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300" 
            : "hover:bg-gray-100 dark:hover:bg-gray-700"
        }`}
        title="System"
      >
        💻
      </Button>
    </div>
  );
}
