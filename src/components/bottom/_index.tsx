import { bottomConfig } from '@/config/bottom-config'

import { Text } from '../text/_index'
import {
  BottomStyled,
  CurriculumContainerStyled,
  TabsListContainerStyled,
  TitleContainerStyled,
} from './bottom-styled'

export const Bottom = () => {
  return bottomConfig.map((config, index) => (
    <BottomStyled key={index}>
      <TitleContainerStyled>
        <Text variant="subtitle" children={config.title.text} />
      </TitleContainerStyled>
      <TabsListContainerStyled>
        {config.tabs.map((tab, index) => (
          <li key={index}>
            <Text
              as="a"
              href={tab.href}
              target="_blank"
              variant="link"
              size="md"
              children={<tab.icon />}
            />
          </li>
        ))}
      </TabsListContainerStyled>
      <CurriculumContainerStyled>
        <Text
          key={index}
          as="a"
          variant="link"
          size="md"
          appendIcon={<config.curriculum.icon />}
          children={config.curriculum.text}
          fullWidth
        />
      </CurriculumContainerStyled>
    </BottomStyled>
  ))
}
