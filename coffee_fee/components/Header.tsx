'use client';

import { useEffect, useState } from 'react';

const Header = () => {
  let a = '';
  console.log(a);
  const [abc, setAbc] = useState();
  useEffect(() => {
    console.log(abc);
  }, [abc]);
  return <div>Header</div>;
};

export default Header;
