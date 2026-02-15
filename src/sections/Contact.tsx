import Form from '../components/layout/Form'

const Contact = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Lado Izquierdo: Galería de Imágenes */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <img
              src="\contact\square-shape-img1.jpg"
              alt="Students with teacher"
              className="rounded-2xl shadow-md w-full h-64 object-cover"
            />
            <img
              src="\contact\square-shape-img2.jpg"
              alt="Child playing"
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
          </div>
          <div className="space-y-4 pt-8">
            <img
              src="\contact\square-shape-img3.jpg"
              alt="Group of kids"
              className="rounded-2xl shadow-md w-full h-48 object-cover"
            />
            <img
              src="\contact\square-shape-img4.jpg"
              alt="Graduate student"
              className="rounded-2xl shadow-md w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Lado Derecho: Formulario */}
        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">Ask About Kids Acts</h2>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact
