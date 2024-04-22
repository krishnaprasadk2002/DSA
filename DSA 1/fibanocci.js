function fibanocci(n){
    let fiba=[0,1]

    for(let i=2;i<n;i++){
        fiba[i] = fiba[i-1] + fiba [i-2]
    }
    return fiba
}
console.log(fibanocci(2));
console.log(fibanocci(5));
console.log(fibanocci(9));