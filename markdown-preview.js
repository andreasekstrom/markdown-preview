
if (Meteor.isClient) {
  Meteor.startup(function() {
    HTTP.get("./markdown-showcase.md", function(err, data) {
      //console.log(data.content.toString());
      Session.set("markdown_data", data.content);
      Session.set("markdown_initial_data", data.content);
    });
  });

  Template.preview.markdown_data = function() {
    return Session.get("markdown_data");
  };

  Template.main.markdown_editor_data = function() {
    return Session.get("markdown_initial_data");
  };

  Template.main.events({
    'keydown #editor': function (event) {
      var value = $(event.target).val();
      Session.set("markdown_data", value);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
