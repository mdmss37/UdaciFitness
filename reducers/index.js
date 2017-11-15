import { RECEIVE_ENTRIES, ADD_ENTRY } from '../actions'

// entry is { date: record }
function entries (state = {}, action) {
  switch (action.type) {
    case RECEIVE_ENTRIES :
      return {
        ...state,
        ...action.entries,
      }
    case ADD_ENTRY :
      return {
        ...state,
        ...action.entry,
      }
    default :
      return state
  }
}

export default entries