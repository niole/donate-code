AddDeveloperMixin = {
  addDev(developerid, projectid, charityid, projectname, accepted) {
    if (accepted) {
      //adds developer to accepted lists
      Charities.update({_id: charityid},
                       {$push: {"miniProfiles.developers":
                          {devId: developerid,
                           projectName: projectname,
                           projectId: projectid,
                           accepted: accepted}}});
      Developers.update({_id: developerid},
                       {$push: {"miniProfiles.acceptedProjects": projectid}});
      Projects.update({_id: projectid},
                       {$push: {"miniProfiles.acceptedDevs": developerid}});
   } else {
      //adds developer to pending lists
      Charities.update({_id: charityid},
                       {$push: {"miniProfiles.developers":
                          {devId: developerid,
                           projectName: projectname,
                           projectId: projectid,
                           accepted: accepted}}});
      Developers.update({_id: developerid},
                       {$push: {"miniProfiles.pendingProjects": projectid}});
      Projects.update({_id: projectid},
                       {$push: {"miniProfiles.pendingDevs": developerid}});
   }
  }
};
