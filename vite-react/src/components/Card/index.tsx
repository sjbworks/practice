import "./styles.scss";

import clsx from "clsx";
// import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, className }: Props) => {
  const classProps: string = clsx("lma-card", className);
  return <div className={classProps}>{children}</div>;
};

Card.defaultProps = {
  className: "",
};

export default Card;
