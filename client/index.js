(function(){
  'use strict';

  angular.module('zombie-pets', [])
  .controller('MainController', ['$scope', function($scope){
    $scope.title = 'Zombie Pets';

    $scope.weapon = {};
    $scope.weapons = [];
    $scope.pet = {health:100};
    $scope.pets = [];

    $scope.player1 = null;
    $scope.player2 = null;

    $scope.fight = function(){
      $scope.turn = (Math.floor(Math.random() * 2) ? [$scope.player1, $scope.player2] : [$scope.player2, $scope.player1]);

      $scope.attack($scope.turn[0], $scope.turn[1]);
      $scope.attack($scope.turn[1], $scope.turn[0]);
    };

    $scope.attack = function(att, def){
      var power = (att.health === 'zombie!') ? 3 : att.weapon.damage;
      if(def.health !== 'zombie!'){def.health -= Math.floor((Math.random() * power) + 1);}

      if(def.health < 0){def.health = 'zombie!';}
    };

    $scope.addWeapon = function(){
      $scope.weapons.push($scope.weapon);
      $scope.weapon = {};
      $('#name').focus();
    };

    $scope.addPet = function(){
      var index = $scope.pet.weapon * 1;
      $scope.pet.weapon = $scope.weapons[index];

      $scope.pets.push($scope.pet);

      $scope.pet = {health:100};
      $('#petname').focus();
    };

    $scope.setPlayer = function(num){
      $scope['player' + num] = this.p;
    };

    $scope.toggleWeapon = function(){
      $scope.hideWeapon = !!!$scope.hideWeapon;
    };

    $scope.togglePet = function(){
      $scope.hidePet = !!!$scope.hidePet;
    };
  }]);
})();

