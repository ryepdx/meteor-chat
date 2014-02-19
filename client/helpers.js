Handlebars.registerHelper("eachReverse", function (cursor, options) {
  var vals = [];
  
  cursor.forEach(function (val) {
    vals.push(val);
  });
  cursor.rewind();

  var ret = "";
  for (var i = vals.length; i > 0; i--) {
    ret = ret + options.fn(vals[i-1]);
  }
  return ret;
});
