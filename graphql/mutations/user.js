import {
  GraphQLNonNull
} from 'graphql'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import UserInput from '../types/userInput'
import AuthPayload from '../types/authPayload'
import UserModel from '../../models/user'

const UserMutations = {
  createUser: {
    type: AuthPayload,
    args: {
      data: {
        name: 'data',
        type: new GraphQLNonNull(UserInput)
      }
    },
    async resolve(obj, args, context, info) {
      try {
        const existingUser = await UserModel.findOne({ email: args.data.email })
        if (existingUser) throw new Error('User exist already')

        const hashedPassword = await bcrypt.hash(args.data.password, 12)
        const user = new UserModel({
          email: args.data.email,
          password: hashedPassword
        })
        const newUser = await user.save()

        if (!newUser) throw new Error('Error adding new user')

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
export default UserMutations
