export const Leaderboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Leaderboard</h2>
      <table className="w-full">
        <thead>
          <tr className="text-center">
            <th className="pb-2 ">Username</th>
            <th className="pb-2 ">Score</th>
          </tr>
        </thead>
        <tbody>
          {/**WILL NEED TO COME BACK AND REPLACE WITH USERNAMES AND SCORE */}
          <tr>
            <td className="py-2 text-center">USERNAME</td>
            <td className="py-2">SCORE</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
