import { useMemo } from 'react';
import { GlobalStylesType, useGlobalStyles } from './index';

export const useStyles = <T>(styles: T = {} as T): GlobalStylesType & T => {
  const globalStyles = useGlobalStyles();

  return useMemo(() => ({ ...globalStyles, ...styles }), [globalStyles, styles]);
};
