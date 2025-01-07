import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/assets';
import { URBANIST_FONTS } from '@/assets/theme';
import { useStyles } from '@/styles';

export const useAppDatePickerInputStyles = ({ isFlat }: { isFlat: boolean }) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      inputStyle: {
        height: 45,
        backgroundColor: colors.background,
      },
      contentStyle: {
        ...(isFlat && { paddingLeft: 0, paddingRight: 0 }),
        ...(!isFlat && {
          paddingLeft: 10,
          paddingTop: 10,
          paddingBottom: 10,
          paddingHorizontal: 10,
        }),
        fontSize: 14,
        fontFamily: URBANIST_FONTS.regular,
      },
      outlineStyle: { borderRadius: 6, borderWidth: 1 },
      iconStyle: { padding: 0, margin: 0, right: -10 },
      helperText: {
        paddingVertical: 0,
        fontSize: 10,
        fontFamily: URBANIST_FONTS.regular,
        lineHeight: 0,
        marginTop: 4,
      },
      textContainer: { flexDirection: 'row', alignItems: 'center', left: -3 },
    }),
  );
};
