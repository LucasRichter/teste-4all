import { CHAT, WIDGETS, PAGE_VIEWS } from '../utils/constants'
import widgets from './widgets/widgets.reducer'
import chat from './chat/chat.reducer'
import pageViews from './pageViews/pageViews.reducer'

const initialState = {
  widgets: {},
  chat: {},
  pageViews: [],
}

export default ( state=initialState, action ) => {
  let prefix = action.type.split( '_' )[ 0 ]
  switch ( prefix ) {
    case WIDGETS:
      return Object.assign( {}, state, { widgets: widgets( state.widgets, action ) } )
    case CHAT:
      return Object.assign( {}, state, { chat: chat( state.chat, action ) } )
    case PAGE_VIEWS:
      return Object.assign( {}, state, { pageViews: pageViews( state.pageViews, action ) } )
    default:
      return state
  }
}