import CalendarHeatmap from "react-calendar-heatmap";
import { Tooltip } from "react-tooltip";

export const Heatmap = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8 truncate">
      <h2 className="text-2xl font-bold text-red-600 mb-4 ">Activity Heatmap</h2>
      <div className="heatmap-container truncate">
        <CalendarHeatmap
          startDate={new Date("2024-01-01")}
          endDate={new Date("2024-12-31")}
          values={[]}
          classForValue={(value) => {
            if (!value) return "color-empty";
            if (value.count > 5) return "color-scale-6";
            return `color-scale-${value.count}`;
          }}
        />
        {/**
         * WILL NEED TO COME BACK TO HEAT MAP IN THE FUTURE
         */}
        <Tooltip />
      </div>
    </div>
  );
};
