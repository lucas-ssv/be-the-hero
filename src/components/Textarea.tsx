import { TextareaHTMLAttributes } from "react";
import "../styles/textarea.scss";

export function Textarea({
  ...rest
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea cols={30} rows={10} {...rest}></textarea>;
}
