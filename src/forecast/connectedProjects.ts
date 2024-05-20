import Module from "./module";

type ConnectedProjectRecord = {
  id: number;
  company_connected_project_id: number;
  name: string;
  color: string;
  estimation_units: string;
  use_sprints: boolean;
  sprint_length: number;
  minutes_per_estimation_point: number;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class ConnectedProjects extends Module {
  async list() {
    return this.forecast.fetch<ConnectedProjectRecord[]>('/connected_projects')
  }
}

export default ConnectedProjects
