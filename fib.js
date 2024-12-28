// 아주 느린 성능을 가지고 있다. Big O
//o(2ⁿ) 
function fib(n){
    if(n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

//O(n)
function fibMemo(n, memo=[]){
    if(memo[n] !== undefined) return memo[n]
    if(n <= 2) return 1;
    var res = fibmemo(n-1, memo) + fibmemo(n-2, memo);
    memo[n] = res;
    return res;
}

//오류가 발생하지 않는다.
//O(n)
function fibTabulated(n){
    if(n <= 2) return 1;
    var fibNums = [0,1,1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i-1] + fibNums[i-2];
    }
    return fibNums[n];
}