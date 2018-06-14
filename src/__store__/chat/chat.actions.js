import { CHAT, API_URL } from '../../utils/constants'
import Fetch from '../../utils/fetch'

export const CHAT_MESSAGES_RECEIVE = `${CHAT}_MESSAGES-RECEIVE`
export const receiveMessages = messages => ( {
  type: CHAT_MESSAGES_RECEIVE,
  messages
} )

export const ADD_MESSAGE = `${CHAT}_ADD`
export const addMessage = message => ( {
  type: ADD_MESSAGE,
  message
} )

export const getMessages = () => dispatch => {
  let fetch = new Fetch()
  fetch.get( { url: `${API_URL}/messages` } )
    .then( messages => dispatch( receiveMessages( messages ) ) )
}

export const postMessage = message => dispatch => {
  let fetch = new Fetch()
  let body = {
    userName: 'Eu',
    time: '1 min ago',
    message,
    displayPortraitLeft: true,
  }

  dispatch( addMessage( body ) )

  fetch.post( { url: `${API_URL}/messages`, body } )
    .then( () => dispatch( getMessages() ) )
    .catch( err =>  console.log( err ) )
}