import importerActions from 'crud/modules/shared/importer/importerActions';
import selectors from 'crud/modules/users/importer/usersImporterSelectors';
import UsersService from 'crud/modules/users/usersService';
import fields from 'crud/modules/users/importer/usersImporterFields';
import { i18n } from 'crud/i18n';

export default importerActions(
  'USERS_IMPORTER',
  selectors,
  UsersService.import,
  fields,
  i18n('entities.users.importer.fileName'),
);
