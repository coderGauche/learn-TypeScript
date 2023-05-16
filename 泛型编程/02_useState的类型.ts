/*
 * @Author: Gauche楽
 * @Date: 2023-05-11 03:15:31
 * @LastEditors: Gauche楽
 * @LastEditTime: 2023-05-11 03:40:54
 * @FilePath: /泛型编程/02_useState的类型.ts
 */
function useState<T>(init): [T, (newState: T) => void] {
  let state: T = init;
  function setState(newState: T) {
    state = newState;
  }
  return [state, setState];
}

const [count, setCount] = useState<number>(10);
const [message, setMessage] = useState<string>("‘xxx");
const [banners, setBanners] = useState<any[]>([]);
