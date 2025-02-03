import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from "react";

//extends decorator - T must be based on ElementType
type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({
  as,
  children,
}: ContainerProps<C>) {
  //capital C - jsx component
  /**
   * added default value (div tag) to get rid of the error:
   * Type '{ children: ReactNode; }' is not assignable to type 'LibraryManagedAttributes<C,
   */
  const Component = as || "div";
  return <Component>{children}</Component>;
}
