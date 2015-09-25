RemoveDeveloperMixin = {
  removeDev(projectid, developerid, charityid, accepted) {
    event.preventDefault();
    if (accepted) {
      //removes dev from all accepted lists
      Charities.update({_id: charityid},
                        { $pull: { "miniProfiles.developers":
                          { devId: developerid , projectId: projectid }}});
      Projects.update({_id: projectid},
                        { $pull: { "miniProfiles.acceptedDevs":
                          { $in: [developerid] }}});
      Developers.update({_id: developerid},
                        { $pull: { "miniProfiles.acceptedProjects":
                          { $in: [projectid] }}});
    } else {
      //removes dev from all pending lists
      Charities.update({_id: charityid},
                        { $pull: { "miniProfiles.developers":
                          { devId: developerid , projectId: projectid }}});
      Projects.update({_id: projectid},
                        { $pull: { "miniProfiles.pendingDevs":
                          { $in: [developerid] }}});
      Developers.update({_id: developerid},
                        { $pull: { "miniProfiles.pendingProjects":
                          { $in: [projectid] }}});
    }
  }
};
