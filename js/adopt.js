$(document).ready(function(){
  console.log("ready!");

  var url = 'http://api.petfinder.com/pet.getRandom';
  
  $.ajax({
    url: url,
    jsonp: "callback",
    dataType: "jsonp",
    data: {
      key: "4a9698752f4139c768c657d4776e1fbf",
      animal: 'dog',
      output: 'basic',
      format: 'json'
    },
    // Here is where we handle the response we got back from Petfinder
    success: function( response ) {
      console.log(response); // debugging
      var dogName = response.petfinder.pet.name.$t;
      var img = response.petfinder.pet.media.photos.photo[2].$t;
      var id = response.petfinder.pet.id.$t;

      var newName = document.createElement('a');
      var newDiv = document.createElement('div');
      newName.textContent = dogName;
      newName.href = 'https://www.petfinder.com/petdetail/' + id;

      var newImg = document.createElement('img');
      newImg.src = img;
      
      var list = document.createElement("div");
      list.setAttribute("id", "List");
      document.body.appendChild(list);

      newDiv.appendChild(newName);
      list.appendChild(newDiv);
      list.appendChild(newImg);
    }
  });
  })