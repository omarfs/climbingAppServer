import {
  GraphQLNonNull
} from 'graphql'

import RouteInput from '../types/routeInput'
import AddRoutePayload from '../types/addRoutePayload'
import RouteModel from '../../models/route'

const RouteMutations = {
  addRoute: {
    type: AddRoutePayload,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(RouteInput)
      }
    },
    async resolve(obj, args, context, info) {
      const routeModel = new RouteModel(args.data)
      const newRoute = await routeModel.save()
      if (!newRoute) {
        throw new Error('Error adding new route')
      }
      return { route: newRoute }
    }
  }
}
export default RouteMutations
