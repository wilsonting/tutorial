import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, id, ...props }: InputProps,
  ref
) {
  return (
    <div>
      <label>{label}</label>
      <input id={id} name={id} {...props} ref={ref} />
    </div>
  );
});

export default Input;
