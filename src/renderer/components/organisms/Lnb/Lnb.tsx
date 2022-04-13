import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Flex from '../../Flex';

function Lnb() {
  return (
    <Flex fd="column" style={{ padding: '7px' }}>
      <Link
        to="board"
        style={{
          padding: 1,
        }}
      >
        <Button size="sm" color="primary" block>
          알림 + 1 질문게시판
        </Button>
      </Link>
      <Link
        to="qna"
        style={{
          padding: 1,
        }}
      >
        <Button size="sm" color="primary" block>
          내글에 덧글이 달렸습니다.
        </Button>
      </Link>
      <Link
        to="discuss"
        style={{
          padding: 1,
        }}
      >
        <Button size="sm" color="primary" block>
          1:1 질문이 도착 했습니다.
        </Button>
      </Link>
    </Flex>
  );
}

export default Lnb;
