import list from 'crud/modules/iam/list/iamListReducers';
import form from 'crud/modules/iam/form/iamFormReducers';
import view from 'crud/modules/iam/view/iamViewReducers';
import importerReducer from 'crud/modules/iam/importer/iamImporterReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
  view,
  importer: importerReducer,
});
