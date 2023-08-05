import { FC, forwardRef, HtmlHTMLAttributes } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/lib/utils";

const headinghVariants = cva(
  "text-blac dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        default: "text-4xl md:text-5xl lg:text-6xl",
        lg: "text-5xl md:text-6xl lg:text-7xl",
        sm: "text02xl md:text-3xl lg:text-4xl",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);
interface LargeHeadingProps
  extends HtmlHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headinghVariants> {}

const Paragraph = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headinghVariants({ size, className }))}
      >
        {children}
      </h1>
    );
  }
);
Paragraph.displayName = "Paragraph";

export default Paragraph;
