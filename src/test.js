
WebMidi.enable(function (err) {
        
    if (err) {
      console.log("WebMidi could not be enabled.", err);
    } else {
      console.log("WebMidi enabled!");
      console.log(WebMidi.inputs);
        var input = WebMidi.inputs[1];
        input.addListener('noteon', 1,
        function (e) {
          console.log("Red Pressed");
          //document.getElementById("color").innerHTML = "Red";
        }
      );
      input.addListener('noteon', 2,
        function (e) {
          console.log("Green Pressed");
          //document.getElementById("color").innerHTML = "Green";
        }
      );
      input.addListener('noteon', 3,
        function (e) {
          console.log("Blue Pressed");
          //document.getElementById("color").innerHTML = "Blue";
        }
      );
      input.addListener('noteon', 4,
        function (e) {
          console.log("Yellow Pressed");
          //document.getElementById("color").innerHTML = "Yellow";
        }
      );
    console.log("asd");
    }
    
    }, true);
//var WebMidi = require('webmidi');
//<script src="../node_modules/webmidi/webmidi.min.js"></script>