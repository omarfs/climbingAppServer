import {
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'
import Project from './projectType'

const CreateProjectPayload = new GraphQLObjectType({
  name: 'CreateProjectPayload',
  description: 'Project type definition',
  fields: () => ({
    project: {
      type: new GraphQLNonNull(Project)
    }
  })
})

export default CreateProjectPayload
