// Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey

Array.prototype.Compact=function(){
    return this.filter((i)=>i)
}
