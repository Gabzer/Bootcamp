import { useEffect, useState } from 'react';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Button from '../components/Button';
import Error from '../components/Error';
import FlashCard from '../components/FlashCard';
import FlashCardItem from '../components/FlashCardItem';
import FlashCards from '../components/FlashCards';
import FlashCradForm from '../components/FlashCradForm';
import Header from '../components/Header';
import Loading from '../components/Loading';
import Main from '../components/Main';
import RadioButton from '../components/RadioButton';

import { helperShuffleArray } from '../helpers/arrayHelpers';
import {
  apiCreateFlashCard,
  apiDeleteFlashCard,
  apiGetAllFlashCards,
  apiUpdateFlashCard,
} from '../services/apiService';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState([]);
  const [studyCards, setStudyCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [createMode, setCreateMode] = useState(true);
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedFlashCard, setSelectedFlashCard] = useState(null);

  const [radioButtonShowTitle, setRadioButtonShowTitle] = useState(true);

  useEffect(() => {
    async function getAllCards() {
      try {
        const backEndAllCards = await apiGetAllFlashCards();
        setAllCards(backEndAllCards);
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        setError(error.message);
      }
    }
    getAllCards();
  }, []);

  useEffect(() => {
    setStudyCards(allCards.map(card => ({ ...card, showTitle: true })));
  }, [allCards]);

  function handleShuffle() {
    const shuffledCards = helperShuffleArray(studyCards);
    setStudyCards(shuffledCards);
  }
  function handleRadioShowDescriptionClick() {
    const updateCards = [...studyCards].map(card => ({
      ...card,
      showTitle: false,
    }));
    setStudyCards(updateCards);
    setRadioButtonShowTitle(false);
  }
  function handleRadioShowTitleClick() {
    const updateCards = [...studyCards].map(card => ({
      ...card,
      showTitle: true,
    }));
    setStudyCards(updateCards);
    setRadioButtonShowTitle(true);
  }
  function handleToggleFlashCard(cardId) {
    const updateCards = [...studyCards];
    const cardIndex = updateCards.findIndex(card => card.id === cardId);
    updateCards[cardIndex].showTitle = !updateCards[cardIndex].showTitle;

    setStudyCards(updateCards);
  }
  async function handleDeleteFlashCard(cardId) {
    try {
      // Back End
      await apiDeleteFlashCard(cardId);
      // Front End
      setAllCards(allCards.filter(card => card.id !== cardId));
      setError('');
      toast.success('Card excluido com sucesso!');
    } catch (error) {
      setError(error.message);
    }
  }
  function handleEditFlashCard(card) {
    setCreateMode(false);
    setSelectedTab(1);
    setSelectedFlashCard(card);
  }
  function handleNewFlashCard() {
    setCreateMode(true);
    setSelectedFlashCard(null);
  }
  function handleTabSelect(tabIndex) {
    setSelectedTab(tabIndex);
  }
  async function handlePersist(title, description) {
    if (createMode) {
      try {
        // Back End
        const newFlashCard = await apiCreateFlashCard(title, description);
        // Front End
        setAllCards([...allCards, newFlashCard]);
        setError('');
        toast.success(`Card "${title}" incluido com sucesso!`);
      } catch (error) {
        setError(error.message);
      }
    } else {
      try {
        // Back End
        await apiUpdateFlashCard(selectedFlashCard.id, title, description);
        // Front End
        setAllCards(
          allCards.map(card => {
            if (card.id === selectedFlashCard.id) {
              return { ...card, title, description };
            }
            return card;
          })
        );
        setSelectedFlashCard(null);
        setCreateMode(true);
        setError('');
        toast.success(`Card "${title}" alterado com sucesso!`);
      } catch (error) {
        setError(error.message);
      }
    }
  }

  let mainJsx = (
    <div className="flex justify-center my-4">
      <Loading />
    </div>
  );

  if (error) {
    mainJsx = <Error>{error}</Error>;
  }

  if (!loading && !error) {
    mainJsx = (
      <>
        <Tabs selectedIndex={selectedTab} onSelect={handleTabSelect}>
          <TabList>
            <Tab>Listagem</Tab>
            <Tab>Cadastro</Tab>
            <Tab>Estudo</Tab>
          </TabList>

          <TabPanel>
            {allCards.map(flashCard => {
              return (
                <FlashCardItem
                  key={flashCard.id}
                  onDelete={handleDeleteFlashCard}
                  onEdit={handleEditFlashCard}
                >
                  {flashCard}
                </FlashCardItem>
              );
            })}
          </TabPanel>

          <TabPanel>
            <div className="my-4">
              <Button onButtonClick={handleNewFlashCard}>
                Novo flash card
              </Button>
            </div>
            <FlashCradForm createMode={createMode} onPersist={handlePersist}>
              {selectedFlashCard}
            </FlashCradForm>
          </TabPanel>

          <TabPanel>
            <div className="text-center mb-4">
              <Button onButtonClick={handleShuffle}>Embaralhar cards</Button>
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
              {studyCards.map(({ id, title, description, showTitle }) => {
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
              })}
            </FlashCards>
          </TabPanel>
        </Tabs>
      </>
    );
  }

  return (
    <>
      <ToastContainer />
      <Header>react-flash-cards-v3</Header>

      <Main>{mainJsx}</Main>
    </>
  );
}
