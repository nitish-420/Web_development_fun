const franc=require('franc');

const langs=require('langs');

let ip=process.argv[2];

// console.log(ip)

try{
    
    let code=franc(ip);

    // console.log(code);

    if (code==='und'){
        
        console.log("Unable to search via this,insert some more text");

    }
    else{
    
        let name =langs.where('3',code);
        
        console.log(`Best guess is : ${name.name}`);

    }
}
catch(e){
    
    console.log("Unable to search via this,insert some more text");

}