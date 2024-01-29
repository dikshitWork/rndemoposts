import React, {FC, PropsWithChildren} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {wp} from '../utils/responsive';
import {Colors} from '../theme/colors';

interface IconButtonProps extends PropsWithChildren, TouchableOpacityProps {
  onPress: () => void;
}

const IconButton: FC<IconButtonProps> = props => {
  const {onPress, children, ...touchableProps} = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      {...touchableProps}
      style={[styles.container, touchableProps.style]}>
      {children}
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    height: wp(10),
    width: wp(10),
    borderRadius: wp(6),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary,
  },
});
