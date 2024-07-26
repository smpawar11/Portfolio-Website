<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    //RETRIEVE FORM DATA
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    //DISPLAY THE SUBMITTED DATA

    echo "Name: " . $name . "<br>"
    echo "email: " . $email . "<br>"
    echo "message: " . $message . "<br>"
}