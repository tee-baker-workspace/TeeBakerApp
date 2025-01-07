import { StyleSheet } from 'react-native';
import { useStyles } from '@/styles';

export const useLandingStyles = () => {
  return useStyles(
    StyleSheet.create({
      content: {
        flex: 1,
        paddingTop: 50,
        alignItems: 'center',
      },
      loginOptionContainer: {
        rowGap: 20,
        width: '100%',
        alignItems: 'center',
      },
    }),
  );
};
