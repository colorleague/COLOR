export default function($scope, $http, $state ) {

	$scope.foo = function() {
		console.log(this);
	}

	// landing popup close
	$scope.popupclose = function() {
		$scope.popup19 = false,
		$scope.popup20 = false,
		$scope.popup21 = false,
		$scope.popup22 = false,
		$scope.logoOutSwitch = false
	}

	$scope.showParentheader = function(id) {
    	return  ! (popup19 === true || popup20 === true || popup21 === true || popup22 === true);
 	}

	$scope.foo();

	// init

	$scope.toggleForMenu = true;

	$scope.popup = false;

	$http.get('http://api.colorleague.com/wp-json/posts')
	.success(function(response){
		$scope.wordpress = response;
		console.log(response)
	});

	$http.get('http://api.colorleague.com/wp-json/posts/70/comments')
	.success(function(response){
		$scope.wpcomments = response;
		console.log(response)
	});

    $scope.sendPost = function() {
        var data = {name: 'Maisie kocher', age: 25};

		$http.post('http://rest.learncode.academy/api/nigel/friends', data)
			.success(function(data, status) {
				console.log(data);
	  	});

	};

	$http.get('./data/data.json')
		.success(function(response) {

			$scope.team = response.records;
			console.log($scope.team);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	$http.get('http://rest.learncode.academy/api/nigel/friends')
		.success(function(response) {
			$scope.api = response;

			var i = response.length;

			for(i = 0; i < response.length; i++) {
				console.log(response[i])
			}
		});

	$scope.pagination = {
		count: 3
	};

	$scope.paginationToggle = function (){
		$scope.pagination.count = $scope.pagination.count + 4
	};

	$scope.paginationToggleReset = function (){
		$scope.pagination.count = 3
	};


	$scope.page = {
		title: 'home'
	}

	$scope.pageChange = function() {
		$scope.page.title = 'popup'
	};

    $scope.filters = { };

    $scope.menuOne = [
        {name: 'Apple', category: 'Fruit'},
        {name: 'Pear', category: 'Fruit'},
        {name: 'Almond', category: 'Nut'},
        {name: 'Mango', category: 'Fruit'},
        {name: 'Cashew', category: 'Nut'}
    ];

}