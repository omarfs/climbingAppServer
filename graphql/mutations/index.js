import userMutations from './user'
import routeMutations from './route'
import projectMutations from './project'

export default {
  ...userMutations,
  ...routeMutations,
  ...projectMutations
}
