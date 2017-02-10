<?php 
require('PHPMailer-master/PHPMailerAutoload.php');
session_start();
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];


//Create a new PHPMailer instance
$mail = new PHPMailer;

//Tell PHPMailer to use SMTP
$mail->isSMTP();

//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 2;

//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';

//Set the hostname of the mail server... gmail example
$mail->Host = 'smtp.gmail.com';
// use
// $mail->Host = gethostbyname('smtp.gmail.com');
// if your network does not support SMTP over IPv6

//Set the SMTP port number - 587 for authenticated TLS, a.k.a. RFC4409 SMTP submission
$mail->Port = 587;

//Set the encryption system to use - ssl (deprecated) or tls
$mail->SMTPSecure = 'tls';

//Whether to use SMTP authentication
$mail->SMTPAuth = true;

//Username to use for SMTP authentication - use full email address for gmail
$mail->Username = "xxx@gmail.com";

//Password to use for SMTP authentication
$mail->Password = "Password";

//Set who the message is to be sent to
$mail->addAddress('example@email.com');

//Set the subject line
$mail->Subject = 'Whatever Subject You Want';

//Replace the plain text body with one created manually
$mail->AltBody = $message;
$mail->Body = "NAME: ".$name . "<br/>FROM: ".$email."<br/>Message: ". $message;


//send the message, check for errors
if (!$mail->send()) {
	//display error message
    echo "Mailer Error: " . $mail->ErrorInfo;
} else {
//do something on success
}
?>