import 'dotenv/config';
import forecast from './forecast';

;(async () => {
  const projects = await forecast.projects.list()
  const project = projects[0]
  const workflowColumns = await forecast.projects.workflowColumns(project.id)
  console.log(workflowColumns)
})()
