import Module from "./module";

type PersonCostPeriodRecord = {
  id: number;
  person_id: number;
  cost: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class PersonCostPeriods extends Module {
  async list() {
    return this.forecast.fetch<PersonCostPeriodRecord[]>('/person_cost_periods')
  }
}

export default PersonCostPeriods
