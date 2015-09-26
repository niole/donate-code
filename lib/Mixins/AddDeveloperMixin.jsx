AddDeveloperMixin = {
  addDev(developerid, projectid, charityid, projectname, accepted) {
    Charities.update({_id: charityid},
                     {$push: {"miniProfiles.developers":
                        {devId: developerid,
                         projectName: projectname,
                         projectId: projectid,
                         accepted: accepted}}}, function(err) {
                        if (err) {
                          throw Error(err);
                        }
                    });
    if (accepted) {
      //adds developer to accepted lists
      Developers.update({_id: developerid},
                       {$push: {"miniProfiles.acceptedProjects": {projectId: projectid}}},
                        function(err) {
                          if (err) {
                            throw Error(err);
                          }
                        });
      Projects.update({_id: projectid},
                       {$push: {"miniProfiles.acceptedDevs": {devId: developerid}}},
                        function(err) {
                          if (err) {
                            throw Error(err);
                          }
                        });
   } else {
      //adds developer to pending lists
      Developers.update({_id: developerid},
                       {$push: {"miniProfiles.pendingProjects": {projectId: projectid}}},
                        function(err) {
                          if (err) {
                            throw Error(err);
                          }
                        });
      Projects.update({_id: projectid},
                       {$push: {"miniProfiles.pendingDevs": {devId: developerid}}},
                        function(err) {
                          if (err) {
                            throw Error(err);
                          }
                        });
   }
  }
};
