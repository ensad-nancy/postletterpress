$( "#content" ).keypress(function(event) {
  var content = $( "#content" ).val();

  var lines = content.match(/[^\r\n]+/g);
  var lettersarray = lines.map(function(line){
    return line.split('');
  });

  lettersarray.forEach(function(letters,line) {
    console.log(line, letters);

    var nbletters = letters.length;

  });

});
