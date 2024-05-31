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
                <img src="assets/img/food/pizza.jpg" assets class="img-fluid rounded-start" alt="pizza">
                <div class="card-body">
                  <h5 class="card-title">Pizza</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">De bonnes pizzas avec de bons ingrédients, mangez-en !</small>
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
                <img src="assets/img/food/salad1.png" class="img-fluid rounded-start" alt="Salade1">
                <div class="card-body">
                  <h5 class="card-title">Salade</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">ici le texte</small>
                  </p>
                </div>
              </div>
            </div>

        <!------->


      <div class="col-md-4">
          <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <img src="assets/img/category/asian_food_cat.jpg" class="img-fluid rounded-start" alt="asian_food">
            <div class="card-body">
                <h5 class="card-title">Plats chauds</h5>
                <p class="card-text"><small class="text-body-secondary">ici le texte</small>Sushi</p>
            </div>
          </div>
        </div>
        


        <!---------->

        <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="assets/img/food/pizza-salmon.png" class="img-fluid rounded-start" alt="pizza-salmon">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">Vegan</h5>
                <p class="card-text">pizza-salmon</p>
                <p class="card-text"><small class="text-body-secondary">ici le texte</small></p>
              </div>
            </div>
          </div>
        </div>





        <!--------->

        <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="assets/img/food/tagliatelles-au-saumon.jpeg" class="img-fluid rounded-start" alt="Pâtes">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title">Pâtes</h5>
                <p class="card-text">Tagliatelles</p>
                <p class="card-text"><small class="text-body-secondary">ici le texte</small></p>
              </div>
            </div>
          </div>
        </div>


        <!------->




        <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="" class="img-fluid rounded-start" alt="">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <p class="card-text"><small class="text-body-secondary">ici le texte</small></p>
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