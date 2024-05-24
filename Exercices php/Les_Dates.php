<!DOCTYPE html>
<html lang="en">
<body>
   Test1
<br>
<?php

echo "Nous sommes le " . date("d/m/Y");
"<br>"
?>
<!--------------->

<br>
Test2
<br>
<?php 

// $macolonne_sql est issue d'une requête SQL; avec pour valeur 2018-11-16 11:26:51 (parexemple)
$oDate = new DateTime($macolonne_sql);
echo $oDate->format("d/m/Y H:h:i");

?>
<!--------------->
<br>
Test3

<!--------------->

<?php

$dateTime = DateTime::createFromFormat('m/d/Y', $date);

$errors = DateTime::getLastErrors();

if (!empty($errors['warning_count'])) 
{
   return FALSE;
}
?>

<!-------------->


<br>
Exercice1


<?php  
$dateexo = new DateTime("14-07-2019");
echo $dateexo->format("d/m/y")."=>".$dateexo->format("W");

$datefindemodule = new DateTime("07-06-2024 UTC");
$dateactuelle = new DateTime(date("Y-m-d"));
$ecart = $dateactuelle->diff($datefindemodule);
echo "<br>".$ecart->format("%a");
if($dateactuelle->format("L")) {
    echo "cette année est bissextile";
}
else{
    echo "cette année n'est pas bissextile";
}
echo "<br>";
 
//$plouf = checkdate(17, 32, 2019);
 $plouf = false;
   if ($plouf)
   {
    echo "la date (32/17/2019) est valide";
   }
    else
    {
        echo "la date est erronée";
        //"la date 32/17/2019 n'existe pas"; 
    }

//11h25

echo ("H:i:");

//
/*
$today = DateTime::createFromFormat("d/m/Y");
$date->add(new DateInterval('P12M'));
echo $date->format('Y-m-d');

//date_timestamp_set(1000200000);
*/
echo "<br><br><br>";


$today = getdate();
echo($today['hours'].":".$today['minutes']);
echo "<br><br><br>";
var_dump($today);

 ?>


</body>
</html>