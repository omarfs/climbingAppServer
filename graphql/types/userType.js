import {
  GraphQLString,
  GraphQLID,
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'


const User = new GraphQLObjectType({
  name: 'User',
  description: 'User type definition',
  fields: () => ({
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: GraphQLString
    }
  })
})

export default User
