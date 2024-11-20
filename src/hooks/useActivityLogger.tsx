import ActivitiesStore from "@/store/activity";
import User from "@/store/user";
import { useState } from "react";

export default function useActivityLogger() {
  const [activity_name, setActivityName] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hoursError, setHoursError] = useState("");
  const [minutesError, setMinutesError] = useState("");
  const user = User.state.user.get();
  const user_id = user.id;

  const handleHoursChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = Number(value);
    if (value === "" || (numValue >= 0 && numValue <= 15)) {
      setHours(value);
      setHoursError("");
    } else {
      setHoursError("Hours must be between 0 and 15");
    }
  };

  const handleMinutesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const numValue = Number(value);
    if (value === "" || (numValue >= 0 && numValue <= 59)) {
      setHours(value);
      setHoursError("");
    } else {
      setHoursError("Hours must be between 0 and 15");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hoursError || minutesError) return;

    const totalDurationInMinutes = (Number(hours) || 0) * 60 + (Number(minutes) || 0);
    try {
      await ActivitiesStore.createActivity({
        user_id,
        activity_name,
        date,
        duration: totalDurationInMinutes,
      });
    } catch (error) {
      console.error("FAILED TO CREATE ACTIVITY", error);
    }
  };

  return {
    activity_name,
    date,
    hours,
    minutes,
    hoursError,
    minutesError,
    handleHoursChange,
    handleMinutesChange,
    handleSubmit,
    setActivityName,
    setDate,
    setMinutes,
    setMinutesError
  };
}
