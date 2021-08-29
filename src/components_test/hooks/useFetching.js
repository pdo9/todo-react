import React from 'react';

export const useFetching = (callback) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (ex) {
      console.log(ex);
      setError(ex.message);
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
