import { CHAT_MESSAGES_RECEIVE, ADD_MESSAGE } from './chat.actions'
import uuid from 'uuid/v4'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHAT_MESSAGES_RECEIVE:
      return {...action.messages}

    case ADD_MESSAGE:
      return Object.assign( {}, state, { [ uuid() ]: action.message } )

    default:
      return state
  }
}
