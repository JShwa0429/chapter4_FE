import { memo } from "react";

const Button = ({ children, onClick, ...rest }) => {
  return (
    <button onClick={() => onClick()} {...rest}>
      {children}
    </button>
  );
};

export default memo(Button);
