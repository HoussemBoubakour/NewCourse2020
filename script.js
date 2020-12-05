var Mheight, JHeight, MWeight,JWeight;

Mheight = 1.69;
JHeight = 1.95;
MWeight = 78;
JWeight = 92;

function calculateBMI(height, weight){
    var BMI;
    BMI = weight / (height*height);
    return BMI;
};

var markBMI = calculateBMI(Mheight,MWeight);
var johnBMI = calculateBMI(JHeight,JWeight);

    var markHeigherthanJohn;

if(johnBMI < markBMI){
    markHeigherthanJohn = true;
}else{
    markHeigherthanJohn = false;
};

console.log(markBMI+' '+johnBMI+' '+markHeigherthanJohn);