Meteor.publish("topPosts", function () {
  return Posts.find({}, {
      limit: 25,
      sort: {posted: -1}
  })
});

Meteor.publish("onlineUsers", function () {
  return Meteor.users.find({"status.online": true});
});
