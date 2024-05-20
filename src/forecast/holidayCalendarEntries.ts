import Module from "./module";

type HolidayCalendarEntryRecord = {
  id: number;
  holiday_calendar_id: number;
  year: number;
  month: number;
  day: number;
  name: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
}

class HolidayCalendarEntries extends Module {
  async list() {
    return this.forecast.fetch<HolidayCalendarEntryRecord[]>('/holiday_calendar_entries')
  }
}

export default HolidayCalendarEntries
