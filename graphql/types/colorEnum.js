import {
  GraphQLEnumType
} from 'graphql'

const colorEnumType = new GraphQLEnumType({
  name: 'colorEnumType',
  values: {
    RED: {
      value: 0
    },
    BLACK: {
      value: 1
    },
    BLUE: {
      value: 2
    },
    WHITE: {
      value: 3
    },
    ORANGE: {
      value: 4
    },
    GREEN: {
      value: 5
    },
    YELLOW: {
      value: 6
    },
    PINK: {
      value: 7
    },
    BROWN: {
      value: 8
    }
  }
})

export {
  colorEnumType as default
}
