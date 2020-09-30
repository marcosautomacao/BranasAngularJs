angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, $http) {
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.operadoras = [];

	var carregarContatos = function () {
		$http.get("http://localhost:3000/contatos").then(function (data) {
			$scope.contatos = data.data;
		}).catch(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data;
		});
	};

	var carregarOperadoras = function () {
		$http.get("http://localhost:3000/operadoras").then(function (data) {
			$scope.operadoras = data.data;
        })		
        .catch(function (data, status) {
			$scope.message = "Aconteceu um problema: " + data.data;
		});
	};

	$scope.adicionarContato = function (contato) {
		contato.data = new Date();
		$http.post("http://localhost:3000/contatos", contato).then(function (data) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			carregarContatos();
		});
	};
	$scope.apagarContatos = function (contatos) {
		$scope.contatos = contatos.filter(contato => !contato.selecionado);
    };

	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(contato => contato.selecionado);
    };
    
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	};

	carregarContatos();
	carregarOperadoras();
});