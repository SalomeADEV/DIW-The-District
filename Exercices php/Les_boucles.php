<!DOCTYPE html>
<html lang="en">
<body>
  
<?php 

for ($i=1; $i<150; $i = $i+2)
{
    if($i%2 ==1) //if the reminder after division $i by 2 is 1
    {
        echo $i; 
    }
}
?>

<!---------->
/*
$index =0;

while (True) 
{
    $index = $index+1;
    
    if ($index > 500)
    {
        break;
    }

    echo "Je dois faire des sauvegardes régulières de mes fichiers";
}
*/
<!--------> 


<?php

for ($i=1;$i<10;$i++)
{

    <th scope="row"><?php echo($i);?></th>

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
  
} -->

?>







</body>
</html>