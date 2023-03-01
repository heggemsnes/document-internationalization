import React from 'react'
import {definePlugin} from 'sanity'
import {resolveActions} from './actions'
import {createLanguageBadge} from './badges/LanguageBadge'
import {LanguageSelectWrapped} from './language-select/components'
import {Ti18nConfig, Ti18nSchema} from './types'

export const documentI18n = definePlugin<Ti18nConfig>((config) => {
  return {
    name: 'document-i18n',

    document: {
      actions: (prev, context) => resolveActions(prev, context, config),
      badges: (prev) => [...prev, createLanguageBadge(config)],
    },

    form: {
      components: {
        input(props) {
          const {value} = props
          if (
            (props.schemaType as Ti18nSchema).i18n &&
            typeof value === 'object' &&
            (value as Record<string, unknown>)?._id
          ) {
            return <LanguageSelectWrapped config={config} {...props} />
          }
          return props.renderDefault(props)
        },
      },
    },
  }
})
