RemoveDeveloperMixin = {
  removeDev(projectid, developerid, charityid, accepted) {
    event.preventDefault();
    Charities.update({_id: charityid},
                      { $pull: { "miniProfiles.developers":
                        { devId: developerid , projectId: projectid }}});

    if (accepted) {
      //removes dev from all accepted lists
      Projects.update({_id: projectid},
                        { $pull: { "miniProfiles.acceptedDevs":
                          {devId: developerid}}});
      Developers.update({_id: developerid},
                        { $pull: { "miniProfiles.acceptedProjects":
                          {projectId: projectid}}});
    } else {
      //removes dev from all pending lists
      Projects.update({_id: projectid},
                        { $pull: { "miniProfiles.pendingDevs":
                          {devId:developerid} }});
      Developers.update({_id: developerid},
                        { $pull: { "miniProfiles.pendingProjects":
                          { projectId: projectid} }});
    }
  }
};
