import {
  GraphQLID,
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} from 'graphql'
import UserType from './userType'
import RouteType from './routeType'
import RouteModel from '../../models/route'
import UserModel from '../../models/user'
import DateTime from './dateTime'

const Project = new GraphQLObjectType({
  name: 'Project',
  description: 'Project type definition',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    user: {
      type: new GraphQLNonNull(UserType),
      resolve(root, args, context, info) {
        return UserModel.findById(root.user)
      }
    },
    route: {
      type: new GraphQLNonNull(RouteType),
      resolve(root, args, context, info) {
        return RouteModel.findById(root.route)
      }
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

export default Project
