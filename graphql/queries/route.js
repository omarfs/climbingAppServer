import {
  GraphQLString,
  GraphQLNonNull
} from 'graphql'

import mongoose from 'mongoose'
import RouteModel from '../../models/route'
import RoutesPayload from '../types/routesPayload'

const RouteQueries = {
  routes: {
    type: new GraphQLNonNull(RoutesPayload),
    args: {
      userid: {
        name: 'userid',
        type: GraphQLString,
        defaultValue: null
      }
    },
    async resolve(obj, args, context, info) {
      const routes = await RouteModel.aggregate([
        {
          $lookup: {
            from: 'projects',
            let: {
              routeid: '$_id', userid: mongoose.Types.ObjectId(args.userid)
            },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      {
                        $eq: [
                          '$route',
                          '$$routeid'
                        ]
                      },
                      {
                        $eq: [
                          '$user',
                          '$$userid'
                        ]
                      }
                    ]
                  }
                }
              }
            ],
            as: 'isproject'
          }
        },
        {
          $project: {
            _id: 1,
            routeId: 1,
            user: 1,
            location: 1,
            grade: 1,
            color: 1,
            project: {
              $anyElementTrue: [
                '$isproject'
              ]
            }
          }
        }
      ])
      return { routes }
    }
  }
}

export default RouteQueries
