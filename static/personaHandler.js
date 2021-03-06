// Functions to make handling Persona login/logout easier and simpler.

function watchPersonaLogins(aLoginFunc, aLogoutFunc, aReadyFunc) {
  if (navigator.id) {
    navigator.id.watch({
      loggedInUser: null,
      onlogin: function(assertion) {
        if (aLoginFunc)
          aLoginFunc(assertion);
      },
      onlogout: function() {
        if (aLogoutFunc)
          aLogoutFunc();
      },
      onready: function() {
        if (aReadyFunc)
          aReadyFunc();
      }
    });
  }
}

function signin() {
  navigator.id.request();
}

function signout() {
  navigator.id.logout();
}
