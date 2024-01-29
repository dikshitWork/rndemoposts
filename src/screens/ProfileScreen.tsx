import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {hp, normalize, wp} from '../utils/responsive';
import {Button} from '../components';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const navigation = useNavigation();

  const handleOnPressGoToPosts = () => {
    navigation.navigate('Posts');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to React Native Demo</Text>
      <Button
        onPress={handleOnPressGoToPosts}
        title="Go to Posts"
        containerStyle={styles.postsButton}
      />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: normalize(26),
    fontWeight: '500',
    textAlign: 'center',
    marginVertical: hp(4),
  },
  postsButton: {
    marginHorizontal: wp(4),
  },
});
