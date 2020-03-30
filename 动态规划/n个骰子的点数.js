/**
 * https://leetcode-cn.com/problems/nge-tou-zi-de-dian-shu-lcof/
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
  let dp=[1];
  let cnt=1;
  while(cnt <= n){
      let tem=[];
      for(let i = cnt-1; i < dp.length; i++){
          for(let j=1;j<=6;j++){
              if(temp[i+j]==undefined){
                temp[i+j] = dp[i]/6;
              }
              else{
                temp[i+j] += dp[i]/6;
              }
          }
      }
      dp=tem;
      cnt++
  }
  return dp.slice(cnt-1);
};

console.log(twoSum(1))