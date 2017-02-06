import { FORM_UPDATE_VALUE } from '../constants/ActionTypes'

const initialState = {
  name: '',
  email: '',
  checkbox: '',
  radio: 'option1',
  date: ''
}

function form(state = initialState, action) {
  const payload = action.payload

  switch (action.type) {
    case FORM_UPDATE_VALUE:
      return Object.assign({}, state, {
        [payload.inputName]: payload.value
      })
    default:
      return state
  }
}

export default form
