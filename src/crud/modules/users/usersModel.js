
import IdField from 'crud/modules/shared/fields/idField';
import DateTimeField from 'crud/modules/shared/fields/dateTimeField';
import DateTimeRangeField from 'crud/modules/shared/fields/dateTimeRangeField';
import IntegerField from 'crud/modules/shared/fields/integerField';
import IntegerRangeField from 'crud/modules/shared/fields/integerRangeField';
import StringField from 'crud/modules/shared/fields/stringField';
import EnumeratorField from 'crud/modules/shared/fields/enumeratorField';
import DecimalRangeField from 'crud/modules/shared/fields/decimalRangeField';
import DecimalField from 'crud/modules/shared/fields/decimalField';
import BooleanField from 'crud/modules/shared/fields/booleanField';
import DateField from 'crud/modules/shared/fields/dateField';
import DateRangeField from 'crud/modules/shared/fields/dateRangeField';
import RelationToOneField from 'crud/modules/shared/fields/relationToOneField';
import RelationToManyField from 'crud/modules/shared/fields/relationToManyField';
import FilesField from 'crud/modules/shared/fields/filesField';
import ImagesField from 'crud/modules/shared/fields/imagesField';

function label(name) {
  return null;
}

function enumeratorLabel(name, value) {
  return null;
}

const fields = {
  id: new IdField('id', label('id')),
fullName: new StringField('fullName', label('fullName'), {}),
firstName: new StringField('firstName', label('firstName'), {}),
lastName: new StringField('lastName', label('lastName'), {}),
phoneNumber: new StringField('phoneNumber', label('phoneNumber'), {}),
email: new StringField('email', label('email'), {}),
password: new StringField('password', label('password'), {}),
emailVerificationToken: new StringField('emailVerificationToken', label('emailVerificationToken'), {}),
passwordResetToken: new StringField('passwordResetToken', label('passwordResetToken'), {}),
emailVerificationTokenExpiresAt: new DateTimeField('emailVerificationTokenExpiresAt', label('emailVerificationTokenExpiresAt'), {}),
passwordResetTokenExpiresAt: new DateTimeField('passwordResetTokenExpiresAt', label('passwordResetTokenExpiresAt'), {}),
disabled: new BooleanField('disabled', label('disabled')),
emailVerified: new BooleanField('emailVerified', label('emailVerified')),
avatar: new ImagesField('avatar', label('avatar'), 'users/avatar',{}),

  createdAt: new DateTimeField(
    'createdAt',
    label('createdAt'),
  ),
  updatedAt: new DateTimeField(
    'updatedAt',
    label('updatedAt'),
  ),
  createdAtRange: new DateTimeRangeField(
    'createdAtRange',
    label('createdAtRange'),
  ),
emailVerificationTokenExpiresAtRange: new DateTimeRangeField(
    'emailVerificationTokenExpiresAtRange',
    label('emailVerificationTokenExpiresAtRange'),
  ),
passwordResetTokenExpiresAtRange: new DateTimeRangeField(
    'passwordResetTokenExpiresAtRange',
    label('passwordResetTokenExpiresAtRange'),
  ),

};

export default {
  fields,
};
