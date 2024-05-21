import Module from "./module";

type PersonRecord = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  active: boolean;
  default_role: number;
  department_id: number;
  cost: number;
  language: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  holiday_calendar_id: number;
  start_date: string;
  end_date: string;
  permissions: string[];
  is_system_user: boolean;
}

type PersonLabelRecord = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  job_title: string;
  monday: number;
  tuesday: number;
  wednesday: number;
  thursday: number;
  friday: number;
  saturday: number;
  sunday: number;
  active: boolean;
  default_role: number;
  department_id: number;
  cost: number;
  language: string;
  created_by: number;
  updated_by: number;
  created_at: string;
  updated_at: string;
  client_id: number;
  holiday_calendar_id: number;
  start_date: string;
  end_date: string;
  permissions: string[];
  is_system_user: boolean;
}

type AppNotificationSettings = {
  disable_notifications: boolean;
  notify_on_project_status_change: boolean;
  notify_on_assigned_project: boolean;
  notify_on_person_join: boolean;
  notify_on_project_deadline: boolean;
  notify_on_task_deadline: boolean;
  notify_on_assigned_task: boolean;
  notify_on_assigned_task_update: boolean;
  notify_on_mention: boolean;
  notify_on_task_description_change: boolean;
  notify_on_task_title_change: boolean;
  notify_on_task_estimate_change: boolean;
  notify_on_task_start_date_change: boolean;
  notify_on_task_end_date_change: boolean;
  notify_on_task_sprint_change: boolean;
  notify_on_task_phase_change: boolean;
  notify_on_task_status_column_change: boolean;
  notify_on_task_project_change: boolean;
  notify_on_task_subtask_change: boolean;
  notify_on_task_subtask_estimate_change: boolean;
  notify_on_task_comment_change: boolean;
  notify_on_task_file_change: boolean;
  notify_on_task_bug_change: boolean;
  notify_on_task_blocked_change: boolean;
  notify_on_task_repeating_change: boolean;
  notify_on_invoice_due_date: boolean;
  notify_on_invoice_overdue: boolean;
  notify_on_invoice_days_overdue: boolean;
  notify_on_invoice_created_or_deleted: boolean;
  notify_on_invoice_status_change: boolean;
  notify_on_invoice_date_reached: boolean;
  notify_on_invoice_payment: boolean;
  notify_on_invoice_date_changed: boolean;
  notify_on_invoice_due_date_changed: boolean;
  notify_on_time_off_manager: boolean;
  notify_on_time_off_owner: boolean;
}

type PersonNotificationSettings = {
  person_id: number;
  project_deadline_notification_period: number;
  task_deadline_notification_period: number;
  invoice_notification_days_overdue: number;
  task_email_notification_frequency: string;
  notify_on_project_stage_change_only_assigned_projects: boolean;
  notify_on_project_deadline_only_assigned_projects: boolean;
  notify_on_invoice_due_date_only_owned: boolean;
  notify_on_invoice_overdue_only_owned: boolean;
  notify_on_invoice_days_overdue_only_owned: boolean;
  notify_on_invoice_created_or_deleted_only_owned: boolean;
  notify_on_invoice_status_change_only_owned: boolean;
  notify_on_invoice_date_reached_only_owned: boolean;
  notify_on_invoice_payment_only_owned: boolean;
  notify_on_invoice_date_changed_only_owned: boolean;
  notify_on_invoice_due_date_changed_only_owned: boolean;
  email_notification_settings: AppNotificationSettings;
  in_app_notification_settings: AppNotificationSettings;
  slack_notification_settings: AppNotificationSettings;
  ms_teams_notification_settings: AppNotificationSettings;
}

class Persons extends Module {
  async list() {
    return this.forecast.fetch<PersonRecord[]>('/persons')
  }

  async labels(personId: number | string) {
    return this.forecast.fetch<PersonLabelRecord[]>(`/person_labels/${personId}`)
  }

  async notificationSettings(personId: number | string) {
    return this.forecast.fetch<PersonNotificationSettings>(`/persons/${personId}/notification_settings`)
  }
}

export default Persons
