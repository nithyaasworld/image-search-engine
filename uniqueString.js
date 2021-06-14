function solve(nums,k){
    if(nums.length<k){
        return false;
    }
    let highestRepeatedKey = 0;
    let obj = {};
    nums.forEach(n => {
        if(obj.hasOwnProperty(n)){
            obj[n] += 1;
        }else{
            obj[n] = 1;
        }
        if(obj[n] > highestRepeatedKey){
            highestRepeatedKey = obj[n];
        }
    })
    let minGroup = Math.floor(nums.length/k);
    console.log("minGroup: " + minGroup);
    console.log("highestRepeatedKey: " + highestRepeatedKey);
    return highestRepeatedKey < minGroup;

}
nums = [1,1];
k = 1;
console.log(solve(nums,k));
