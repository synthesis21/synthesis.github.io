function windowResized(){
    resizeCanvas(windowWidth,350);
}

function setup(){
    createCanvas(windowWidth,350);
    background(255);
    strokeWeight(0.5);
    noFill();
}
  
  let xOff = 0.01;
  let transOff = 0.01;

  function draw(){
    
   background(255);
   let numLines = 8;
   let start = 0;
   noiseDetail(1, 0.9);
  
  for(let i = 1; i <= numLines; i++){
     beginShape();
     start += 0.06;
     
     for(let x = 0; x<width; x++){
       stroke(0);
       let ns = noise(x/300 + start, xOff/80);
       let y = map(ns, -1, 1, 0, 300);
       //vertex(x, y+(250*sin(xOff/20+x/400)+250)); 
       vertex(x, y+(70*sin(xOff/20+x/400)+50));  
     }
     let translateNs = noise(10,transOff/40);
     translate(0,(i)-(map(translateNs,-1,1,0,24)));
     transOff += 0.08;
     xOff += 0.08;
     endShape();
   }
}