import {
  GraphQLEnumType
} from 'graphql'

const gradeEnumType = new GraphQLEnumType({
  name: 'gradeEnumType',
  values: {
    VB: {
      value: 0
    },
    V0: {
      value: 1
    },
    V1: {
      value: 2
    },
    V2: {
      value: 3
    },
    V3: {
      value: 4
    },
    V4: {
      value: 5
    },
    V5: {
      value: 6
    },
    V6: {
      value: 7
    },
    V7: {
      value: 8
    },
    V8: {
      value: 9
    },
    V9: {
      value: 10
    },
    V10: {
      value: 11
    }
  }
})

export {
  gradeEnumType as default
}
