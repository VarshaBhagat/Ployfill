function intersection() {
    let arr=Array.prototype.slice.call(arguments);
        let map={}
        arr.forEach((i)=>{
            i.forEach((j)=>{
                if(j in map) {
                map[j]+=1;
                } else {
                map[j]=1
                }
            })
        })
    let inter=[];
    for(i in map) {
        if(map[i]>1){
            inter.push(i)
        }
    }
    return inter
}

// intersection([2, 1], [2, 3]);
// => [2]