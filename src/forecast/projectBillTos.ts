import Module from "./module";

type ProjectBillToRecord = {
  id: string;
  key: string;
  name: string;
  description: string;
  stage: {
    id: string;
    name: string;
  };
  color: string;
  start_date: string;
  end_date: string;
  projects: number[];
  client: number;
}

class ProjectBillTos extends Module {
  async list() {
    return this.forecast.fetch<ProjectBillToRecord[]>('/project_bill_tos')
  }
}

export default ProjectBillTos
