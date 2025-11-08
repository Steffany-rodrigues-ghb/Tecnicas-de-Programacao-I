/*
1,2,3,4,5
[(let i =1; i++)]
if (i=== 3){
continue}
*/

// de 1 a 10; pula os pares com continue e para no 9 com break
for(let i=1; i<=10;i++) {
    if(i%2 ===0) continue; // ignora pares
    if(i === 9) break; // para no 9
    console.log(i);
}