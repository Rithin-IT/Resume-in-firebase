let resume={
    personal_details:{},
    additional:{},
    hobbies:[],
    skills:[],
    personal_interest:[],
    education:[]
}

function add(e,key,p_key){
    if(p_key){
        resume[p_key][key]=e.value
    }else{
        resume[key]=e.value;
    }
    output()
}

function addarrayvalue(key){
    let value= document.getElementById(key).value;
    resume[key].push(value)
    document.getElementById(key).value= "";
    output()
}

function addMultiValue(p_key,key1,key2,key3,key4){
    let newobj={};
    newobj[key1]=document.getElementById(key1).value;
    newobj[key2]=document.getElementById(key2).value;
    newobj[key3]=document.getElementById(key3).value;
    newobj[key4]=document.getElementById(key4).value;
    resume[p_key].push(newobj)
    document.getElementById(key1).value="";
    document.getElementById(key2).value="";
    document.getElementById(key3).value="";
    document.getElementById(key4).value="";
    output()
}

function output(){
    document.getElementById('output').innerHTML=JSON.stringify(resume)
}


