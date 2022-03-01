import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface IconProps {
  type: 'up' | 'down'
}

interface ContainerProps {
  isActive: boolean
  type: 'up' | 'down'
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 48%;
  padding: 16px 35px;

  flex-direction: row;
  align-items: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ isActive, type }) => isActive && type === 'up' && css`
    background-color: ${({ theme }) => theme.colors.success_light};
    border: none;
  `}

  ${({ isActive, type }) => isActive && type === 'down' && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border: none;
  `}
`

export const Icon = styled(Feather)<IconProps>`
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention
  };
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`