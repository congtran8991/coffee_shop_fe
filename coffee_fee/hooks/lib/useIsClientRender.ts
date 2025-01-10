import { useEffect, useState } from 'react';

const useIsClientRender = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  return isClient;
};

export default useIsClientRender;
