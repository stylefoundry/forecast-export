import * as fs from 'fs/promises'
import * as path from 'path'
import { EXPORT_PATH } from '../constants'

const createFolder = async (date: Date) => {
  const [dateString, timeString] = date.toISOString().split(/[T\.]/g)
  const pathName = path.join(EXPORT_PATH, dateString, timeString)

  await fs.mkdir(pathName, { recursive: true })

  return pathName
}

export default createFolder
