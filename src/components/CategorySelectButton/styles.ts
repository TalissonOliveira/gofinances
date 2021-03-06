import styled from 'styled-components/native' 
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface CategoryProps {
  name: string
}

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7
})`
  background-color: ${({ theme }) => theme.colors.shape};
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 16px;

  border-radius: 5px;
`

export const Category = styled.Text<CategoryProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, name }) =>
    name === 'Categoria' ? theme.colors.text : theme.colors.title
  };
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
  font-size: ${RFValue(20)}px;
`