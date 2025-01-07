import React, { useState } from 'react';
import { Case, Switch } from 'react-if';
import { ImageSourcePropType, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { isEmptyOrNil } from 'shared-utils';
import { useAppTheme } from '@/assets';
import { EditIcon } from '@/icons';
import { StandardPhotoType } from '@/types';
import { showToast, singlePictureSelect } from '@/utils';
import { useAvatarStyles } from './app-avatar.styles';
import { IAppAvatarProps } from './app-avatar.type';

const AppAvatar = (props: IAppAvatarProps) => {
  const { type, image, size = 100, icon, text, style, onImageSelect } = props;
  const [selectedImage, setSelectedImage] = useState<StandardPhotoType>();

  const { label = '', labelColor, labelStyle } = text || {};
  const { source, picker, placeholder, pickerXOffset, pickerYOffset } = image || {};
  const { source: iconSource = '' } = icon || {};

  const { colors } = useAppTheme();
  const styles = useAvatarStyles(size, pickerXOffset, pickerYOffset);

  const isTextPlaceholder = typeof placeholder === 'string';
  const imageType = source || (placeholder && !isTextPlaceholder) ? 'image' : 'text';
  const avatarType = type === 'image' ? imageType : type;

  const onSelectImage = () => {
    singlePictureSelect(
      pickerResponse => {
        const asset = pickerResponse.assets?.[0];
        if (asset && onImageSelect) {
          const assetImg = {
            uri: asset.uri || '',
            type: asset.type || '',
            name: 'photo',
          };
          setSelectedImage(assetImg);
          onImageSelect(assetImg);
        }
      },
      error => showToast(error, 'error'),
    );
  };

  return (
    <View style={styles.avatar}>
      {picker && (
        <TouchableOpacity style={styles.pickerContainer} activeOpacity={0.6} onPress={onSelectImage}>
          <EditIcon color={colors.onPrimary} />
        </TouchableOpacity>
      )}
      <Switch>
        <Case condition={avatarType === 'text'}>
          <Avatar.Text
            size={size}
            label={type === 'image' && isTextPlaceholder ? placeholder : label}
            color={labelColor}
            labelStyle={labelStyle}
            style={[styles.avatar, style]}
          />
        </Case>

        <Case condition={avatarType === 'image'}>
          <Avatar.Image
            size={size}
            style={[styles.avatar, style]}
            source={
              !isEmptyOrNil(selectedImage)
                ? (selectedImage as StandardPhotoType)
                : (source as ImageSourcePropType)
                ? (source as ImageSourcePropType)
                : (placeholder as ImageSourcePropType)
            }
          />
        </Case>

        <Case condition={avatarType === 'icon'}>
          <Avatar.Icon size={size} icon={iconSource} style={[styles.avatar, style]} />
        </Case>
      </Switch>
    </View>
  );
};

export default AppAvatar;
