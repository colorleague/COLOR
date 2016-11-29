<?php 

    $name=$_GET['name']; 
    $email=$_GET['email']; 
    $message=$_GET['message']; 

    if (($name=="")||($email=="")||($message=="")) 
        { 
        echo "All fields are required, please fill <a href=\"\">the form</a> again."; 
        } 
    else{         
        $from="From: $name<$email>\r\nReturn-path: $email"; 
        $subject="Message sent using your contact form"; 
        mail("colorleague.com@gmail.com", $subject, $message, $from); 
        echo "Email sent!"; 
        } 

?> 