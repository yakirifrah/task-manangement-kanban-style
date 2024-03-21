import Task, { ITask } from '../models/Task'
import { pubSub } from '../services'

interface createTaskInput {
  title: string
  description: string
}

const taskResolvers = {
  Query: {
    tasks: async () => {
      return await Task.find()
    }
  },
  Mutation: {
    createTask: async (_: undefined, args: createTaskInput) => {

      const task = new Task({ title: args.title, description: args.description })
      await task.save()
      pubSub.publish('CREATED_TASK', { newTask: task }).then((res) => {
        console.log('publish: ', { task })
      })

      return task
    }
  },
  Subscription: {
    newTask: {
      subscribe: () => pubSub.asyncIterator(['CREATED_TASK'])
    }
  }
}
export default taskResolvers
