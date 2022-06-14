//contact form validate
function validateContactForm() {
  if (document.getElementById('username').value == '') {
    document.getElementById('showErrors').style.display = 'block'
    document.getElementById('showErrors').innerHTML = 'Enter username'
    document.getElementById('username').focus()
    return false
  } else {
    document.getElementById('showErrors').style.display = 'none'
    document.getElementById('showErrors').innerHTML = ''
  }

  var mobileNum = document.getElementById('number').value
  var validateMobNum = [/^\d*(?:\.\d{1,2})?$/]
  if (mobileNum == '') {
    document.getElementById('showErrors').style.display = 'block'
    document.getElementById('showErrors').innerHTML = 'Enter phone number '
    document.getElementById('number').focus()
    return false
  } else if (mobileNum.length < 10 || mobileNum.length > 10) {
    document.getElementById('showErrors').style.display = 'block'
    document.getElementById('showErrors').innerHTML =
      'Enter  valid phone number should be of 10 digit only. '
    document.getElementById('number').focus()
    return false
  } else {
    document.getElementById('showErrors').style.display = 'none'
    document.getElementById('showErrors').innerHTML = ''
  }

  if (document.getElementById('email').value == '') {
    document.getElementById('showErrors').style.display = 'block'
    document.getElementById('showErrors').innerHTML = 'Enter email'
    document.getElementById('email').focus()
    return false
  } else {
    document.getElementById('showErrors').style.display = 'none'
    document.getElementById('showErrors').innerHTML = ''
  }

  if (document.getElementById('message').value == '') {
    document.getElementById('showErrors').style.display = 'block'
    document.getElementById('showErrors').innerHTML = 'Enter Message Text'
    document.getElementById('message').focus()
    return false
  } else {
    document.getElementById('showErrors').style.display = 'none'
    document.getElementById('showErrors').innerHTML = ''
  }

  var xhttp = new XMLHttpRequest()

  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var number = document.getElementById('number').value
  var message = document.getElementById('message').value

  var ajaxurl ='http://localhost/avel/demo/manish.php';
  
  var action = 'add_contact_form'
  var params =
    'username=' +
    username +
    '&email=' +
    email +
    '&number=' +
    number +
    '&message=' +
    message +
    '&action=' +
    action
  xhttp.onreadystatechange = function () {
   
    
    if (this.readyState == 4 && this.status == 200) {
     
      document.getElementById('response-msg').style.display = 'block'
      document.getElementById('response-msg').innerHTML = this.responseText
     // document.getElementById('contact_form').reset()
    }
  }
  xhttp.open('POST', ajaxurl, true)
  xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
  xhttp.send(params)
  
}