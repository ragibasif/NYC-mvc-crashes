import Image from "next/image";
export default function Location() {
  const WIDTH: number = 360;
  const HEIGHT: number = 360;
  return (
    <div>
      <h1>Results</h1>
      <Image
        className="dark:invert"
        src="/plots/fatalities_by_borough_barplot.png"
        alt="Borough"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/injuries_by_borough_barplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
    </div>
  );
}
