import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  flex: 1;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
`