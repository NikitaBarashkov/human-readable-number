module.exports = function toReadable (number) {
  const arr1 = ['zero', 'one','two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const arr10 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const arr20 = ['','twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
  let newNum = String(number);
    
    if(newNum <= 9){ 
      for(let i = 0; i <= newNum; i++){
        if(i == newNum){
            return arr1[i];
          }
        }
    } else if(newNum >= 10 && newNum < 20){
        for(let i = 0; i <= newNum[1]; i++){
          if(i == newNum[1]){
            return arr10[i];
          }
        }
    } else if(newNum >= 20 && newNum < 100){
        const arrAnswer = []
          for(let i = 0; i <= newNum[0]; i++){
            if(i == newNum[0]){
              arrAnswer.push(arr20[i - 1]);
            } 
          }
          for(let i = 0; i <= newNum[1]; i++){
            if(i == newNum[1] && newNum[1] !== 0){
              arrAnswer.push(arr1[i]);
            } 
          }
          if(arrAnswer[1] == 'zero'){
            return String(arrAnswer[0]);  
          } else return `${`${String(arrAnswer[0])} ${String(arrAnswer[1])}`}`; 
    } else if(newNum >= 100 && newNum < 1000){
        const arrAnswer = [];
        for(let i = 0; i <= newNum[0]; i++){
          if(newNum[0] == i){
            arrAnswer.push(`${arr1[i]} hundred`);
          }
        }
        for(let i = 0; i <= newNum[2]; i++){
          if(newNum[1] == 0 && newNum[2] < 10 && newNum[2] == i && newNum !== 0){
            arrAnswer.push(arr1[i]);
          } else if(newNum[1] == 1 && newNum[2] == i){
              arrAnswer.push(arr10[i]);
          } 
        }
        for(let i = 10; i >= newNum[1]; i--){
          if(newNum[1] > 1 && newNum[1] == i){
            arrAnswer.push(arr20[i - 1]);
          }
        }
        for(let i = 10; i >= newNum[2]; i--){
          if(newNum[1] > 1 && newNum[2] !== 0 && newNum[2] == i && newNum[2] !== 0){
            arrAnswer.push(arr1[i]);
          }
        }
          if(arrAnswer.length > 2 && arrAnswer[2] !== 'zero'){
            return (`${`${String(arrAnswer[0])} ${String(arrAnswer[1])} ${String(arrAnswer[2])}`}`);
          } else if(arrAnswer.length > 1 && arrAnswer[1] !== 'zero') {
            return (`${`${String(arrAnswer[0])} ${String(arrAnswer[1])}`}`);
          } else {
            return (String(arrAnswer[0]));
          }
    } 
}


