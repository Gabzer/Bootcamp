import { useState } from 'react';

import Button from '../components/Button';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Header from '../components/Header';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';

import { allFlashCards } from '../data/allFlashCards';
import { helperShuffleArray } from '../helpers/arrayHelpers';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);
    setAllCards(shuffledCards);
  }
  function handleRadioShowDescriptionClick() {
    const updateCards = [...allCards].map(card => ({
      ...card,
      showTitle: false
    }));
    setAllCards(updateCards);
    setRadioButtonShowTitle(false);
  }
  function handleRadioShowTitleClick() {
    const updateCards = [...allCards].map(card => ({
      ...card,
      showTitle: true
    }));
    setAllCards(updateCards);
    setRadioButtonShowTitle(true);
  }
  function handleToggleFlashCard (cardId) {
    const updateCards = [...allCards];
    const cardIndex = updateCards.findIndex(card => card.id ===cardId);
    updateCards[cardIndex].showTitle = !updateCards[cardIndex].showTitle;

    setAllCards(updateCards);
  }

  return (
    <>
      <Header>react-flash-cards-v1</Header>
      <Main>
        <div className='text-center mb-4'>
          <Button onButtonClick={handleButtonClick}>Embaralhar cards</Button>
        </div>

        <div className="flex flex-row items-center justify-center space-x-4 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={radioButtonShowTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Mostrar Titulo
          </RadioButton>
          <RadioButton
            id="radioButtonShowDescription"
            name="showInfo"
            buttonChecked={!radioButtonShowTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Mostrar descricao
          </RadioButton>
        </div>

        <FlashCards>
          {
            allCards.map(({id, title, description, showTitle}) => {
              return (
                <FlashCard
                  key={id}
                  id={id}
                  title={title}
                  description={description}
                  showFlashCardTitle={showTitle}
                  onToggleFlashCard={handleToggleFlashCard}
                />
              );
            })
          }
        </FlashCards>
      </Main>
    </>
  )
}
