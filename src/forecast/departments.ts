import Module from "./module";

type DepartmentRecord = {
  id: number;
  name: string;
}

class Departments extends Module {
  async list() {
    return this.forecast.fetch<DepartmentRecord[]>('/departments')
  }
}

export default Departments
