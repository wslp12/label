import React, { useState } from 'react';

import { useNavigate, matchPath, useLocation, NavLink } from 'react-router-dom';
// import { matchPath } from 'react-router';

import {
  Button,
  ButtonGroup,
  Nav,
  NavItem,
  NavLink as StrapNavLink,
} from 'reactstrap';

function Header() {
  // const [activeName, setActvieName] = useState('board');
  const nav = useNavigate();
  const location = useLocation();

  return (
    <div
      style={{
        height: '100%',
        paddingTop: '5px',
        cursor: 'pointer',
      }}
    >
      {/* <Nav
        tabs
        // color="light"
        expand="md"
        light
        style={{
          height: '100%',
          // backgroundColor: 'white',
        }}
      > */}
      {/* <NavbarToggler /> */}
      {/* <Collapse navbar> */}
      <Nav className="me-auto" tabs>
        <NavItem>
          <NavLink
            to="/board"
            className={(data) => `nav-link ${data.isActive ? 'active' : ''}`}
          >
            자유 게시판
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/qna"
            className={(data) => `nav-link ${data.isActive ? 'active' : ''}`}
          >
            질문 게시판
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/discuss"
            className={(data) => `nav-link ${data.isActive ? 'active' : ''}`}
          >
            토론 게시판
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            to="/share"
            className={(data) => `nav-link ${data.isActive ? 'active' : ''}`}
          >
            공유 게시판
          </NavLink>
        </NavItem>
        <NavItem
          style={{
            position: 'absolute',
            right: '10px',
          }}
        >
          <ButtonGroup>
            <Button size="sm" color="primary">
              로그인
            </Button>
            <Button size="sm" color="success">
              회원가입
            </Button>
          </ButtonGroup>
        </NavItem>
      </Nav>

      {/* </Collapse>
      </Nav> */}
    </div>
  );
}

export default Header;
