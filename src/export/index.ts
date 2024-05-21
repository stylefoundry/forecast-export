import * as path from "path"
import * as fs from 'fs/promises'
import createFolder from "./createFolder"
import forecast from "../forecast"
import inGroupsOf from "../utils/inGroupsOf"

class Export {
  date: Date
  folderName: string

  constructor(date: Date) {
    this.date = date
  }

  async createFolder() {
    if(this.folderName) {
      return this.folderName
    }
    return this.folderName = await createFolder(this.date)
  }

  async writeFile(fileName: string, content: string) {
    const { folderName } = this

    if(!folderName) {
      throw new Error('Folder not created (await createFolder first)')
    }

    const filePath = path.join(folderName, fileName)

    await fs.writeFile(filePath, content)
    return filePath
  }

  async start() {
    await this.createFolder()

    await Promise.all([
      this.exportSimpleModules(),
      this.exportCompany(),
      this.exportPersons(),
      this.exportProjects(),
      this.exportRateCards(),
    ])

    // Export tasks separately because it spawns a huge number of requests
    await this.exportTasks()
  }

  async exportSimpleModules() {
    const simpleModules = [
      'allocations',
      'billFroms',
      'billTos',
      'clientBillTos',
      'clients',
      // 'company',
      'companyContacts',
      'connectedProjects',
      'departments',
      'exchangeRates',
      'expenseCategories',
      'expenseItems',
      'holidayCalendarEntries',
      'holidayCalendars',
      'invoices',
      'labelCaterories',
      'labels',
      'nonProjectTimes',
      'personCostPeriods',
      // 'persons',
      'placeholderAllocations',
      'placeholders',
      'priortyLevels',
      'profiles',
      'programs',
      'projectBillTos',
      // 'projects',
      // 'rateCards',
      'roles',
      'skillCategories',
      'skillLevels',
      'skillPersons',
      'skills',
      // 'tasks',
      'teams',
      'timeRegistrations',
    ] as const

    await Promise.all(simpleModules.map(async (module) => {
      const content = await forecast[module].list()

      return this.writeFile(`${module}.json`, JSON.stringify(content, null, 2))
    }))
  }

  async exportCompany() {
    const company = await forecast.company.get()

    await this.writeFile('company.json', JSON.stringify(company, null, 2))
  }

  async exportPersons() {
    const persons = await forecast.persons.list()

    const personsWithData = await Promise.all(persons.map(async (person) => {
      const [
        labels,
        notificationSettings,
      ] = await Promise.all([
        forecast.persons.labels(person.id),
        forecast.persons.notificationSettings(person.id),
      ])

      return {
        ...person,
        labels,
        notificationSettings,
      }
    }))

    await this.writeFile('persons.json', JSON.stringify(personsWithData, null, 2))
  }

  async exportProjects() {
    const projects = await forecast.projects.list()

    const projectsWithData = await Promise.all(projects.map(async (project) => {
      const [
        baselineExpenses,
        baselineRoles,
        phases,
        team,
        sprints,
        workflowColumns,
      ] = await Promise.all([
        forecast.projects.baselineExpenses(project.id),
        forecast.projects.baselineRoles(project.id),
        forecast.projects.phases(project.id),
        forecast.projects.team(project.id),
        forecast.projects.sprints(project.id),
        forecast.projects.workflowColumns(project.id),
      ])

      return {
        ...project,
        baselineExpenses,
        baselineRoles,
        phases,
        team,
        sprints,
        workflowColumns,
      }
    }))

    await this.writeFile('projects.json', JSON.stringify(projectsWithData, null, 2))
  }

  async exportRateCards() {
    const rateCards = await forecast.rateCards.list()

    const rateCardsWithData = await Promise.all(rateCards.map(async (rateCard) => {
      const [
        rates,
        versions,
      ] = await Promise.all([
        forecast.rateCards.rates(rateCard.id),
        forecast.rateCards.versions(rateCard.id),
      ])

      return {
        ...rateCard,
        rates,
        versions,
      }
    }))

    await this.writeFile('rateCards.json', JSON.stringify(rateCardsWithData, null, 2))
  }

  async exportTasks() {
    const tasks = await forecast.tasks.list()

    const groupedTasks = inGroupsOf(tasks, 250)
    console.log(`Exporting ${tasks.length} tasks in ${groupedTasks.length} groups...`)

    const tasksWithData = []

    for(const group of groupedTasks) {
      const groupData = await Promise.all(group.map(async (task) => {
        const [
          repeatingTask,
          financials,
          toDos,
        ] = await Promise.all([
          forecast.tasks.repeatingTask(task.id),
          forecast.tasks.financials(task.id).catch(() => null),
          forecast.tasks.toDos(task.id),
        ])

        return {
          ...task,
          repeatingTask,
          financials,
          toDos,
        }
      }))

      tasksWithData.push(...groupData)
    }

    await this.writeFile('tasks.json', JSON.stringify(tasksWithData, null, 2))
  }
}

export default Export
