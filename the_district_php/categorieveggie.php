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
     <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
       <img src="assets/img/category/veggie_cat.jpg" assets class="img-fluid rounded-start" alt="salade vegan">
       <div class="card-body">
        <h5 class="card-title">Salade vegan</h5>
        <p class="card-text">
          <small class="text-body-secondary">Salade vegan</small>
          <a href="cdesthedistrict.php" class="btn btn-primary btn-sm">Commander</a>
         </p>
      </div>
    </div>
  </div>

  <div class="col-md-4">
    <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
   <img src="assets/img/food/asiat3.jpeg"assets class="img-fluid rounded-start" alt="ravioli à la vapeur">
      <div class="card-body">
        <h5 class="card-title"></h5>
        <p class="card-text">
          <small class="text-body-secondary">Ravioli à la vapeur</small>
          <a href="cdesthedistrict.php" class="btn btn-primary btn-sm">Commander</a>
          
        </p>
      </div>
    </div>
  </div>

<div class="col-md-4">
  <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
  <img src="assets/img/Team_Restau/okok.jpg" class="img-fluid rounded-start" alt="okok_manioc">
    <div class="card-body">
      <h5 class="card-title">okok_manioc</h5>
      <p class="card-text"><small class="text-body-secondary">okok_manioc</small>
      <a href="cdesthedistrict.php" class="btn btn-primary btn-sm">Commander</a>
    </p>
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