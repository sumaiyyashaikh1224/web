function printPattern(n){
    let Pattern = "";
    for (let i = 1; i <= n; i++){
        for (let j = 1; j <= i; j++){
            Pattern += j;
        }
        Pattern += "\n";
    }
    console.log(Pattern);
}

printPattern(5);