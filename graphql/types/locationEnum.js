import {
  GraphQLEnumType
} from 'graphql'

const locationEnumType = new GraphQLEnumType({
  name: 'locationEnumType',
  values: {
    CORRIDOR: {
      value: 0
    },
    SOUTH_EAST: {
      value: 1
    },
    SOUTH_WEST: {
      value: 2
    },
    WEST: {
      value: 3
    },
    NORTH_EAST: {
      value: 4
    },
    SLAB: {
      value: 5
    }
  }
})

export {
  locationEnumType as default
}
