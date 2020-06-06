import Circle from './objects/Circle';
import { context, innerWidth, innerHeight } from './base';
import { mouseMove } from './events/mouseMove';
import { mouseClick } from './events/mouseClick';

const staticCircle = new Circle(
  context,
  { mouseMove },
  { innerWidth, innerHeight }
);

staticCircle.x = innerWidth / 2;
staticCircle.y = innerHeight / 2;
staticCircle.radius = 200;

const playerCircle = new Circle(
  context,
  { mouseMove },
  { innerWidth, innerHeight }
);

playerCircle.x = 100;
playerCircle.y = 100;
playerCircle.radius = 50;

staticCircle.setEnvironmentCircles([playerCircle]);

function animate() {
  context.clearRect(0, 0, innerWidth, innerHeight);
  requestAnimationFrame(animate);

  staticCircle.update();
  playerCircle.x = mouseMove.x;
  playerCircle.y = mouseMove.y;
  playerCircle.update();
}

animate();
