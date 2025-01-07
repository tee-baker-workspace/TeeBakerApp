import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAppTheme } from '@/assets';
import { useStyles } from '@/styles';

export const useScreenWrapperStyles = ({ color, horizontalSpacing }: { color: ReactNativePaper.ThemeColorsKeys; horizontalSpacing: number }) => {
  const { colors } = useAppTheme();
  const { bottom, left, right, top } = useSafeAreaInsets();

  const backgroundColor = colors[color] as string;

  return useStyles(
    StyleSheet.create({
      view: { flex: 1, backgroundColor },
      horizontalSpacing: { paddingHorizontal: horizontalSpacing },
      scroll: { backgroundColor },
      left: { paddingLeft: left },
      right: { paddingRight: right },
      top: { paddingTop: top },
      bottom: { paddingBottom: bottom },
    }),
  );
};
