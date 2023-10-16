// function solution(n, arr1, arr2) {
//   var answer = [];
//   function newArr(arr) {
//     var secretMap = arr.map(element => {
//       var rank = element.toString(2).length;
//       if (n - rank !== 0) {
//         return element.toString(2).padStart(n, "0");
//       } else {
//         return element.toString(2);
//       }
//     });
//     return secretMap;
//   };

//   function drawMap(arrA, arrB) {
//     let output = "";
//     for(let i = 0; i<n; i++){
//       if (arrA[i] + arrB[i] == 0){
//         output += ",";
//       } else {
//         output += "#";
//       }
//     };
//     return output.split(",").join(" ");
//   }

//   for (let j =0; j<n; j++){
//     var mapNumber = drawMap(newArr(arr1)[j], newArr(arr2)[j])
//     answer.push(mapNumber);
//   } 
//   // var arr3 = [];
//   // for (let i = 0; i < n; i++) {
//   //   arr3.push(toString(+(newArr(arr1)[i]) + +(newArr(arr2)[i])));
//   // }
//   return answer;
// }


function solution(n, arr1, arr2) {
  var answer = [];
  function newArr(arr) {
    var secretMap = arr.map(element => {
        return element.toString(2).padStart(n, "0");
    });
    return secretMap;
  };

  function drawMap(arrA, arrB) {
    let output = "";
    for(let i = 0; i<n; i++){
      if (arrA[i] + arrB[i] == 0){
        output += ",";
      } else {
        output += "#";
      }
    };
    return output.split(",").join(" ");
  }

  for (let j =0; j<n; j++){
    var mapNumber = drawMap(newArr(arr1)[j], newArr(arr2)[j])
    answer.push(mapNumber);
  }
    return answer;
}



// function solution(n, arr1, arr2) {
//   return arr1.map((v, i) => addZero(n, (v | arr2[i]).toString(2)).replace(/1|0/g, a => +a ? '#' : ' '));
// }

// const addZero = (n, s) => {
//   return '0'.repeat(n - s.length) + s;
// }



// var solution=(n,a,b)=>a.map((a,i)=>(a|b[i]).toString(2).padStart(n,0).replace(/0/g,' ').replace(/1/g,'#'))


// function solution(n, arr1, arr2) {
//   let answer = [];
//   for (let i = 0; i < n; i++) {
//       answer.push(
//           (arr1[i] | arr2[i])
//           .toString(2)
//           .padStart(n, 0)
//           .replace(/1/gi, "#")
//           .replace(/0/gi, " ")
//       );
//   }    
//   return answer;
// }




// function solution(n, arr1, arr2) {
//   return arr1.map((v, i) =>
//   (v | arr2[i]).toString(2).padStart(n, 0).replace(/1|0/g, (v) => (+v ? "#" : " "))
//   );
//   }