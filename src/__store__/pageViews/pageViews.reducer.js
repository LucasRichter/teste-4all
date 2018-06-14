import { PAGE_VIEWS_RECEIVE } from './pageViews.actions'

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case PAGE_VIEWS_RECEIVE: {
      const { pageViews } = action
      return Object.values( pageViews )
    }

    default:
      return state
  }
}
