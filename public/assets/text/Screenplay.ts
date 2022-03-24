export interface ScreenplayItem {
  id: string;
  title: string;
  text: string;
}

class Screenplay {
  private item;

  constructor(item: ScreenplayItem[]) {
    this.item = item;
  }

  getText(pageNo: number) {
    return this.item[pageNo].text;
  }

  getMaxPageNo() {
    return this.item.length;
  }
}

export default Screenplay;
