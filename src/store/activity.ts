import activities, { Activity } from "@/services/activity";
async function createActivity(activity: Activity) {
  return activities.createActivity(activity);
}

const ActivitiesStore = {
  createActivity,
};

export default ActivitiesStore;
