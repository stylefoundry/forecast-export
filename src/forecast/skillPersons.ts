import Module from "./module";

type SkillPersonsRecord = {
  personId: number;
  skillId: number;
  skillLevelId: number;
}

class SkillPersons extends Module {
  async list() {
    return this.forecast.fetch<SkillPersonsRecord[]>('/skill_persons')
  }
}

export default SkillPersons
