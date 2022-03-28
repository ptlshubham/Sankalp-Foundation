<?php 
//echo "we are on footer page..";

    $name = $_REQUEST['name'];
    $mailForm = $_REQUEST['email'];
    $phone = $_REQUEST['phone'];
    $address = $_REQUEST['address'];
    $city = $_REQUEST['city'];
    $state = $_REQUEST['state'];
    $code = $_REQUEST['code'];

    $mailTo = "sevakalyanngo@gmail.com ";
    $headers = "From: ".$mailForm;
   
    $txt = "You Have Recive New Mail.\n Name : ".$name.".\n Mobile Number : ".$phone. ".\n Address : ".$address. ".\n City : ".$city.".\n State : ".$state.".\n Zip Code : ".$code;

    mail($mailTo,"New Entry Seva Kalyan Website : $name", $txt, $headers);
   //header("location:index.html");
   
   //$htmlContent = file_get_contents("mail.html");
   
   $body =  "Thank You Mr/Mrs : ".$name.".\n".$subject. "Team Seva Kalyan Contact You soon";
  
   
   
   mail($mailForm,"Thank you very much for being with us. ",$body,"From:noreply@sevakalyan.org")

?>

<?php

    // $name = $_POST['name'];
    // $email = $_POST['email'];
    // $phone = $_POST['phone'];
    // $address = $_POST['address'];
    // $city = $_POST['city'];
    // $state = $_POST['state'];
    // $code = $_POST['code'];
    
    //database conn
  //  $link = mysqli_connect("localhost", "root", "", "sevakalyan");


   // $conn = new mysqli_connect('localhost','root','','exlife');

    
      //  $smtp = $link->prepare("INSERT INTO sevakalyan (name, email, phone, address, city, state, code) VALUES (?,?,?,?,?,?,?)");
      //  $smtp->bind_param("ssiss",$name, $email, $phone, $address, $city, $state, $code);
       // $smtp->execute();
       // echo "it's Done";
      //  $smtp->close();
      //  $link->close();
    
 
//?>


<script language="javascript">
    window.open("about.html","_self");
</script>