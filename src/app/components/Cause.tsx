import Image from "next/image";
export default function Cause() {
  const WIDTH: number = 360;
  const HEIGHT: number = 360;

  return (
    <div>
      <h1>Cause</h1>
      <Image
        className="dark:invert"
        src="/plots/crash_count_top_contributing_factors_barplot.png"
        alt="Borough"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
    </div>
  );
}
