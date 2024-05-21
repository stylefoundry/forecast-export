import 'dotenv/config';
import Export from './export';

;(async () => {
  const date = new Date()
  const dataExport = new Export(date)

  console.log(await dataExport.start())
})()
