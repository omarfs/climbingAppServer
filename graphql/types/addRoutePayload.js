import {
  GraphQLObjectType,
  GraphQLNonNull
} from 'graphql'
import Route from './routeType'

const AddRoutePayload = new GraphQLObjectType({
  name: 'CreateRoutePayload',
  description: 'Create route payload',
  fields: () => ({
    route: {
      type: new GraphQLNonNull(Route)
    }
  })
})

export default AddRoutePayload
