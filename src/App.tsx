import { Stage, Sprite, Text } from '@pixi/react';
import { Airplane } from './Airplane';

const WIDTH = 2060/3, HEIGHT = 1586/3;
const TURNING_RATE = 1/100, SPEEDING_RATE = 1/100;

const App = () => (
  <Stage width={WIDTH} height={HEIGHT}>
    <Sprite
      image="/earth.jpg"
      width={WIDTH}
      height={HEIGHT}
    />
    <Airplane
      mapWidth={WIDTH}
      mapHeight={HEIGHT}
      turningRate={TURNING_RATE}
      speedingRate={SPEEDING_RATE}
    />
    <Text
      text="WASD to steer"
      x={12}
      y={6}
    />
  </Stage>
);

export default App;
