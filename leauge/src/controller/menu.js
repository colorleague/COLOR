export default function($scope, $http, $state, $sce, $window) {

	$http.get('./data/timelines.json').success(function(response){
		$scope.timeline = response.records;
	});

$scope.trustSrc = function(src) {
    return $sce.trustAsResourceUrl(src);
  }
  
  	$scope.sendMail = function(emailId,subject,message,organization,number,jobs,frameworks,lengths,price){
    	$window.open("mailto:"+ emailId + "?subject=" + subject+"&body="+'Hello, my name is '+message+' and I work for '+organization+'. I am in need of a '+jobs+' who is experienced with '+frameworks+' '+lengths+'. My current budget is '+price +'. feel free to reach me at '+number +'. Thank you.',"_self");
    	$scope.sendMail($scope.projectfilter.email,$scope.projectfilter.name,$scope.projectfilter.fullname,$scope.projectfilter.organization,$scope.projectfilter.number,$scope.projectfilter.jobs,$scope.projectfilter.frameworks,$scope.projectfilter.lengths,$scope.projectfilter.price);
	};

	$http.get('./data/budgets.json').success(function(response) {
		$scope.budgets = response.records;
	});

	$http.get('./data/times.json').success(function(response){
		$scope.times = response.records;
	})


	var data = {
	    name: 'foo bar',
	    email: 'foo@bar.com'
	};

	$http.get('./data/frameworks.json')
		.success(function(response) {
			$scope.frameworks = response.records;
	});

	$http.get('./data/process.json')
		.success(function(response) {

			$scope.process = response.records;
			console.log($scope.process);

	});

  $scope.lastKey = "---"

  $scope.keypress = function($event) {
    $scope.lastKey = $event.keyCode

    // 1 key
    if ($scope.lastKey === 49) {
        $scope.startAnimation =  true;
        $scope.positionLight1lighton = true;
        $scope.positionLight1lightoff = false;
        $scope.playAudio();
    }

    // 2 key
    if ($scope.lastKey === 50) {
        $scope.startAnimation =  true;
        $scope.positionLight2lighton = true;
        $scope.positionLight2lightoff = false;
        $scope.playAudio();
    }

    // 3 key
    if ($scope.lastKey === 51) {
        $scope.startAnimation =  true;
        $scope.positionLight3lighton = true;
        $scope.positionLight3lightoff = false;
        $scope.playAudio();
    }

    // 4 key
    if ($scope.lastKey === 52) {
        $scope.startAnimation =  true;
        $scope.positionLight4lighton = true;
        $scope.positionLight4lightoff = false;
        $scope.playAudio();
    }

    // space key
    if ($scope.lastKey === 32) {
        $scope.playLift();
    }

    // enter key
    if ($scope.lastKey === 13) {
        $scope.startAnimation =  true;
        $scope.playAudio();
    }

    // left key
    if ($scope.lastKey === 37) {
    	$scope.resetstart();
        $scope.startAnimationLeft = true;
        $scope.playAudio();
    }

    // right key
    if ($scope.lastKey === 39) {
    	$scope.resetstart();
        $scope.startAnimationRight = true;
        $scope.playAudio();
    }

    // up key
    if ($scope.lastKey === 38) {
    	$scope.resetstart();
        $scope.startAnimationUnder = true;
        $scope.playAudio();
    }

    // down key
    if ($scope.lastKey === 40) {
    	$scope.resetstart();
        $scope.startAnimationOver = true;
        $scope.playAudio();
    }

    // esc key
    if ($scope.lastKey === 27) {
    	$scope.resetstart();
        $scope.playAudio();
    }
  };

    $scope.positionLight4light = function() {

        $scope.positionLight4lighton = !$scope.positionLight4lighton;
        $scope.positionLight4lightoff = !$scope.positionLight4lightoff;
    };

    $scope.playAudio = function() {
        var audio = new Audio('audio/beep.mp3');
        audio.play();
    };

    $scope.playLift = function() {
        var audio = new Audio('audio/lift.mp3');
        audio.play();
    };

    $scope.timelineinfoclose = function() {
        $parent.timelineinfo = false;
    };

    $scope.jobsswitch = {
		count: 0
	}

    $scope.jobsTitleFilter = function(x) {
        $scope.jobsswitch.count = x
    };

    // pages
	$scope.pages = [
        {name: 'start', category: 'Nut', directive: 'includes/office.html'},
        {name: 'finish', category: 'Nut', directive: 'svg/markyellow.html'},
        {name: 'who', category: 'Fruit', directive: 'includes/who.html'},
        {name: 'what', category: 'Fruit', directive: 'includes/what.html'},
        {name: 'when', category: 'Nut', directive: 'includes/when.html'},
        {name: 'where', category: 'Fruit', directive: 'includes/where.html'},
        {name: 'why', category: 'Nut', directive: 'includes/why.html'},
        {name: 'how', category: 'Nut', directive: 'includes/how.html'},
        {name: 'data', category: 'Nut', directive: 'includes/data.html'},
        {name: 'meta', category: 'Nut', directive: 'includes/meta.html'},
        {name: 'login', category: 'Nut', directive: 'includes/login.html'},
        {name: 'team', category: 'About', directive: 'includes/team.html'},
        {name: 'guide', category: 'About', directive: 'includes/guide.html'},
        {name: 'project', category: 'About', directive: 'includes/services.html'},
        {name: 'project', category: 'About', directive: 'includes/project.html'},
        {name: 'project', category: 'About', directive: 'includes/product.html'},
        {name: 'project', category: 'About', directive: 'includes/videos.html'},
        {name: 'project', category: 'About', directive: 'includes/process.html'},
        {name: 'help', category: 'About', directive: 'includes/help.html'},
        {name: 'about', category: 'About', directive: 'includes/about.html'},
        {name: 'team', category: 'team', directive: 'includes/about/team.html'},
        {name: 'services', category: 'services', directive: 'includes/about/services.html'},
        {name: 'timeline', category: 'timeline', directive: 'includes/about/timeline.html'},
        {name: 'brands', category: 'brands', directive: 'includes/about/brands.html'},
        {name: 'process', category: 'process', directive: 'includes/about/process.html'},
        {name: 'offices', category: 'offices', directive: 'includes/about/offices.html'},
        {name: 'servicedevelopment', category: 'servicedevelopment', directive: 'includes/services/development.html'},
        {name: 'servicedesign', category: 'servicedesign', directive: 'includes/services/design.html'},
        {name: 'servicecontent', category: 'servicecontent', directive: 'includes/services/content.html'},
        {name: 'servicestrategy', category: 'servicestrategy', directive: 'includes/services/strategy.html'},
        {name: 'serviceall', category: 'serviceall', directive: 'includes/services/all.html'}

    ];

    // post types
	$scope.posttype = [
        {name: 'empty', category: 'empty', directive: 'includes/post/empty.html'},
        {name: 'feature', category: 'Developer', directive: 'includes/post/dev.html'},
        {name: 'ui', category: 'Design', directive: 'includes/post/design.html'},
        {name: 'video', category: 'video', directive: 'includes/post/video.html'},
        {name: 'post', category: 'post', directive: 'includes/post/post.html'},
        {name: 'graphic', category: 'graphic', directive: 'includes/post/graphic.html'},
        {name: 'icons', category: 'icons', directive: 'includes/post/icons.html'},
        {name: 'product', category: 'product', directive: 'includes/post/product.html'}
    ];

	$scope.pagination = {
		count: 0
	}

	$scope.postination = {
		count: 0
	}

	$scope.projectination = {
		count: 3
	}

	$scope.testimonalindex = {
		count: 0
	}

	$scope.slider = {
		count: 0
	}

	$scope.testimonalindexToggle = function (x) {

		$scope.testimonalindex.count = $scope.testimonalindex.count + x

		if ($scope.testimonalindex.count <=  0) {
			$scope.testimonalindex.count = 0
		}
	}

	$scope.sliderToggle = function (x) {

		$scope.slider.count = $scope.slider.count + x

		if ($scope.slider.count <=  0) {
			$scope.slider.count = 0
		}
	}

	$scope.pagenumber = $scope.pages.length;

	console.log($scope.pages.length);

	$scope.projectinationToggle = function (x){
		$scope.projectination.count = $scope.projectination.count + 4
	};

	$scope.paginationToggle = function (x){
		$scope.pagination.count = x
	};

	$scope.postinationToggle = function (x){
		$scope.postination.count = x
	};

	$scope.postpreviewclose = function (){
		$parent.postpreview = false;
	};

	$scope.listholderreset = function() {
		$scope.listholderproduct = false,
		$scope.listholdernumber = false,
		$scope.listholdergrid = false,
		$scope.listholderlist = false,
		$scope.listholdercard = false,
		$scope.listholderfull = false
	};

	$scope.listholderresetproduct = function() {
		$scope.listholderreset(),
		$scope.listholderproduct = true
	};

	$scope.listholderresetnumber = function() {
		$scope.listholderreset(),
		$scope.listholdernumber = true
	};

	$scope.listholderresetgrid = function() {
		$scope.listholderreset(),
		$scope.listholdergrid = true
	};

	$scope.listholderresetlist = function() {
		$scope.listholderreset(),
		$scope.listholderlist = true
	};

	$scope.listholderresetcard = function() {
		$scope.listholderreset(),
		$scope.listholdercard = true
	};

	$scope.listholderresetfull = function() {
		$scope.listholderreset(),
		$scope.listholderfull = true
	};

	$scope.resetstart = function() {
		$scope.startAnimationOver = false,
		$scope.startAnimationUnder = false,
		$scope.startAnimationOverPreview = false,
		$scope.startAnimationUnderPreview = false,
		$scope.startAnimationLeft = false,
		$scope.startAnimationRight = false,
		$scope.startAnimationLeftPreview = false,
		$scope.startAnimationRightPreview = false,
		$scope.popclear = false,
		$scope.aboutpage = false
	}

	$scope.homestart = function() {
		$scope.homepage = true
	};

	$scope.resetsubstart = function() {
		$scope.previewservicecontrol = false
	}

	$scope.menustart = function() {
		$scope.menuOne = !$scope.menuOne
	}

	$scope.popstart = function() {
		$scope.popclear = !$scope.popclear;
	}

		$scope.foo = function() {
		console.log(this);
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

    $scope.sendPost = function() {
        var data = {name: 'Maisie kocher', age: 25};

		$http.post('http://rest.learncode.academy/api/nigel/friends', data)
			.success(function(data, status) {
				console.log(data);
	  	});

	};

	$http.get('./data/services.json').success(function(response) {
  			$scope.allservices = response.records
  			console.log($scope.allservices);
  		});

	$http.get('./data/jobs.json')
		.success(function(response) {

			$scope.jobs = response.records;
			console.log($scope.jobs);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	$http.get('./data/process.json')
		.success(function(response) {

			$scope.process = response.records;
			console.log($scope.process);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	$http.get('./data/tools.json')
		.success(function(response) {

			$scope.alltools = response.records;
			console.log($scope.alltools);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	$http.get('./data/data.json')
		.success(function(response) {

			$scope.data = response.records;
			console.log($scope.data);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	//categories
	$http.get('./data/meta.json')
		.success(function(response) {

			$scope.meta = response.categories;
			console.log($scope.data);

			var i = response.categories.length;
			for(i = 0; i < response.categories.length; i++) {
				console.log(response.categories[i])
			}
		});

	$http.get('./data/partners.json')
		.success(function(response) {

			$scope.partners = response.partners;
			console.log($scope.partners);

			var i = response.partners.length;
			for(i = 0; i < response.partners.length; i++) {
				console.log(response.partners[i])
			}
		});

	$http.get('./data/team.json')
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

	$scope.page = {
		title: 'home'
	}

	$scope.pageChange = function() {
		$scope.page.title = 'popup'
	};

	$scope.tabreset = function() {
		$scope.tab1 = false;
		$scope.tab2 = false;
		$scope.tab3 = false;
		$scope.tab4 = false;
	};

    $scope.filters = {};

    $scope.filterstag = function(x) {
    	$scope.filters.tag = x;
    }

    $scope.orderpiece = {option1:'views'};

    $scope.menuOne = [
        {name: 'Apple', category: 'Fruit'},
        {name: 'Pear', category: 'Fruit'},
        {name: 'Almond', category: 'Nut'},
        {name: 'Mango', category: 'Fruit'},
        {name: 'Cashew', category: 'Nut'}
    ];

    /*

    export default function($scope, $http, $state, $timeout, fromService, $location ) {

	$scope.moduler = "module";

	$scope.whatfilter = {
		category: ""
	};

	// ng includes  
    $scope.modules = [{
        url: "./whostart.html"        
    },
    {
        url: "./whatstart.html"        
    },
    {
        url: "./whenstart.html"        
    },
    {
        url: "./wherestart.html"        
    },
    {
        url: "./whystart.html"        
    },
    {
        url: "./howstart.html"        
    },
    {
        url: "./whatservice.html"        
    },
    {
        url: "./catstart.html"        
    },
    {
        url: "./subcatstart.html"        
    },
    {
        url: "./whowho.html"      // who - who - us  
    },
    {
        url: "./whowhat.html"      // 10 who - what - services  
    },
    {
        url: "./whowhen.html"      // who - when - products  
    },
    {
        url: "./whowhere.html"      // who - where - office  
    },
    {
        url: "./whowhy.html"      // who - why - team  
    },
    {
        url: "./whohow.html"      // who - how - process  
    },
    {
        url: "./whatcategory.html"        
    },
    {
        url: "./search.html"        
    },
    {
        url: "./blank.html"        
    },
    {
        url: "./whatdevelopment.html"  // 18      
    },
    {
        url: "./whatdesign.html"  // 19      
    },
    {
        url: "./whatcontent.html"  // 20      
    },
    {
        url: "./whatstrategy.html"  // 21      
    },
    {
        url: "./whatproject.html"  // 22      
    },
    {
        url: "./whatproduct.html"  // 23      
    },
    {
        url: "./whattag.html"  // 23      
    }];

	$scope.absUrl = $location.absUrl();

	$scope.post = "menu posts";

	$http.get('https://fathomless-forest-23046.herokuapp.com/contacts/')
		.success(function(response) {
			$scope.api = response;

			var i = response.length;

			for(i = 0; i < response.length; i++) {
				console.log(response[i])
			}
		});

	// home Switches
	$scope.homeSwitch = function(){
		$scope.popupstart = false;
		$scope.popuphalfstart = false;
		$scope.popuphalfvertstart = false;
		$scope.actualstart = false;
		$scope.sceneStartInactive = false,
		$scope.sceneStartInactiveLeft = false,
		$scope.sceneStartInactiveRight = false,
		$scope.sceneStart = true;
		$scope.contentOne = true;
	}

	// content Switches
	$scope.contentSwitch = function(){
		$scope.bgScene = true,
		$scope.bgSceneInactive = true,
		$scope.contentOne = false,
		$scope.contentTwo = false,
		$scope.contentThree = false,
		$scope.contentFour = false,
		$scope.contentFive = false,
		$scope.contentSix = false,
		$scope.contentOneInactive = false,
		$scope.contentTwoInactive = false,
		$scope.contentThreeInactive = false,
		$scope.contentFourInactive = false,
		$scope.contentFiveInactive = false,
		$scope.contentSixInactive = false,
		$scope.contentOneButton = false,
		$scope.contentTwoButton = false,
		$scope.contentThreeButton = false,
		$scope.contentFourButton = false,
		$scope.contentFiveButton = false,
		$scope.contentSixButton = false
	}

	//zak
	$scope.popupwhatSwitch = function(){
		$scope.popupwhat = !$scope.popupwhat
	}

	// menu Switches
	$scope.tabSwitch = function(){
		$scope.tab1 = false,
		$scope.tab2 = false,
		$scope.tab3 = false,
		$scope.tab4 = false,
		$scope.tab5 = false,
		$scope.tab6 = false,
		$scope.tab7 = false
	}

	// menu Switches
	$scope.menuUnder = function(){
		$scope.menuUnderWho = false,
		$scope.menuUnderWhat = false,
		$scope.menuUnderWhen = false,
		$scope.menuUnderWhere = false,
		$scope.menuUnderWhy = false,
		$scope.menuUnderHow = false
	}

	// Room Switches
	$scope.roomSwitch = function(){
		$scope.centerRoom = false,
		$scope.leftRoom = false,
		$scope.leftRoomFull = false,
		$scope.rightRoom = false,
		$scope.rightRoomFull = false
	}

	// Start Switches
	$scope.sceneStartSwitch = function(){
		$scope.sceneStartInactive = false,
		$scope.sceneStartInactiveLeft = false,
		$scope.sceneStartInactiveRight = false,
		$scope.sceneStart = false
	}

	$scope.sceneStartSwitchOn = function(){
		$scope.sceneStartSwitch(),
		$scope.sceneStart = true
	}

	$scope.sceneStartSwitchOff = function(){
		$scope.sceneStartSwitch(),
		$scope.sceneStartInactive = true
	}

	$scope.sceneStartSwitchOffLeft = function(){
		$scope.sceneStartSwitch(),
		$scope.sceneStartInactiveLeft = true
	}

	$scope.sceneStartSwitchOffRight = function(){
		$scope.sceneStartSwitch(),
		$scope.sceneStartInactiveRight = true
	}

	// Blog Switches
	$scope.blogSwitch = function(){
		$scope.blog1Inactive = false,
		$scope.blog1 = false
	}

	$scope.blogSwitchOn = function(){
		$scope.blogSwitch(),
		$scope.blog1Inactive = false,
		$scope.blog1 = true
	}

	$scope.blogSwitchOff = function(){
		$scope.blogSwitch(),
		$scope.blog1Inactive = true,
		$scope.blog1 = false
	}

	// Blog style Switches
	$scope.resetListStyle = function() {
		$scope.listStyleGrid = false,
		$scope.listStyleList = false,
		$scope.listStyleCard = false,
		$scope.listStyleNumber = false,
		$scope.listStyleProduct = false,
		$scope.listStyleFull = false
	}

	$scope.resetStart = function() {
		$scope.initStart = false,
		$scope.whoStart = false,
		$scope.whatStart = false,
		$scope.whenStart = false,
		$scope.whereStart = false,
		$scope.whyStart = false,
		$scope.howStart = false
	}

	$scope.allCategories = function() {
		$scope.categoryDevelopment = true;
		$scope.categoryDesign = true;
		$scope.categoryContent = true;
		$scope.categoryStrategy = true;
	}

	$scope.resetCategories = function() {
		$scope.categoryDevelopment = false;
		$scope.categoryDesign = false;
		$scope.categoryContent = false;
		$scope.categoryStrategy = false;
	}

	$(function() {
		$('#get-button').on('click', function() {
			console.log('yes');

			$.ajax({
				url: './data/data.json',
				contentType: 'application/json',
				success: function(response) {
					for (i = 0; i < response.records.length; i++) {
					console.log(response);
					}
				}
			})
		})
	})

	var i = 0;

	$scope.foo = function() {
		console.log(this);
	}

	console.log(fromService.message);
	$scope.$watch('watcher', function (newValue, oldValue){
		console.log(newValue);
		console.log(oldValue);
	});

	$scope.yup = function () {
		var switchUp = function() {
			$scope.menuOverLeftSwitch = !$scope.menuOverLeftSwitch
		}
		$timeout(switchUp, 250);
	}

	$scope.stateSwitch = function () {
	$state.go('animationtwo');

}

// new data 

 $scope.productcategories = [

	{name: 'react', category: 'Fruit'},
	{name: 'angular', category: 'Fruit'},
	{name: 'node', category: 'Nut'},
	{name: 'javascript', category: 'Fruit'},
	{name: 'css', category: 'Nut'},
	{name: 'seo', category: 'Nut'}

]
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

	// Pulling in team data
	$http.get('./data/team.json')
		.success(function(response) {

			$scope.team = response.records;
			console.log($scope.team);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	// Pulling in blog data
	$http.get('./data/blog.json')
		.success(function(response) {

			$scope.blog = response.records;
			console.log($scope.blog);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});


	// Pulling in project data
	$http.get('./data/meta.json')
		.success(function(response) {

			$scope.meta = response.records;
			console.log($scope.meta);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	// Pulling in product data
	$http.get('./data/metaproduct.json')
		.success(function(response) {

			$scope.metaproduct = response.records;
			console.log($scope.metaproduct);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	// Pulling in projects
	$http.get('./data/post.json')
		.success(function(response) {

			$scope.post = response.records;
			console.log($scope.post);

			var i = response.records.length;
			for(i = 0; i < response.records.length; i++) {
				console.log(response.records[i])
			}
		});

	// Pulling in projects
	$http.get('./data/products.json')
		.success(function(response) {

			$scope.products = response.records;
			console.log($scope.products);

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

	$scope.testimonal = {
		count: 0
	};

	$scope.testimonalToggle = function (){
		$scope.testimonal.count = $scope.testimonal.count + 1
	};

	$scope.testimonalToggleMinus = function (){
		$scope.testimonal.count = $scope.testimonal.count - 1
	};

	$scope.pagination = {
		count: 3
	};

	$scope.paginationToggle = function (){
		$scope.pagination.count = $scope.pagination.count + 4
	};

	$scope.paginationToggleReset = function (){
		$scope.pagination.count = 4
	};

	$scope.whocount = 17;

	$scope.whotoggle = function (x){
		$scope.whocount = x
	};

	$scope.page = {
		title: 'home'
	}

	$scope.pageChange = function() {
		$scope.page.title = 'popup'
	};

	$scope.orderStyle = {
    	target: '-title'
    }

	$scope.orderStyleChange = function(x) {
		$scope.orderStyle.target = x
	};


    $scope.newfilters = {};

    $scope.newfilters = {
    	category: 'Development'
    };

   	$scope.filternewsubfilters = function(x){
   		$scope.newfilters = {},
		$scope.newfilters.subcategory = x
	}

   	$scope.filternewfilters = function(x){
   		$scope.newfilters = {},
		$scope.newfilters.category = x
	}

    $scope.filters = {};


    $scope.filterscategory = {
    	subcategory: 'Angular'
    }

   	$scope.filterByCategory = function(x){
   		$scope.filters = {},
		$scope.filters.category = x
	}

   	$scope.filterBySubCategory = function(x){
   		$scope.filters = {},
		$scope.filters.subcategory = x
	}

    $scope.firstcategory = {
    	subcategory: 'javascript'
    }


    $scope.category = [
        {
		name :"javascript",
		post: 1,
		subs :[
			{
			name: "angular",
			post: 1
			},
			{
			name: "react",
			post: 1
			},
			{
			name: "meteor",
			post: 1
			},
			{
			name: "mongo",
			post: 1
			}],

		tags :[
			{
			name: "tag1",
			post: 1
			},
			{
			name: "tag2",
			post: 1
			},
			{
			name: "tag3",
			post: 1
			},
			{
			name: "tag4",
			post: 1
			}]
	},
	{
		name :"front-end",
		post: 1,
		subs :[
			{
			name: "angular",
			post: 1
			},
			{
			name: "react",
			post: 1
			},
			{
			name: "meteor",
			post: 1
			},
			{
			name: "mongo",
			post: 1
			}],

		tags :[
			{
			name: "tag1",
			post: 1
			},
			{
			name: "tag2",
			post: 1
			},
			{
			name: "tag3",
			post: 1
			},
			{
			name: "tag4",
			post: 1
			}]
	}
    ];

    // content Switches
	$scope.filterName = function(){

		$scope.filters.title = "Using Angular";

	}

    $scope.menuOne = [
        {name: 'Apple', category: 'Fruit'},
        {name: 'Pear', category: 'Fruit'},
        {name: 'Almond', category: 'Nut'},
        {name: 'Mango', category: 'Fruit'},
        {name: 'Cashew', category: 'Nut'}
    ];

}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 500) {
        $(".floorSvg").addClass("darkHeader");
    } else {
        $(".floorSvg").removeClass("darkHeader");
    }
});
*/


}