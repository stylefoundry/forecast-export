import Module from "./module";

type PersonLabelRecord = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  active: boolean;
  default_role: number;
  department_id: number;
  cost: number;
  language: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  holiday_calendar_id: number;
  start_date: string;
  end_date: string;
  permissions: string[];
  is_system_user: boolean;
}

class PersonLabels extends Module {
  async list(personId: number | string) {
    return this.forecast.fetch<PersonLabelRecord[]>(`/person_labels/${personId}`)
  }
}

export default PersonLabels
