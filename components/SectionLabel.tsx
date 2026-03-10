interface SectionLabelProps {
  text: string
  dotColor: string
  light?: boolean
}

export default function SectionLabel({ text, dotColor, light = false }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div
        className="w-2 h-2 rounded-full flex-shrink-0"
        style={{
          backgroundColor: dotColor,
          boxShadow: `0 0 8px 2px ${dotColor}88, 0 0 20px 4px ${dotColor}33`
        }}
      />
      <span
        className="text-[11px] font-semibold tracking-[0.12em] uppercase font-body"
        style={{ color: light ? '#8A8480' : '#7A7470' }}
      >
        {text}
      </span>
    </div>
  )
}
