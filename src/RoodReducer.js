import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TaskReducer from './tasks/TaskReducer';

const rootReducer = combineReducers({
  // The post currently displayed/edited in the PostView component
  tasks: TaskReducer,
  // We HAVE to use "form" as the name for the formReducer from redux-form.
  // Otherwise redux-form will not work!
  form: formReducer,
});

export default rootReducer;
