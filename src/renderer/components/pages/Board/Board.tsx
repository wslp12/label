import React, { useEffect, useState } from 'react';
import getBoardList from '../../../api';

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
    <div>
      {boardList.map((board) => (
        <div key={board.title}>{board.title}</div>
      ))}
    </div>
  );
}

export default Board;
