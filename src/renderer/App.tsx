/* eslint-disable function-paren-newline */
/* eslint-disable no-confusing-arrow */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import BaseImage from './components/Image';
import Screenplay from '../../public/assets/text/Screenplay';

function App(props: { screenplay: Screenplay }) {
  const { screenplay } = props;

  // NOTE 현재 페이지에 뿌려질 문자를 담을 배열
  const [pageCharArr, setPageCharArr] = useState<string[]>([]);

  const [pageNo, setPageNo] = useState(0);

  // // NOTE 페이지에 스크롤이 생길 경우 스크롤을 이동할 목적의 ref
  const textItemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // NOTE 대본의 전체 문자 배열
    const textArr = screenplay.getText(pageNo).split('');

    setPageCharArr([]);

    // NOTE 현재 페이지 화면 scroll 길이
    const heigth = textItemRef.current?.scrollHeight;

    /**
     * 5ms 마다 문자(textArr[idx])를 상태(state)의 배열(arr)에 추가한다.
     * 추가로 추가된 문자 때문에 페이지 화면에 스크롤이 생길 경우 스크롤을 가장 아래로 옮긴다
     */
    let idx = 0;
    const interval = setInterval(() => {
      const currentHeight = textItemRef.current?.scrollHeight;
      if (heigth && currentHeight && heigth < currentHeight) {
        textItemRef.current?.scroll({ left: 0, top: 9999999 });
      }
      setPageCharArr((prevPageCharArr) => prevPageCharArr.concat(textArr[idx]));
      idx += 1;
      if (textArr.length <= idx) {
        clearInterval(interval);
      }
    }, 40);

    return () => globalThis.clearInterval(interval);
  }, [pageNo]);

  return (
    <BaseImage url="assets/img/book.jpg">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}
      >
        <div
          style={{
            width: '75%',
            height: '90%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: 'white',
            padding: 30,
            boxSizing: 'border-box',
            fontSize: '25px',
            wordBreak: 'break-all',
            overflow: 'scroll',
            borderRadius: '10px',
            boxShadow:
              'rgba(255, 255, 255, 0.32) 0px 3px 6px, rgba(255, 255, 255, 0.32) 0px 3px 6px',
          }}
          ref={textItemRef}
          onClick={() => {
            const nextPageNo = pageNo + 1;
            if (nextPageNo < screenplay.getMaxPageNo()) {
              setPageNo(nextPageNo);
            }
          }}
        >
          {pageCharArr.map((str, idx) =>
            /\n/.test(str) ? <br key={str + idx} /> : str,
          )}
        </div>
      </div>
    </BaseImage>
  );
}

export default App;
