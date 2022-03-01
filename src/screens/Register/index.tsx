import React, { useState } from 'react'
import { Alert, Modal } from 'react-native'
import { useForm } from 'react-hook-form'

import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { CategorySelectButton } from '../../components/CategorySelectButton'
import { Button } from '../../components/Forms/Button'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelect } from '../CategorySelect'

import { Container, Fields, Form, Header, Title, TransactionsTypes } from './styles'

interface FormData {
  [name: string]: any
}

const schema = Yup.object().shape({
  name: Yup.string().required('Insira um nome'),
  amount: Yup
    .number()
    .typeError('Informe um valor válido')
    .positive('O valor não pode ser negativo')
})

export function Register() {
  const [transactionType, setTransactionType] = useState('')
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria',
  })

  const {
    control, // registrar os inputs do formulário
    handleSubmit, // pegar todos os valores dos inputs do formulário e enviar
    formState: { errors } // capturar os erros do formulário
  } = useForm({
    resolver: yupResolver(schema)
  })

  function handleTransactionsTypesSelect(type: 'income' | 'outcome') {
    setTransactionType(type)
  }

  function handleOpenSelectCategoryModal() {
    setIsCategoryModalOpen(true)
  }

  function handleCloseSelectCategoryModal() {
    setIsCategoryModalOpen(false)
  }

  function handleRegister(form: FormData) {
    if (!transactionType) {
      return Alert.alert('Selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Selecione a categoria da transação')
    }

    const data = {
      name: form.name,
      amount: form.amount,
      transactionType,
      category: category.key
    }
    console.log(data)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <InputForm
            control={control}
            name="name"
            placeholder="Nome"
            autoCapitalize="sentences"
            autoCorrect={false}
            error={errors.name && errors.name.message}
          />
          <InputForm
            control={control}
            name="amount"
            placeholder="Preço"
            keyboardType="numeric"
            error={errors.amount && errors.amount.message}
          />

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

          <CategorySelectButton
            title={category.name}
            onPress={handleOpenSelectCategoryModal}
          />
        </Fields>

        <Button
          title="Enviar"
          onPress={handleSubmit(handleRegister)}
        />
      </Form>

      <Modal visible={isCategoryModalOpen}>
        <CategorySelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleCloseSelectCategoryModal}
        />
      </Modal>
    </Container>
  )
}