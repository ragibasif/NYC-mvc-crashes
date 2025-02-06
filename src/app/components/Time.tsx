import Image from "next/image";
export default function Time() {
  const WIDTH: number = 360;
  const HEIGHT: number = 360;

  return (
    <div>
      <h1>Time</h1>
      <Image
        className="dark:invert"
        src="/plots/crash_count_by_day_of_week_barplot.png"
        alt="Borough"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_by_hour_of_day_barplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_by_weekday_and_hour_of_day_boxplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_by_weekday_and_hours_heatmap.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_over_time_lineplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_over_time_lmplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
      <Image
        className="dark:invert"
        src="/plots/crash_count_over_time_scatterplot.png"
        alt="top streets"
        width={WIDTH}
        height={HEIGHT}
        priority
      />
    </div>
  );
}
