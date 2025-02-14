import { useState } from 'react'
import { useKeyPress } from 'react-use';
import { Sprite, useTick, Text, Container } from '@pixi/react';

const bound = (
  n: number,
  max: number,
  min = 0,
) => {
  if (n < min) return n + max - min;
  if (n > max) return n - max + min;
  return n;
};

const useAcceleration = () => {
  const [turningLeft] = useKeyPress('a');
  const [turningRight] = useKeyPress('d');
  const [speedingUp] = useKeyPress('w');
  const [slowingDown] = useKeyPress('s');
  return {
    turning: Number(turningRight) - Number(turningLeft),
    speeding: Number(speedingUp) - Number(slowingDown),
  };
};

type Props = {
  mapWidth: number;
  mapHeight: number;
  speedingRate: number;
  turningRate: number;
};

export const Airplane = ({
  mapWidth,
  mapHeight,
  speedingRate,
  turningRate,
}: Props) => {
  const [x, setX] = useState(mapWidth/2);
  const [y, setY] = useState(mapHeight/2);
  const [rotation, setRotation] = useState(0);
  const [speed, setSpeed] = useState(1);

  const {turning, speeding} = useAcceleration();

  useTick(delta => {
    setX(x => bound(
      x + Math.cos(rotation) * delta * speed,
      mapWidth,
    ));
    setY(y => bound(
      y + Math.sin(rotation) * delta * speed,
      mapHeight,
    ));
    setRotation(rotation => bound(
      rotation + turning * delta * turningRate,
      Math.PI, -Math.PI
    ));
    setSpeed(speed =>
      speed + speeding * delta * speedingRate
    );
  });

  return (
    <Container x={x} y={y}>
      <Sprite
        image="/airplane.svg"
        anchor={.5}
        width={36}
        height={36}
        rotation={rotation + Math.PI/4}
      />
      <Text
        y={15}
        text={`${Math.round(rotation*180/Math.PI)}°`}
      />
      <Text
        y={40}
        text={`${Math.round(speed*100)} kts`}
      />
    </Container>
  );
};
