import Module from "./module";

type ProgramRecord = {
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

class Programs extends Module {
  async list() {
    return this.forecast.fetch<ProgramRecord[]>('/programs')
  }
}

export default Programs
