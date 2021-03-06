// HOMEWORK 3

//Task 1

function isDigitOdd(val) {
	if (val < 10 && val >= 0) {
  	return val % 2 === 1
	}
}

function isAllDigitsOdd(num) {
	 if(num < 10) {
   	return isDigitOdd(num)
   }
  
  	let lastDigit = num % 10;
  	num = Math.floor(num / 10);
        return isDigitOdd(lastDigit) && isAllDigitsOdd(num); 
}



//Task 2 

function findViolatedIndex(arr, i = 0) {
	if (i >= arr.length - 1) {
  	return -1;
  }
    if (arr[i] > arr[i + 1]){
          return arr[i + 1];
    }
    return findViolatedIndex(arr, i + 1)
}


// Task 3

function removeFirstRecursively (arr, i = 0) {
	if(arr.length === 0){
  	return arr;
  }
    if(i === arr.length-1) {
     arr.pop();
    }
      if(i < arr.length){
        arr[i] = arr[i + 1];
        	return removeFirstRecursively (arr, i + 1)
      }
  return arr;
}

