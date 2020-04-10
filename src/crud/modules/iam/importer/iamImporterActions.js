import importerActions from 'crud/modules/shared/importer/importerActions';
import selectors from 'crud/modules/iam/importer/iamImporterSelectors';
import IamService from 'crud/modules/iam/iamService';
import fields from 'crud/modules/iam/importer/iamImporterFields';
import { i18n } from 'crud/i18n';

export default importerActions(
  'IAM_IMPORTER',
  selectors,
  IamService.import,
  fields,
  i18n('iam.importer.fileName'),
);
