Meteor.methods({
    sendChat: function (text) {
        var user = Meteor.user();
        if (!user) {
          throw Exception("Not logged in!");
        }
        Posts.insert({
          text: text,
          author: {
            name: user.profile.name,
            url: "http://twitter.com/#!/" + user.services.twitter.screenName,
            image: user.services.twitter.profile_image_url
          },
          posted: new Date()
        });
        return user;
    }
});

