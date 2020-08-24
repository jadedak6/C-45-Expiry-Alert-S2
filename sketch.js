var form;
var year, month;
var y;

function setup() {
  var canvas = createCanvas(200,400);
      canvas.position(1500,20);
  form = new Form();
  y= 0;

}

function draw() {
  background(220);
  form.display();
 
console.log(form.productdetails);
  for(var i = 0; i<form.productdetails.length; i++){
    getdate();
    if(form.productdetails[i][2] === year){
      if(form.productdetails[i][1] === month){
         text(form.productdetails[i][0] + " has expired.", 10, y);
      }
    }
  }
  }

async function getdate(){
 //fetching month and year
 var expiry = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 var expiryjson = await expiry.json();
 var datetime = expiryjson.datetime;
 year = datetime.slice(0,4);
 month = datetime.slice(6,7);
}
