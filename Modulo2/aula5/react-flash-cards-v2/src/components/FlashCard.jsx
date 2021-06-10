import { useEffect, useState } from "react"

export default function FlashCard({
  id,
  title = 'Titulo do card',
  description = 'Descricao do card, que pode conter mais palavras que o titulo.',
  showFlashCardTitle = true,
  onToggleFlashCard = null
}) {
  function handleCardClick() {
    if (onToggleFlashCard) {
      onToggleFlashCard(id);
    }
  }
  const fontSizeClassName = showFlashCardTitle ? 'text-xl' : 'text-sm';

  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
                  flex flex-row items-center
                  justify-center font-semibold ${fontSizeClassName}`}
      style={{fontFamily: "'JetBrains Mono', monospace"}}
      onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}
    </div>
  )
}
