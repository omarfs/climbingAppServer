import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList
} from 'graphql'
import DateTime from './dateTime'

const ProjectForArray = new GraphQLObjectType({
  name: 'ProjectForArray',
  description: 'Project type definition',
  fields: () => ({
    _id: {
      type: GraphQLID
    },
    active: {
      type: GraphQLBoolean
    },
    createdAt: {
      type: DateTime
    },
    sended: {
      type: GraphQLBoolean
    },
    sendedAt: {
      type: new GraphQLList(DateTime)
    },
    attempts: {
      type: GraphQLInt
    },
    projectingTime: {
      type: GraphQLInt
    }
  })
})

export default ProjectForArray
