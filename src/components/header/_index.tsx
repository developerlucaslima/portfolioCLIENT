import { headerConfig } from '@/config/header-config'

import { Text } from '../text/_index'
import {
  ContactContainerStyled,
  HeaderStyled,
  TabsListContainerStyled,
  TitleContainerStyled,
} from './header-styled'

export const Header = () => {
  return headerConfig.map((config, index) => (
    <HeaderStyled key={index}>
      <TitleContainerStyled>
        <Text as="a" href={config.title.href} variant="link" size="md">
          {config.title.text}
        </Text>
      </TitleContainerStyled>
      <TabsListContainerStyled>
        {config.tabs.map((tab, index) => (
          <Text key={index} as="li" href={tab.href} variant="list" size="md">
            {tab.text}
          </Text>
        ))}
      </TabsListContainerStyled>
      <ContactContainerStyled>
        <Text as="a" href={config.contact.href} variant="link" size="md">
          {config.contact.text}
        </Text>
      </ContactContainerStyled>
    </HeaderStyled>
  ))
}