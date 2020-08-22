import React, { useState, useCallback } from 'react';

import { Container, InputContent } from './styles';
import LabelWord from '../../components/LabelWord';

function DataAnotation() {
  const [text, setText] = useState('');
  const [words, setWords] = useState([]);

  const handleProcessWords = useCallback((currentText) => {
    const currentWords = currentText.replace('\n',' ').split(' ');
    setText(currentText);
    setWords(currentWords);

  }, []);

  

  return (
    <Container>
      <InputContent>
        <h2>Input data (only text):</h2>
        <textarea value={text} onChange={event => handleProcessWords(event.target.value)} />
        {/* <button onClick={handleProcessWords}>Processar</button> */}
        
        <hr />

        {words.map(word => <LabelWord word={word}/>)}
      </InputContent>
    </Container>
  );
}

export default DataAnotation;