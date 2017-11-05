import React from 'react';
import { View, Animated, Easing } from 'react-native'
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { Button, Icon, Title, Text, Body } from 'native-base'

import Home from './src/pages/Home'
import Projects from './src/pages/Projects';
import Norms from './src/pages/Norms';

const noTransitionConfig = () => ({
  transitionSpec: {
    duration: 0,
    timing: Animated.timing,
    easing: Easing.step0
  }
})

const DrawerStack = DrawerNavigator({
  Home: { screen: Home },
  Projetos: { screen: Projects },
  Normas: { screen: Norms },
}, {
  gesturesEnabled: false
})

const DrawerNavigation = StackNavigator({
  DrawerStack: { screen: DrawerStack }
}, {
  headerMode: 'float',
  navigationOptions: ({navigation}) => ({
    headerStyle: {backgroundColor: '#00C14A'},
    headerTitle: 'Dynamics',
    headerTitleStyle: {color: 'white'},
    gesturesEnabled: false,
    headerLeft: <Button transparent onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate('DrawerOpen')
      } else {
        navigation.navigate('DrawerClose')
      }
    }}><Icon style={{color: 'white'}} name='md-list' /></Button>
  })
})

const PrimaryNav = StackNavigator({
  drawerStack: { screen: DrawerNavigation }
}, {
  headerMode: 'none',
  title: 'Main',
  initialRouteName: 'drawerStack',
  transitionConfig: noTransitionConfig
})

export default PrimaryNav
