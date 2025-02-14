import { type ComponentPropsWithoutRef } from "react";
import { Link } from "react-router";

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  textOnly: boolean;
};

type LinkProps = ComponentPropsWithoutRef<"link"> & {
  textOnly: boolean;
  to: string;
};

function isLinkProps(props: ButtonProps | LinkProps): props is LinkProps {
  return "to" in props;
}

export default function Button(props: ButtonProps | LinkProps) {
  const textOnlyClassName = props.textOnly ? "button--text-only" : "";

  if (isLinkProps(props)) {
    return (
      <Link className={`button ${textOnlyClassName}`} to={props.to}></Link>
    );
  }

  return <button className={`button ${textOnlyClassName}`} {...props}></button>;
}
