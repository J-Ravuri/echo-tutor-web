"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 *
 * Guide on using the `asChild` prop:
 *
 * The `asChild` prop allows you to pass a React element as a child to the `Button` component,
 * which will then be rendered as the actual button element. This is useful when you want to
 * use a custom button element, such as a `Link` component from Next.js, but still want to
 * apply the `Button` component's styles and variants.
 *
 * Example usage with Next.js Link:
 * ```tsx
 * import Link from 'next/link';
 *
 * function MyComponent() {
 *   return (
 *     <Button asChild>
 *       <Link href="/about">About Us</Link>
 *     </Button>
 *   );
 * }
 * ```
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? React.Fragment : "button";

    if (asChild && React.isValidElement(children)) {
      // Check if the child is a React.Fragment
      if (children.type === React.Fragment) {
        return (
          <>
            {React.Children.map(children.props.children, (child) => {
              if (React.isValidElement(child)) {
                return React.cloneElement(child, {
                  className: cn(buttonVariants({ variant, size, className }), child.props?.className),
                  ref: ref,
                  ...props,
                });
              }
              return child; // Return non-element children as is
            })}
          </>
        );
      } else {
        return (
          React.cloneElement(children as React.ReactElement, {
            className: cn(buttonVariants({ variant, size, className }), (children as React.ReactElement).props?.className),
            ref: ref,
            ...props,
          })
        );
      }
    }

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button"

export { Button, buttonVariants }
    
