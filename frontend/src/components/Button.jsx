import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover:bg-secondary-hover"],
      ghost: ["bg-gray-100"],
    },
    size: {
      default: [],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "items-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const classes = buttonStyles({ size: "icon", variant: "default" });

export default function Button({ variant, size, className, ...props }) {
  return (
    <button
      {...props}
      className={twMerge(buttonStyles({ variant, size }), className)}
    ></button>
  );
}
