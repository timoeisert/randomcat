//AUTOR: Timo Eisert

function getCat(){
    $(function(){
		$.ajax({
			method: "GET",
            dataType: "json",
			url: "https://cataas.com/cat?json=true",
                      			
            success: function(data){
                var baseurl = "https://cataas.com";
                var caturl = data.url;
                var fullurl = baseurl + caturl;
                //console.log(fullurl)

                var img = document.getElementById("catpic");
                img.src = fullurl;
            },
            error: function (xhr, ajaxOptions, thrownError){
                console.log("ERROR (" + xhr.status + ")");
                
            }
        });					
    });        
}

