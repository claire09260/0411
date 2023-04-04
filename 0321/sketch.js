let points = [[3,3],[5,-1],[6,-2],[8,0],[10,4],[12,8],[13,12],[13,16],[15,15],[19,15],[22,15],[24,15],[26,16],[25,14],[23,10],[22,6],[19,5],[17,3],[16,1],[15,-3],[15,-7],[13,-8],[11,-10],[9,-12],[8,-14],[7,-18],[5,-16],[1,-14],[0,-14],[-4,-15],[-6,-17],[-8,-15],[-10,-13],[-11,-12],[-12,-12],[-13,-12],[-14,-13],[-17,-15],[-18,-15],[-22,-13],[-24,-12],[-25,-12],[-27,-13],[-25,-11],[-23,-8],[-21,-5],[-19,0],[-15,-2],[-12,-4],[-10,-5],[-7,-6],[-4,-6],[-1,-6],[-1,-3],[-2,1],[0,-1],[1,0],[2,0],[3,1],[3,3]]; //list資料，


function setup() {   //只會執行一次的函數
  createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
 
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points[i].length; j++) {
      points[i][j] = points[i][j] * 5;
    }
  }
}

function draw() {
  background(255);
  stroke("#8ecae6")
  strokeWeight(3)
  // clr1=color("#8ecae6")//漸層第一顏色
  // clr2=color("#d8e2dc")//漸層第二顏色
  // points[i] = 5
  // points[j]=10
  
  // for(x = 0;x<width;x=x+points[i]+(mouseX/5)){
  //   ratio=map(x,0,points[i],0,1)
  //   middlecolor =lerpColor(clr1,clr2,ratio)//從clr1漸層到clr2間的變化,ratio為漸層的變化數
  //   fill(middlecolor)
   
  // }
  colorMode(frameCount)
  let distance = dist(mouseX, mouseY, width / 2, height / 2);// 計算滑鼠位置到畫布中心的距離
  let scaleFactor = map(distance, 0, width / 2, 1, 2);// 將距離轉換為縮放因子
  
 
  
  translate
translate(width / 2, height / 2);
scale(scaleFactor);

   translate
   translate(-width / 2,-height / 2);
  textSize(30)  //文字大小
  fill("#d8e2dc");  //設定顏色
  text("淡江大學教育科技學系",400,400)
   let gradientColor1 = color("#8ecae6"); 
  let gradientColor2 = color("#d8e2dc"); 
 let startX = 5;
 let startY = height/2;
 let endX = width;
 let endY = height/2;
 let gradient = drawingContext.createLinearGradient(startX, startY, endX, endY);
 gradient.addColorStop(0, gradientColor1);
 gradient.addColorStop(1, gradientColor2);
 drawingContext.strokeStyle = gradient;


  translate(width/2, height/2); //原本原點在左上角，利用這指令把原點放到視窗的中心
 scale(1, -1);  //上下翻轉
  for (let i = 0; i < points.length-1; i++) {
    line(points[i][0], points[i][1], points[i+1][0], points[i+1][1]);
  }
  line(points[points.length-1][0], points[points.length-1][1], points[0][0], points[0][1]); //把最後一點與第一點的連線
}

// function setup(){
//   const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 800
// canvas.height = 500
// ctx.lineWidth = 80;
// ctx.lineCap = 'round'

// gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
// gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
// gradientLine(ctx, 520, 70, 500, 440, 'lightblue', 'lime')


// }

// const canvas = document.querySelector("#canvas");
// const ctx = canvas.getContext("2d");
// canvas.width = 800
// canvas.height = 500
// ctx.lineWidth = 80;
// ctx.lineCap = 'round'

// gradientLine(ctx, 60, 60, 300, 380, 'black', 'blue')
// gradientLine(ctx, 720, 120, 80, 300, 'brown', 'orange')
// gradientLine(ctx, 520, 70, 500, 440, 'lightblue', 'lime')

// function gradientLine() {
//   const gradient = ctx.createLinearGradient(x1, y1, x2, y2);
//   gradient.addColorStop(0, c1);
//   gradient.addColorStop(1, c2);
//   ctx.strokeStyle = gradient;

//   ctx.beginPath();
//   ctx.moveTo(x1, y1);
//   ctx.lineTo(x2, y2);
//   ctx.stroke();
// }
// function setup() {   //只會執行一次的函數
//   createCanvas(windowWidth, windowHeight); //設定一個畫布，寬為整個視窗的寬度windowWidth，高度為整個視窗的高度windowHeight
//   //把points 內的值都*50
//   for (let i = 0; i < points.length; i++) {
//     for (let j = 0; j < points[i].length; j++) {
//       points[i][j] = points[i][j] * 10;
//     }
//   }
  
// }
// }
// function gradientLine(){
//   colorMode(frameCount)
//   for (let i = 0; i < num; i++) {
//     gradientLine (random(width), random(height), random(width), random(height), color(random(60), 50, 80), color(random(30, 90), 50, 100), 40)
//   }
// }



