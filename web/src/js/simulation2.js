import Matter from 'matter-js';
export const simulation2 = function() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Constraint = Matter.Constraint,
    Composites = Matter.Composites,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  let element = document.getElementById('simulation2');
  var render = Render.create({
    element: element,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      showAngleIndicator: true,
      showAxes: true,
      showConvexHulls: true,
    },
  });

  var ball1 = Bodies.circle(100, 100, 30, {friction: 0, mass: 10});
  var constraint1 = Constraint.create({
    pointA: { x: 300, y: 100 },
    bodyB: ball1,
  });

  var ball2 = Bodies.circle(360, 300, 30, {friction: 0, mass: 10});
  var constraint2 = Constraint.create({
    pointA: { x: 360, y: 100 },
    bodyB: ball2,
  });
  var ball3 = Bodies.circle(420, 300, 30, {friction: 0, mass: 10});
  var constraint3 = Constraint.create({
    pointA: { x: 420, y: 100 },
    bodyB: ball3,
  });
  var ball4 = Bodies.circle(480, 300, 30, {friction: 0, mass: 10});
  var constraint4 = Constraint.create({
    pointA: { x: 480, y: 100 },
    bodyB: ball4,
  });

  var cradle = Composites.newtonsCradle(280, 380, 7, 20, 140);
  Body.translate(cradle.bodies[0], { x: -140, y: -100 });

  // add all of the bodies to the world
  World.add(engine.world, [
    ball1,
    constraint1,
    ball2,
    constraint2,
    ball3,
    constraint3,
    ball4,
    constraint4,
    cradle
  ]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
};
