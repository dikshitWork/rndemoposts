import React, {FC} from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {hp, normalize, wp} from '../utils/responsive';
import {Colors} from '../theme/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  containerStyle?: ViewStyle;
}

const Button: FC<ButtonProps> = props => {
  const {onPress, title, containerStyle} = props;

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    borderRadius: wp(2.5),
    paddingVertical: hp(1.5),
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: normalize(22),
    color: Colors.white,
  },
});
