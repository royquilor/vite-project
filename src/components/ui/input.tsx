import * as React from "react"

import { cn } from "@/lib/utils"

type InputProps = {
  size?: 'xs' | 'sm' | 'default' | 'lg'
} & Omit<React.ComponentProps<"input">, 'size'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, size = "default", ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-md border border-input bg-transparent shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          // Size variants
          {
            'h-7 px-2 text-xs': size === 'xs',
            'h-8 px-3 text-sm': size === 'sm',
            'h-9 px-3 text-base md:text-sm': size === 'default',
            'h-11 px-4 text-lg': size === 'lg',
          },
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
