AddDeveloperMixin = {
  addDev(developerid, projectid, charityid, projectname, accepted) {
    Charities.update({_id: charityid},
                     {$push: {"miniProfiles.developers":
                        {devId: developerid,
                         projectName: projectname,
                         projectId: projectid,
                         accepted: accepted}}});
    if (accepted) {
      //adds developer to accepted lists
      Developers.update({_id: developerid},
                       {$push: {"miniProfiles.acceptedProjects": {projectId: projectid}}});
      Projects.update({_id: projectid},
                       {$push: {"miniProfiles.acceptedDevs": {devId: developerid}}});
   } else {
      //adds developer to pending lists
      Developers.update({_id: developerid},
                       {$push: {"miniProfiles.pendingProjects": {projectId: projectid}}});
      Projects.update({_id: projectid},
                       {$push: {"miniProfiles.pendingDevs": {devId: developerid}}});
   }
  }
};
