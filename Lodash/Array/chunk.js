Array.prototype.chunk = function(size){
    let result=[];
    temp=this.slice(0); // selects array from postion 0
    while(temp.length){
        // delete element from array and push it to result
        result.push(temp.splice(0,size))
    }
    return result;
}
