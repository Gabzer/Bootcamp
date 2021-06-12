export default function FlashCards({children: flashcards}) {
  return (
    <div className='border p-2 flex flex-row flex-wrap items-center justify-center'>
      {flashcards}
    </div>
  );
}
