let arr=[1, [[2], [3, [4]], 5]];
function flat(arr) {
    let stack=[...arr];
let res=[]
    while(stack.length) {
		let next=stack.pop();
        if(Array.isArray(next)) {
           stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse()
}
console.log(flat(arr))
// [1,2,3,4,5]