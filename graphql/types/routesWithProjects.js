import {
  GraphQLObjectType,
  GraphQLList
} from 'graphql'

import RouteWithProjectsPayload from './routePayload'

const RoutesWithProjectsPayload = new GraphQLObjectType({
  name: 'RoutesWithProjectsPayload',
  description: 'Routes payload',
  fields: () => ({
    routesWithProjects: {
      type: new GraphQLList(RouteWithProjectsPayload)
    }
  })
})

export default RoutesWithProjectsPayload
