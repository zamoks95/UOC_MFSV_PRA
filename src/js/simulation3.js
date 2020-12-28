import Matter from 'matter-js';
export const simulation3 = function() {
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
  let element = document.getElementById('simulation3');
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

  var ground = Bodies.rectangle(400, 500, 500, 20, { isStatic: true });

  var balancer_base = Bodies.rectangle(400, 440, 400, 10, {
    frictionStatic: 9999,
    frictionAir: 0,
    friction: 9999,
    mass: 0,
  });
  var balancer_box_1 = Bodies.rectangle(250, 400, 50, 50, {
    frictionStatic: 9999,
    frictionAir: 0,
    friction: 9999,
    mass: 5,
  });
  var balancer_box_2 = Bodies.rectangle(550, 0, 50, 50, {
    frictionStatic: 9999,
    frictionAir: 0,
    friction: 9999,
    mass: 5,
  });

  var balancer_constraint = Constraint.create({
    pointA: { x: 400, y: 440 },
    bodyB: balancer_base,
    length: 0,
  });

  // add all of the bodies to the world
  World.add(engine.world, [
    ground,
    balancer_base,
    balancer_constraint,
    balancer_box_1,
    balancer_box_2,
  ]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
};
