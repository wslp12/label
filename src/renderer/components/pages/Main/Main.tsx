import React from 'react';
import Grid from '../../Grid';
import Cell from '../../Cell/Cell';
import Header from '../../organisms/Header';
import Lnb from '../../organisms/Lnb';

function Main() {
  return (
    <Grid gc="10% 1fr 1fr" gr="13% 1fr 1fr 10%">
      <Cell c="2/4">
        <Header />
      </Cell>
      <Cell r="1/5">
        <Lnb />
      </Cell>
      <Cell c="2/4" r="2/4">
        maincontent
      </Cell>
      <Cell c="2/4">Foot</Cell>
    </Grid>
  );
}

export default Main;
