import React, {FC, useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import IconButton from './IconButton';
import {hp, normalize, wp} from '../utils/responsive';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Colors} from '../theme/colors';
import {useAppDispatch, useAppSelector} from '../hooks/reduxHooks';
import {counterActions} from '../redux';

const Counter: FC = () => {
  const count = useAppSelector(state => state.counter.count);
  const dispatch = useAppDispatch();
  const {decrementCount, incrementCount} = counterActions;

  const handleOnPressIncrement = () => {
    dispatch(incrementCount());
  };

  const handleOnPressDecrement = () => {
    /* This If check can be put into reducer code itself,
    but to limit un-necessary redux calls it's kept here */
    if (count > 0) {
      dispatch(decrementCount());
    }
  };

  useEffect(() => {
    console.log('Counter Component is Mounted');
    return () => {
      console.log('Counter Component is Unmounted');
    };
  }, []);

  useEffect(() => {
    console.log('Counter Component is Updated', count);
  }, [count]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter</Text>
      <View style={styles.counterActionsContainer}>
        <IconButton
          testID="counter-decrement-button"
          onPress={handleOnPressDecrement}>
          <AntDesign name="minus" size={wp(5)} color={Colors.white} />
        </IconButton>
        <Text testID="counter-value" style={styles.counterText}>
          {count}
        </Text>
        <IconButton
          testID="counter-increment-button"
          onPress={handleOnPressIncrement}>
          <AntDesign name="plus" size={wp(5)} color={Colors.white} />
        </IconButton>
      </View>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: hp(2),
    alignItems: 'center',
    rowGap: hp(2),
  },
  title: {
    fontSize: normalize(24),
    fontWeight: '500',
  },
  counterActionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: wp(6),
  },
  counterText: {
    fontSize: normalize(36),
  },
});
