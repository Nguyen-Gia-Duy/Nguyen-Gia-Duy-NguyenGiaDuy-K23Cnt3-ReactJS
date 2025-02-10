var x=100;//Global
function varDemo(){
    console.log("x ben trong ham:",x);
}

//
console.log("x ben ngoai ham:",x);
//Thuc thi ham
varDemo(); 
//local
function fn_demo(){
    var y=200;  //local
    console.log("y ben trong ham:",y);
}
fn_demo();
//y ben ngoai ham
console.log("y ben ngoai ham:",y);
//vidu chatgpt/deepsteak
