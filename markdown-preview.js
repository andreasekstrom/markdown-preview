if (Meteor.isClient) {

  Template.preview.markdown_data = function() {
    return Session.get("markdown_data");
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
