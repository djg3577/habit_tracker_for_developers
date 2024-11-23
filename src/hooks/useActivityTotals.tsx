import ActivitiesStore from "@/store/activity";
import User from "@/store/user";
import { useCallback, useEffect, useState } from "react";

export function useActivityTotals() {
  const [activity_totals, setActivityTotals] = useState({});

  const fetchActivityTotals = async () => {
    const {
      data: { activity_totals },
    } = await ActivitiesStore.getActivityTotals();
    if (!activity_totals) return;
    setActivityTotals(activity_totals);
  };

  const convertToMinutes = (totalMinutes: number) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours} hours ${minutes} minutes`;
  };

  const setup = useCallback(() => {
    fetchActivityTotals();

  }, [User.state.user]);

  useEffect(() => {
    setup();
  }, []);

  return { convertToMinutes, activity_totals };
}
