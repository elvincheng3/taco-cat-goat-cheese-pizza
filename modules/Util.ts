import { CardType } from "./CardType";
 
class Util {
  // shuffles an array
  static shuffle<T>(items: T[]): void {
    for (let i = items.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = items[i];
      items[i] = items[j];
      items[j] = items[i];
    }
  }

  // performs ormap on an array
  static ormap<T>(items: T[], pred: (arg: T) => boolean): boolean {
    return !items.every((item) =>{
      return !pred(item);
    })
  }
}

export { Util };