import React from 'react';
import Grid from '../../Grid';
import Cell from '../../Cell/Cell';
import Header from '../../organisms/Header';

function Main() {
  return (
    <Grid gc="1fr 1ft 1ft" gr="15% 1fr 1fr">
      <Cell c="1/4">
        <Header />
      </Cell>
      <Cell r="2/4">lnb</Cell>
      <Cell c="2/4" r="2/4">
        maincontent
      </Cell>
    </Grid>
  );
}

export default Main;
