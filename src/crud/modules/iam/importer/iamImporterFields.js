import model from 'crud/modules/auth/userModel';

const { fields } = model;

export default [
  fields.email,
  fields.firstName,
  fields.lastName,
  fields.phoneNumber,
  fields.avatarsIam,
  fields.roles,
];
