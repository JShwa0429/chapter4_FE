import { memo } from "react";

const TabButton = ({ children, onClick }) => {
  return <button onClick={() => onClick()}>{children}</button>;
};

export default memo(TabButton);
