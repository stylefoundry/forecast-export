import Module from "./module";

type TimeRegistrationRecord = {
  id: number;
  person: number;
  project: number | null;
  role: number;
  card: number;
  task: number;
  task_project: number;
  non_project_time: number | null;
  time_registered: number;
  billable_minutes_registered: number;
  date: string;
  notes: string;
  approval_status: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class TimeRegistrations extends Module {
  async list() {
    return this.forecast.fetch<TimeRegistrationRecord[]>('/time_registrations', { version: 3 })
  }
}

export default TimeRegistrations
