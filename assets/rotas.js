function clear(elementID)
{
    document.getElementById(elementID).innerHTML = "";
}


// --> Auditório Jací Monteiro
//------------------------------
function portariaToJaci() { 
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Blue';
    drawLine(425,380,425,230);
    drawLine(425,230,460,230);
	
// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Seção de Alunos Graduação
//------------------------------
function portariaToScg() {
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='red';
    drawLine(425,380,25,380);
    drawLine(25,380,25,330);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Seção de Alunos de Pós Graduação
//------------------------------
function portariaToScpg() {
    // canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='red';
    drawLine(425,380,425,280);
    drawLine(425,280,675,280);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Comissões
//------------------------------
function portariaToComi() {
    // canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='red';
    drawLine(425,380,60,380);
    //drawLine(425,280,645,280);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> CEC - Centro de Ensino da Computação
//------------------------------
function portariaToCec() {
    // canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='red';
    drawLine(425,380,90,380);
    drawLine(90,380,90,330);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Gráfica
//------------------------------
function portariaToGraf() {
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Green';
    drawLine(425,380,425,280);
    drawLine(425,280,620,280);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Almoxarifado
//------------------------------
function portariaToAumox() {
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Green';
    drawLine(425,380,425,280);
    drawLine(425,280,675,280);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Gremio - Grecime
//------------------------------
function portariaToGrem() {
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Green';
    drawLine(425,380,425,280);
    drawLine(425,280,510,280);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> CAMat - Centro Acadêmico
//------------------------------
function portariaToCamat() {
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Green';
    drawLine(425,380,425,325);
    drawLine(425,325,470,325);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Elevador
//------------------------------
function portariaToElev() {
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Orange';
    drawLine(425,380,180,380);
    drawLine(180,380,180,350);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Benheiros Femininos
//------------------------------
function portariaToWcF() {
//clear("portariaToScpg");
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Yellow';
    drawLine(425,380,425,320);
    drawLine(425,320,570,320);
    drawLine(425,380,425,340);
    drawLine(425,340,255,340);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Benheiros Masculino
//------------------------------
function portariaToWcM() {
//clear("portariaToScpg");
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Yellow';
    drawLine(425,380,425,320);
    drawLine(425,320,530,320);
    drawLine(425,380,425,340);
    drawLine(425,340,275,340);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

// --> Benheiros Femininos Acessibiçlidade
//------------------------------
function portariaToWcAF() {
//clear("portariaToScpg");
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Orange';
    drawLine(425,380,300,380);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 


// --> Benheiros Masculino Acessibiçlidade
//------------------------------
function portariaToWcAM() {
//clear("portariaToScpg");
	// canvas related variables
    var canvas=document.getElementById("canvas");
    var ctx=canvas.getContext("2d");
    ctx.lineWidth=5;

    // stroke using a CSS color: named, RGB, HSL, etc
    ctx.strokeStyle='Orange';
    //drawLine(425,380,425,320);
    //drawLine(425,320,530,320);
    drawLine(425,380,425,340);
    drawLine(425,340,300,340);

// utility to draw a line
    function drawLine(startX,startY,endX,endY){
        ctx.beginPath();
        ctx.moveTo(startX,startY);
        ctx.lineTo(endX,endY);
        ctx.stroke();
    }
} 

