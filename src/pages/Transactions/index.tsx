import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import {
  TransactionsContainer,
  TransactionsTable,
  PriceHighlight,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.000,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>29/03/2024</td>
            </tr>
            <tr>
              <td width="50%">Hambúrguer</td>
              <td>
                <PriceHighlight variant="outcome">-R$ 59,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>29/03/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}