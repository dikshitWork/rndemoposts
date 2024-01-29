import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {hp, normalize, wp} from '../utils/responsive';
import {Colors} from '../theme/colors';

interface PostProps {
  title: string;
}

const Post: FC<PostProps> = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    backgroundColor: Colors.white,
    borderRadius: wp(2),
    elevation: 3,
    shadowColor: Colors.black,
    shadowOffset: {height: 0, width: 0},
    shadowOpacity: 0.15,
    shadowRadius: wp(2),
  },
  title: {
    fontSize: normalize(20),
    fontWeight: '500',
  },
});
