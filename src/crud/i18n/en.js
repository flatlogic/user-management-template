const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    remove: 'Remove',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
  },

  app: {
    title: 'Application',
  },

  entities: {
    projects: {
      name: 'projects',
      label: 'Projects',
      menu: 'Projects',
      exporterFileName: 'projects_export',
      list: {
        menu: 'Projects',
        title: 'Projects',
      },
      create: {
        success: 'Projects saved successfully',
      },
      update: {
        success: 'Projects saved successfully',
      },
      destroy: {
        success: 'Projects deleted successfully',
      },
      destroyAll: {
        success: 'Projects(s) deleted successfully',
      },
      edit: {
        title: 'Edit Projects',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'participantsRange': 'Participants',
        'participants': 'Participants',
        'priceRange': 'Price',
        'price': 'Price',
        'startDateRange': 'StartDate',
        'startDate': 'StartDate',
        'startTimeRange': 'StartTime',
        'startTime': 'StartTime',
        'endDateRange': 'EndDate',
        'endDate': 'EndDate',
        'endTimeRange': 'EndTime',
        'endTime': 'EndTime',
        'active': 'Active',
        'type': 'Type',
        'region': 'Region',
        'attachments': 'Attachments',
        'legalDocs': 'LegalDocs',
        'teamPhoto': 'TeamPhoto',
        'logo': 'Logo',
        'technologies': 'Technologies',
        'client': 'Client',
        'manager': 'Manager',
        'members': 'Members',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'type': {
          'staff_augmentation': 'Staff augmentation',
          'onsite': 'Onsite',
          'managed_project': 'Managed project',
        },
        'region': {
          'USA': 'USA',
          'Asia': 'Asia',
          'Europe': 'Europe',
        },
      },
      new: {
        title: 'New Projects',
      },
      view: {
        title: 'View Projects',
      },
      importer: {
        title: 'Import Projects',
        fileName: 'projects_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    technologies: {
      name: 'technologies',
      label: 'Technologies',
      menu: 'Technologies',
      exporterFileName: 'technologies_export',
      list: {
        menu: 'Technologies',
        title: 'Technologies',
      },
      create: {
        success: 'Technologies saved successfully',
      },
      update: {
        success: 'Technologies saved successfully',
      },
      destroy: {
        success: 'Technologies deleted successfully',
      },
      destroyAll: {
        success: 'Technologies(s) deleted successfully',
      },
      edit: {
        title: 'Edit Technologies',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Technologies',
      },
      view: {
        title: 'View Technologies',
      },
      importer: {
        title: 'Import Technologies',
        fileName: 'technologies_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    clients: {
      name: 'clients',
      label: 'Clients',
      menu: 'Clients',
      exporterFileName: 'clients_export',
      list: {
        menu: 'Clients',
        title: 'Clients',
      },
      create: {
        success: 'Clients saved successfully',
      },
      update: {
        success: 'Clients saved successfully',
      },
      destroy: {
        success: 'Clients deleted successfully',
      },
      destroyAll: {
        success: 'Clients(s) deleted successfully',
      },
      edit: {
        title: 'Edit Clients',
      },
      fields: {
        id: 'Id',
        'startDateRange': 'StartDate',
        'startDate': 'StartDate',
        'expectedRevenueRange': 'ExpectedRevenue',
        'expectedRevenue': 'ExpectedRevenue',
        'photo': 'Photo',
        'officePhoto': 'OfficePhoto',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {

      },
      new: {
        title: 'New Clients',
      },
      view: {
        title: 'View Clients',
      },
      importer: {
        title: 'Import Clients',
        fileName: 'clients_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    tasks: {
      name: 'tasks',
      label: 'Tasks',
      menu: 'Tasks',
      exporterFileName: 'tasks_export',
      list: {
        menu: 'Tasks',
        title: 'Tasks',
      },
      create: {
        success: 'Tasks saved successfully',
      },
      update: {
        success: 'Tasks saved successfully',
      },
      destroy: {
        success: 'Tasks deleted successfully',
      },
      destroyAll: {
        success: 'Tasks(s) deleted successfully',
      },
      edit: {
        title: 'Edit Tasks',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        'startTimeRange': 'StartTime',
        'startTime': 'StartTime',
        'endTimeRange': 'EndTime',
        'endTime': 'EndTime',
        'status': 'Status',
        'project': 'Project',
        'attachments': 'Attachments',
        'assignedTo': 'AssignedTo',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        'status': {
          'planned': 'Planned',
          'in_progress': 'In_progress',
          'completed': 'Completed',
        },
      },
      new: {
        title: 'New Tasks',
      },
      view: {
        title: 'View Tasks',
      },
      importer: {
        title: 'Import Tasks',
        fileName: 'tasks_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Edit Profile',
      success: 'Profile updated successfully',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email sent successfully`,
    passwordResetEmailSuccess: `Password reset email sent successfully`,
    passwordResetSuccess: `Password changed successfully`,
    verifyEmail: {
      success: 'Email successfully verified',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  iam: {
    title: 'Identity and Access Management',
    menu: 'IAM',
    disable: 'Disable',
    disabled: 'Disabled',
    enabled: 'Enabled',
    enable: 'Enable',
    doEnableSuccess: 'User enabled successfully',
    doDisableSuccess: 'User disabled successfully',
    doDisableAllSuccess: 'User(s) disabled successfully',
    doEnableAllSuccess: 'User(s) enabled successfully',
    doAddSuccess: 'User(s) saved successfully',
    doUpdateSuccess: 'User saved successfully',
    viewBy: 'View By',
    users: {
      name: 'users',
      label: 'Users',
      exporterFileName: 'users_export',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    roles: {
      label: 'Roles',
      doRemoveAllSelectedSuccess:
        'Permissions removed successfully',
    },
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'New User(s)',
      titleModal: 'New User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space.<br/> Relationships must be the ID of the referenced records separated by space.<br/> Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      disablingHimself: `You can't disable yourself`,
      revokingOwnPermission: `You can't revoke your own owner permission`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Authentication Uid',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      disabled: 'Disabled',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      rememberMe: 'Remember me',
    },
    enabled: 'Enabled',
    disabled: 'Disabled',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings saved successfully. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
    },
    colors: {
      default: 'Dark',
      light: 'Light',
      cyan: 'Cyan',
      'geek-blue': 'Geek Blue',
      gold: 'Gold',
      lime: 'Lime',
      magenta: 'Magenta',
      orange: 'Orange',
      'polar-green': 'Polar Green',
      purple: 'Purple',
      red: 'Red',
      volcano: 'Volcano',
      yellow: 'Yellow',
    },
  },
  home: {
    menu: 'Home',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: '${path} field must have at least ${min} items',
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be '{0}'.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    items_per_page: '/ page',
    jump_to: 'Goto',
    jump_to_confirm: 'confirm',
    page: '',

    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
  },
};

export default en;
