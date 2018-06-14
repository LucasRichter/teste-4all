import { WIDGETS_RECEIVE } from "./widgets.actions";

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case WIDGETS_RECEIVE:
      return {...action.widgets}

    default:
      return state
  }
}
