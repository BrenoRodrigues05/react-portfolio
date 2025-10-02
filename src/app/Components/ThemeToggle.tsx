"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"

const Default_Theme = "light"

export function ThemeToggle(){

    const [theme, setTheme] = useState(Default_Theme)

    useEffect(() =>{
        const savedTheme = localStorage.getItem ("theme") || Default_Theme
        setTheme (savedTheme); document.documentElement.classList.toggle("dark", savedTheme
            === "dark")
    }, [])

    const ToggleTheme = () =>
    {
        const newTheme = theme === "light" ? "dark" : "light"
        setTheme (newTheme);
        localStorage.setItem("theme", newTheme); document.documentElement.classList.toggle
        ("dark")
    }

    return(
        <Button variant= "ghost" size = "icon" onClick={ToggleTheme}>
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        </Button>
    )
}