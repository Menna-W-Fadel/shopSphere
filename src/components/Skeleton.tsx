import React, { ReactNode, useEffect, useMemo, useState } from "react";
import {
  View,
  StyleSheet,
  type StyleProp,
  type ViewStyle,
  type LayoutChangeEvent,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  interpolate,
  Easing,
  cancelAnimation,
} from "react-native-reanimated";
import { useAppTheme } from "@/hooks/useAppTheme";
import { AppTheme } from "@/theme";
type SkeletonProps = {
  style?: StyleProp<ViewStyle>;
  children?:ReactNode;
};

export default function Skeleton({style,children}: SkeletonProps) {
  const { appTheme } = useAppTheme();
  const styles = useMemo(() => createStyles(appTheme), [appTheme]);

  const [width, setWidth] = useState(0);
  //creates animated value and that reanimated can update without triggering component re render
  const progress = useSharedValue(0); //stores animation progress between 0 and 1 (0 starts the animation and 1 finishes one cycle)

  //to get the width of the skeleton
  const handleLayout = (event: LayoutChangeEvent) =>
    setWidth(event.nativeEvent.layout.width);

  //start the shimmer animation
  useEffect(() => {
    if (width === 0) return;

    progress.value = 0;
    progress.value =
      //repeats animation (-1 means repeat infinitly and false means do not reverse the animation)
      withRepeat(
        //moves progress from 0 to 1 in 1200 milliseconds
        withTiming(1, {
          duration: 1200,
          easing: Easing.linear, // animation moves in constant speed
        }),
        -1,
        false,
      );

    return () => {
      cancelAnimation(progress);
    };
  }, [width]);

  //animates the gradient horizontally
  //useAnimatedStyle connects animation value to component style 
  // progress.value changes the reanimated updates the gradient position
  const animationStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
            //animates in horizontal position
          translateX: interpolate(progress.value, [0, 1], [-width, width]),
        },
      ],
    };
  });
  return (
    <View onLayout={handleLayout} style={[styles.container,style]}>
        {/* {children} */}
      <Animated.View style={[styles.shimmer, animationStyle]}>
        <LinearGradient
          colors={[
            appTheme.colors.skeletonBG,
            appTheme.colors.skeletonHighlight,
            appTheme.colors.skeletonBG,
          ]}
          style={styles.gradient}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
        ></LinearGradient>
      </Animated.View>
    </View>
  );
}

const createStyles = (apptheme: AppTheme) =>
  StyleSheet.create({
    container: {
      overflow: "hidden",
      backgroundColor: apptheme.colors.skeletonBG,
    },

    shimmer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      width: "45%",
    },

    gradient: {
      flex: 1,
    },
  });
