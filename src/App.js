import { useState } from 'react';
import Card from './Card';
import Button from './Button';

function App() {
  const [isShowingDetails, setIsShowingDetails] = useState(false);

  function toggleDetails() {
    setIsShowingDetails(!isShowingDetails);
  }

  function logSomeStuff(stuff) {
    console.log(stuff);
  }

  return (
    <>
      <h1>Hello to OMR React Basics!</h1>
      <Card currywurst={isShowingDetails} />
      <Button
        text={isShowingDetails ? 'Hide' : 'Show'}
        clickHandler={toggleDetails}
      />
      <Button
        text="Logg me something"
        clickHandler={() => logSomeStuff('OMR React Basics')} //Wenn eine Funktion einen Parameter übegeben bekommt, muss ich sie als Arrow Funktion an meine Komponente übergeben
      />
    </>
  );
}

export default App;
