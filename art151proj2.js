let cx1 = 100;
let cy1 = 100;
let cd1 = 100;

let speed = 20;

function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();
}

function draw() {
  from = color(mouseX+50, mouseY+50, 220, 0.05*255);
  to = color(75, mouseX+50, mouseY+50, 0.05 * 255);


  //from = color(83, 190, 216, 0.01*255);
  //to = color(42, 95, 108, 0.01 * 255);
  c1 = lerpColor(from, to, 0.25);
  c2 = lerpColor(from,to,0.5);
  c3 = lerpColor(from, to, 0.75);

frameRate(10);

  for (let i = 0; i < 5; i++) {
    fill(from);
    ellipse(
      random(75,150), random(50,100),random(150,200), random(150,200)
    );
    fill(c1);
    ellipse(
      random(200,250), random(75,100),random(150,200), random(150,200)
    );
    fill(c2);
    ellipse(
      random(300,350), random(75,100),random(150,200), random(150,200)
    );

    fill(c3);
    ellipse(
      random(400,450), random(75,100),random(150,200), random(150,200)
    );

    fill(to);
    ellipse(
      random(470,525), random(75,100),random(150,200), random(150,200)
    );

    fill(to);
    ellipse(
      random(75,150), random(200,250),random(150,200), random(150,200)
    );
    fill(c3);
    ellipse(
      random(200,250), random(200,250),random(150,200), random(150,200)
    );
    fill(c2);
    ellipse(
      random(300,350), random(200,250),random(150,200), random(150,200)
    );

    fill(c1);
    ellipse(
      random(400,450), random(200,250),random(150,200), random(150,200)
    );

    fill(from);
    ellipse(
      random(470,525), random(200,250),random(150,200), random(150,200)
    );

    fill(from);
    ellipse(
      random(75,150), random(350,400),random(150,200), random(150,200)
    );
    fill(c1);
    ellipse(
      random(200,250), random(350,400),random(150,200), random(150,200)
    );
    fill(c2);
    ellipse(
      random(300,350), random(350,400),random(150,200), random(150,200)
    );

    fill(c3);
    ellipse(
      random(400,450), random(350,400),random(150,200), random(150,200)
    );

    fill(to);
    ellipse(
      random(470,525), random(350,400),random(150,200), random(150,200)
    );

    fill(to);
    ellipse(
      random(75,150), random(450,500),random(150,200), random(150,200)
    );
    fill(c3);
    ellipse(
      random(200,250), random(450,500),random(150,200), random(150,200)
    );
    fill(c2);
    ellipse(
      random(300,350), random(450,500),random(150,200), random(150,200)
    );

    fill(c1);
    ellipse(
      random(400,450), random(450,500),random(150,200), random(150,200)
    );

    fill(from);
    ellipse(
      random(470,525), random(450,500),random(150,200), random(150,200)
    );



    fill(255,255, 255,10);
    ellipse(random(0,600), random(0,600), mouseX, mouseY);
    ellipse(random(0,600), random(0,600), mouseX, mouseY);
    ellipse(random(0,600), random(0,600), mouseX, mouseY);

}





if (mouseIsPressed) {
  fill(mouseX, -mouseY, mouseY, 0.05*255);
  ellipse (random(25,550), random(25,550), random(150,200), random(150,200));
  ellipse (random(25,550), random(25,550), random(150,200), random(150,200));
  ellipse (random(25,550), random(25,550), random(150,200), random(150,200));

}


  }



function keyTyped() {
  if (key === 's') {
    saveCanvas('ehoyt2Canvas','png');
  }
}
