import { useTheme } from "next-themes";

export function useThemeSwitcher() {
    const { setTheme } = useTheme();

    const toggleLightMode = () => setTheme("light");
    const toggleDarkMode = () => setTheme("dark");

    return { toggleLightMode, toggleDarkMode };
}