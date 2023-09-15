import React, { ChangeEvent, useState } from 'react'

type ChangeEventType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

export const useInput = (
  initialValue = '',
  maxLength?: number
): [
  value: string,
  onChange: (e: ChangeEventType) => void,
  setValue: React.Dispatch<React.SetStateAction<string>>
] => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: ChangeEventType) => {
    if (e) {
      setValue(e.target.value)
    }
  }

  return [value, onChange, setValue]
}
