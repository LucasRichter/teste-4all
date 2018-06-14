import { getWidgets } from './widgets/widgets.actions'
import { getMessages } from './chat/chat.actions'
import { getPageViews } from './pageViews/pageViews.actions'

export const initilizeApp = () => dispatch => {
  dispatch( getWidgets() )
  dispatch( getMessages() )
  dispatch( getPageViews() )
}
