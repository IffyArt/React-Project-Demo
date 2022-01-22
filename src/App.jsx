import { useEffect, useState } from 'react';
import AxiosDemo from './AxiosDemo';
import SWRDemo from './SWRDemo';

const App = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState(null);

  // useEffect 介紹
  useEffect(() => {
    console.log('我在建立與參考值有異動時觸發');
    return () => {
      console.log('我在這個狀態異動的最後會執行');
      // return 的概念比較特殊，他會在 useEffect 正常執行完之後，於這個狀態異動(或是組建被刪除)時觸發
    };
    // 下方的 [] 中可以放參考值，比如說若像這樣 [count] 放，則每次 count 異動時就會觸發 useEffect 再次執行
  }, []);

  useEffect(() => {
    setData(null);
    setTimeout(() => {
      // fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then((response) => response.json())
        .then((data) => setData(data));
    }, 2000);
  }, [count]);

  if (!data) return <>loading</>;
  return (
    <div>
      <a href='https://iffyart.github.io/JavaScript-Course/'>教材連結</a>
      {data.title}
      <button onClick={() => setCount(count + 1)}>click Me!{count}</button>
      {/* <AxiosDemo /> */}
      <SWRDemo />
    </div>
  );
};

export default App;
