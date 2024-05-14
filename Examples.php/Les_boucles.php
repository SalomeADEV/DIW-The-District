<!DOCTYPE html>
<html lang="en">
<body>
    
<?php

/*

for ($a = 1; $a < 10; $a++) {       
    echo $a; 
}

//

foreach ($tableau as $element){

    echo $element;
}

//

$a = 1; 
while ($a < 10) { 
    echo $a; 
    $a++; 
} 
 
//

$a = 100; 

do { 
    echo $a; 
} while ($a > 0); 

//

$a = 100; 

do { 
    if ($a < 5) { 
        echo "a inférieur à 5"; 
        break; 
    } 
    if ($a >= 5){
        echo $a;
        $a = $a -1 ;
        echo "<br>";
    }
} while ($a > 75); 


echo "<br>";

for ($i = 0; i < 500; i++){
    echo "Je dois faire des sauvegardes régulières de mes fichiers"
}
*/


?>
   
   

   <table>
  <caption>
    Au Boulot !!!!
  </caption>
  <thead>
    <tr>
      <th scope="col">0</th>
      <th scope="col">1</th>
      <th scope="col">2</th>
      <th scope="col">3</th>
      <th scope="col">4</th>
      <th scope="col">5</th>
      <th scope="col">6</th>
      <th scope="col">7</th>
      <th scope="col">8</th>
      <th scope="col">9</th>
    </tr>
  </thead>
  <tbody>
    <?php 
    for ($i=1;$i<10;$i++)
    {
    ?>
    <tr>
      <th scope="row"><?php echo($i); ?></th>
      <td><?php echo($i * 1); ?></td>
      <td><?php echo($i * 2); ?></td>
      <td><?php echo($i * 3); ?></td>
      <td><?php echo($i * 4); ?></td>
      <td><?php echo($i * 5); ?></td>
      <td><?php echo($i * 6); ?></td>
      <td><?php echo($i * 7); ?></td>
      <td><?php echo($i * 8); ?></td>
      <td><?php echo($i * 9); ?></td>
    </tr>
    <?php 
    }
    ?>
  </tbody>
</table>









</body>
</html>