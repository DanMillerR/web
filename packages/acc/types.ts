import { Task } from 'types'

export type UserData = {
  email: string
  password: string
  name: string

  // TASKS APP
  tasks: {
    [Id in string]: Task
  }
}
