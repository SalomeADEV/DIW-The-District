<!DOCTYPE html>
<html lang="en">
   
<body>
    
Tests
 Tableau simple
<!------->
<?php 
    $tableau = array(); // instruction optionnelle
    $tableau[0] = "Pomme"; 
    $tableau[1] = "Poire"; 
    $tableau[2] = "Banane"; 
    var_dump($tableau);
?>
<!------->


Tableau simple 
<!------->
<?php 

$tableau = array("Pomme", "Poire", "Banane"); 
?>
<!------->


Tableaux à plusieurs dimensions
<!------->
<?php
$tab1[] = array(1, "janvier", "2016"); 
$tab1[] = array(2, "février", "2017"); 
$tab1[] = array(3, "mars", "2018"); 
$tab1[] = array(4, "avril", "2019");
var_dump($tab1);
?>
<!------>


<!------->
<?php 
// Affiche : 3 mars 2018
echo $tab1[2][0]." ".$tab1[2][1]." ".$tab1[2][2]."<br>"; 
?>
<!------>

Tableau associatif
<!--------->
<?php 
$facture[0] = 500; //représente Janvier 
$facture[1] = 620; //représente Février 
//$..........; 
$facture[11]= 300; //représente Décembre <br>

?>
<!------>


 Manipulation des tableaux associatifs
<!-------->
<?php
 $facture = array("Janvier"=>500, "Février"=>620, "Mars"=>300, "Avril"=>130, "Mai"=>560, "Juin"=>350); 
    $facture_sixmois=0; 

    foreach ($facture as $mois => $valeur) 
    { 
       echo "Facture du mois de $mois : $valeur Euros<br />"; 
       $facture_sixmois +=$valeur; 
    } 

    echo "Facture total de six mois : <b>$facture_sixmois Euros</b>"; 
    ?> 
    <br>
 <!---------->
La fonction sort() : tri alphabétique ou numérique d'un Tableau
<?php
$nom = array("franck","laurent","caroline","magali","veronique");   
sort($nom);

for ($nb1=0;$nb1<=count($nom)-1; $nb1++) 
{
   echo "$nom[$nb1]<br>";
}
?>
<!---------->

La fonction rsort(array) : tri décroissant d'un tableau

<?php 

$nom = array("franck","laurent","caroline","magali","veronique");
rsort($nom);

for ($nb1=0;$nb1<=count($nom)-1; $nb1++) 
{
   echo "$nom[$nb1]<br>";
}
?>
<!----------->
La fonction asort() : tri décroissant sur un tableau associatif
<?php
$tableau = array("a" => "Lundi",
                 "b" => "Mardi",
                 "c" => "Mercredi",
                 "d" => "Jeudi",
                 "e" => "Vendredi"
            ); 

foreach($tableau as $cle => $valeur) 
{ 
   echo $cle ." : ".$valeur."<br>"; 
}
?>

La fonction arsort() : tri décroissant sur un tableau associatif
<?php 
$tableau = array("a" => "Lundi",
"b" => "Mardi",
"c" => "Mercredi",
"d" => "Jeudi");

foreach($tableau as $cle => $valeur) 
{ 
echo $cle ." : ".$valeur."<br>"; 
} 

?>
<!---------->
La fonction count() = la fonction sizeof() : retourne le nombre d'éléments d'un tableau<br>
<?php
$tableau = array("Lundi","Mardi","Mercredi", "Jeudi", "Vendredi"); 
$nb = count($tableau); 
echo"Le tableau contient ".$nb." éléments."; 
?>
<br>
<!---------->

La fonction array_push(), la fonction array_pop() : 
ces 2 instructions permettent d'ajouter et d'extraire un élément à la fi du tableau

<?php

$tableau = array("Lundi","Mardi","Mercredi","Jeudi"); 
array_push($tableau, "Vendredi"); 


$tableau = array("Lundi","Mardi","Mercredi"); 
$jour = array_pop($tableau); 

?>



</body>
</html>