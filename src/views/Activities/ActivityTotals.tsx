export function ActivityTotals() {
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
          {/**
           * LOGIC FOR MAPPING OVER ACTIVITY TOTALS HERE
           */}
        </tbody>
      </table>
    </div>
  );
}
