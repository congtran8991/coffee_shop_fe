import { useEffect, useState } from 'react';

const useHydratedData = <T>(value: T) => {
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setData(value);
  }, [value]);

  return data;
};

export default useHydratedData;
