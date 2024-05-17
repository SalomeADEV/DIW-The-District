<!DOCTYPE html>
<html lang="en">
<body>
 <!---------->
   <?php

   $mois=array(
   "janvier"=>"31 jours",
   "fevrier"=>"28 jours",
   "mars"=>"31 jours", "avril" =>"30 jours",
   "mai" =>"31 jours", "juin"=> "30 jours",
   "juillet" => "31 jours","août" => "31 jours",
   "septembre" => "30 jours", "octobre" => "31 jours",
   "novembre" => "30 jours", "décembre" => "31 jours");

   $mois2 = array("février", "avril", "juin", "septembre", "novembre");

   foreach($mois2 as $nomMois) {
       echo $nomMois."<br>";
   }
   
   echo "<br><br>";


   arsort($mois);
   
   foreach($mois as $nomMois => $nbJours) {
       echo $nomMois . "=>" . $nbJours . "<br>";
   }
   ?> 
 <!------------>
   

   <?php
   echo "<br>";
    $capitales=array(
    "Bucarest"=>"Roumanie",
    "Bruxelles" => "Belgique",
    "Oslo" => "Norvège",
    "Ottawa" => "Canada",
    "Paris" => "France",
    "Port-au-Prince" => "Haïti",
    "Port-d'Espagne" => "Trinité-et-Tobago",
    "Prague" => "République tchèque",
    "Rabat" => "Maroc",
    "Riga" => "Lettonie",
    "Rome" => "Italie",
    "San José" => "Costa Rica",
    "Santiago" => "Chili",
    "Sofia" => "Bulgarie",
    "Alger" => "Algérie",
    "Amsterdam" => "Pays-Bas",
    "Andorre-la-Vieille" => "Andorre",
    "Asuncion" => "Paraguay",
    "Athènes" => "Grèce",
    "Bagdad" => "Irak",
    "Bamako" => "Mali",
    "Berlin" => "Allemagne",
    "Bogota" => "Colombie",
    "Brasilia" => "Brésil",
    "Bratislava" => "Slovaquie",
    "Varsovie" => "Pologne",
    "Budapest" => "Hongrie",
    "Le Caire" => "Egypte",
    "Canberra" => "Australie",
    "Caracas" => "Venezuela",
    "Jakarta" => "Indonésie",
    "Kiev" => "Ukraine",
    "Kigali" => "Rwanda",
    "Kingston" => "Jamaïque",
    "Lima" => "Pérou",
    "Londres" => "Royaume-Uni",
    "Madrid" => "Espagne",
    "Malé" => "Maldives",
    "Mexico" => "Mexique",
    "Minsk" => "Biélorussie",
    "Moscou" => "Russie",
    "Nairobi" => "Kenya",
    "New Delhi" => "Inde",
    "Stockholm" => "Suède",
    "Téhéran" => "Iran",
    "Tokyo" => "Japon",
    "Tunis" => "Tunisie",
    "Copenhague" => "Danemark",
    "Dakar" => "Sénégal",
    "Damas" => "Syrie",
    "Dublin" => "Irlande",
    "Erevan" => "Arménie",
    "La Havane" => "Cuba",
    "Helsinki" => "Finlande",
    "Islamabad" => "Pakistan",
    "Vienne" => "Autriche",
    "Vilnius" => "Lituanie",
    "Zagreb" => "Croatie");

   asort($capitales);

   foreach($capitales as $ville=>$pays){
    echo $pays."=>".$ville."<br>";
   }

   echo "<br><br>";
   ksort($capitales);

   foreach($capitales as $ville=>$pays){
        if ($ville[0] != 'D'){
            echo $ville."=>".$pays."<br>";
        }
   }
  ?>
</body>
</html>