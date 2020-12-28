import Matter from 'matter-js';
export const simulation1 = function() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Constraint = Matter.Constraint,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  let element = document.getElementById('simulation1');
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

  var InnerCircle = Bodies.circle(400, 300, 50);

  var Rect1 = Bodies.rectangle(275, 275, 175, 5);
  var Rect1a = Bodies.rectangle(300, 250, 215, 5);
  var Rect1c = Bodies.rectangle(190, 260, 5, 25);

  var Rect2 = Bodies.rectangle(525, 325, 175, 5);
  var Rect2a = Bodies.rectangle(500, 350, 215, 5);
  var Rect2c = Bodies.rectangle(610, 340, 5, 25);

  var Rect3 = Bodies.rectangle(425, 170, 5, 175);
  var Rect3a = Bodies.rectangle(450, 190, 5, 215);
  var Rect3c = Bodies.rectangle(440, 85, 25, 5);

  var Rect4 = Bodies.rectangle(375, 420, 5, 175);
  var Rect4a = Bodies.rectangle(350, 400, 5, 215);
  var Rect4c = Bodies.rectangle(360, 505, 25, 5);

  var compoundBodyB = Body.create({
    parts: [
      InnerCircle,
      Rect1,
      Rect1a,
      Rect1c,
      Rect2,
      Rect2a,
      Rect2c,
      Rect3,
      Rect3a,
      Rect3c,
      Rect4,
      Rect4a,
      Rect4c,
    ],
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    inertia: 0,
  });
  var constraint = Constraint.create({
    pointA: { x: 400, y: 300 },
    bodyB: compoundBodyB,
    length: 0,
  });

  var Ball1 = Bodies.circle(350, 260, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball1b = Bodies.circle(350, 260, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball2 = Bodies.circle(600, 335, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball2b = Bodies.circle(600, 335, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball3 = Bodies.circle(360, 400, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball3b = Bodies.circle(360, 400, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball4 = Bodies.circle(425, 150, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });
  var Ball4b = Bodies.circle(425, 150, 10, {
    frictionStatic: 0,
    friction: 0,
    frictionAir: 0,
  });

  var BallStarter = Bodies.circle(600, 150, 10, { mass: 10 });

  // add all of the bodies to the world
  World.add(engine.world, [
    compoundBodyB,
    constraint,
    Ball1,
    Ball2,
    Ball3,
    Ball4,
    Ball1b,
    Ball2b,
    Ball3b,
    Ball4b,
    BallStarter,
  ]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
};
