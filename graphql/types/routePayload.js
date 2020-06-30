import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'
import LocationEnum from './locationEnum'
import GradeEnum from './gradeEnum'
import ColorEnum from './colorEnum'
import DateTime from './dateTime'
import ProjectForArray from './projectForArray'

const RouteWithProjectsPayload = new GraphQLObjectType({
  name: 'RouteWithProjectsPayload',
  description: 'Route payload including aggregated project array',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLString)
    },
    routeId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    user: {
      type: new GraphQLNonNull(GraphQLString)
    },
    location: {
      type: new GraphQLNonNull(LocationEnum)
    },
    grade: {
      type: new GraphQLNonNull(GradeEnum)
    },
    color: {
      type: new GraphQLNonNull(ColorEnum)
    },
    style: {
      type: GraphQLString
    },
    notes: {
      type: GraphQLString
    },
    holdType: {
      type: GraphQLString
    },
    createdAt: {
      type: DateTime
    },
    projects: {
      type: new GraphQLList(ProjectForArray)
    }
  })
})

export default RouteWithProjectsPayload
