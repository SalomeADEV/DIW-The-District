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

    <!-------Plats par catégorie: Asiatique-->




    
        <div class="container">

<div class="row">

<div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
        <img src="assets/img/food/asiat1.jpeg" class="img-fluid rounded-start" alt="Asiatique">
                <div class="card-body">
                  <h5 class="card-title">Asiatique</h5>
                  <p class="card-text">
                    <small class="text-body-secondary">Nouilles au boeuf</small>
                    <a href="cdesthedistrict.php" class="btn btn-primary btn-sm">Commander</a>
                  </p>
                </div>
              </div>
            </div>

  <div class="col-md-4">
    <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
    <img src="assets/img/food/asiat2.jpeg" class="img-fluid rounded-start"  alt="Asiatique">
      <div class="card-body">
        <h5 class="card-title">Asiatique</h5>
        <p class="card-text">
          <small class="text-body-secondary">Rouleaux de printemps</small>
          <a href="cdesthedistrict.php"class="btn btn-primary btn-sm">Commander</a>
        </p>
      </div>
    </div>
  </div>

<div class="col-md-4">
  <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
    <img src="assets/img/food/asiat4.jpeg" class="img-fluid rounded-start"  alt="Asiatique">
    <div class="card-body">
      <h5 class="card-title">Asiatique</h5>
      <p class="card-text">
        <small class="text-body-secondary">Nems et beignets de crevettes</small>
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

<