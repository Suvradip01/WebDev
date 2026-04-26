# Dark Mode Implementation Guide

A step-by-step guide to adding dark mode to a React app using Tailwind CSS and shadcn/ui.

## 1. Project Setup
Create a new Vite project and install the necessary dependencies.

```bash
# Create React app
npm create vite@latest my-app -- --template react
cd my-app
# Install Tailwind CSS
npm install tailwindcss @tailwindcss/vite
# Install Animations Utility
npm install tw-animate-css
```

## 2. Configure Tailwind CSS
Configure Tailwind in your CSS entry point.

**File: `src/index.css`**

```css
@import "tailwindcss";
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100%;
}
```

Configure the Vite plugin.

**File: `vite.config.js`**

```javascript
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

## 3. Configure Aliases & Types
Set up path aliases (@/) for cleaner imports and install Node types.

**a. Create or edit `jsconfig.json`:**

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**b. Install Node types:**

```bash
npm install -D @types/node
```

**c. Update `vite.config.js` with alias support:**

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

## 4. Initialize shadcn/ui
Run the initialization command.

```bash
npx shadcn@latest init
```

*Base Color: Select Neutral when asked.*

## 5. Create Core Components
Create the necessary theme components in `src/components`.

**a. `src/components/theme-provider.jsx`**

```jsx
import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    if (theme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      localStorage.setItem(storageKey, newTheme);
      setTheme(newTheme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
```

**b. `src/components/theme-toggle.jsx`**

```jsx
import { Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/components/theme-provider"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
```

## 6. Wrap Application
Add the `ThemeProvider` to your main entry file.

**File: `src/main.jsx`**

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from "./components/theme-provider"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
```

## 7. Install UI Components
Install the Shadcn UI components needed for the toggle.

```bash
npx shadcn@latest add button
npx shadcn@latest add dropdown-menu
```

## 8. Usage (makse sure you import the components)
Finally, place the `<ModeToggle />` component anywhere in your app.

**File: `src/App.jsx`**

```jsx
import { ModeToggle } from "@/components/theme-toggle"

function App() {
  return (
    <div>
      <ModeToggle />
      {/* Rest of your app */}
    </div>
  )
}

export default App
```
