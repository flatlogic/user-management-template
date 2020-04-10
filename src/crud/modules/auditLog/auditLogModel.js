import DateTimeField from 'crud/modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'crud/modules/shared/fields/dateTimeRangeField';
import IdField from 'crud/modules/shared/fields/idField';
import JsonField from 'crud/modules/shared/fields/jsonField';
import StringField from 'crud/modules/shared/fields/stringField';
import { i18n } from 'crud/i18n';
import StringArrayField from 'crud/modules/shared/fields/stringArrayField';

function label(name) {
  return i18n(`auditLog.fields.${name}`);
}

const fields = {
  id: new IdField('id', label('id')),
  timestampRange: new DateTimeRangeField(
    'timestampRange',
    label('timestampRange'),
  ),
  timestamp: new DateTimeField(
    'timestamp',
    label('timestamp'),
  ),
  createdByEmail: new StringField(
    'createdByEmail',
    label('createdByEmail'),
  ),
  entityName: new StringField(
    'entityName',
    label('entityName'),
  ),
  entityNames: new StringArrayField(
    'entityNames',
    label('entityNames'),
  ),
  action: new StringField('action', label('action')),
  entityId: new StringField('entityId', label('entityId')),
  values: new JsonField('values', label('values')),
};

export default {
  fields,
};
