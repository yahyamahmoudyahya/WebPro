<!DOCTYPE html>
<html>
<head>
    <title>Beauty Tools</title>
    <meta charset="utf-8"/>
    <meta name="description" content="name shope"/>
    <meta name="keywords" content="keyone,keytwo,..."/>
    <meta name="author" content="yhya qosa"/>
    <meta name="viewport" content="width= derice-width,initial-scale = 1.0"/>
    <link href="{{URL::asset('style.css')}}" rel="stylesheet">
</head>
<body>

<p class="textlog">Admin Login</p>
<form id="loginform" action="{{ route('login') }}" method="POST">
    @csrf
    <input type="email" class="loginput" placeholder="Enter email" id="emileadmin" name="email"
           value="yahya_223311@hotmail.com">
    <input type="password" class="loginput" placeholder="Enter password" id="passwordadmin" name="pass"
           value="123456">
    <input type="submit" class="loginput butt" value="Done" id="inputLogin">
</form>

<script
    src="https://kit.fontawesome.com/289b476fa4.js"
    crossorigin="anonymous"></script>
<script src="{{URL::asset('script1.js')}}"></script>
</body>
</html>
