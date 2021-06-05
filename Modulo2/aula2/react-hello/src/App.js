import { useEffect, useState } from 'react';
import DateInput from './components/DateInput';
import Header from './components/Header';
import CheckboxIput from './components/CheckboxInput';
import Main from './components/Main';
import TextInput from './components/TextInput';
import Timer from './components/Timer';
import { getAgeFrom } from './helpers/dateHelpers';
import { getNewId } from './services/idService';
import OnlineOffline from './components/OnlineOffline';

export default function App() {
  const [name, setName] = useState('Gabriel');
  const [birthDate, setBirthDate] = useState('1987-08-08');
  const [showTimer, setShowTimer] = useState(false);
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    document.title = name;
  }, [name]);
  useEffect(() => {
    function toggleOnline() {
      setIsOnline(true);
    }
    function toggleOffline() {
      setIsOnline(false);
    }
    window.addEventListener('online', toggleOnline);
    window.addEventListener('offline', toggleOffline);
    return () => {
      window.removeEventListener('online', toggleOnline);
      window.removeEventListener('offline', toggleOffline);
    }
  }, []);
  
  function handleNameChange(newName) {
    setName(newName);
  }
  function handleBirthDateChange(newBirthDate) {
    setBirthDate(newBirthDate);
  }
  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }
  function toggleShowTimer() {
    setShowTimer(currentShowTimer => !currentShowTimer);
  }
  
  return (
    <>
      <Header>React-Hello</Header>
      <Main>
        <OnlineOffline isOnline={isOnline} />
        {
          showTimer && (
            <div className="text-right mt-1">
              <Timer />
            </div>
          )
        }
        <CheckboxIput labelDescription="Mostrar cronometro" onCheckboxChange={toggleShowTimer} />
        <TextInput
          autoFocus id={getNewId()} labelDescription="Digite o seu nome: " inputValue={name} onInputChange={handleNameChange} />
        <DateInput id={getNewId()} labelDescription="Digite a sua data de nascimento: " inputValue={birthDate} onInputChange={handleBirthDateChange} />
        <p>O seu nome eh {name}, com {name.length} caracteres, e vc possui {getAgeFrom(birthDate)} anos.</p>
      </Main>
    </>
  );
}
