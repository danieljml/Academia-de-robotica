import toast from 'react-hot-toast'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Select from './Select'
import { STUDYING_OPTIONS, type FormValues } from './formTypes'

const notify = () =>
  toast.success('Message sent successfully.', {
    duration: 4000,
    icon: '🚀',
    style: {
      padding: '16px 22px',
      borderRadius: '22px',
      border: '2px solid #22C55E',
      fontWeight: 600,
      fontSize: '18px',
      letterSpacing: '0.2px',
      boxShadow: `
          0 -15px 30px -5px rgba(0,0,0,0.02), 
          0 20px 25px -5px rgba(0,0,0,0.1),
          inset 0 20px 40px -15px #22C55E35
        `,
    },
  })

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>()

  const onSubmit = async (data: FormValues) => {
    try {
      console.log('SUBMITTING', data)
      await emailjs.send('service_tc8s71j', 'template_h7ctdu8', data, 'zr8YaRGVQSuB_UD88')
      notify()
      reset()
    } catch (error: any) {
      console.error('FAILED...', error?.text ?? error)
      toast.error(error?.text ?? 'Failed to send message', { duration: 4000 })
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          {...register('name', { required: true })}
          type="text"
          placeholder="Your Name"
          className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-600"
        />
        {errors.name && <span className="px-6 text-red-500 text-sm">Name is required</span>}
      </div>

      <div>
        <input
          {...register('email', { required: true })}
          type="email"
          placeholder="Email Address"
          className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-600"
        />
        {errors.email && <span className="px-6 text-red-500 text-sm">Email is required</span>}
      </div>

      <div>
        <input
          {...register('phone', {
            required: 'Phone is required',
            validate: value => {
              const digits = (value || '').replace(/\D/g, '')
              return (digits.length >= 7 && digits.length <= 15) || 'Phone must contain 7–15 digits'
            },
          })}
          type="tel"
          placeholder="Phone Number"
          className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-600"
        />
        {errors.phone && <span className="px-6 text-red-500 text-sm">{errors.phone.message}</span>}
      </div>

      <div>
        <Select
          selectProps={register('studyingClass', {
            required: 'Please select a class',
            validate: value => STUDYING_OPTIONS.map(o => o.value).includes(value) || 'Please select a valid class',
          })}
          options={STUDYING_OPTIONS}
          placeholder="Studying Class"
          error={errors.studyingClass}
        />
      </div>

      <div>
        <textarea
          {...register('requirements', { required: true })}
          placeholder="Type Your Requirements"
          rows={1}
          className="w-full px-6 py-4 rounded-full bg-gray-50 border border-gray-100 focus:border-purple-400 focus:ring-2 focus:ring-purple-200 outline-none transition-all text-gray-600 resize-none"
        ></textarea>
        {errors.requirements && <span className="px-6 text-red-500 text-sm">Please add your requirements</span>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#F2A900] hover:bg-[#d99800] text-white font-bold py-4 rounded-full shadow-lg shadow-orange-200 transition-all transform active:scale-95 mt-4 cursor-pointer disabled:opacity-60"
      >
        {isSubmitting ? 'Sending...' : 'Submit Now'}
      </button>
    </form>
  )
}

export default Form
