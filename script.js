// function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
//     console.log('statusChangeCallback');
//     console.log(response);                   // The current login status of the person.
//     if (response.status === 'connected') {   // Logged into your webpage and Facebook.
//       testAPI();  
//     } else {                                 // Not logged into your webpage or we are unable to tell.
//       document.getElementById('status').innerHTML = 'Please log ' + 'into this webpage.';
//     }
//   }

//   function checkLoginState() {               // Called when a person is finished with the Login Button.
//     FB.getLoginStatus(function(response) {   // See the onlogin handler
//       statusChangeCallback(response);
//     });
//   }

  // function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
  //   console.log('Welcome!  Fetching your information.... ');
  //   FB.api('/me', function(response) {
  //     console.log('Successful login for: ' + response.name);
  //     document.getElementById('status').innerHTML =
  //       'Thanks for logging in, ' + response.name + '!';
  //   });
  // }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '[YOUR APP ID]',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v10.0'                   // Use this Graph API version for this call.
    });

    // FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
    //   statusChangeCallback(response);        // Returns the login status.
    // });
  };

  function GetProfile(){
    FB.api(
      '/me',
      'GET',
      {"fields":"id,picture,name,birthday,email"},
      function(response) {
          if (response.name === undefined) return;
          console.log('Thanks for logging in, ' + response.name + '!');
          
          // get image url
          document.getElementById('profile__image').setAttribute('src', response.picture['data']['url']);

          // get user's name
          document.getElementById('profile__name').innerHTML = response.name;

          // get user's email
          document.getElementById('profile__email').innerHTML = response.email;
      }
    );
  }
  

  function logout(){
    FB.logout();
    console.log('Facebook logout');

    // get image url
    document.getElementById('profile__image').setAttribute('src','./placeholder.jpg');

    // get user's name
    document.getElementById('profile__name').innerHTML = 'Name';

    // get user's email
    document.getElementById('profile__email').innerHTML = 'E-mail';
  }
