import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import useGetPosts from '../hooks/useGetPosts';
import {Colors} from '../theme/colors';
import {Post} from '../components';
import {hp, normalize, wp} from '../utils/responsive';

const PostsScreen = () => {
  const {isLoading, posts, error} = useGetPosts();

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator color={Colors.black} size={'large'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>
          Failed to fetch Posts. Please try again after sometime
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post title={item.title} />}
        contentContainerStyle={styles.scrollContent}
      />
    </View>
  );
};

export default PostsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollContent: {
    rowGap: hp(1.5),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
  },
  errorText: {
    fontSize: normalize(24),
    textAlign: 'center',
    lineHeight: hp(4),
  },
});
