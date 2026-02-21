import type { VariantProps } from "class-variance-authority";
import * as React from "react";

declare const buttonVariants: (props?: {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
  className?: string;
}) => string;

declare function Button(
  props: React.ComponentProps<"button"> &
    VariantProps<typeof buttonVariants> & {
      asChild?: boolean;
    },
): React.JSX.Element;

export { Button, buttonVariants };
