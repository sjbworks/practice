import "./styles.scss";

import clsx from "clsx";
// import React from 'react'

import { TextColorType, TextSizeType } from ".";

type Props = {
  children: React.ReactNode;
  size?: TextSizeType;
  className?: string;
  color?: TextColorType;
  bold?: boolean;
};

const Text = ({ children, color, className, size, bold }: Props) => {
  const classProps: string = clsx("lma-text", color, size, className, { bold });
  return <span className={classProps}>{children}</span>;
};

Text.defaultProps = {
  size: "md",
  className: "",
  color: "default",
  bold: false,
};

export default Text;
