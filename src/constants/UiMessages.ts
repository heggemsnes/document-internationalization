export const UiMessages = {
  publishing: 'Publishing...',
  publish: 'Publish',
  updatingIntlFields: 'Updating i18n fields',
  intlFieldsUpdated: 'i18n fields updated',
  baseDocumentCopied: 'Base document copied',
  translationCreatedToast: {
    title: (name: string): string => `Translation created: ${name}`,
    description: (name: string): string =>
      `The content from ‘${name}’ is copied into the new document translation.`,
  },
  loading: 'Loading languages...',
  draft: 'Draft',
  missingTranslations:
    'Following languages are missing some translations compared to the base language',
  base: 'Base',
  missing: 'Missing',
  deleteAll: {
    buttonTitle: 'Delete (incl. translations)',
    deleting: 'Deleting...',
  },
  duplicateAll: {
    buttonTitle: 'Duplicate (incl. translations)',
    duplicating: 'Duplicating...',
  },
  translationsMaintenance: {
    title: 'Translation Maintenance',
    selectSchemaPlaceholder: 'Select schema type',
    idStructureMismatch: 'document(s) with mismatched ID structures',
    missingLanguageField: 'document(s) are missing the language field',
    missingDocumentRefs: 'document(s) have missing translation references',
    missingBaseDocumentRefs: 'document(s) have missing base document references',
    orphanDocuments: 'orphaned translation document(s)',
    referenceBehaviorMismatch: 'document(s) with mismatched reference behaviors',
    baseLanguageMismatch: 'base document(s) with mismatched language field',
    fix: 'Fix',
    pendingTransactionDialog: {
      header: 'Confirm pending transaction',
      caution:
        'Before continuing please review the transactions. Keep in mind, the translation maintenance functionality may remove or update many documents at once. It is recommended to back-up your dataset before performing data maintenance',
      cancel: 'Cancel',
      confirm: 'Confirm operation',
    },
  },
  errors: {
    baseDocumentNotPublished:
      'It looks like you have not published your base translation yet. When using strong references it is required to publish the base document before publishing any translated entries',
  },
  languageSelect: {
    placeholder: 'Switch language',
    listLabels: {
      existing: 'Select document translations',
      missing: 'Create new document translations',
    },
  },
}
