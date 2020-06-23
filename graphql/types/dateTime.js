import { GraphQLScalarType } from 'graphql'

import { isISO8601 } from 'validator'

const parseISO8601 = (value) => {
  if (isISO8601(value)) {
    return new Date(value)
  }
}

const serializeISO8601 = (value) => {
  if ((value instanceof Date)) {
    return value.toISOString()
  }
  throw new Error('DateTime cannot represent an invalid ISO-8601')
}

const parseLiteralISO8601 = (ast) => {
  if (isISO8601(ast.value)) return new Date(ast.value)
  throw new Error('DateTime cannot represent an invalid ISO-8601')
}

const DateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'An ISO-8601 encoded UTC date string',
  serialize: serializeISO8601,
  parseValue: parseISO8601,
  parseLiteral: parseLiteralISO8601
})

export default DateTime
