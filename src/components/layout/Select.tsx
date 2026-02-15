import React from 'react'
import type { STUDYING_OPTIONS as _ } from './formTypes'
import type { FieldError } from 'react-hook-form'

type Option = { value: string; label: string }

type SelectProps = {
  selectProps: any
  options: Option[]
  placeholder?: string
  error?: FieldError | undefined
}

const Select: React.FC<SelectProps> = ({ selectProps, options, placeholder, error }) => {
  return (
    <div>
      <div className="relative">
        <select
          {...selectProps}
          className="peer w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-400 appearance-none"
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder ?? 'Select an option'}
          </option>
          {options.map(opt => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="absolute right-6 inset-y-0 flex items-center pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-400 transform transition-transform duration-200 peer-focus:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {error && (
        <div>
          <span className="px-6 text-red-500 text-sm">{error.message}</span>
        </div>
      )}
    </div>
  )
}

export default Select
