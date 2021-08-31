export default function ColorStrip({ additionalClassName }) {
  return (
    <div
      className={`color-strip ${additionalClassName?additionalClassName:""}`}
      style={{
        height: "4px",
        width: "100vw",
        backgroundImage: `linear-gradient(to right,rgb(180, 38, 2),#f49c00)`,
      }}
    ></div>
  );
}
