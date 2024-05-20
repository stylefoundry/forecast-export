import Module from "./module";

type HolidayCalendarRecord = {
  id: number;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class HolidayCalendars extends Module {
  async list() {
    return this.forecast.fetch<HolidayCalendarRecord[]>('/holiday_calendars')
  }
}

export default HolidayCalendars
