Charities = new Mongo.Collection("charities");
Projects = new Mongo.Collection("projects");
Developers = new Mongo.Collection("developers");

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
    "profile.description": {
        type: String,
        label: "Bio"
    },
    "profile.image": {
        type: String,
        label: "Logo"
    },
    "profile.links": {
        type: [String],
        label: "Links to sites"
    },
    "profile.skills": {
        type: [String],
        label: "Charity goals"
    },

    "profile.name": {
        type: String,
        label: "Charity's title"
    },
    miniProfiles: {
      type: Object,
      label: "Associated mini profiles"
    },
    "miniProfiles.projects": {
        type: [String],
        label: "Project ids"
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
    "profile.devSkills": {
        type: [String],
        label: "Developer skills"
    },
    "profile.description": {
        type: String,
        label: "Bio"
    },
    "profile.image": {
        type: String,
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
        type: [String],
        label: "Ids of project developer is working on"
    },
    "miniProfiles.pendingProjects": {
        type: [String],
        label: "Ids of projects developer has requested"
    }
});

Developers.attachSchema(Schemas.Developers);

Schemas.Projects = new SimpleSchema({
    _id: {
        type: String,
        label: "Project Id"
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
        label: "Skills necessary for project"
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
    "profile.image": {
        type: String,
        label: "Profile image"
    },
    miniProfiles: {
      type: Object,
      label: "Associated mini profiles"
    },
    "miniProfiles.acceptedDevs": {
        type: [String],
        label: "Ids of developers officially contributing"
    },
    "miniProfiles.pendingDevs": {
        type: [String],
        label: "Ids of developers requesting to contribute"
    }
});

Projects.attachSchema(Schemas.Projects);
