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

    <!-------Plats par catégorie: salades -->




    
        <div class="container">

<div class="row">

<div class="col-md-4">
              <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
              <a href=""> <img src="assets/img/food/salad1.png" class="img-fluid rounded-start" alt="Salade1"></a>
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
      <img src="assets/img/food/cesar_salad.jpg" class="img-fluid rounded-start"  alt="Salade1"></a>
      <div class="card-body">
        <h5 class="card-title">Salade</h5>
        <p class="card-text">
          <small class="text-body-secondary">Salade au poulet</small>
        </p>
      </div>
    </div>
  </div>

<div class="col-md-4">
  <div class="card mb-3 mx-5 col-md-6" style="max-width: 540px;">
    <img src="assets/img/food/salade_composee_authon(1).jpeg" class="img-fluid rounded-start"  alt="Salade1"></a>
    <div class="card-body">
      <h5 class="card-title">Salade</h5>
      <p class="card-text">
        <small class="text-body-secondary">Salade composée au thon</small>
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