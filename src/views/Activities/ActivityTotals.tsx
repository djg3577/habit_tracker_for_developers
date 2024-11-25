import { useActivityTotals } from "@/hooks/useActivityTotals";
import { Activity } from "@/services/activity";

export function ActivityTotals() {
  const { activity_totals, convertToMinutes } = useActivityTotals();

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Activity Totals</h2>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="pb-2 text-center">Activity</th>
            <th className="pb-2 text-center">Total Time</th>
          </tr>
        </thead>
        <tbody>
          {activity_totals?.map(
            (activity: { activity_name: Activity["activity_name"]; total_duration: Activity["duration"] }) => (
              <tr key={activity.activity_name} className="border-t">
                <td className="py-2 pr-2">{activity.activity_name}</td>
                <td className="py-2 truncate text-center">{convertToMinutes(Number(activity.total_duration))}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
}
