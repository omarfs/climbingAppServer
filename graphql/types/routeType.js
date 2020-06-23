import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'
import LocationEnum from './locationEnum'
import GradeEnum from './gradeEnum'
import ColorEnum from './colorEnum'
import UserType from './userType'
import UserModel from '../../models/user'
import DateTime from './dateTime'


const Route = new GraphQLObjectType({
  name: 'Route',
  description: 'Route type definition',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    routeId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    user: {
      type: new GraphQLNonNull(UserType),
      resolve(root, args, context, info) {
        return UserModel.findById(root.user)
      }
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

export default Route
