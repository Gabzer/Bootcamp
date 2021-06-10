import { useEffect, useState } from "react"

export default function FlashCard({
  title = 'Titulo do card',
  description = 'Descricao do card, que pode conter mais palavras que o titulo.',
  showFlashCardTitle = true
}) {
  const [showTitle, setShowTitle] = useState(showFlashCardTitle);
  
  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle]);

  function handleCardClick() {
    setShowTitle(currentShowTitle => !currentShowTitle);
  }
  const fontSizeClassName = showTitle ? 'text-xl' : 'text-sm';

  return (
    <div
      className={`shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
                  flex flex-row items-center
                  justify-center font-semibold ${fontSizeClassName}`}
      style={{fontFamily: "'JetBrains Mono', monospace"}}
      onClick={handleCardClick}
    >
      {showTitle ? title : description}
    </div>
  )
}
