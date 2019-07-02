'use strict';

import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import ViewPropTypes from './config/ViewPropTypes';
import Layout from './Layout';

export default class TabBar extends React.Component {
  static propTypes = {
    ...Animated.View.propTypes,
    shadowStyle: ViewPropTypes.style,
  };

  render() {
    const bannerHeight = this.props.bannerHeight || 0;
    return (
      <View style={[styles.container, { height: Layout.tabBarHeight + bannerHeight }]}>
        {this.props.banner}
        <Animated.View {...this.props} style={[styles.barContainer, this.props.style]}>
          {this.props.children}
          <View style={[styles.shadow, this.props.shadowStyle]} />
        </Animated.View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  barContainer: {
    backgroundColor: '#f8f8f8',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: Layout.tabBarHeight,
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: Layout.pixel,
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS === 'android' ? 0 : -Layout.pixel,
  },
});
