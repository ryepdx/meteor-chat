Router.configure({
    layoutTemplate: "base",
    waitUntil: [
        Meteor.subscribe("topPosts"),
        Meteor.subscribe("onlineUsers")
    ]
});

Router.map(function (){
    this.route("home", {
        path: "/",
        data: {
            users: Meteor.users.find(
                {"status.online": true}, 
                {sort: {"status.lastLogin": 1}}
            ),
            posts: Posts.find({}, {
                limit: 25,
                sort: {posted: 1}
            })
        }
    });
});

