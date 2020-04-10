
import Roles from 'crud/security/roles';
const roles = Roles.values;

/**
 * List of Permissions and the Roles allowed of using them.
 */
class Permissions {
  static get values() {
    return {
      iamEdit: {
        id: 'iamEdit',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
        allowedStorageFolders: ['user'],
      },
      iamCreate: {
        id: 'iamCreate',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamImport: {
        id: 'iamImport',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
        ],
      },
      iamRead: {
        id: 'iamRead',
        allowedRoles: [
          roles.owner,
          roles.iamSecurityReviewer,
          roles.editor,
          roles.viewer,
        ],
      },
      iamUserAutocomplete: {
        id: 'iamUserAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,


        ],
      },
      auditLogRead: {
        id: 'auditLogRead',
        allowedRoles: [roles.owner, roles.auditLogViewer, roles.viewer],
      },
      settingsEdit: {
        id: 'settingsEdit',
        allowedRoles: [roles.owner],
      },
usersImport: {
        id: 'usersImport',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.usersEditor,
        ],
      },
      usersCreate: {
        id: 'usersCreate',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.usersEditor,
        ],
        allowedStorageFolders: ['users'],
      },
      usersEdit: {
        id: 'usersEdit',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.usersEditor,
        ],
        allowedStorageFolders: ['users'],
      },
      usersDestroy: {
        id: 'usersDestroy',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.entityEditor,
          roles.usersEditor,
        ],
        allowedStorageFolders: ['users'],
      },
      usersRead: {
        id: 'usersRead',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.usersEditor,
          roles.usersViewer,
        ],
      },
      usersAutocomplete: {
        id: 'usersAutocomplete',
        allowedRoles: [
          roles.owner,
          roles.editor,
          roles.viewer,
          roles.entityEditor,
          roles.usersEditor,
          roles.usersViewer,

        ],
      },

    };
  }

  static get asArray() {
    return Object.keys(this.values).map((value) => {
      return this.values[value];
    });
  }
}

export default Permissions;
