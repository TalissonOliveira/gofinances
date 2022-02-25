import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'
import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper
} from './styles'

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/30274736?v=4'}}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Talisson</UserName>
            </User>
          </UserInfo>

          <Icon name='power' />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  )
}