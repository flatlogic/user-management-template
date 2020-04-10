const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    remove: 'Remover',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
  },

  app: {
    title: 'Aplicação',
  },

  entities: {
    projects: {
      name: 'Projects',
      label: 'Projects',
      menu: 'Projects',
      exporterFileName: 'Projects_exportados',
      list: {
        menu: 'Projects',
        title: 'Projects',
      },
      create: {
        success: 'Projects salvo com sucesso',
      },
      update: {
        success: 'Projects salvo com sucesso',
      },
      destroy: {
        success: 'Projects deletado com sucesso',
      },
      destroyAll: {
        success: 'Projects(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Projects',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'type': {
          'staff_augmentation': 'Staff_augmentation',
          'onsite': 'Onsite',
          'managed_project': 'Managed_project',
        },
        'region': {
          'USA': 'USA',
          'Asia': 'Asia',
          'Europe': 'Europe',
        },
      },
      new: {
        title: 'Novo Projects',
      },
      view: {
        title: 'Visualizar Projects',
      },
      importer: {
        title: 'Importar Projects',
        fileName: 'projects_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    technologies: {
      name: 'Technologies',
      label: 'Technologies',
      menu: 'Technologies',
      exporterFileName: 'Technologies_exportados',
      list: {
        menu: 'Technologies',
        title: 'Technologies',
      },
      create: {
        success: 'Technologies salvo com sucesso',
      },
      update: {
        success: 'Technologies salvo com sucesso',
      },
      destroy: {
        success: 'Technologies deletado com sucesso',
      },
      destroyAll: {
        success: 'Technologies(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Technologies',
      },
      fields: {
        id: 'Id',
        'name': 'Name',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Technologies',
      },
      view: {
        title: 'Visualizar Technologies',
      },
      importer: {
        title: 'Importar Technologies',
        fileName: 'technologies_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    clients: {
      name: 'Clients',
      label: 'Clients',
      menu: 'Clients',
      exporterFileName: 'Clients_exportados',
      list: {
        menu: 'Clients',
        title: 'Clients',
      },
      create: {
        success: 'Clients salvo com sucesso',
      },
      update: {
        success: 'Clients salvo com sucesso',
      },
      destroy: {
        success: 'Clients deletado com sucesso',
      },
      destroyAll: {
        success: 'Clients(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Clients',
      },
      fields: {
        id: 'Id',
        'startDateRange': 'StartDate',
        'startDate': 'StartDate',
        'expectedRevenueRange': 'ExpectedRevenue',
        'expectedRevenue': 'ExpectedRevenue',
        'photo': 'Photo',
        'officePhoto': 'OfficePhoto',
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {

      },
      new: {
        title: 'Novo Clients',
      },
      view: {
        title: 'Visualizar Clients',
      },
      importer: {
        title: 'Importar Clients',
        fileName: 'clients_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },

    tasks: {
      name: 'Tasks',
      label: 'Tasks',
      menu: 'Tasks',
      exporterFileName: 'Tasks_exportados',
      list: {
        menu: 'Tasks',
        title: 'Tasks',
      },
      create: {
        success: 'Tasks salvo com sucesso',
      },
      update: {
        success: 'Tasks salvo com sucesso',
      },
      destroy: {
        success: 'Tasks deletado com sucesso',
      },
      destroyAll: {
        success: 'Tasks(s) deletado com sucesso',
      },
      edit: {
        title: 'Editar Tasks',
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
        createdAt: 'Criado em',
        updatedAt: 'Atualizado em',
        createdAtRange: 'Criado em',
      },
      enumerators: {
        'status': {
          'planned': 'Planned',
          'in_progress': 'In_progress',
          'completed': 'Completed',
        },
      },
      new: {
        title: 'Novo Tasks',
      },
      view: {
        title: 'Visualizar Tasks',
      },
      importer: {
        title: 'Importar Tasks',
        fileName: 'tasks_template_importacao',
        hint:
          'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
      },
    },
  },

  auth: {
    profile: {
      title: 'Editar Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    owner: {
      label: 'Proprietário',
      description: 'Acesso completo a todos os recursos',
    },
    editor: {
      label: 'Editor',
      description: 'Acesso para edição a todos os recursos',
    },
    viewer: {
      label: 'Visualizador',
      description:
        'Acesso de visualização a todos os recursos',
    },
    auditLogViewer: {
      label: 'Visualizador de Registros de Autoria',
      description:
        'Acesso de visualização dos registros de autoria',
    },
    iamSecurityReviewer: {
      label: 'Revisor de segurança',
      description: `Acesso total para gerenciar as funções do usuário`,
    },
    entityEditor: {
      label: 'Editor de Entidades',
      description: 'Acesso de edição a todas as entidades',
    },
    entityViewer: {
      label: 'Visualizador de Entidades',
      description:
        'Acesso de visualização a todas as entidades',
    },
    projectsEditor: {
      label: 'Editor de Projects',
      description: 'Acesso de edição aos Projects',
    },
    projectsViewer: {
      label: 'Visualizador de Projects',
      description: 'Acesso de visualização aos Projects',
    },
    technologiesEditor: {
      label: 'Editor de Technologies',
      description: 'Acesso de edição aos Technologies',
    },
    technologiesViewer: {
      label: 'Visualizador de Technologies',
      description: 'Acesso de visualização aos Technologies',
    },
    clientsEditor: {
      label: 'Editor de Clients',
      description: 'Acesso de edição aos Clients',
    },
    clientsViewer: {
      label: 'Visualizador de Clients',
      description: 'Acesso de visualização aos Clients',
    },
    tasksEditor: {
      label: 'Editor de Tasks',
      description: 'Acesso de edição aos Tasks',
    },
    tasksViewer: {
      label: 'Visualizador de Tasks',
      description: 'Acesso de visualização aos Tasks',
    },
  },

  iam: {
    title: 'Gerenciamento de usuários e permissões',
    menu: 'IAM',
    disable: 'Desabilitar',
    disabled: 'Desabilitado',
    enabled: 'Habilitado',
    enable: 'Habilitar',
    doEnableSuccess: 'Usuário habilitado com sucesso',
    doDisableSuccess: 'Usuário desabilitado com sucesso',
    doDisableAllSuccess:
      'Usuário(s) desabilitado(s) com sucesso',
    doEnableAllSuccess:
      'Usuário(s) habilidatos com sucesso',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    viewBy: 'Visualizar por',
    users: {
      name: 'users',
      label: 'Usuários',
      exporterFileName: 'usuarios_exportados',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    roles: {
      label: 'Perfis',
      doRemoveAllSelectedSuccess:
        'Permissões removidas com sucesso',
    },
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
      'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço.<br/> Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      disablingHimself: `Você não pode desativar-se`,
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  user: {
    fields: {
      id: 'Id',
      authenticationUid: 'Id de autenticação',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      disabled: 'Desativado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      rememberMe: 'Lembrar-me',
    },
    enabled: 'Habilitado',
    disabled: 'Desabilitado',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success:
        'Configurações salvas com sucesso. A página irá recarregar em {0} para que as alterações tenham efeito.',
    },
    fields: {
      theme: 'Tema',
    },
    colors: {
      default: 'Escuro',
      light: 'Claro',
      cyan: 'Ciano',
      'geek-blue': 'Azul escuro',
      gold: 'Ouro',
      lime: 'Limão',
      magenta: 'Magenta',
      orange: 'Laranja',
      'polar-green': 'Verde polar',
      purple: 'Roxo',
      red: 'Vermelho',
      volcano: 'Vúlcão',
      yellow: 'Amarelo',
    },
  },
  home: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/home/HomePage.js.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: '${path} deve possuir ao menos ${min} itens',
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser: '{0}'.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    // Options.jsx
    items_per_page: '/ página',
    jump_to: 'Vá até',
    jump_to_confirm: 'confirme',
    page: '',

    // Pagination.jsx
    prev_page: 'Página anterior',
    next_page: 'Próxima página',
    prev_5: '5 páginas anteriores',
    next_5: '5 próximas páginas',
    prev_3: '3 páginas anteriores',
    next_3: '3 próximas páginas',
  },
};

export default ptBR;
