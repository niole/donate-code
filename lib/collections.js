//holds unique id for individual user and and array of ids for Posts in feed: {_id: "", feeds:[""]}
UsersFeed = new Mongo.Collection("usersfeed");

//holds unique id for individual user, creation date, and data attribute: {_id: "", createdAt: "", data:{}}
UserPosts = new Mongo.Collection("userposts");

