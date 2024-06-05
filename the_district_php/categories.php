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

    <!-------catégories_plats-->








  
    
        <div class="container">

          <div class="row">

            <div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <a href="categoriepizza.php">  <img src="assets/img/food/pizza.jpg" assets class="img-fluid rounded-start" alt="pizza"></a>
                <div class="card-body">
                  <h5 class="card-title">Pizza</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">De bonnes pizzas , regalez-vous!</small>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <a href="categoriesalade.php"> <img src="assets/img/food/salad1.png" class="img-fluid rounded-start" alt="Salade1"></a>
                <div class="card-body">
                  <h5 class="card-title">Salade</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">Salade Cesar</small>
                  </p>
                </div>
              </div>
            </div>

          <div class="col-md-4">
            <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
            <a href="categorieasiatique.php">    <img src="assets/img/category/asian_food_cat.jpg" class="img-fluid rounded-start" alt="asian_food"></a>
              <div class="card-body">
                <h5 class="card-title">cuisine asiatique</h5>
                <p class="card-text"><small class="text-body-secondary"></small>Sushi</p>
              </div>
            </div>
          </div>
        


        <!------->

        <div class="row">

          <div class="col-md-4">
            <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
            <a href="categoriesandwich.php">    <img src="assets/img/category/sandwich_cat.jpg" class="img-fluid rounded-start" alt="sandwichs"> </a>   
              <div class="card-body">
                <h5 class="card-title">Sandwichs</h5>
                <p class="card-text"><small class="text-body-secondary">Des trucs entre deux tranches de pain.</small></p>
              </div>
            </div>
          </div>
        

          <div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <a href="categoriepates.php">   <img src="assets/img/category/pasta_cat.jpg" class="img-fluid rounded-start" alt="Pâtes"></a>
                <div class="card-body">
                  <h5 class="card-title">Pâtes</h5>
                  <p class="card-text"><small class="text-body-secondary">Des pâtes au brocoli</small></p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <a href="categorieburger.php">    <img src="assets/img/category/burger_cat.jpg" class="img-fluid rounded-start" alt="burger"></a>
                <div class="card-body">
                <h5 class="card-title">burger</h5>
                <p class="card-text"><small class="text-body-secondary">De la salade et un bon steak hache</small></p>
              </div>
            </div>
          </div>



          div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <a href="categorieveggie.php">    <img src="assets/img/category/veggie_cat.jpg" class="img-fluid rounded-start" alt="veggie"></a>
                <div class="card-body">
                <h5 class="card-title">Veggie</h5>
                <p class="card-text"><small class="text-body-secondary">Veggie</small></p>
              </div>
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