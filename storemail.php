<?php
 
$name = $_POST['name'];
$email= $_POST['email'];
$message= $_POST['message'];
$phone= $_POST['phone'];
$subject =$_POST['subject'];
$to = "matheaudry@gmail.com";

$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone = " . $phone . "\r\n Subject = " . $subject . "\r\n Message =" . $message;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: stayfreepestcontrols@gmail.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
header("Location:thankyou.html");
?>