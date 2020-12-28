import Matter from 'matter-js';
import boxPath from '../img/box.svg';
export const simulation5 = function() {
  var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Constraint = Matter.Constraint,
    Body = Matter.Body,
    Bodies = Matter.Bodies;

  // create an engine
  var engine = Engine.create();

  // create a renderer
  let element = document.getElementById('simulation5');
  var render = Render.create({
    element: element,
    engine: engine,
    options: {
      width: 800,
      height: 600,
      showAngleIndicator: true,
      showAxes: true,
      showConvexHulls: true,
      showVelocity: true
    },
  });

  var center_circle = Bodies.circle(400, 300, 100);
  var boxContainer1a = Bodies.rectangle(570, 280, 150, 10);
  var boxContainer1b = Bodies.rectangle(570, 320, 150, 10);
  var boxContainer1c = Bodies.rectangle(650, 300, 10, 50);

  var boxContainer2a = Bodies.rectangle(230, 280, 150, 10);
  var boxContainer2b = Bodies.rectangle(230, 320, 150, 10);
  var boxContainer2c = Bodies.rectangle(150, 300, 10, 50);

  var boxContainer3a = Bodies.rectangle(380, 130, 10, 150);
  var boxContainer3b = Bodies.rectangle(420, 130, 10, 150);
  var boxContainer3c = Bodies.rectangle(400, 50, 50, 10);

  var boxContainer4a = Bodies.rectangle(380, 470, 10, 150);
  var boxContainer4b = Bodies.rectangle(420, 470, 10, 150);
  var boxContainer4c = Bodies.rectangle(400, 550, 50, 10);

  var hammer1 = Bodies.rectangle(680, 305, 40, 60, { mass: 2 });
  var hammer1Stick = Bodies.rectangle(600, 335, 200, 5);
  var compoundHammer1 = Body.create({
    parts: [hammer1, hammer1Stick],
  });

  var hammer2 = Bodies.rectangle(120, 295, 40, 60, { mass: 2 });
  var hammer2Stick = Bodies.rectangle(200, 265, 200, 5);
  var compoundHammer2 = Body.create({
    parts: [hammer2, hammer2Stick],
  });

  var hammer3 = Bodies.rectangle(405, 20, 60, 40, { mass: 2 });
  var hammer3Stick = Bodies.rectangle(435, 100, 5, 200);
  var compoundHammer3 = Body.create({
    parts: [hammer3, hammer3Stick],
  });

  var hammer4 = Bodies.rectangle(395, 580, 60, 40, { mass: 2 });
  var hammer4Stick = Bodies.rectangle(365, 500, 5, 200);
  var compoundHammer4 = Body.create({
    parts: [hammer4, hammer4Stick],
  });

  var compoundBody = Body.create({
    parts: [
      center_circle,
      boxContainer1a,
      boxContainer1b,
      boxContainer1c,
      boxContainer2a,
      boxContainer2b,
      boxContainer2c,
      boxContainer3a,
      boxContainer3b,
      boxContainer3c,
      boxContainer4a,
      boxContainer4b,
      boxContainer4c,
    ],
    friction: 0,
    frictionAir: 0,
    frictionStatic: 0,
    mass: 1,
    density: 10,
  });

  var hammer1Constraint = Constraint.create({
    bodyA: compoundBody,
    pointA: { x: 90, y: 21 },
    bodyB: compoundHammer1,
    pointB: { x: -150, y: 21 },
  });
  var hammer2Constraint = Constraint.create({
    bodyA: compoundBody,
    pointA: { x: -90, y: -21 },
    bodyB: compoundHammer2,
    pointB: { x: 150, y: -21 },
  });
  var hammer3Constraint = Constraint.create({
    bodyA: compoundBody,
    pointA: { x: 21, y: -90 },
    bodyB: compoundHammer3,
    pointB: { x: 21, y: 150 },
  });
  var hammer4Constraint = Constraint.create({
    bodyA: compoundBody,
    pointA: { x: -15, y: 90 },
    bodyB: compoundHammer4,
    pointB: { x: -21, y: -150 },
  });

  var mainConstraint = Constraint.create({
    pointA: { x: 400, y: 300 },
    bodyB: compoundBody,
    length: 0,
  });
  compoundBody.angularVelocity = -10;

  var ball1 = Bodies.circle(620, 300, 10, { mass: 2 });
  var ball2 = Bodies.circle(280, 300, 10, { mass: 2 });
  var ball3 = Bodies.circle(400, 520, 10, { mass: 2 });
  var ball4 = Bodies.circle(400, 180, 10, { mass: 2 });

  // add all of the bodies to the world
  World.add(engine.world, [
    compoundBody,
    compoundHammer1,
    compoundHammer2,
    compoundHammer3,
    compoundHammer4,
    hammer1Constraint,
    hammer2Constraint,
    hammer3Constraint,
    hammer4Constraint,
    ball1,
    ball2,
    ball3,
    ball4,
    mainConstraint,
  ]);

  // run the engine
  Engine.run(engine);

  // run the renderer
  Render.run(render);
};
