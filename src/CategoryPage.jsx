import React from 'react';
import CardComponent from './CardComponent';

export default function CategoryPage() {
  
  let Smartwatch = [
    {
      id: 1,
      title: 'Apple Watch Series 9',
      price: 399,
      description: 'Latest Apple smartwatch with health features.',
      url: 'https://xcessorieshub.com/wp-content/uploads/2024/06/Apple-Watch-Series-9-45mm-1.webp',
    },
    {
      id: 2,
      title: 'Samsung Galaxy Watch 6',
      price: 349,
      description: 'Stylish smartwatch with long battery life.',
      url: 'https://media.wisemarket.com.pk/variant/inventory_89131.webp',
    },
    {
      id: 3,
      title: 'Rolex Submariner',
      price: 8999,
      description: 'Luxury diving watch with timeless design.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmYRjrohRqCEz5fxZwAlqUpDGkYrwhtCVjlg&s',
    },
    {
      id: 4,
      title: 'Seiko Presage',
      price: 499,
      description: 'Classic analog watch from Seiko.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmPqW1xX8DjARHXKwpvCYHcJVtz7wdY5IhhQ&s',
    },
    {
      id: 5,
      title: 'Casio F91W',
      price: 20,
      description: 'Affordable and iconic digital watch.',
      url: 'https://7star.pk/wp-content/uploads/2024/09/EFR-S108D-2.jpg',
    },
    {
      id: 6,
      title: 'Fossil Gen 6 Digital',
      price: 299,
      description: 'Modern digital watch with fitness tracking.',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu9Wc1CwTFH_WgEnoN_VTwMdL3-xeYD5rQEA&s',
    },
  ];

  return (
    <div>
    {
     Smartwatch.map((x)=>{
        return <CardComponent key={x.id} title={x.title} price={x.price} description={x.description} src={x.url}/>
     })
    
    }</div>
  );
};
