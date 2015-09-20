Charities = new Mongo.Collection("charities");
Projects = new Mongo.Collection("projects");
Developers = new Mongo.Collection("developers");

var Schemas = {};

Schemas.Charities = new SimpleSchema({
    projects: {
        type: [String],
        label: "Projects"
    },
    bio: {
        type: String,
        label: "Bio"
    },
    charityId: {
        type: String,
        label: "charity Id"
    },
    logo: {
        type: String,
        label: "Logo"
    },
    links: {
        type: [String],
        label: "Links to sites"
    }
});

Charities.attachSchema(Schemas.Charities);

Schemas.Developers = new SimpleSchema({
    devSkills: {
        type: [String],
        label: "Developer skills"
    },
    devId: {
        type: String,
        label: "developer Id"
    },
    bio: {
        type: String,
        label: "Bio"
    },
    profileImg: {
        type: String,
        label: "User profile image"
    },
    links: {
        type: [String],
        label: "Links to sites"
    },
    acceptedProjects: {
        type: [String],
        label: "Projects that developer is working on"
    },
    pendingProjects: {
        type: [String],
        label: "Projects that developer has requested"
    }
});

Developers.attachSchema(Schemas.Developers);

Schemas.Projects = new SimpleSchema({
    projectId: {
        type: String,
        label: "Project Id"
    },
    charityId: {
        type: String,
        label: "Id of owner Charity"
    },
    skills: {
        type: [String],
        label: "Skills necessary for project"
    },
    description: {
        type: String,
        label: "Project description"
    },
    links: {
        type: [String],
        label: "Links to sites"
    },
    acceptedDevs: {
        type: [String],
        label: "Ids of developers officially contributing"
    },
    pendingDevs: {
        type: [String],
        label: "Ids of developers requesting to contribute"
    },
    title: {
        type: String,
        label: "Title of project"
    }
});

Projects.attachSchema(Schemas.Projects);
