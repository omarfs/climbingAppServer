import {
  GraphQLInputObjectType,
  GraphQLID,
  GraphQLNonNull
} from 'graphql'

const ProjectInput = new GraphQLInputObjectType({
  name: 'ProjectInput',
  description: 'Project input definition',
  fields: () => ({
    route: {
      type: new GraphQLNonNull(GraphQLID)
    },
    user: {
      type: new GraphQLNonNull(GraphQLID)
    }
  })
})

export default ProjectInput
