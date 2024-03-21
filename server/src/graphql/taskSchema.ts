import { gql } from 'apollo-server-express'

const taskDef = gql`
  type Task {
    _id: ID!
    title: String!
    description: String
    status: String!
    createAt: String!
    lastUpdate: String!
  }

  type Query {
    tasks: [Task!]!
  }

  type Mutation {
    createTask(title: String!, description: String): Task!
    updateTask(id: ID!, title: String, description: String, status: String): Task
    deleteTask(id: ID!): Task
    
  }
  type Subscription {
      newTask: Task!
    }
`
export default taskDef
