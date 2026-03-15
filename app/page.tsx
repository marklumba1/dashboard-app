"use client";
import { useChartJs } from "@/hooks/useChartJS";
import "@/lib/chartSetup";
export default function Home() {
  const chartRef = useChartJs({
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow"],
      datasets: [
        {
          label: "Votes",
          data: [12, 19, 3],
          backgroundColor: ["red", "blue", "yellow"],
        },
      ],
    },
  });
  return <canvas ref={chartRef} />;
}
