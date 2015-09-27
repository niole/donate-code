Charities = new Mongo.Collection("charities");
Projects = new Mongo.Collection("projects");
Developers = new Mongo.Collection("developers");
ChatSessions = new Mongo.Collection("chatsessions");
Messages = new Mongo.Collection("messages");

var Schemas = {};

Schemas.Charities = new SimpleSchema({
    _id: {
        type: String,
        label: "charity Id"
    },
    profile: {
      type: Object,
      label: "Charity details"
    },
    "profile.email": {
        type: String,
        label: "main email"
    },
    "profile.profileurl": {
        type: String,
        label: "profile url"
    },
    "profile.description": {
        type: String,
        label: "Bio"
    },
    "profile.image": {
        type: [String],
        label: "Logo"
    },
    "profile.links": {
        type: [String],
        label: "Links to sites"
    },
    "profile.skills": {
        type: [String],
        label: "Charity goals",
        minCount: 0,
        maxCount: 20
    },
    "profile.name": {
        type: String,
        label: "Charity's title"
    },
    miniProfiles: {
      type: Object,
      label: "Associated mini profiles"
    },
   "miniProfiles.developers.$.devId": {
        type: String
    },
   "miniProfiles.developers.$.projectId": {
        type: String
    },
   "miniProfiles.developers.$.projectName": {
        type: String
    },
   "miniProfiles.developers.$.accepted": {
        type: Boolean
    },
    "miniProfiles.projects": {
        type: [Object],
        label: "Project ids"
    },
    "miniProfiles.projects.$.projectId": {
        type: String,
        label: "Project ids"
    },
    "miniProfiles.developers": {
        type: [Object],
        label: "All information associated with volunteer status"
    }
});

Charities.attachSchema(Schemas.Charities);

Schemas.Developers = new SimpleSchema({
    _id: {
        type: String,
        label: "developer Id"
    },
    profile: {
      type: Object,
      label: "Developer details"
    },
    "profile.skills": {
        type: [String],
        label: "Developer skills",
        minCount: 0,
        maxCount: 20
    },
    "profile.description": {
        type: String,
        label: "Bio"
    },
    "profile.profileurl": {
        type: String,
        label: "profile url"
    },
    "profile.email": {
        type: String,
        label: "main email"
    },
    "profile.image": {
        type: [String],
        label: "User profile image"
    },
    "profile.links": {
        type: [String],
        label: "Links to sites"
    },
    "profile.name": {
        type: String,
        label: "Developer's title"
    },
    miniProfiles: {
      type: Object,
      label: "Associated mini profiles"
    },
    "miniProfiles.acceptedProjects": {
        type: [Object],
        label: "Ids of project developer is working on"
    },
    "miniProfiles.pendingProjects": {
        type: [Object],
        label: "Ids of projects developer has requested"
    },
    "miniProfiles.acceptedProjects.$.projectId": {
        type: String,
        label: "Ids of project developer is working on"
    },
    "miniProfiles.pendingProjects.$.projectId": {
        type: String,
        label: "Ids of projects developer has requested"
    }

});

Developers.attachSchema(Schemas.Developers);

Schemas.Projects = new SimpleSchema({
    _id: {
        type: String,
        label: "Id of project"
    },
    charityId: {
        type: String,
        label: "Id of owner Charity"
    },
    profile: {
      type: Object,
      label: "Project details"
    },
    "profile.skills": {
        type: [String],
        label: "Skills necessary for project",
        minCount: 0,
        maxCount: 20
    },
    "profile.profileurl": {
        type: String,
        label: "profile url"
    },
    "profile.email": {
        type: String,
        label: "Charity's email"
    },
    "profile.description": {
        type: String,
        label: "Project description"
    },
    "profile.links": {
        type: [String],
        label: "Links to sites"
    },
    "profile.name": {
        type: String,
        label: "Title of project"
    },
    "profile.profileurl": {
        type: String,
        label: "profile url"
    },
    "profile.image": {
        type: [String],
        label: "Profile image"
    },
    miniProfiles: {
      type: Object,
      label: "Associated mini profiles"
    },
    "miniProfiles.acceptedDevs": {
        type: [Object],
        label: "Ids of developers officially contributing"
    },
    "miniProfiles.pendingDevs": {
        type: [Object],
        label: "Ids of developers requesting to contribute"
    },
    "miniProfiles.acceptedDevs.$.devId": {
        type: String,
        label: "Ids of developers officially contributing"
    },
    "miniProfiles.pendingDevs.$.devId": {
        type: String,
        label: "Ids of developers requesting to contribute"
    }

});

Projects.attachSchema(Schemas.Projects);

Schemas.ChatSessions = new SimpleSchema({
    createdAt: {
        type: String,
        label: "Date of first message sent"
    },
    participants: {
      type: [String],
      label: "Profiles in chat session"
    }
});

ChatSessions.attachSchema(Schemas.ChatSessions);

Schemas.Messages = new SimpleSchema({
    _id: {
        type: String,
        label: "Id of project"
    },
    sessionId: {
        type: String,
        label: "Id of session that message is part of"
    },
    createdAt: {
      type: String,
      label: "Date message sent"
    },
    author: {
        type: String,
        label: "Name of author"
    },
    data: {
        type: String,
        label: "Data in message"
    }
});

Messages.attachSchema(Schemas.Messages);
