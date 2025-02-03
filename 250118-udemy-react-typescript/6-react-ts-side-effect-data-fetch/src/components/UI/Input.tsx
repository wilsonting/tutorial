import { forwardRef, type ComponentPropsWithoutRef } from "react";

// ComponentPropsWithoutRef type can be used to grab all the native attributes of an HTML element as the props type of your component.
type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

//collate and spread all the remain properties into the input tag using ...props
/**
 * The forwardRef function in React is used to pass a ref from a parent
 * component down to a child component, allowing the parent to directly
 * access the child component’s DOM element or a React instance.
 * This is particularly useful when creating reusable components that need
 * to expose internal DOM elements for specific use cases,
 * like focus management or measuring size.
 */
const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { id, label, ...props }: InputProps,
  ref
) {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </p>
  );
});

export default Input;
