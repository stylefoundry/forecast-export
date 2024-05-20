import Module from "./module";

type PlaceholderAllocationRecord = {
  id: number;
  placeholder_id: number;
  start_date: string;
  end_date: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  notes: string | null;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class PlaceholderAllocations extends Module {
  async list() {
    return this.forecast.fetch<PlaceholderAllocationRecord[]>('/placeholder_allocations')
  }
}

export default PlaceholderAllocations
