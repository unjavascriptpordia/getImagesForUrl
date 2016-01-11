var unJsPorDia=(function(window,undefined){
  function getImagesForUrl(url,container){
  	xhr=new XMLHttpRequest();
  	if(xhr){
      xhr.onreadystatechange=function(){
        if(xhr.readyState==4){
          if(xhr.status==200||xhr.status==304){
            var response=xhr.responseText;
            var imgs=response.match(/(http(s)?:)?\/\/[\./a-z_\-\d@0-9]*(\.gif|\.png|\.jpg)/ig);
						if(imgs!=null){
            	var code="";
              var index=null;
              for(index in imgs)
                code+="<img style='max-width:300px' src='"+imgs[index]+"'/>";
              document.querySelector(container).innerHTML=code;
            }
						else{
            	document.querySelector(container).innerHTML="No se encontraron imagenes...";
            }
          }
          else{
 						document.querySelector(container).innerHTML="Error";
          }
        }
        else{	
        	document.querySelector(container).innerHTML="Wait...";
        }
      };
      xhr.open("GET",url,true);
      xhr.send(null);
  	}
	}
	return {
		"getImagesForUrl":getImagesForUrl
	};
})(window);
window.addEventListener("load",function(){
  var run=document.getElementById('run');
  run.addEventListener('click',function(){
    var box=document.getElementById('url');
    var url=box.value;
    unJsPorDia.getImagesForUrl(url,'#container');
	});
});
