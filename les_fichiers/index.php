

<?php 

$myvar = "Bonjour le monde 2\n";
$fp = fopen("essai.txt", "a");
fputs($fp,$myvar);
fclose($fp);

?>

<?php 
// Ouverture en lecture seule  
$fp = fopen("essai.txt", "r"); 

// Boucle jusqu'à la fin du fichier
while (!feof($fp)) 
{ 
    // Lecture d'une ligne, le contenu de la ligne est affecté à la variable $ligne  
    $ligne = fgets($fp, 4096); 
    echo $ligne."<br>"; 
} 
?>

