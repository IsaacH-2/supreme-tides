import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "primary-inverse" | "secondary-inverse";

const VARIANT_CLASS: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  "primary-inverse": "btn-primary-inverse",
  "secondary-inverse": "btn-secondary-inverse",
};

type CommonProps = {
  variant?: Variant;
  className?: string;
  children: React.ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export default function Button(props: LinkButtonProps | NativeButtonProps) {
  const { variant = "primary", className = "", children } = props;
  const classes = `${VARIANT_CLASS[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, variant: _variant, className: _className, children: _children, ...buttonProps } =
    props as NativeButtonProps;

  return (
    <button type="button" {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
