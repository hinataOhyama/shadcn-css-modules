import * as React from "react";
import styles from "./card.module.css";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={`${styles.card} ${className || ""}`} {...props} />
));
Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardHeader} ${withBorder ? styles.withHeaderBorder : ""} ${
      className || ""
    }`}
    {...props}
  />
));
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={`${styles.cardTitle} ${className || ""}`}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={`${styles.cardDescription} ${className || ""}`}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardContent} ${
      withBorder ? styles.withContentBorder : ""
    } ${className || ""}`}
    {...props}
  />
));
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { withBorder?: boolean }
>(({ className, withBorder, ...props }, ref) => (
  <div
    ref={ref}
    className={`${styles.cardFooter} ${
      withBorder ? styles.withFooterBorder : ""
    } ${className || ""}`}
    {...props}
  />
));
CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};