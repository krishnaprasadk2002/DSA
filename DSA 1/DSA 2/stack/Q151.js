function reverseWord(s){
    const ssplit = s.split(' ')
    const stack = []

    for(let i of ssplit){
        stack.push(i)
    }

    let final =''

    while(stack.length){
        const current = stack.pop()
    

    if(current){
        final += " "+current
    }
}
return final.trim()
}

console.log(reverseWord("hello world"))