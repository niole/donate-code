GleanProfileMixin = {
  gleanProfile(userid) {
    if (userid) {
      let id = {_id: userid};
      let dev = Developers.findOne(id);
      let charity = Charities.findOne(id);
      if (dev) {
        FlowRouter.go('/profile/developer/'+userid+'/0');
      } else {
        if (charity) {
          FlowRouter.go('/profile/charity/'+userid+'/0');
        }
      }
    }
  }
};
