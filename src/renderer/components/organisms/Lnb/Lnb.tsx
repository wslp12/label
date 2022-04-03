import React from 'react';
import { Link } from 'react-router-dom';
import Flex from '../../Flex';

function Lnb() {
  return (
    <Flex fd="column">
      <Link to="board">자유 게시판</Link>
      <Link to="qna">질문 게시판</Link>
      <Link to="qna">토론 게시판</Link>
    </Flex>
  );
}

export default Lnb;
