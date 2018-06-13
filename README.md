# TrainingReactNative
Thao tác với Animation
- Trong React-Native có 2 hệ thống thao tác với Animation:
    1. Animated
    2. Layout Animation

- There main methods to create Animation
  + Animated.timing(): Create an animation with mappting time range to an easing value.

  + Animated.decay(): Create an animation starts with an initial velocity and gradually slows to a stop.
    . velocity: Initial velocity ( Required )
    . deceleration: Default 0.997

  + Animated.spring(): Create an animation with physical model by using velocity to create fluid motions as the toValue updates.

  + Animated.sequence(): is one method for composing animations together. This will have an animation trigger one after the other

1. Animated:
  + toValue: Animation value will update yo
  + duration: Time of anim ( Default: 500 ) (ms)
  + easing: Default is easeInOut (See more: https://easings.net/)
  + delay: Start the Anim after delay ( Default: 0 ) (ms)  
  + useNativeDriver: Uses the native driver when true. Default is false


---------------------- NOTE METHOD ----------------------

1. Animated.Value
    + setValue // Init
    + interpolate
    + addListener
    + removeListener
    + stopAnimation
