import { PropsWithChildren } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({
  children,
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <div>
      <button {...props}>{children}</button>
    </div>
  );
}

function UseAge() {
  return <Button type="button">안은 children</Button>;
}

function Test({}: {}): { name: string; age: number; compone: any } {
  return {
    age: 10,
    name: "구교현",
    compone: Button,
  };
}
