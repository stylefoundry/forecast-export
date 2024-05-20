import Module from "./module";

type AllocationRecord = {
  id: number;
  project: number;
  non_project_time: number | null;
  connected_project: number | null;
  person: number;
  start_date: string;
  end_date: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  notes: string;
  is_soft: boolean;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

class Allocations extends Module {
  async list() {
    return this.forecast.fetch<AllocationRecord[]>('/allocations')
  }

  async get(allocationId: string | number) {
    return this.forecast.fetch<AllocationRecord>(`/allocations/${allocationId}`)
  }
}

export default Allocations
