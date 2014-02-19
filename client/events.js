Template.home.events({
    "submit #entryBox": function (event) {
        event.preventDefault();
        var input = document.getElementById("entryBoxInput");
        Meteor.call("sendChat", input.value, function (err, res) {
          if (err) {
            alert(err);
          }
          console.log(res);
        });
        input.value = "";
    }
});

Template.home.rendered = function () {
  var chatBox = document.getElementById("chatBox");
  chatBox.scrollTop = chatBox.scrollHeight; 
};
