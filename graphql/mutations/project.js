import {
  GraphQLNonNull
} from 'graphql'

import ProjectInput from '../types/projectInput'
import ProjectPayload from '../types/projectPayload'
import ProjectModel from '../../models/project'

const ProjectMutations = {
  addProject: {
    type: ProjectPayload,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(ProjectInput)
      }
    },
    async resolve(obj, args, context, info) {
      const projectModel = new ProjectModel(args.data)
      const newProject = await projectModel.save()

      if (!newProject) {
        throw new Error('Error adding new project')
      }
      return { project: newProject }
    }
  }
}
export default ProjectMutations
