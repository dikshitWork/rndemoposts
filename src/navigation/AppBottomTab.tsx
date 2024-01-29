import React, {FC} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CounterScreen} from '../screens';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {wp} from '../utils/responsive';
import ProfileStack from './ProfileStack';

const BottomTab = createBottomTabNavigator();

interface IconProps {
  focused: boolean;
  color: string;
  size: number;
}

const HomeIcon: FC<IconProps> = ({color}) => (
  <AntDesign name="home" size={wp(5)} color={color} />
);

const ProfileIcon: FC<IconProps> = ({color}) => (
  <AntDesign name="profile" size={wp(5)} color={color} />
);

const AppBottomTab = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={CounterScreen}
        options={{
          tabBarIcon: HomeIcon,
          title: 'Home Screen',
        }}
      />
      <BottomTab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ProfileIcon,
          title: 'Profile Screen',
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
};

export default AppBottomTab;
