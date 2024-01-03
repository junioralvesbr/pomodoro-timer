import styled from 'styled-components'

export const HistoryContainer = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 3.5rem;

  & h1 {
    color: ${(props) => props.theme['--gray-100']};
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.6;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  overflow: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    min-width: 600px;
    border-collapse: collapse;
    margin-top: 2rem;

    & th {
      background-color: ${(props) => props.theme['--gray-600']};
      color: ${(props) => props.theme['--gray-100']};
      padding: 1rem 1.5rem;
      text-align: left;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-left: 1.5rem;
      }
    }

    & td {
      background-color: ${(props) => props.theme['--gray-700']};
      border-top: 4px solid ${(props) => props.theme['--gray-800']};
      padding: 1rem 1.5rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-left: 1.5rem;
      }
    }
  }
`

const STATUS_COLOR = {
  green: '--green-500',
  yellow: '--yellow-500',
  red: '--red-500',
} as const

type StatusProps = {
  statusColor: keyof typeof STATUS_COLOR
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 5px;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 100%;
    background-color: ${(props) =>
      props.theme[STATUS_COLOR[props.statusColor]]};
  }
`
