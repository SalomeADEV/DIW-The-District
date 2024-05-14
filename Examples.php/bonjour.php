<html>
<body>



Les bases de php


  <?php
      echo "Bonjour le monde"; 
  ?> 



<?php
$a = "Winter"; 
echo $a . " is coming !"; 
?>

<?php
$variable = "Afpa";
echo $variable;
?>

<?php
$_GET ["societe"] = "Afpa";
echo $_GET['societe']; // Affiche 'Afpa' 
?>

<?php
$a = 6.32172; 
$b = intval($a); 
$c = doubleval($a); 
echo $a - $b - $c; 

?>

<?php

$myVar = "KO";

if ($myVar == "OK") 
{   
   echo"C'est bon<br>";
} 
else 
{
    echo"Ouh la la pas bien !<br>"; // Message affiché dans la page web
    error_log("Ouh la la pas bien"); // Message enregistré dans le fichier 'C:/wamp/logs/php_error.log' 
} 
?>

<br>
<br>

<?php
$myVar = "bonjour";
var_dump($myVar);
?>

<br>
<br>

<?php

echo"Ouh la la pas bien !<br>"; // Message affiché dans la page web
    $message = "Ouh la la pas bien ".__FILE__." ".__LINE__;        
    error_log($message); 
?>

<br>
<br>

<?php

echo ( "SERVER_NAME : ". $_SERVER["SERVER_NAME"]);
//var_dump($_ENV);

?>

<br>
<br>


<?php
echo ( "SERVER_ADDR : ".$_SERVER["SERVER_ADDR"] ); // 127.0.0.1:IPv4, IPv6,
?>

<br>
<br>

<?php
//echo ( "REMOTE_ADDR : ".$_SERVER["REMOTE_ADDR"] ); // 200.10.41.214,
//var_dump($GLOBALS);
?>

<br>
<br>


<?php
print_r($GLOBALS["_SERVER"]["HTTP_USER_AGENT"]);
?>

<br>
<br>


<?php
print_r($_SERVER["HTTP_USER_AGENT"]);
?>

<br>
<br>

<?php

echo "<hr>";

foreach ($_SERVER as $key => $value){
    echo $key . " => " . $value . "<br>";
}

echo "<hr>";

foreach ($GLOBALS as $key => $value){
    echo $key . " => " . $value . "<br>";
}

echo "<hr>";

foreach ($_FILES as $key => $value){
    echo $key . " => " . $value . "<br>";
}

echo "<hr>";

foreach ($_POST as $key => $value){
    echo $key . " => " . $value . "<br>";
};

$_POST["nom"];
$_POST["prenom"];

?>


Les instructions conditionnelles

<?php

if ($a > $b) 
{ 
    echo "$a est plus grand que $b"; 
}

?>

<?php
if ($a > $b) { 
    echo "$a est plus grand que $b"; 
    
} 
else {
    echo "$a est moins grand que $b";
}

?>

</body>
</html>