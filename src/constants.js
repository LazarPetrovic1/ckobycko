import doberman from './assets/doberman.png'
import shorts from './assets/shorts.png'

export const IS_USER_AUTH = "cko-by-cko/IS_USER_AUTH";

export const getImg = (num) => {
  switch (parseInt(num)) {
    case 1:
      return doberman.toString();
    case 2:
      return shorts.toString();
    default: return null;
  }
}
