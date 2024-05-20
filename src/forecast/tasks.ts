import Module from "./module";

type TaskRecord = {
  id: number;
  company_card_id: number;
  company_task_id: number;
  title: string;
  description: string;
  project_id: number;
  parent_task_id: number;
  role: number;
  low_estimate: number;
  high_estimate: number;
  forecast: number;
  remaining: number;
  approved: boolean;
  start_date: string;
  end_date: string;
  bug: boolean;
  high_priority: boolean;
  un_billable: boolean;
  blocked: boolean;
  sprint: number;
  workflow_column: number;
  milestone: number;
  assigned_persons: number[];
  labels: number[];
  owner_id: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

type RepeatingTaskRecord = {
  id: number;
  monday: boolean;
  tuesday: boolean;
  wednesday: boolean;
  thursday: boolean;
  friday: boolean;
  saturday: boolean;
  sunday: boolean;
  monthly_day: number;
  repeat_type: string;
  created_by: number | null;
  updated_by: number | null;
}

type TaskFinancialsRecord = {
  task_id: number;
  actual_revenue: number;
  actual_cost: number;
  actual_profit: number;
  actual_margin: number;
  planned_revenue: number;
  planned_cost: number;
  planned_profit: number;
  planned_margin: number;
  remaining_revenue: number;
  remaining_cost: number;
  remaining_profit: number;
  remaining_margin: number;
  forecast_revenue: number;
  forecast_cost: number;
  forecast_profit: number;
  forecast_margin: number;
  registered_minutes: number;
  remaining_minutes: number;
  forecast_minutes: number;
  scope_approved_minutes: number;
  scope_total_minutes: number;
}

type ToDoRecord = {
  id: number;
  task: number;
  name: string;
  done: boolean;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Tasks extends Module {
  async list() {
    return this.forecast.fetch<TaskRecord[]>('/tasks', { version: 3 })
  }

  async repeatingTask(taskId: string | number) {
    return this.forecast.fetch<RepeatingTaskRecord>(`/tasks/${taskId}/repeating_tasks`)
  }

  async financials(taskId: string | number) {
    return this.forecast.fetch<TaskFinancialsRecord>(`/tasks/${taskId}/financials`)
  }

  async toDos(taskId: string | number) {
    return this.forecast.fetch<ToDoRecord>(`/tasks/${taskId}/to_dos`, { version: 3 })
  }
}

export default Tasks
