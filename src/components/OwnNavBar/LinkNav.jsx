import React from 'react';

const LinkNav = ({ link }) => { // dynamic route thats way use {...link}
  return (
    <div className='hover:bg-amber-500  rounded-md cursor-pointer p-2 '>
      <li><a href={link.path}></a>{link.name}</li>
    </div>
  );
};

export default LinkNav;
