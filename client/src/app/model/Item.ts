// export interface Item {
//   itemIs: bigint;
//   name: string;
//   description: string;
// }

export class Item {

  id: number;
  name: string;
  description: string;

  constructor(obj?: any) {
    Object.assign(this, obj);
  }

}
