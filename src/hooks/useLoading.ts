import { useState, useEffect } from 'react';

interface UseLoadingOptions {
  initialDelay?: number;
  minDuration?: number;
}

export const useLoading = ({ 
  initialDelay = 0, 
  minDuration = 1000 
}: UseLoadingOptions = {}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [startTime, setStartTime] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartTime(Date.now());
      setIsLoading(false);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const setLoadingWithMinDuration = (loading: boolean) => {
    if (loading) {
      setIsLoading(true);
      setStartTime(Date.now());
    } else {
      const now = Date.now();
      const elapsed = startTime ? now - startTime : minDuration;
      const remaining = Math.max(0, minDuration - elapsed);

      setTimeout(() => {
        setIsLoading(false);
      }, remaining);
    }
  };

  return {
    isLoading,
    setLoading: setLoadingWithMinDuration,
    setLoadingImmediate: setIsLoading,
  };
};

export const usePageLoading = () => {
  return useLoading({ initialDelay: 0, minDuration: 2500 });
};

export const useApiLoading = () => {
  return useLoading({ initialDelay: 0, minDuration: 800 });
};
