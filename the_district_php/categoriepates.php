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

    <!-------Plats par catégorie: Pâtes-->




    
        <div class="container">

<div class="row">

<div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
        <img src="assets/img/food/tagliatelles-au-saumon.jpeg" class="img-fluid rounded-start" alt="tagliatelles">
                <div class="card-body">
                  <h5 class="card-title">Tagliatelles</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">Tagliatelles au saumon fumé</small>
                    <button type="button" class="btn btn-primary btn-sm">Commander</button>
                  </p>
                </div>
              </div>
            </div>

  <div class="col-md-4">
    <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
    <img src="assets/img/food/spaghetti-legumes.jpg" class="img-fluid rounded-start"  alt="Spaghettis">
      <div class="card-body">
        <h5 class="card-title">Spaghettis</h5>
        <p class="card-text">
          <small class="text-body-secondary">Spaghettis aux légumes</small>
          <button type="button" class="btn btn-primary btn-sm">Commander</button>
        </p>
      </div>
    </div>
  </div>

<div class="col-md-4">
  <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
    <img src="assets/img/food/lasagnes_viande.jpg" class="img-fluid rounded-start"  alt="Lasagnes">
    <div class="card-body">
      <h5 class="card-title">lasagnes_viande</h5>
      <p class="card-text">
        <small class="text-body-secondary">lasagnes_viande</small>
        <button type="button" class="btn btn-primary btn-sm">Commander</button>
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

<