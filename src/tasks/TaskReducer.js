import { GET_TASKS } from './TaskActions';

/**
 *
 * @param {*} state
 * @param {*} action
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_TASKS:
      return [...action.payload.data];
    default:
      return state;
  }
}
