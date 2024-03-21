import mongoose, { Schema } from 'mongoose'

enum Status {
  TO_DO = 'To Do',
  IN_PROGRESS = 'In progress',
  DONE = 'Done'
}

export interface ITask {
  title: string
  description: string
  status: string
  createAt: Date
  lastUpdate: Date
}

const taskSchema = new Schema<ITask>({
  title: { type: String, required: true },
  description: { type: String },
  status: { type: String, enum: Status, default: 'To Do' },
  createAt: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now }
})
export default mongoose.model<ITask>('Task', taskSchema);

