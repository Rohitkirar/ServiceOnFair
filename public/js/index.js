var city = ["bhopal" , "vidisha" , "sanchi" , "raisen" , "indore" , "ujjain" , "shamsabaad" , "gwalior"]
function storeValue() {
    var item = document.getElementById('search').value;
    item = item.toLowerCase();
    
         console.log(item);
    
        if(item.includes("bhopal")){
           
        open('./static/css/index.css','_self');

        }    
        else if(item.includes("sanchi")){
        
        open('./static/css/index.css','_self');

        }    
        else if(item.includes("vidisha")){
        
        open('./static/css/index.css','_self');

        }    
        else if(item.includes("indore")){
        
        open('./static/css/index.css','_self');

        }    
        else{

            alert("data not available");
            
        }
        }