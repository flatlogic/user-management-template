
import model from 'crud/modules/users/usersModel';

const { fields } = model;

export default [

  fields.fullName,

  fields.firstName,

  fields.lastName,

  fields.phoneNumber,

  fields.email,

  fields.disabled,

  fields.avatar,

  fields.password,

  fields.emailVerified,

  fields.emailVerificationToken,

  fields.emailVerificationTokenExpiresAt,

  fields.passwordResetToken,

  fields.passwordResetTokenExpiresAt,

];
