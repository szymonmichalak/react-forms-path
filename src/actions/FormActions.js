import { FORM_UPDATE_VALUE } from '../constants/ActionTypes'

/*
  `updateValue` - Redux action that will trigger `FORM_UPDATE_VALUE` action, so that `Form` reducer can take care
  of the data (input name and value) and save it accordingly
 */
export function updateValue(inputName, value) { // eslint-disable-line import/prefer-default-export
  return {
    type: FORM_UPDATE_VALUE,
    payload: {
      inputName,
      value
    }
  }
}
