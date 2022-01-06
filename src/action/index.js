import api from '../Api';

export const action = data => {
  return {
    type: 'ACTION_TYPE',
    payload: data,
  };
};

export const actionFetch = () => async (dispatch) => {
  const response = await api.get(`url`);
  dispatch({
    type: 'ACTION_TYPE_FECT',
    payload: response.data,
  });
};
