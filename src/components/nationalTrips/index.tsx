import "./nationalTrips.scss";
import Button from "../button";

interface Props {
  image: string;
  title: string;
  btnBackground: string;
  btnBorder: string;
  btnColor?: string;
  Fdirection?: "row" | "row-reverse" | undefined;
  background?: string;
  color?: string;
  textColor: string;
  children: JSX.Element;
  width?: string;
}

export default function NationalTrips({
  image,
  title,
  children,
  btnBackground,
  btnBorder,
  Fdirection,
  background,
  color,
  btnColor,
  textColor,
  width,
}: Props) {
  return (
    <section style={{ flexDirection: Fdirection }}>
      <div className="box-image">
        <img src={image} alt="" />
      </div>
      <div
        className="box-text"
        style={{ background: background, color: color }}
      >
        <div>
          <p style={{ color: textColor }} className="disclaimer">
            viagens nacionais
          </p>
          <h2 style={{ width: width }}>{title}</h2>
          <p>{children}</p>
          <Button
            text="Agendar"
            btnBackground={btnBackground}
            btnBorder={btnBorder}
            btnColor={btnColor}
          />
        </div>
      </div>
    </section>
  );
}
