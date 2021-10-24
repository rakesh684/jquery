function fetchRandomDogImage()
{
    // var xhrRequest=new XMLHttpRequest();

    // xhrRequest.onload=function()
    // {
    // 	console.log(xhrRequest.response);
    // 	var responseJSON=JSON.parse(xhrRequest.response);
    // 	var imageURL=responseJSON.message;
    // 	$('#dog-image').attr('src',imageURL);
    // }


    // xhrRequest.open('get','https://dog.ceo/api/breeds/image/random');
    // xhrRequest.send();

    // $.ajax({
    // 	url:'https://dog.ceo/api/breeds/image/random',
    // 	method:'GET',
    // 	success:function(data){
    // 		var imageUrl=data.message;
    // 		$('#dog-image').attr('src',imageUrl);
    // 	}
    // });

    $.get('https://dog.ceo/api/breeds/image/random',function(data){
         var imageUrl=data.message;
         $('#dog-image').attr('src',imageUrl);

    	}).fail(function(xhr,textStatus,errorThrown){
    		console.log("Request Failed");
    	});
}
$('#fetch-dog-image-button').click(fetchRandomDogImage);