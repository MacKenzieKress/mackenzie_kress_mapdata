const key = 'pk.eyJ1Ijoia2Vuemlla3Jlc3MiLCJhIjoiY2ttMHN1dGNqMHI5OTJucW12cWc3c2x1dyJ9.Hm1CQdCxwDm3z7MOYDsyZQ';

const options = {
  lat: 40,
  lng: -40,
  zoom: 1.5,
  style: 'mapbox://styles/kenziekress/ckm9dtoo13oda17ladrhsp0jh',
  pitch: 0
};

const mappa = new Mappa('MapboxGL', key);
let myMap;
let canvas;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}


function draw() {
 clear();
  //noFill();
 stroke(255);
 strokeWeight(3);
  //zoom level variable
  const zoom = myMap.zoom();
 const aruba = myMap.latLngToPixel(12.4902998,-69.9609842);
 ellipse(aruba.x,aruba.y,10 * zoom,10 * zoom);
 if(dist(aruba.x,aruba.y,mouseX,mouseY)< (zoom * 10)/2){
   
   textSize(20);
   fill(0);
   strokeWeight(1);
   text("Aruba",aruba.x,aruba.y);
   
      
   fill(0,100); 
  }else{
    fill(255,100);
  }
   
   
    const greece = myMap.latLngToPixel(37.9839412, 23.7283052);
 ellipse(greece.x,greece.y,10 * zoom,10 * zoom);
 if(dist(greece.x,greece.y,mouseX,mouseY)< (zoom * 10)/2){
   
   textSize(20);
   fill(0);
   strokeWeight(2);
   text("Athens, Greece",greece.x,greece.y);
   
   
   
   fill(0,100); 
  }else{
    fill(255,100);
  }
  
   const florida = myMap.latLngToPixel(29.8946952,-81.3145395);
 ellipse(florida.x,florida.y,10 * zoom,10 * zoom);
 if(dist(florida.x,florida.y,mouseX,mouseY)< (zoom * 10)/2){
   
   textSize(20);
   fill(0);
   strokeWeight(2);
   text("St.Augustine, FL",florida.x,florida.y);
   
   
   
   fill(0,100); 
  }else{
    fill(255,100);
  }
    
   const snowshoe = myMap.latLngToPixel(38.4128243,-79.9964421);
 ellipse(snowshoe.x,snowshoe.y,10 * zoom,10 * zoom);
 if(dist(snowshoe.x,snowshoe.y,mouseX,mouseY)< (zoom * 10)/2){
   
   textSize(20);
   fill(0);
   strokeWeight(2);
   text("Snowshoe, WV",snowshoe.x,snowshoe.y);
   
   
   
   fill(0,100); 
  }else{
    fill(255,100);
  }
  
  const dollysods = myMap.latLngToPixel(39.0206856,-79.356244);
 ellipse(dollysods.x,dollysods.y,10 * zoom,10 * zoom);
 if(dist(dollysods.x,dollysods.y,mouseX,mouseY)< (zoom * 10)/2){
   
   textSize(20);
   fill(0);
   strokeWeight(2);
   text("Dolly Sods, WV",dollysods.x,dollysods.y);
   
   
   
   fill(0,100); 
  }else{
    fill(255,100);
  }
  
   const paris = myMap.latLngToPixel(48.8566969,2.3514616);
 ellipse(paris.x,paris.y,10 * zoom,10 * zoom);
 if(dist(paris.x,paris.y,mouseX,mouseY)< (zoom * 10)/2){
   
   textSize(20);
   fill(0);
   strokeWeight(2);
   text("Paris, France",paris.x,paris.y);
   
   
   
   fill(0,100); 
  }else{
    fill(255,100);
  }
  
  
    
    
 }   





$(window).bind('resize', function(e)
{
  if (window.RT) clearTimeout(window.RT);
  window.RT = setTimeout(function()
  {
    this.location.reload(false); /* false to get page from cache */
  }, 200);
});



