import React, { useState } from 'react'
import { CategorySelectButton } from '../../components/CategorySelectButton'
import { Button } from '../../components/Forms/Button'
import { Input } from '../../components/Forms/Input'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { Container, Fields, Form, Header, Title, TransactionsTypes } from './styles'

export function Register() {
  const [transactionType, setTransactionType] = useState('')

  function handleTransactionsTypesSelect(type: 'income' | 'outcome') {
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsTypes>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              isActive={transactionType === 'income'}
              onPress={() => handleTransactionsTypesSelect('income')}
            />
            <TransactionTypeButton
              type="down"
              title="Saída"
              isActive={transactionType === 'outcome'}
              onPress={() => handleTransactionsTypesSelect('outcome')}
            />
          </TransactionsTypes>

          <CategorySelectButton title="Categoria" />
        </Fields>

        <Button title="Enviar" />
      </Form>
    </Container>
  )
}