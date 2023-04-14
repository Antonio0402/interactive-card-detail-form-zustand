import { type ReactNode } from "react";

const Btn = ({
  handleClick,
  children,
  ...rest
}: {
  handleClick?: (...args: any[]) => any;
  children: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      className="bg-primary py-5 w-full rounded-lg text-light text-btn text-center disabled:bg-opacity-50"
      onClick={handleClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Btn;
