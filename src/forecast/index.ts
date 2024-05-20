import fetch from "node-fetch";
import { FORECAST_API_KEY, FORECAST_API_URL } from "../constants";
import Allocations from "./allocations";
import BillFroms from "./billFroms";
import BillTos from "./billTos";
import ClientBillTos from "./clientBillTos";
import Clients from "./clients";
import Company from "./company";
import CompanyContacts from "./companyContacts";
import ConnectedProjects from "./connectedProjects";
import Projects from "./projects";
import Departments from "./departments";
import ExpenseCategories from "./expenseCategories";
import ExchangeRates from "./exchangeRates";
import ExpenseItems from "./expenseItems";
import HolidayCalendarEntries from "./holidayCalendarEntries";
import HolidayCalendars from "./holidayCalendars";
import Invoices from "./invoices";
import LabelCategories from "./labelCategories";
import Labels from "./labels";
import NonProjectTimes from "./nonProjectTime";
import PersonCostPeriods from "./personCostPeriods";
import Persons from "./persons";
import PersonLabels from "./personLabels";
import PlaceholderAllocations from "./placeholderAllocations";
import Placeholders from "./placeholders";
import PriorityLevels from "./priorityLevels";
import Profiles from "./profiles";
import Programs from "./programs";
import ProjectBillTos from "./project_bill_tos";
import RateCards from "./rateCards";
import Roles from "./roles";
import SkillCategories from "./skillCategories";
import SkillLevels from "./skillLevels";
import SkillPersons from "./skillPersons";
import Skills from "./skills";
import Tasks from "./tasks";
import Teams from "./teams";
import TimeRegistrations from "./time_registrations";

export class Forecast {
  allocations: Allocations
  billFroms: BillFroms
  billTos: BillTos
  clientBillTos: ClientBillTos
  clients: Clients
  company: Company
  companyContacts: CompanyContacts
  connectedProjects: ConnectedProjects
  departments: Departments
  exchangeRates: ExchangeRates
  expenseCategories: ExpenseCategories
  expenseItems: ExpenseItems
  holidayCalendarEntries: HolidayCalendarEntries
  holidayCalendars: HolidayCalendars
  invoices: Invoices
  labelCaterories: LabelCategories
  labels: Labels
  nonProjectTimes: NonProjectTimes
  personCostPeriods: PersonCostPeriods
  personLabels: PersonLabels
  persons: Persons
  placeholderAllocations: PlaceholderAllocations
  placeholders: Placeholders
  priortyLevels: PriorityLevels
  profiles: Profiles
  programs: Programs
  projectBillTos: ProjectBillTos
  projects: Projects
  rateCards: RateCards
  roles: Roles
  skillCategories: SkillCategories
  skillLevels: SkillLevels
  skillPersons: SkillPersons
  skills: Skills
  tasks: Tasks
  teams: Teams
  timeRegistrations: TimeRegistrations

  constructor() {
    this.allocations = new Allocations(this)
    this.billFroms = new BillFroms(this)
    this.billTos = new BillTos(this)
    this.clientBillTos = new ClientBillTos(this)
    this.clients = new Clients(this)
    this.company = new Company(this)
    this.companyContacts = new CompanyContacts(this)
    this.connectedProjects = new ConnectedProjects(this)
    this.departments = new Departments(this)
    this.exchangeRates = new ExchangeRates(this)
    this.expenseCategories = new ExpenseCategories(this)
    this.expenseItems = new ExpenseItems(this)
    this.holidayCalendarEntries = new HolidayCalendarEntries(this)
    this.holidayCalendars = new HolidayCalendars(this)
    this.invoices = new Invoices(this)
    this.labelCaterories = new LabelCategories(this)
    this.labels = new Labels(this)
    this.nonProjectTimes = new NonProjectTimes(this)
    this.personCostPeriods = new PersonCostPeriods(this)
    this.personLabels = new PersonLabels(this)
    this.persons = new Persons(this)
    this.placeholderAllocations = new PlaceholderAllocations(this)
    this.placeholders = new Placeholders(this)
    this.priortyLevels = new PriorityLevels(this)
    this.profiles = new Profiles(this)
    this.programs = new Programs(this)
    this.projectBillTos = new ProjectBillTos(this)
    this.projects = new Projects(this)
    this.rateCards = new RateCards(this)
    this.roles = new Roles(this)
    this.skillCategories = new SkillCategories(this)
    this.skillLevels = new SkillLevels(this)
    this.skillPersons = new SkillPersons(this)
    this.skills = new Skills(this)
    this.tasks = new Tasks(this)
    this.teams = new Teams(this)
    this.timeRegistrations = new TimeRegistrations(this)
  }

  async fetch<T extends Record<string, any>>(path: `/${string}`, args?: { version?: number } & Parameters<typeof fetch>[1]) {
    const { version = 1, ...fetchArgs } = args || {}

    const url = `${FORECAST_API_URL}/v${version}${path}`

    const response = await fetch(url, {
      ...args,
      headers: {
        ...args?.headers,
        'X-FORECAST-API-KEY': FORECAST_API_KEY
      }
    })

    if(!response.ok) {
      throw new Error(`Failed to fetch ${url}`)
    }

    return response.json() as Promise<T>
  }
}

export default new Forecast()
