import { useState } from 'react';
import AddResource from './AddResource';
import DrawerMenu from './DrawerMenu';

const FavouritesMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className='flex flex-wrap justify-center items-center gap-2'>
        <DrawerMenu />
        <AddResource />
        <AddResource />
        <AddResource />
      </div>
    </>
  );
};

export default FavouritesMenu;
