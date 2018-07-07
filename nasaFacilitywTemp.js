$(document).ready(function(){

   var apiURL = "https://data.nasa.gov/resource/9g7e-7hzz.json";

   $.ajax({
     url: apiURL,
     // Work with the response
     success: function(response) {
     // console.log( response ); // server response
     response.forEach(function(i){
          getWeather(i.facility,i.city,i.state)
     })
    },
    error: function(error){
    console.log(error)
    }
     });



    //  url: apiURL,
    //  // Work with the response
    //  success: function(response) {
    //  // console.log( response ); // server response
    //  response.forEach(function(i){
    //    // adding the parameters we are picking out of the array to the ul
    //    $('ul').append('<li>'+i.facility,i.city+(", ")+i.state+'</li>')
    //   getWeather(i.city, i.state)
    //  })
    // },
    // error: function(error){
    // console.log(error)
    // }
    //  });

  function getWeather(facility,city,state){
    var location = city + ', US'
    var apiKey = "bdbda512f84f6fd71e88a7d3aaa20f98"
    var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+location+"&APPID="+apiKey+"&units=imperial";

   $.ajax({
     url: apiURL,
     // the response from API
     success: function(response) {
       // console.log( response ); // server response
       console.log(response)
       // adding the parameters we are picking out of the array to the ul
       $('ol').append('<li>'+facility,city+(", ")+state+(" ")+response.main.temp+'</li>')
     },
     error: function(error){
       $('ol').append('<li>'+facility,city+(", ")+state+(" ")+'</li>')

     }
   })
  }
});
