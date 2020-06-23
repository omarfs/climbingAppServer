import {
  GraphQLString,
  GraphQLID,
  GraphQLInt,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'


const AuthPayload = new GraphQLObjectType({
  name: 'AuthPayload',
  description: 'Output payload for loged/created user',
  fields: {
    userId: {
      type: new GraphQLNonNull(GraphQLID)
    },
    token: {
      type: new GraphQLNonNull(GraphQLString)
    },
    tokenExpiration: {
      type: new GraphQLNonNull(GraphQLInt)
    }
  }
})

export default AuthPayload
