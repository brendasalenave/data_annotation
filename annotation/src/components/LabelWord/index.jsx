import React from 'react';

import { Container } from './styles';

function LabelWord({ word }) {
  return (
    <Container>
      <button>
        {word}
      </button>
    </Container>
  );
}

export default LabelWord;