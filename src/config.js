import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menuController from 'controller/menu';

// Initalizing Angular App
const app = angular.module('app', [uiRouter]);

// svg directives
app.directive("logo", function(){
	return {
    restrict: 'E',
    template: require('svg/logo/full.html')
	}
});

app.directive("logoalt", function(){
  return {
    restrict: 'E',
    template: require('svg/logo/fullalt.html')
  }
});

app.directive("logoaltwhite", function(){
  return {
    restrict: 'E',
    template: require('svg/logo/fullaltwhite.html')
  }
});

app.directive("logoshort", function(){
  return {
    restrict: 'E',
    template: require('svg/logo/fullshort.html')
  }
});

app.directive("logoshortwhite", function(){
  return {
    restrict: 'E',
    template: require('svg/logo/fullshortwhite.html')
  }
});

app.directive("lady", function(){
  return {
    restrict: 'E',
    template: require('svg/objects/lady.html')
  }
});

app.directive("man", function(){
  return {
    restrict: 'E',
    template: require('svg/objects/man.html')
  }
});

app.directive("desk", function(){
  return {
    restrict: 'E',
    template: require('svg/objects/desk.html')
  }
});


app.directive("ipadline", function(){
  return {
    restrict: 'E',
    template: require('svg/objects/ipadline.html')
  }
});

app.directive("ipadlineon", function(){
  return {
    restrict: 'E',
    template: require('svg/objects/ipadlineon.html')
  }
});

app.directive("ipadlinewhite", function(){
  return {
    restrict: 'E',
    template: require('svg/objects/ipadlinewhite.html')
  }
});

// component part directives
app.directive("menubread", function(){
	return {
    restrict: 'E',
    template: require('directives/menuBread.html')
	}
});

app.directive("menutop", function(){
	return {
    restrict: 'E',
    template: require('directives/menuTop.html')
	}
});

app.directive("menubottom", function(){
	return {
    restrict: 'E',
    template: require('directives/menuBottom.html')
	}
});

app.directive("menuright", function(){
	return {
    restrict: 'E',
    template: require('directives/menuRight.html')
	}
});

app.directive("menuleft", function(){
	return {
    restrict: 'E',
    template: require('directives/menuLeft.html')
	}
});

// Components

app.directive("poppage", function(){
	return {
    restrict: 'E',
    template: require('directives/pop.html')
	}
});

app.directive("projectpage", function(){
	return {
    restrict: 'E',
    template: require('directives/project.html')
	}
});

app.directive("postpage", function(){
	return {
    restrict: 'E',
    template: require('directives/post.html')
	}
});

app.directive("stylepage", function(){
	return {
    restrict: 'E',
    template: require('directives/style.html')
	}
});


app.directive("categorypage", function(){
	return {
    restrict: 'E',
    template: require('directives/category.html')
	}
});

app.directive("categorysearchpage", function(){
  return {
    restrict: 'E',
    template: require('directives/categorysearch.html')
  }
});


app.directive("categoryallpage", function(){
  return {
    restrict: 'E',
    template: require('directives/categorysearchall.html')
  }
});


app.directive("infopage", function(){
	return {
    restrict: 'E',
    template: require('directives/info.html')
	}
});

app.directive("teampage", function(){
	return {
    restrict: 'E',
    template: require('directives/team.html')
	}
});

app.directive("previewpage", function(){
	return {
    restrict: 'E',
    template: require('directives/preview.html')
	}
});

app.directive("postlist", function(){
	return {
    restrict: 'E',
    template: require('directives/postlist.html')
	}
});

app.directive("searchlist", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/searchlist.html')
  }
});

// Detail Pages
app.directive("projectdetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/projectdetails.html')
	}
});

// ie: using jquery
app.directive("featuredetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/featuredetails.html')
	}
});

// ie: ionic app
app.directive("appdetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/appdetails.html')
	}
});

// ie yolk.com
app.directive("productdetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/productdetails.html')
	}
});

// ie logos/branding
app.directive("icondetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/icondetails.html')
	}
});

// ie nigel details
app.directive("teamdetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/teamdetails.html')
	}
});

// post details
app.directive("postdetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/pages/postdetails.html')
	}
});

// video details
app.directive("videodetailspage", function(){
	return {
    restrict: 'E',
    template: require('directives/pages/videodetails.html')
	}
});

// resume details
app.directive("resumedetailspage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/resumedetails.html')
  }
});

// how details
app.directive("howdetailspage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/howdetails.html')
  }
});

// how details
app.directive("memeberdetailspage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/memberdetails.html')
  }
});

// planner details
app.directive("plannerdetailspage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/plannerdetails.html')
  }
});

// landing details
app.directive("landingdetailspage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/landingdetails.html')
  }
});

// landing details two
app.directive("landingdetailstwopage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/landingdetailstwo.html')
  }
});

// landing details three
app.directive("landingdetailsthreepage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/landingdetailsthree.html')
  }
});

// landing details four
app.directive("landingdetailsfourpage", function(){
  return {
    restrict: 'E',
    template: require('directives/pages/landingdetailsfour.html')
  }
});

// Preview
app.directive("postpreviewpage", function(){
	return {
    restrict: 'E',
    template: require('directives/postpreview.html')
	}
});


//UI Router ES6
app.config(($stateProvider, $urlRouterProvider, $locationProvider) => {
	// ES5 .config(function($provide, authProvider)

	$urlRouterProvider.otherwise('/');

	$stateProvider
	.state('animation', {
		url: '/',
		controller: menuController,
		template: require('animation/animation.html')
	})

	$locationProvider.html5Mode(true);

});

export default app;