var Converter = require("csvtojson").Converter;

var converter = new Converter({});

converter.fromFile("./path-to-your-file.csv", function(err, result) {



  if (err) {
    console.log("An Error Has Occured");
    console.log(err);
}

var json = result;

console.log(json);
});
