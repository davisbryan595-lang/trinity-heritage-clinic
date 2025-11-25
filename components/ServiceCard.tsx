interface ServiceCardProps {
  icon: string
  title: string
  items: string[]
}

export default function ServiceCard({ icon, title, items }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-t-4" style={{ borderColor: '#006d5b' }}>
      <div className="text-5xl mb-4" style={{ color: '#006d5b' }}>
        {icon}
      </div>
      <h3 className="text-2xl font-bold mb-4" style={{ color: '#006d5b' }}>
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-gray-700">
            <span style={{ color: '#006d5b' }} className="font-bold">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <button className="btn-primary mt-6 w-full" style={{ backgroundColor: '#006d5b' }}>
        Inquire Now
      </button>
    </div>
  )
}
