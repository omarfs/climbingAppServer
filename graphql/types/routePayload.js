import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'
import LocationEnum from './locationEnum'
import GradeEnum from './gradeEnum'
import ColorEnum from './colorEnum'
import DateTime from './dateTime'

const RoutePayload = new GraphQLObjectType({
  name: 'RoutePayload',
  description: 'Routes payload including aggregated project field',
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
    project: {
      type: GraphQLBoolean
    }
  })
})

export default RoutePayload
