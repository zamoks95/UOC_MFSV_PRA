import Matter from 'matter-js';
export const simulation4 = function() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Constraint = Matter.Constraint,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  let element = document.getElementById('simulation4');
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

  var ground = Bodies.rectangle(400, 470, 500, 20, { isStatic: true });

  var balancer_base = Bodies.rectangle(400, 440, 300, 10);
  var balancer_center = Bodies.rectangle(400, 400, 10, 80);
  var balancer_main = Bodies.rectangle(400, 380, 200, 10);
  var balancer_stopC = Bodies.rectangle(400, 365, 50, 10);
  var balancer_stopL = Bodies.rectangle(305, 365, 10, 20);
  var balancer_stopR = Bodies.rectangle(495, 365, 10, 20);
  var compoundBody = Body.create({
    parts: [
      balancer_base,
      balancer_center,
      balancer_main,
      balancer_stopC,
      balancer_stopL,
      balancer_stopR,
    ],
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    inertia: 0,
    mass: 1
  });

  var constraint = Constraint.create({
    pointA: { x: 400, y: 440 },
    bodyB: compoundBody,
    pointB: { x: 0, y: 40 },
    length: 0,
  });
  

  var constraintL = Constraint.create({
    pointA: { x: 250, y: 470 },
    bodyB: compoundBody,
    pointB: { x: -150, y: 50 },
    stiffness: 0.005,
    damping: 0.2
  });
  

  var constraintR = Constraint.create({
    pointA: { x: 550, y: 470 },
    bodyB: compoundBody,
    pointB: { x: 150, y: 50 },
    stiffness: 0.005,
    damping: 0.2
  });

  
  var ballLeft = Bodies.circle(320, 330, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
    mass: 2
  });
  var ballRight = Bodies.circle(440, 330, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
    mass: 2
  });
  // add all of the bodies to the world
  World.add(engine.world, [ground, compoundBody, constraint,constraintL,constraintR, ballLeft, ballRight]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
};
