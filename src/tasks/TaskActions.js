import axios from 'axios';

import { ENDPOINT_URL } from '../utils/Defines';

export const GET_TASK = 'GET_TASK';
export const GET_TASKS = 'GET_TASKS';

/**
 * Get all tasks from the back end
 */
export function getTask(id) {
  const request = axios.get(`${ENDPOINT_URL}/tasks/${id}`);
  return {
    type: GET_TASK,
    payload: request,
  };
}

/**
 * Get all tasks from the back end
 */
export function getTasks() {
  const request = axios.get(`${ENDPOINT_URL}/tasks`);
  return {
    type: GET_TASKS,
    payload: request,
  };
}
