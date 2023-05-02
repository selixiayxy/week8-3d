let canvas;
let easyCam;
let o=0;


function setup() {
    canvas = createCanvas(windowWidth, windowHeight, WEBGL);
    canvas.parent("sketch-container"); //move our canvas inside this HTML element

   
    easyCam = createEasyCam();

    let state = {
        distance: 1500,
        center  : [0, 0, 0],
        rotation: [0.9279116079642078, -0.2760465000923418, -0.2415840653641595, 0.06644935631122713]
      };
    easyCam.setState(state, 0); //you can use the second parameter to animate
    //TIP: console.log out easyCam.getRotation() in draw to find a rotation you like
}

function draw() {
    background(0);
    angleMode(DEGREES);


    //set material
    //lights();
    //ambientMaterial(255,0,0);
    normalMaterial();
    //ambientMaterial(150,150,255);
    noStroke();
    
   
    //create pattern
    for (let x = -400; x <= 400; x += 50) {
          for (let z = -400; z <= 400; z += 50) {
            push();
            translate(x, 0, z);
            rotateY(o);
            rotateX(o/8);
            rotateZ(o/8);
            let distance = dist(x, 0, z, 0, 0, 0);
            let length = sin(distance + frameCount * 3) * 100+ 200;
            
            box(20, length, 20);
            push();
            translate(z,0,x);
            sphere(20);
          
            pop();
         
        }
        o+=0.02;
    }

}
