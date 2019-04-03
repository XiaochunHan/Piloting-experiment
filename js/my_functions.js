function myFunction(p1, p2) {
    return p1 * p2;   // The function returns the product of p1 and p2
}

function shuffle_list(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return array;
  }

  function read_file(file_name) {
    const fs = require('fs') 
  
    // Reading data in utf-8 format 
    // which is a type of character set. 
    // Instead of 'utf-8' it can be  
    // other character set also like 'ascii' 
    fs.readFile(file_name, 'utf-8', (err, data) => { 
        if (err) throw err; 
      
        // Converting Raw Buffer to text 
        // data using tostring function. 
        return data;
    }) 
  }

  function readTextFile(file) {
    var rawFile = new XMLHttpRequest(); // XMLHttpRequest (often abbreviated as XHR) is a browser object accessible in JavaScript that provides data in XML, JSON, but also HTML format, or even a simple text using HTTP requests.
    rawFile.open("GET", file, false); // open with method GET the file with the link file ,  false (synchronous)
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4) // readyState = 4: request finished and response is ready
        {
            if(rawFile.status === 200) // status 200: "OK"
            {
                var allText = rawFile.responseText; //  Returns the response data as a string
                console.log(allText); // display text on the console
            }
        }
    }
    rawFile.send(null); //Sends the request to the server Used for GET requests with param null
}