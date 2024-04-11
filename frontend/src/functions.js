export async function getUser(supabase, user, setUser) {
    // check if user is null
    if (user) {
      return user;
    }
  
    try {
      // Attempt to get user from supabase
      const { data, error } = await supabase.auth.getUser();
  
      if (error) {
        console.log(error);
        return null;
      }
  
      await setUser(data.user);
      return data.user;
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  export async function getProfileInfo(
    supabase,
    user,
    setUser,
    
  ) {
    let usr = await getUser(supabase, user, setUser);
  
    if (usr) {
      return true;
    }
  
    return false;
  }