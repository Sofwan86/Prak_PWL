<?php

include "koneksi.php";

session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = mysqli_real_escape_string($mysqli, $_POST['username']);
    $password = mysqli_real_escape_string($mysqli, $_POST['password']);

    $query = "SELECT * FROM login WHERE username= '$username' AND password = '$password'";
    $queryDB = mysqli_query($mysqli, $query);
    $check = mysqli_num_rows($queryDB);

    if ($check > 0) {
        // ambil data users
        $getData = mysqli_fetch_array($queryDB);
        // set session 
        $_SESSION['name'] = $getData;
        $_SESSION['is_login']  = true;

        header("location: home.php");
    } else {
        echo "username atau password yang anda masukkan salah";
    }
} 

