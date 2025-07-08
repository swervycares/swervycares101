import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Swervy Cares Pink Purple Blue Theme
        "swervy-pink": "var(--swervy-pink)",
        "swervy-light-pink": "var(--swervy-light-pink)",
        "swervy-pale-pink": "var(--swervy-pale-pink)",
        "swervy-purple": "var(--swervy-purple)",
        "swervy-light-purple": "var(--swervy-light-purple)",
        "swervy-blue": "var(--swervy-blue)",
        "swervy-light-blue": "var(--swervy-light-blue)",
        "swervy-coral": "var(--swervy-coral)",
        "swervy-coral-light": "var(--swervy-coral-light)",
        "swervy-coral-bright": "var(--swervy-coral-bright)",
        "swervy-peach": "var(--swervy-peach)",
        "swervy-sunset": "var(--swervy-sunset)",
        "swervy-turquoise": "var(--swervy-turquoise)",
        "swervy-teal": "var(--swervy-teal)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "aura-float": {
          "0%, 100%": {
            transform: "translateY(0px) scale(1)",
            opacity: "0.7",
          },
          "50%": {
            transform: "translateY(-20px) scale(1.05)",
            opacity: "0.9",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aura-float": "aura-float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
