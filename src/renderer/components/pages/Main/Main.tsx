import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Button, ButtonGroup } from 'reactstrap';
import Grid from '../../Grid';
import Cell from '../../Cell/Cell';
import Header from '../../organisms/Header';
import Lnb from '../../organisms/Lnb';

function Main() {
  return (
    <Grid gc="10% 1fr 1fr" gr="7% 1fr 1fr">
      <Cell c="2/4">
        <Header />
      </Cell>
      <Cell r="1/5">
        <Lnb />
      </Cell>
      <Cell
        c="2/4"
        r="2/4"
        style={{
          padding: '10px',
        }}
      >
        <Outlet />
      </Cell>
      <Cell c="2/4" r="4/5">
        <ButtonGroup
          style={{
            width: '100%',
            padding: '5px',
          }}
        >
          <Button
            size="sm"
            color="primary"
            style={{ width: '50%', padding: '0px', border: 0 }}
          >
            검색
          </Button>
          <Button
            size="sm"
            color="success"
            style={{ width: '50%', padding: '0px', border: 0 }}
          >
            <NavLink
              to="/write/board"
              style={{
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                padding: '5px',
              }}
            >
              글쓰기
            </NavLink>
          </Button>
        </ButtonGroup>
      </Cell>
    </Grid>
  );
}

export default Main;
