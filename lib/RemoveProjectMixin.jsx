RemoveProjectMixin = {
  removeProject(charityid, projectid) {
    //deletes all instances of project
    Charities.update({_id: charityid},
                      { $pull: { "miniProfiles.projects":
                        { projectId: projectid }}},
                     function(err) {
                       if (err) {
                         throw Error(err);
                       }
                     });

      Projects.remove({_id: projectid},
                     function(err) {
                       if (err) {
                         throw Error(err);
                       }
                     });
      Developers.update( { $pull: { "miniProfiles.acceptedProjects":
                          {projectId: projectid}}},
                       function(err) {
                         if (err) {
                           throw Error(err);
                         }
                       });
      Developers.update( { $pull: { "miniProfiles.pendingProjects":
                          {projectId: projectid}}},
                       function(err) {
                         if (err) {
                           throw Error(err);
                         }
                       });
  }
};
