export default function Divider({ variant }) {
  if (variant === "small") return <div className="h-36"></div>;
  return <div className="h-64"></div>;
}
