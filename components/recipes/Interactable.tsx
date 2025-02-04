import { useCallback } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useSharedValue, useAnimatedStyle, withSpring, runOnJS, SharedValue } from 'react-native-reanimated';

interface SnapPoint {
  x: number;
}

interface InteractableProps {
  snapPoints: SnapPoint[];
  onSnap: (x: number) => void;
  style: ViewStyle;
  x: SharedValue<number>;
  y: SharedValue<number>;
}

export default function Interactable({ style, x, y, snapPoints, onSnap }: InteractableProps) {
  const translateX = x;
  const translateY = y;
  const context = useSharedValue({ x: 0, y: 0 });

  const gesture = Gesture.Pan()
    .onStart(() => {
      context.value = {
        x: translateX.value,
        y: translateY.value,
      };
    })
    .onUpdate((event) => {
      translateX.value = event.translationX + context.value.x;
      translateY.value = event.translationY + context.value.y;
    })
    .onEnd((event) => {
      const points = snapPoints.map(point => point.x);
      const velocityX = event.velocityX;
      
      // Find nearest snap point
      const nearestPoint = points.reduce((prev, curr) => 
        Math.abs(curr - translateX.value) < Math.abs(prev - translateX.value) ? curr : prev
      );

      // Apply spring animation to snap point
      translateX.value = withSpring(nearestPoint, {
        velocity: velocityX,
        damping: 20,
        stiffness: 90,
      });
      
      translateY.value = withSpring(0);
      
      runOnJS(onSnap)(nearestPoint);
    });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[style, animatedStyle]} />
    </GestureDetector>
  );
}