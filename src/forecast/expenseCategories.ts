import Module from "./module";

type ExpenseCategoryRecord = {
  id: number;
  name: string;
  disabled: boolean;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class ExpenseCategories extends Module {
  async list() {
    return this.forecast.fetch<ExpenseCategoryRecord[]>('/expense_categories')
  }
}

export default ExpenseCategories
