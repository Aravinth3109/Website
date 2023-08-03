var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var res=JSON.parse(request.response);
    console.log(res);
    var casia=res.filter((ele)=>ele.region=="asia");
    console.log(casia); 
    }