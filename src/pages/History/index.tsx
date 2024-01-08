import { useContext } from 'react'
import { HistoryContainer, HistoryList, Status } from './styles'
import { CyclesContext } from '../../contexts/CyclesContainer'

export function History() {
  const { cycles } = useContext(CyclesContext)
  return (
    <HistoryContainer>
      <h1>Meu histórico</h1>

      <pre>{JSON.stringify(cycles, null, 2)}</pre>

      <HistoryList>
        <table>
          <thead>
            <th>Tarefas</th>
            <th>Duração</th>
            <th>Início</th>
            <th>Status</th>
          </thead>

          <tbody>
            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="red">Interrompido</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="yellow">Em andamento</Status>
              </td>
            </tr>

            <tr>
              <td>Conserto de débitos tecnicos</td>
              <td>25 minutos</td>
              <td>Há cerca de 2 meses</td>
              <td>
                <Status statusColor="red">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
