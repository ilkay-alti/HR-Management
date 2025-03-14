import { cn } from "@/utils/lib";
import { cva, VariantProps } from "class-variance-authority";
import React, { FC, forwardRef, HTMLAttributes, ElementType } from "react";

const headingVariants = cva("text-[#16151C]", {
  variants: {
    variant: {
      bold: "font-semibold",
      light: "font-light",
    },
    size: {
      h1: "text-[80px]",
      h2: "text-[60px]",
      h3: "text-[40px]",
      h4: "text-[30px]/[40px]",
      h5: "text-[24px]/[36px]",
      h6: "text-[20px]/[30px]",
      h7: "text-[16px]/[26px]",
      body1: "text-[16px]/[24px]",
      body2: "text-[14px]/[22px]",
      caption: "text-[12px]/[18px]",
      label: "text-[11px]/[16px]",
    },
  },
  defaultVariants: {
    variant: "light",
    size: "body1",
  },
});

interface HeadingProps
  extends HTMLAttributes<
      HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement
    >,
    VariantProps<typeof headingVariants> {}

const Heading: FC<HeadingProps> = forwardRef<
  HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement,
  HeadingProps
>(({ className, size, variant, ...props }, ref) => {
  // size değerine göre uygun HTML etiketini belirle
  let Tag: ElementType = "p"; // Varsayılan etiket
  if (size?.startsWith("h")) {
    Tag = size as ElementType; // h1, h2, h3, vb.
  } else if (size === "body1" || size === "body2") {
    Tag = "p"; // body1 ve body2 için <p> etiketi
  } else if (size === "caption" || size === "label") {
    Tag = "span"; // caption ve label için <span> etiketi
  } else {
    Tag = "p";
  }

  return (
    <Tag
      {...props}
      ref={ref}
      className={cn(headingVariants({ size, variant }), className)}
    >
      {props.children}
    </Tag>
  );
});

Heading.displayName = "Heading";

export default Heading;
