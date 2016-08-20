app.controller('ResourceController', function($scope, Local) {
  var locais = Local.query(function() {
    //console.log(locais);
  });
  $scope.espacos = locais;
});

app.controller('LocalUnicoController',function($scope, LocalEspecifico) {
  $scope.id=1;
  var entry = LocalEspecifico.get({ id: $scope.id }, function() {
    //console.log(entry);
  });
  $scope.espaco = entry;
});

app.controller('ReviewsLocalController', function($scope, ReviewsLocal){
  $scope.id=1;
  var reviews = ReviewsLocal.query({ id: $scope.id }, function() {
    //console.log(reviews);
  });
  $scope.espaco = reviews;
});

app.controller('BuscaTagsController', function($scope, BuscaTags){
  $scope.nome='mesa de bilhar';
  $scope.endereco='_';
  $scope.bairro='_';
  $scope.cidade='_';
  $scope.estado='_';
  $scope.pais='_';
  $scope.tag='_';


  $scope.pesquisarTags = function() {
    var reviews = BuscaTags.query({ id: $scope.id ,nome: $scope.nome, endereco: $scope.endereco, bairro: $scope.bairro, cidade: $scope.bairro, estado: $scope.estado, pais: $scope.pais, tags: $scope.tag }, function() {
      //nome, endereco, bairro, cidade, estado, pais, tag(separado por virgulas)
      console.log(reviews);
    });
      $scope.espaco = reviews;
  };
});
