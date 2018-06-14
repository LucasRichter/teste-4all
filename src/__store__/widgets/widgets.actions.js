import { WIDGETS, API_URL } from '../../utils/constants'
import Fetch from '../../utils/fetch'

export const WIDGETS_RECEIVE = `${WIDGETS}_RECEIVE`
export const receiveWidgets = widgets => ( {
  type: WIDGETS_RECEIVE,
  widgets
} )

export const getWidgets = () => dispatch => {
  let fetch = new Fetch()
  fetch.get( { url: `${API_URL}/widgets` } )
    .then( widgets => dispatch( receiveWidgets( widgets ) ) )
}
