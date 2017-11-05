import { GET_TASK, GET_TASKS } from './TaskActions';

/**
 *
 * @param {*} state
 * @param {*} action
 */
export default function (state = [], action) {
  switch (action.type) {
    case GET_TASK:
      // If the state is empty we just add the task
      if (state.length === 0) {
        return [action.payload.data];
      }
      // FIXME: If the array already holds tasks we check if the task we just loaded is already
      // present. If so we update it. If not we just add the loaded task.
      return state;
    case GET_TASKS:
      return [...action.payload.data];
    default:
      return state;
  }
}
