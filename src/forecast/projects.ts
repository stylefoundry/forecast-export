import Module from "./module";

type ProjectRecord = {
  id: number;
  company_project_id: number;
  name: string;
  stage: string;
  status: string;
  status_description: string;
  description: string;
  priority_level_id: number;
  color: string;
  estimation_units: string;
  minutes_per_estimation_point: number;
  budget: number;
  billable: boolean;
  use_sprints: boolean;
  sprint_length: number;
  start_date: string;
  end_date: string;
  task_levels: number;
  client: number;
  rate_card: number;
  remaining_auto_calculated: boolean;
  use_project_allocations: boolean;
  use_baseline: boolean;
  baseline_win_chance: number;
  baseline_target: number;
  labels: number[];
  external_refs: any[];
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  default_period_periodicity: string;
  default_period_length: number;
  default_period_budget_type: string;
  default_period_hours_amount: number;
  default_period_price_amount: number;
};

type BaselineExpenseRecord = {
  id: number;
  project: number;
  phase: number;
  expense_category: number;
  expense_cost: number;
  expense_revenue: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

type BaselineRoleRecord = {
  id: number;
  project: number;
  phase: number;
  role: number;
  baseline_minutes: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
};

type PhaseRecord = {
  id: number;
  name: string;
  start_date: string;
  end_date: string;
  baseline_start_date: string;
  baseline_end_date: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

type ProjectTeamMemberRecord = {
  person_id: number;
  project_role: number;
  project_contact: boolean;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

type SprintRecord = {
  id: number;
  connected_project_sprint: number;
  name: string;
  start_date: string;
  end_date: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

type WorkflowColumnRecord = {
  id: number;
  connected_project_workflow_column: number;
  name: string;
  category: string;
  sort_order: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class Projects extends Module {
  async list() {
    return this.forecast.fetch<ProjectRecord[]>('/projects')
  }

  async get(projectId: string | number) {
    return this.forecast.fetch<ProjectRecord>(`/projects/${projectId}`)
  }

  async baselineExpenses(projectId: string | number) {
    return this.forecast.fetch<BaselineExpenseRecord[]>(`/projects/${projectId}/baseline_expenses`)
  }

  async baselineRoles(projectId: string | number) {
    return this.forecast.fetch<BaselineRoleRecord[]>(`/projects/${projectId}/baseline_roles`)
  }

  async phases(projectId: string | number) {
    return this.forecast.fetch<PhaseRecord>(`/projects/${projectId}/phases`)
  }

  async team(projectId: string | number) {
    return this.forecast.fetch<ProjectTeamMemberRecord[]>(`/projects/${projectId}/team`)
  }

  async sprints(projectId: string | number) {
    return this.forecast.fetch<SprintRecord[]>(`/projects/${projectId}/sprints`)
  }

  async workflowColumns(projectId: string | number) {
    return this.forecast.fetch<WorkflowColumnRecord[]>(`/projects/${projectId}/workflow_columns`)
  }
}

export default Projects
