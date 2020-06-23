import { GraphQLString, GraphQLInputObjectType, GraphQLNonNull } from 'graphql'


const UserInput = new GraphQLInputObjectType({
  name: 'UserInput',
  description: 'Input payload for login/create user',
  fields: {
    email: {
      type: new GraphQLNonNull(GraphQLString)
    },
    password: {
      type: new GraphQLNonNull(GraphQLString)
    }
  }
})

export default UserInput
