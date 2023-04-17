let n=5
let sr=""
let m=1
for(let i=0;i<n;i++){
    for(let j=i;j<n-1;j++){
        sr+=" "
    }
    
    for(let k=0;k<m;k++){
        sr+="*"
    }
    m=m+2
    sr+="\n"
}
console.log(sr)