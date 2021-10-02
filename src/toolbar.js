 let myCanvas = document.querySelector("#cvs")
 let context = myCanvas.getContext("2d");

 //  brushColor
 $("#blackColor").on('click', () => {
     context.strokeStyle = "black";
 })
 $("#redColor").on('click', () => {
     context.strokeStyle = "red";
 })
 $("#orangeColor").on('click', () => {
     context.strokeStyle = "orange";
 })
 $("#yellowColor").on('click', () => {
     context.strokeStyle = "yellow";
 })
 $("#greenColor").on('click', () => {
     context.strokeStyle = "green";
 })
 $("#redColor").on('click', () => {
     context.strokeStyle = "red";
 })
 $("#skyblueColor").on('click', () => {
     context.strokeStyle = "skyblue";
 })

 // pen
 $("#pen").on('click', () => {
     context.strokeStyle = "black";
 })

 // eraser
 $("#rubber").on('click', () => {
     context.strokeStyle = "white";
 })

 //  clear
 $("#clear").on('click', () => {
     context.clearRect(0, 0, myCanvas.width, myCanvas.height);
 })

 //  save
 $("#save").on('click', () => {
     let imgUrl = myCanvas.toDataURL('image/png');
     let saveA = document.createElement('a');
     document.body.appendChild(saveA);
     saveA.href = imgUrl;
     saveA.download = 'mypic' + (new Date).getTime();
     saveA.target = '_blank';
     saveA.click();
 })