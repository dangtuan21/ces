const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
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
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'CES Operation',
  },

  entities: {
    customer: {
      name: 'customer',
      label: 'Customers',
      menu: 'Customers',
      exporterFileName: 'customer_export',
      list: {
        menu: 'Customers',
        title: 'Customers',
      },
      create: {
        success: 'Customer successfully saved',
      },
      update: {
        success: 'Customer successfully saved',
      },
      destroy: {
        success: 'Customer successfully deleted',
      },
      destroyAll: {
        success: 'Customer(s) successfully deleted',
      },
      edit: {
        title: 'Edit Customer',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        birthdateRange: 'Birthdate',
        birthdate: 'Birthdate',
        gender: 'Gender',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        gender: {
          male: 'Male',
          female: 'Female',
        },
      },
      new: {
        title: 'New Customer',
      },
      view: {
        title: 'View Customer',
      },
      importer: {
        title: 'Import Customers',
        fileName: 'customer_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    property: {
      name: 'property',
      label: 'Properties',
      menu: 'Properties',
      exporterFileName: 'property_export',
      list: {
        menu: 'Properties',
        title: 'Properties',
      },
      create: {
        success: 'Property successfully saved',
      },
      update: {
        success: 'Property successfully saved',
      },
      destroy: {
        success: 'Property successfully deleted',
      },
      destroyAll: {
        success: 'Property(s) successfully deleted',
      },
      edit: {
        title: 'Edit Property',
      },
      fields: {
        id: 'Id',
        name: 'Name',
        description: 'Description',
        unitPriceRange: 'Unit Price',
        unitPrice: 'Unit Price',
        photos: 'Photos',
        propertyType: 'PropertyType',
        bedRoomsRange: 'BedRooms',
        bedRooms: 'BedRooms',
        fullBathRoomsRange: 'FullBathRooms',
        fullBathRooms: 'FullBathRooms',
        halfBathRoomsRange: 'HalfBathRooms',
        halfBathRooms: 'HalfBathRooms',
        areaRange: 'Area',
        area: 'Area',
        headLine: 'HeadLine',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        propertyType: {
          luxury: 'Luxury',
          normal: 'Normal',
        },
      },
      new: {
        title: 'New Property',
      },
      view: {
        title: 'View Property',
      },
      importer: {
        title: 'Import Properties',
        fileName: 'property_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    order: {
      name: 'order',
      label: 'Orders',
      menu: 'Orders',
      exporterFileName: 'order_export',
      list: {
        menu: 'Orders',
        title: 'Orders',
      },
      create: {
        success: 'Order successfully saved',
      },
      update: {
        success: 'Order successfully saved',
      },
      destroy: {
        success: 'Order successfully deleted',
      },
      destroyAll: {
        success: 'Order(s) successfully deleted',
      },
      edit: {
        title: 'Edit Order',
      },
      fields: {
        id: 'Id',
        customer: 'Customer',
        products: 'Products',
        employee: 'Employee',
        delivered: 'Delivered',
        attachments: 'Attachments',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Order',
      },
      view: {
        title: 'View Order',
      },
      importer: {
        title: 'Import Orders',
        fileName: 'order_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    resident: {
      name: 'resident',
      label: 'Residents',
      menu: 'Residents',
      exporterFileName: 'resident_export',
      list: {
        menu: 'Residents',
        title: 'Residents',
      },
      create: {
        success: 'Resident successfully saved',
      },
      update: {
        success: 'Resident successfully saved',
      },
      destroy: {
        success: 'Resident successfully deleted',
      },
      destroyAll: {
        success: 'Resident(s) successfully deleted',
      },
      edit: {
        title: 'Edit Resident',
      },
      fields: {
        id: 'Id',
        firstName: 'First Name',
        lastName: 'Last Name',
        middleName: 'Middle Name',
        phoneNumber: 'Phone Number',
        email: 'Email',
        property: 'Property',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Resident',
      },
      view: {
        title: 'View Resident',
      },
      importer: {
        title: 'Import Residents',
        fileName: 'resident_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    expense: {
      name: 'expense',
      label: 'Expenses',
      menu: 'Expenses',
      exporterFileName: 'expense_export',
      list: {
        menu: 'Expenses',
        title: 'Expenses',
      },
      create: {
        success: 'Expense successfully saved',
      },
      update: {
        success: 'Expense successfully saved',
      },
      destroy: {
        success: 'Expense successfully deleted',
      },
      destroyAll: {
        success: 'Expense(s) successfully deleted',
      },
      edit: {
        title: 'Edit Expense',
      },
      fields: {
        id: 'Id',
        category: 'Category',
        amountRange: 'Amount',
        amount: 'Amount',
        property: 'Property',
        payDateRange: 'Pay Date',
        payDate: 'Pay Date',
        vendor: 'Vendor',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        category: {
          waste: 'Waste',
          water_repair: 'Water_repair',
          electric_repair: 'Electric_repair',
          security: 'Security',
        },
      },
      new: {
        title: 'New Expense',
      },
      view: {
        title: 'View Expense',
      },
      importer: {
        title: 'Import Expenses',
        fileName: 'expense_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    maintenanceRequest: {
      name: 'maintenanceRequest',
      label: 'MaintenanceRequests',
      menu: 'MaintenanceRequests',
      exporterFileName: 'maintenanceRequest_export',
      list: {
        menu: 'MaintenanceRequests',
        title: 'MaintenanceRequests',
      },
      create: {
        success: 'Maintenance Request successfully saved',
      },
      update: {
        success: 'Maintenance Request successfully saved',
      },
      destroy: {
        success: 'Maintenance Request successfully deleted',
      },
      destroyAll: {
        success:
          'Maintenance Request(s) successfully deleted',
      },
      edit: {
        title: 'Edit Maintenance Request',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        attachment: 'Attachment',
        category: 'Category',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        category: {
          water: 'Water',
          electric: 'Electric',
          gas: 'Gas',
        },
      },
      new: {
        title: 'New Maintenance Request',
      },
      view: {
        title: 'View Maintenance Request',
      },
      importer: {
        title: 'Import MaintenanceRequests',
        fileName: 'maintenanceRequest_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    announcement: {
      name: 'announcement',
      label: 'Announcements',
      menu: 'Announcements',
      exporterFileName: 'announcement_export',
      list: {
        menu: 'Announcements',
        title: 'Announcements',
      },
      create: {
        success: 'Announcement successfully saved',
      },
      update: {
        success: 'Announcement successfully saved',
      },
      destroy: {
        success: 'Announcement successfully deleted',
      },
      destroyAll: {
        success: 'Announcement(s) successfully deleted',
      },
      edit: {
        title: 'Edit Announcement',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {},
      new: {
        title: 'New Announcement',
      },
      view: {
        title: 'View Announcement',
      },
      importer: {
        title: 'Import Announcements',
        fileName: 'announcement_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },

    message: {
      name: 'message',
      label: 'Messages',
      menu: 'Messages',
      exporterFileName: 'message_export',
      list: {
        menu: 'Messages',
        title: 'Messages',
      },
      create: {
        success: 'Message successfully saved',
      },
      update: {
        success: 'Message successfully saved',
      },
      destroy: {
        success: 'Message successfully deleted',
      },
      destroyAll: {
        success: 'Message(s) successfully deleted',
      },
      edit: {
        title: 'Edit Message',
      },
      fields: {
        id: 'Id',
        title: 'Title',
        description: 'Description',
        messageStatus: 'MessageStatus',
        assignee: 'Assignee',
        createdAt: 'Created at',
        updatedAt: 'Updated at',
        createdAtRange: 'Created at',
      },
      enumerators: {
        messageStatus: {
          sent: 'Sent',
          received: 'Received',
          working: 'Working',
          closed: 'Closed',
        },
      },
      new: {
        title: 'New Message',
      },
      view: {
        title: 'View Message',
      },
      importer: {
        title: 'Import Messages',
        fileName: 'message_import_template',
        hint:
          'Files/Images columns must be the URLs of the files separated by space.',
      },
    },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
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
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    operator: {
      label: 'Operator Role',
      description: 'Operator role access',
    },
    renter: {
      label: 'Renter Role',
      description: 'Renter role access',
    },
    resident: {
      label: 'Resident Role',
      description: 'Resident role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
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
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
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
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      theme: 'Theme',
      logos: 'Logo',
      backgroundImages: 'Background Image',
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
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
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
    429: 'Too many requests. Please try again later.',
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
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
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
