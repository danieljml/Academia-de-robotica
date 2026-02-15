export type FormValues = {
  name: string
  email: string
  phone: string
  studyingClass: string
  requirements: string
}

export const STUDYING_OPTIONS = [
  { value: 'preschool', label: 'Preschool' },
  { value: 'elementary', label: 'Elementary' },
  { value: 'highschool', label: 'High School' },
]
