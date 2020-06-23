import {
  GraphQLList
} from 'graphql'

import projectType from '../types/projectType'
import ProjectModel from '../../models/project'

const ProjectQueries = {
  projects: {
    type: new GraphQLList(projectType),
    args: {},
    async resolve(obj, args, context, info) {
      if (!context.isAuth) return
      const projectsList = await ProjectModel.find({ user: context.user })
      return projectsList
    }
  }
}

export default ProjectQueries
