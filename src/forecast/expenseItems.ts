import Module from "./module";

type ExpenseItemRecord = {
  id: number;
  project_id: number;
  name: string;
  expense_date: string;
  cost: number;
  price: number;
  quantity: number;
  approved: boolean;
  billable: boolean;
  notes: string;
  person_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  phase_id: number;
  part_of_fixed_price: boolean;
}

class ExpenseItems extends Module {
  async list() {
    return this.forecast.fetch<ExpenseItemRecord[]>('/expense_items')
  }
}

export default ExpenseItems
