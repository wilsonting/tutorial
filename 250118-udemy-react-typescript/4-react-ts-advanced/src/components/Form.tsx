import {
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  type ComponentPropsWithoutRef,
} from "react";

export type FormHandle = {
  clear: () => void;
};

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  //useImperativeHandle - work with forwardRef only!
  // expose callable function from callable function to other component
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log("CLEARED");
        form.current?.reset();
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();

    //must add name attribute in parent component in order to use FormData
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);

    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

export default Form;
