import { StyleSheet } from 'react-native';
import { useAppTheme } from '@/assets';
import { URBANIST_FONTS } from '@/assets/theme';
import { useStyles } from '@/styles';
import { isIOS } from '@/utils';

export const useAppSelectStyles = ({ disabled, focused, error }: { disabled: boolean; focused: boolean; error: boolean }) => {
  const { colors } = useAppTheme();

  return useStyles(
    StyleSheet.create({
      select: {
        fontSize: 14,
        fontFamily: URBANIST_FONTS.regular,
        marginLeft: isIOS ? -2 : -3,
      },
      selectContainer: {
        borderRadius: 6,
        borderWidth: focused ? 2 : 0.5,
        borderColor: error ? colors.error : focused ? colors.primary : colors.onSurfaceVariant,
        height: 45,
        paddingHorizontal: 10,
        justifyContent: 'center',
      },
      iconContainer: { marginRight: 8 },
      placeholder: {
        fontSize: 14,
        color: disabled ? colors.onSurfaceDisabled : colors.onSurfaceVariant,
        fontFamily: URBANIST_FONTS.regular,
      },
      helperText: {
        paddingVertical: 0,
        fontFamily: URBANIST_FONTS.regular,
        lineHeight: 0,
        marginTop: 4,
      },
    }),
  );
};
