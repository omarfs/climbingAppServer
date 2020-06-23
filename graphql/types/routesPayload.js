import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import RoutePayload from './routeType'

const RoutesPayload = new GraphQLObjectType({
  name: 'RoutesPayload',
  description: 'Routes payload',
  fields: () => ({
    routes: {
      type: new GraphQLList(RoutePayload)
    }
  })
})

export default RoutesPayload
