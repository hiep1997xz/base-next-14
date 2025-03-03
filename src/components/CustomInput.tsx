import { Input } from 'antd'
import React from 'react'

interface Props {
  value?: any
  onChange?: (v?: any) => void
  label?: string
  type?: 'text' | 'password' 
}

export default function CustomInput(props: Props) {
  const { value, onChange, label, type = 'text' } = props

  return (
    <>
      <span className="custom-label">{label}</span>

      {type === 'password' ? (
        <Input.Password
          className="border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="••••••••"
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
        />
      ) : (
        <Input
          className="border border-gray-300 rounded-md focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Nife123@gmail.com"
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
        />
      )}
    </>
  )
}
