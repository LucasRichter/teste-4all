import { PAGE_VIEWS, API_URL } from '../../utils/constants'
import Fetch from '../../utils/fetch';

export const PAGE_VIEWS_RECEIVE = `${PAGE_VIEWS}_RECEIVE`
export const receivePageViews = pageViews => ( {
  type: PAGE_VIEWS_RECEIVE,
  pageViews
} )

export const getPageViews = () => dispatch => {
  let fetch = new Fetch()
  fetch.get( { url: `${API_URL}/pageViews` } )
    .then( pageViews => dispatch( receivePageViews( pageViews ) ) )
}
