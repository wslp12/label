/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';
import getBoardList from '../../../api';
import Flex from '../../Flex';
import Grid from '../../Grid';

function Board() {
  const [boardList, setBoardList] = useState<any[]>([]);

  useEffect(() => {
    const reulst = getBoardList();
    reulst
      .then((result: any) => {
        setBoardList(result);
      })
      .catch(() => {
        setBoardList([
          { title: '게시판 리스트를 불러오는 것에 실패 하였습니다.' },
        ]);
      });
  }, []);
  return (
    <div
      style={{
        overflow: 'scroll',
        height: '100%',
        boxShadow: '0px 0px 1px 0px grey',
      }}
    >
      {boardList.map((board, idx) => (
        <div
          style={{
            padding: '1px',
            minHeight: 'auto',
          }}
          key={board.title + board.idx}
        >
          <Button block outline>
            <Flex fd="row">
              <div
                key="idx"
                style={{
                  width: '10%',
                }}
              >
                {idx}
              </div>
              <div
                key="title"
                style={{
                  width: '70%',
                }}
              >
                {board.title}
              </div>
              <div
                key="time"
                style={{
                  width: '10%',
                }}
              >
                {board.createTime}
              </div>
              <div
                key="userName"
                style={{
                  width: '10%',
                }}
              >
                {board.creator}
              </div>
            </Flex>
          </Button>
        </div>
      ))}
    </div>
  );
}

export default Board;
