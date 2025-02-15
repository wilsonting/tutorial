import { ReactNode, type ComponentPropsWithoutRef } from "react";
import { Link, type LinkProps } from "react-router";

type BaseButtonProps = {
  textOnly?: boolean;
  children: ReactNode;
};

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  BaseButtonProps & {
    to?: never;
  };

type CustomLinkProps = LinkProps & BaseButtonProps;

function isLinkProps(
  props: ButtonProps | CustomLinkProps
): props is CustomLinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | CustomLinkProps) {
  if (isLinkProps(props)) {
    const textOnlyClassName = props.textOnly ? "button--text-only" : "";
    return (
      <Link className={`button ${textOnlyClassName}`} {...props}>
        {props.children}
      </Link>
    );
  }
  const textOnlyClassName = props.textOnly ? "button--text-only" : "";
  return (
    <button className={`button ${textOnlyClassName}`} {...props}>
      {props.children}
    </button>
  );
}
