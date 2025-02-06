import Image from "next/image";
export default function Location() {
  const WIDTH: number = 360;
  const HEIGHT: number = 360;
  return (
    <div>
      <h1>Location</h1>
      <Image
        className="dark:invert"
        src="/plots/crash_count_per_borough_barplot.png"
        alt="Borough"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_top_streets_barplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
    </div>
  );
}
