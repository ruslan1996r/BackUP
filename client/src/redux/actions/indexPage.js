import actionTypes from './actionTypesSSS';

export const buyError = (text) => ({
  type: actionTypes.BUY_ERROR,
  text: text,
});

export const buySubmit = (
  id,
  name,
  email,
  phoneNumber,
  address,
) => {
  if (name.split(' ').length > 3) {
    return buyError("Некоректно введене ім'я");
  }
  if (phoneNumber.length > 6 && phoneNumber.length < 15) {
    return buyError('Некоректно введений номер');
  }
  return {
    type: actionTypes.BUY_SUBMIT,
    payload: { id, name, email, phoneNumber, address },
  };
};

export const buySuccess = () => ({
  type: actionTypes.BUY_SUCCESS,
});

export const newCommentError = (text) => ({
  type: actionTypes.NEW_COMMENT_ERROR,
  text: text,
});

export const newCommentSubmit = (
  name,
  email,
  commentText,
) => {
  if (name.split(' ').length > 3) {
    return newCommentError("Некоректно введене ім'я");
  }
  if (commentText.length <= 0) {
    return newCommentError('Заповніть поле');
  }
  return {
    type: actionTypes.NEW_COMMENT_SUBMIT,
    payload: { name, email, commentText },
  };
};

export const newCommentSuccess = () => ({
  type: actionTypes.NEW_COMMENT_SUCCESS,
});
