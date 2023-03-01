import React, {useContext, useMemo} from 'react'
import twemoji from 'twemoji'
import parse from 'html-react-parser'
import {Box} from '@sanity/ui'
import styled from 'styled-components'
import {getFlag} from '../../../utils/getFlag'
import {LanguageConfigContext} from '../LanguageSelect/LanguageConfigContext'

type Props = {
  code?: string
  langCulture?: string
}

const EmojiBox = styled(Box)`
  min-width: 24px;
  transform: translateY(1px);
`

function flagIcon(flagEmoji: string | undefined) {
  const flagHtml = twemoji.parse(flagEmoji ?? `🇺🇳`, {folder: 'svg', ext: '.svg'})
  // temporary fix because maxcdn has stopped supporting twemoji
  // https://github.com/twitter/twemoji/issues/580#issuecomment-1377111079
  return parse(flagHtml.replace('twemoji.maxcdn.com/v', 'cdnjs.cloudflare.com/ajax/libs/twemoji'))
}

export const SingleFlag: React.FunctionComponent<Props> = ({code, langCulture}) => {
  const flagEmoji = useMemo(() => code && getFlag(code), [code])
  const flagReact = flagIcon(flagEmoji)

  const {customFlagComponents} = useContext(LanguageConfigContext)
  const CustomFlagComponent = useMemo(() => {
    if (langCulture && customFlagComponents) {
      const exportedName = langCulture.replace(/[^a-zA-Z0-9_]/g, '_')
      if (exportedName in customFlagComponents) {
        return customFlagComponents[exportedName]
      }
    }
    return null
  }, [langCulture, customFlagComponents])

  return (
    <Box aria-label={code}>
      {CustomFlagComponent && code ? (
        <CustomFlagComponent code={code} />
      ) : (
        <EmojiBox>{flagReact}</EmojiBox>
      )}
    </Box>
  )
}
