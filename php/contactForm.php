<?php 


    $name = $_REQUEST['name'];
    $mailForm = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $address = $_REQUEST['address'];
    $city = $_REQUEST['city'];
    $state = $_REQUEST['state'];
    $code = $_REQUEST['code'];

    $mailTo = "sevakalyanngo@gmail.com, contact@sevakalyan.org";
    $headers = "From: ".$mailForm;
   
    $txt = "You Have Recive New Mail.\n Name : ".$name.".\n Mobile Number : ".$phone. ".\n Address : ".$address. ".\n City : ".$city.".\n State : ".$state.".\n Zip Code : ".$code;

    mail($mailTo,"New Entry Seva Kalyan Website : $name", $txt, $headers);
   //header("location:index.html");
   
   //$htmlContent = file_get_contents("mail.html");
   
   $body =  "Thank You Mr/Mrs : ".$name.".\n".$subject. "Team Seva Kalyan Contact You soon";
  
   
   
   mail($mailForm,"Thank you very much for being with us. ",$body,"From:noreply@sevakalyan.org")

?>




<script language="javascript">
    window.open("about.html","_self");
</script>