<html>

<head>
    <title>Login Sederhana</title>
</head>
<style>
    .batas{
        width: 300;
    }

    form input {
        width: 100%;
        height: 40px;
        border: 1px solid black;
        padding: 5px;
    }
</style>

<body>
    <div >
        <h1>Login Sederhana</h1>
        <form class="batas" action="proses.php" method="POST">
            <p>
                <input type="username" placeholder="Masukkan username anda" name="username">
            </p>
            <p>
                <input type="password" placeholder="Masukkan password anda" name="password">
            </p>
            <p>
                <input type="submit" value="Login Now">
            </p>
        </form>
        <script>

  function statusChangeCallback(response) {  // Called with the results from FB.getLoginStatus().
    console.log('statusChangeCallback');
    console.log(response);                   // The current login status of the person.
    if (response.status === 'connected') {   // Logged into your webpage and Facebook.
      testAPI();  
    } else {                                 // Not logged into your webpage or we are unable to tell.
      document.getElementById('status').innerHTML = 'Anda belum login ' +
        'silahkan login';
    }
  }


  function checkLoginState() {               // Called when a person is finished with the Login Button.
    FB.getLoginStatus(function(response) {   // See the onlogin handler
      statusChangeCallback(response);
    });
  }


  window.fbAsyncInit = function() {
    FB.init({
      appId      : '441345406974873',
      cookie     : true,                     // Enable cookies to allow the server to access the session.
      xfbml      : true,                     // Parse social plugins on this webpage.
      version    : 'v10.0'           // Use this Graph API version for this call.
    });


    FB.getLoginStatus(function(response) {   // Called after the JS SDK has been initialized.
      statusChangeCallback(response);        // Returns the login status.
    });
  };
 
  function testAPI() {                      // Testing Graph API after login.  See statusChangeCallback() for when this call is made.
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
        header("location: home.php");

    });

  }

</script>


<!-- The JS SDK Login Button -->
or login with facebook
<br>
<fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
</fb:login-button>

<div id="status">
</div>

<!-- Load the JS SDK asynchronously -->
<script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js"></script>
    </div>

</body>
</html>