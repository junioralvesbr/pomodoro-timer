import { useContext } from 'react'
import { FormContainer, MinutesAmountInput, TaskInput } from './styles'
import { CyclesContext } from '../../index'
import { useFormContext } from 'react-hook-form'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para o seu projeto"
        list="last-task-list"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <datalist id="last-task-list">
        <option value="job1"></option>
        <option value="job2"></option>
        <option value="job3"></option>
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        max={60}
        min={5}
        step={5}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
