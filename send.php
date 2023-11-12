
<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
 
//required files
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

if(isset($_POST["send"])){
  $mail = new PHPMailer(true);
  $mail->isSMTP();                                 
  $mail->Host  = 'smtp.gmail.com';    
  $mail->SMTPAuth = true;          
  $mail->Username = 'reshani.bau.contact@gmail.com';   
  $mail->Password  = 'bwzzrfshddrctidp';   
  $mail->SMTPSecure = 'ssl';           
  $mail->Port  = 465;      
  $mail->setFrom( $_POST["email"], $_POST["name"],$_POST["lastname"]); 
  $mail->addAddress('reshani.bau.contact@gmail.com');     
  $mail->addReplyTo($_POST["email"], $_POST["name"]); 

 
  $mail->isHTML(true);              
  $messageBody = "Vorname: " . $_POST["name"] . "<br>Nachname: " . $_POST["lastname"] . "<br>Email: " . $_POST["email"] . "<br>Mobile: " . $_POST["phone"] . "<br>Nachricht: " . $_POST["message"];
  $mail->Body = $messageBody;
    
  $mail->send();
  echo
  " 
  <script> 
   alert('Message was sent successfully!');
   document.location.href = 'index.html';
  </script>
  ";
}
?>

