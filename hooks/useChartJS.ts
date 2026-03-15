import { useEffect, useRef } from "react";
import { Chart, ChartType, ChartData, ChartOptions } from "chart.js";

type UseChartProps = {
  type: ChartType;
  data: ChartData;
  options?: ChartOptions;
};

export const useChartJs = ({ type, data, options }: UseChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    if (chartInstanceRef.current) {
      // Update data/options on existing chart
      chartInstanceRef.current.config.data = data;
      chartInstanceRef.current.config.options = options ?? {};
      chartInstanceRef.current.update();
    } else {
      // Create new chart instance
      chartInstanceRef.current = new Chart(chartRef.current, {
        type,
        data,
        options: options ?? {},
      });
    }

    // Cleanup on unmount
    return () => {
      chartInstanceRef.current?.destroy();
      chartInstanceRef.current = null;
    };
  }, [data, options, type]); // type is fixed but safe to include

  return chartRef;
};