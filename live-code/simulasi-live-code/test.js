/* var a = [2,3,5];

console.log(a.slice());
console.log(a.splice(1,1)); */

var a = [2,3,5,8,9,12];
console.log(a.slice());

function max(numArray){
  var nums = numArray.slice();

  if(nums.length == 1){
    return nums[0];
  }
  if(nums[0] < nums[1]){
    nums.splice(0,1);
  } else {
    nums.splice(1,1);
  }
  console.log(nums);
  return max(nums);
}

console.log(max(a));

