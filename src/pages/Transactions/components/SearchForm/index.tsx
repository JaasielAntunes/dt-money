import { MagnifyingGlass, X } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { SearchFormContainer, ClearButton } from './styles'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionsContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { useState } from 'react'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchTransactions = useContextSelector(
    TransactionsContext,
    (context) => {
      return context.fetchTransactions
    },
  )

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
  })

  const [query, setQuery] = useState('')

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query)
  }

  const handleClearSearch = () => {
    reset()
    setQuery('')
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          placeholder="Busque por transações"
          autoComplete="off"
          {...register('query')}
          style={{ paddingRight: '715px' }}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <ClearButton onClick={handleClearSearch}>
            <X size={20} />
          </ClearButton>
        )}
      </div>

      <button type="submit" disabled={isSubmitting} style={{ outline: 'none' }}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
