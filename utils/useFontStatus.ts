import { useState, useEffect } from 'react';

/**
 * custom hook to detect when custom fonts are fully loaded
 */
export const useFontStatus = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/fonts
    typeof document !== 'undefined' &&
      document?.fonts.ready.then(() => setIsReady(true));
  }, []);

  return isReady;
};
