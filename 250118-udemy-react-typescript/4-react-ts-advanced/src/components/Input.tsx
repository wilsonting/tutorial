import { ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef type can be used to grab all the native attributes of an HTML element as the props type of your component.
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

//collate and spread all the remain properties into the input tag using ...props
export default function Input({ id, label, ...props }: InputProps) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...props} />
    </p>
  );
}
