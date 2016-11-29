const message = "eeetesting";

var numbers = (function () {
		return 1 + 2
}())

console.log(message, numbers);

import angular from 'angular';
import appModule from 'config';
import 'css/master.scss';

angular.bootstrap(document, [appModule.name])
