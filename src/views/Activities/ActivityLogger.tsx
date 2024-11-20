export function ActivityLogger() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Log Activity</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="ActivityName" className="block text-gray-700 font-bold mb-2">
            Activity Name
          </label>
          <input
            type="text"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
            id="ActivityName"
            placeholder="Enter activity type"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date
          </label>
          <input
            type="date"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
            id="date"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">Duration</label>
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <input
                  type="number"
                  className="w-full pl-3 pr-10 py-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  id="hours"
                  min="0"
                  max="17"
                />
                <span className="absolute right-3 top-2 text-gray-400">hrs</span>
              </div>
              {"ERROR HANDLING HERE"}
            </div>
            <div className="flex-1 relative">
              <input
                type="number"
                className="w-full pl-3 pr-10 py-2 border rounded focus:ring-2 focus:ring-red-500 focus:border-transparent"
                id="minutes"
                min="0"
                max="59"
              />
              <span className="absolute right-3 top-2 text-gray-400">min</span>
            </div>
          </div>
        </div>
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 w-full transition duration-300 ease-in-out transform hover:scale-105"
        >
          Log Activity
        </button>
      </form>
    </div>
  );
}
