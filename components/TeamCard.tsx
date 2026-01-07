interface TeamCardProps {
  icon: string
  title: string
  description: string
}

export default function TeamCard({ icon, title, description }: TeamCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-1 border-l-4" style={{ borderColor: 'var(--primary)' }}>
      <div className="text-4xl mb-4" style={{ color: 'var(--primary)' }}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--primary)' }}>
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}
