<!DOCTYPE html>
<html lang="en">
<body>

Test

 
<?php


function bonjour($prenom, $nom)

{
   echo "Bonjour ".$prenom." ".$nom;
}


bonjour ("Dave", "LOPER");
 ?>

<br>

 <!------------->
   F. Globale

  <?php 
$a = $b = 2; 

function somme() { 
  global $a, $b; 
  $b = $a + $b; 
} 

somme(); 

echo $b."<br>";  

?>
<!----------->

<?php  

function Test() { 
   $a=0; 
   echo $a."<br>"; 
   $a++; 
} 

// Appel de la fonction (2 fois)
Test(); 
Test(); 
?>
<!----------->

<?php  
function Test1 () 
{ 
   static $a=0; 
   echo "$a<br />"; 
   $a++;
} 

// Appel de la fonction (3 fois)
Test1(); 
Test1(); 
Test1(); 
?>
<!-------------->

Exercice

<?php 
function lien($url, $libelle) {
   echo '<a href="' . $url . '">' . $libelle . '</a>';
}
?>

<br>

<?php lien('https://www.free.fr', 'Free'); ?>
<br>
<?php lien('https://www.google.com', 'Google'); ?>

<br>

<?php 
   function sum($tab){
      $s = 0;
      foreach ($tab as $value) {
         // echo "$value $s <br>";
         $s += $value;
      }
      return $s;
   }
?>

<?php
 $tab = array(4, 3, 8, 2, 8, 5);
 $resultat = sum($tab);
 echo $resultat;
?>
<br>

<?php 
function multiply($tab){

   $resultat = 1;
   foreach($tab as $element){
      echo "r = $resultat  element = $element r * element = $resultat * $element <br>";
      $resultat = $element * $resultat;
      // $m *= $element;

   }
   return $resultat;
}
?>
<?php
  $resultat = multiply($tab);
  echo $resultat;
?>
<?php
// Pour vérifier une expression régulière : preg_match(regex, chaîne)
// Exemple :
// $regex = '/[a-z]{1}/'
// preg_match($regex, "chaîne");
// 1 ou true

// Pour obtenir la longueur d'une chaîne : strlen(chaîne)
// Exemple
// strlen("ABCDEF");
// 6

?>
<br>
<?php 

$resultat = complex_password("TopSecret42");
$regex = '/[a-z]{1}/';
$regex = '/[0-9]{1}/';
preg_match ($regex, "chaîne");
echo true;

?>


</body>
</html>