import fs from 'fs'
import path from 'path'

const dbPath = path.join(__dirname, '../db/data.json')

export const readData = (): any => {
  const data = fs.readFileSync(dbPath, 'utf-8')
  return JSON.parse(data)
}

export const writeData = (data: any): void => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2))
}