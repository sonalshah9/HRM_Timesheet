/**
 * Created by sonals on 3/27/17.
 */
function updateSum(){
  var arr = [0,1,2,3,4,5,6];
  for(var index in arr){
    var temp1 = parseInt(document.getElementById('TT_1_' + index).value) ? parseInt(document.getElementById('TT_1_' + index).value) : 0;
    var temp2 = parseInt(document.getElementById('TT_2_' + index).value) ? parseInt(document.getElementById('TT_2_' + index).value) : 0;
    var temp3 = parseInt(document.getElementById('TO_1_' + index).value) ? parseInt(document.getElementById('TO_1_' + index).value) : 0;
    var temp4 = parseInt(document.getElementById('TO_2_' + index).value) ? parseInt(document.getElementById('TO_2_' + index).value) : 0;
    var element = document.getElementById('Tst_' + index);
    element.value = temp1 + temp2 + temp3 + temp4;
  }
}

