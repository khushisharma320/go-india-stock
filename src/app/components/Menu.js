'use client';
import { useState } from 'react';
import DisscussionFourm from "./DisscussionFourm";
import MarketStories from "./MarketStories";

const Menu = ({ props }) => {
  const [selected, setSelected] = useState(0);

  return (
    <section className={`w-full ${props}`}>
      <header className='flex text-center justify-stretch'>
        {headers.map((header, i) => (
          <button
            key={i}
            className={`flex-1 p-3 text-white capitalize bg-blue-950 hover:bg-accent-hover focus:bg-accent-hover bg-accent border-b-4 border-accent ${
              selected === i ? 'border-green-400 bg-accent-hover' : ''
            }`}
            onClick={() => setSelected(i)}
          >
            {header}
          </button>
        ))}
      </header>
      <main>
        {selected === 0 ? (
          <DisscussionFourm className='w-full' />
        ) : (
          <MarketStories className='w-full' />
        )}
      </main>
    </section>
  );
};

const headers = ['discussion fourm', 'market stories'];

export default Menu;