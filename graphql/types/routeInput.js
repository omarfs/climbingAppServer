import {
  GraphQLString,
  GraphQLInputObjectType,
  GraphQLNonNull
} from 'graphql'
import LocationEnum from './locationEnum'
import GradeEnum from './gradeEnum'
import ColorEnum from './colorEnum'

const RouteInput = new GraphQLInputObjectType({
  name: 'RouteInput',
  description: 'Input payload for creating route',
  fields: () => ({
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
    }
  })
})

export default RouteInput
