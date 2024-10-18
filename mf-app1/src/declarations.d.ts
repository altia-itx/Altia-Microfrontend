declare module "remote/Button" {
  import { FC } from "react";

  const Button: FC;
  export default Button;
}
declare module "mfApp3/QueryComponent" {
  import { FC } from "react";
  const QueryComponent: FC;
  export default QueryComponent;
}
declare module "remote/index.css" {
  const css: any;
  export default css;
}

declare module "@components/*" {
  import { React } from "react";
  const content: React.ComponentType<any>;
  export default content;
}

declare module "*.png" {
  const content: string;
  export default content;
}

declare module "@lib/utils" {
  import { clsx, type ClassValue } from "clsx";
  import { twMerge } from "tailwind-merge";

  export function cn(...inputs: ClassValue[]): string;
}

declare module "@components/*" {
  import { React } from "react";
  const Card: React.ComponentType<any>;
  export { Card };
}