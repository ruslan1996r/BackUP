import actionTypesSSS from './actionTypesSSS'

export const sendFeedback = (message) => ({
  type: actionTypesSSS.SEND_FEEDBACK,
  payload: { message }
})