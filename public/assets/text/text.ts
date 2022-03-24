import { ScreenplayItem } from './Screenplay';

/* eslint-disable quotes */
function guid() {
  function s4() {
    return ((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;
}

const text: ScreenplayItem[] = [
  {
    id: guid(),
    title: '고블린 페이지1',
    text: `침을 질질 흘리며 가로로 얋게 띄어진 얄팍한 초록 눈... 고블린!
            \n?: 지랄 하지마 병신새끼야 누가봐도 고블린 처럼 생겼으니까`,
  },
  {
    id: guid(),
    title: '고블린 페이지2',
    text: `거 말을 왜 그렇게 하냐 ? 기분 좀 좆 같네`,
  },
];

export default text;
