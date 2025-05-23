import { useEffect, useState } from 'react';
import CardComponent from './CardComponent';

export default function UseEffect() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setUsers(json)); // 👈 Set data to state
  }, []);

   return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {users.map((x) => (
        <CardComponent
          key={x.id}
          id={x.id}
          title={x.title}
          price={x.price} // just dummy price
          src="https://images.samsung.com/is/image/samsung/p6pim/pk/2501/gallery/pk-galaxy-s25-s938-sm-s938bzsppkd-thumb-544708528?$UX_EXT2_PNG$"
          category="Samsung"
        />
      ))}
    </div>
  );
}
