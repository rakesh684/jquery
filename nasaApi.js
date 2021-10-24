
function displayImage(data)
{
	$('<img>',


	  {

	    src: data.url,
	    height:'100%',
	    width:'100%',

      }

    ).appendTo('#image-container');
}


$.ajax(
  {
  	url:'https://api.nasa.gov/planetary/apod',
  	method:'GET',
  	success:displayImage,
  	data:{
  		api_key:'DEMO_KEY',
  
  		date:'2000-05-15',
  	}
  }
);