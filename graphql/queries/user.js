import {
  GraphQLNonNull
} from 'graphql'

import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserInput from '../types/userInput'
import AuthPayload from '../types/authPayload'
import User from '../../models/user'

const UserQueries = {
  login: {
    type: new GraphQLNonNull(AuthPayload),
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(UserInput)
      }
    },
    async resolve(obj, args, context, info) {
      try {
        const user = await User.findOne({ email: args.data.email })
        if (!user) throw new Error('Invalid authentication data.')

        const isEqual = await bcrypt.compare(args.data.password, user.password)
        if (!isEqual) throw new Error('Invalid authentication password.')

        const token = jwt.sign(
          {
            userId: user.id,
            email: user.email
          },
          'somesupersecretkey',
          {
            expiresIn: '1h'
          }
        )
        return { userId: user.id, token, tokenExpiration: 1 }
      } catch (err) {
        throw err
      }
    }
  }
}
export default UserQueries
