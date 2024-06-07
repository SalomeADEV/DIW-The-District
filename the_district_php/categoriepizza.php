<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>The District categories </title>
</head>

<body>


  <!-- ici mon header -->

  <?php
  require_once('header.php')
  ?>

    <!-------Plats par catégorie: Pizzas -->




    
        <div class="container">

<div class="row">

  <div class="col-md-4">
    <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
 <img src="assets/img/food/pizza.jpg" assets class="img-fluid rounded-start" alt="pizza">
      <div class="card-body">
        <h5 class="card-title">Pizza_Margharita</h5>
        <p class="card-text">
          <small class="text-body-secondary">De bonnes pizzas , regalez-vous!</small>
          <a href="cdesthedistrict.php"class="btn btn-primary btn-sm">Commander</a>
        </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
      <img src="assets/img/menu-pizza.jpg" class="img-fluid rounded-start" alt="menu_pizza">
      <div class="card-body">
        <h5 class="card-title">Pizza</h5>
        <p class="card-text">
          <small class="text-body-secondary">pizza au basilic</small>
          <a href="cdesthedistrict.php" class="btn btn-primary btn-sm">Commander</a>
        </p>
      </div>
    </div>
  </div>

<div class="col-md-4">
  <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
    <img src="assets/img/pizza1.jpg" class="img-fluid rounded-start" alt="pizza">
    <div class="card-body">
      <h5 class="card-title">Pizza</h5>
      <p class="card-text"><small class="text-body-secondary">Pizza_oignons_pomme de terre</small>Pizza</p>
      <a href="cdesthedistrict.php" class="btn btn-primary btn-sm">Commander</a>
    </div>
  </div>
</div>






  <?php
  require_once("footer.php");
  ?>


  <!-- script bootstrap et JS -->

  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>

  <!-- <script src="assets/js/script.js"></script> -->




</body>

</html>