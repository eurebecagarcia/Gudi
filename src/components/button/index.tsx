import "./button.scss";

interface Props {
  text: string;
  btnBackground?: string;
  btnColor?: string;
  btnBorder?: string;
  btnFontWeight?: string;
  btnWidth?: string;
}

export default function Button({
  text,
  btnBackground,
  btnColor,
  btnBorder,
  btnFontWeight,
  btnWidth,
}: Props) {
  return (
    <button
      style={{
        background: btnBackground,
        color: btnColor,
        border: btnBorder,
        fontWeight: btnFontWeight,
        width: btnWidth,
      }}
      className="btnBlue"
    >
      {text}
    </button>
  );
}
