const INPUT_TYPES = {
    TEXT: 'text',
    RADIO: 'radio',
};

const INPUT_FIELDS = {
    FULL_NAME: 'full_name',
    USER_NAME: 'user_name',
    WORKSPACE_NAME: 'work_name',
    WORKSPACE_URL: 'work_url',
    USAGE_TYPE: 'usage_type'
};

const INPUT_FIELD_DETAILS = {
    [INPUT_FIELDS.FULL_NAME]: {
        label: 'Full name',
        type: INPUT_TYPES.TEXT,
        placeholder: 'Steve jobs',
        isRequired: true,
    },
    [INPUT_FIELDS.USER_NAME]: {
        label: 'Display name',
        type: INPUT_TYPES.TEXT,
        placeholder: 'Steve',
        isRequired: true,
    },
    [INPUT_FIELDS.WORKSPACE_NAME]: {
        label: 'Workspace name',
        type: INPUT_TYPES.TEXT,
        placeholder: 'Eden',
        isRequired: true,
    },
    [INPUT_FIELDS.WORKSPACE_URL]: {
        label: 'Workspace URL',
        type: INPUT_TYPES.TEXT,
        placeholder: 'Eden',
        isRequired: false,
        prefixText: 'www.eden.com/',
    },
    [INPUT_FIELDS.USAGE_TYPE]: {
        label: '',
        type: INPUT_TYPES.RADIO,
        placeholder: '',
        isRequired: true,
        options: [{
            value: 'self',
            title: 'For myself',
            description: 'Write better. Think more clearly. Stay organized'
        }, {
            value: 'group',
            title: 'With my team',
            description: 'wikies docs, task & projects, all in one place'
        }]
    },
}

const PAGES = {
    ONE: 1,
    TWO: 2,
    THREE: 3,
    FOUR: 4
};

const PAGE_DETAILS = {
    [PAGES.ONE]: {
        stepIndex: 1,
        title: 'Welcome! Fiirst thing first....',
        description: 'You can always change that later',
        inputFields: [INPUT_FIELDS.FULL_NAME, INPUT_FIELDS.USER_NAME],
        actionLabel: 'Create Workspace',
    },
    [PAGES.TWO]: {
        stepIndex: 2,
        title: 'Let\'s set up a home for all your work',
        description: 'You can always create another workspace later',
        inputFields: [INPUT_FIELDS.WORKSPACE_NAME, INPUT_FIELDS.WORKSPACE_URL],
        actionLabel: 'Create Workspace',
    },
    [PAGES.THREE]: {
        stepIndex: 3,
        title: 'How are you planning to use Eden?',
        description: 'We will streamline your setup experience accordingly',
        inputFields: [INPUT_FIELDS.USAGE_TYPE],
        actionLabel: 'Create Workspace',
    },
    [PAGES.FOUR]: {
        stepIndex: 4,
        title: 'Congratulations, ',
        description: 'You have completed onboarding, you can start using Eden!',
        inputFields: [],
        actionLabel: 'Launch Eden',
    }
}

export { PAGES, PAGE_DETAILS, INPUT_FIELDS, INPUT_TYPES, INPUT_FIELD_DETAILS };