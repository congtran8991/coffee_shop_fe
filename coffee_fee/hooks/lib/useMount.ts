import { EffectCallback, useEffect } from 'react';

const useMount = (effect: EffectCallback) => {
  useEffect(() => {
    effect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export default useMount;
