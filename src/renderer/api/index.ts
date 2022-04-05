const enum CONTENT_TYPE {
  JSON = 'application/json',
  TEXT = 'application/text',
}
enum REJECT_TYPE {
  DOES_NOT_EXIST_RESPONSE_HEADER_COTENT_TYPE = '리스폰스 헤더에 content-type 이 존재하지 않습니다',
  RESPONSE_CONTENT_TYPE_NOT_MACHED = '리스폰스 값이 요구하는 값과 일치 하지 않습니다.',
}

function api(
  url: string,
  responseType: CONTENT_TYPE,
  body?: FormData,
  method: 'get' | 'post' = 'get',
) {
  return new Promise((resolve, reject) => {
    const headers = new Headers();
    fetch(url, { headers, body, method }).then((response) => {
      const resCt = response.headers.get('Content-type');
      if (resCt !== null) {
        const regexp = new RegExp(responseType);
        if (resCt.match(regexp) && response.status === 200) {
          response.json().then((result) => {
            resolve(result);
          });
        } else {
          reject(REJECT_TYPE.RESPONSE_CONTENT_TYPE_NOT_MACHED);
          throw new Error(
            `${url}\n${REJECT_TYPE.RESPONSE_CONTENT_TYPE_NOT_MACHED}\n요구하는 값 : ${responseType}\n리스폰스 값 : ${resCt}`,
          );
        }
      } else {
        reject(REJECT_TYPE.DOES_NOT_EXIST_RESPONSE_HEADER_COTENT_TYPE);
        throw new Error(
          `${url}\n${REJECT_TYPE.DOES_NOT_EXIST_RESPONSE_HEADER_COTENT_TYPE}\n리스폰스 헤더 : ${response.headers}`,
        );
      }
    });
  });
}

function getBoardList() {
  const url = `${process.env.loa.host}/board-list.json`;
  const result = api(url, CONTENT_TYPE.JSON);
  return result;
}

// export { getBoardList };
export default getBoardList;
