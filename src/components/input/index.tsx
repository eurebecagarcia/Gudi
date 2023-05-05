import "./input.scss";
interface Props {
  type: string;
  placeholder: string;
  inputWidth?: string;
  inputHeight?: string;
}

export default function Input({
  type,
  placeholder,
  inputWidth,
  inputHeight,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{
        width: inputWidth,
        height: inputHeight,
      }}
    />
  );
}
