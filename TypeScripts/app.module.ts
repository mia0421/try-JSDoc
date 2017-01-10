/// <reference path="../Scripts/typings/angularjs/angular.d.ts"/>
///**
// NineYi
// @namespace NineYi
// */
///**
// Mall
// @memberOf NineYi
// @namespace NineYi.Mall
// */
namespace NineYi.Mall {
    angular.module('NineYi.Mall', []);
}

namespace NineYi.Mall.Providers {
    angular.module('NineYi.Mall.Providers', []);
}

namespace NineYi.Mall.Values{
    angular.module('NineYi.Mall.Values', []);
}

/**
 controller
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Controllers
 */
namespace NineYi.Mall.Controllers {
    angular.module('NineYi.Mall.Controllers', ['NineYi.Mall.Values', 'NineYi.Mall.Services', 'NineYi.Mall.Factories','NineYi.Mall.Providers',
        'NineYi.Mall.Utilities', 'NineYi.Mall.Templates', 'LocalStorageModule', 'facebook', 'ngCookies', 'NineYi.Theme.Components']);
}

/**
 Directives
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Directives
 */
namespace NineYi.Mall.Directives {
    angular.module('NineYi.Mall.Directives', ['ngAnimate', 'NineYi.Mall.Utilities', 'NineYi.Mall.Templates','NineYi.Mall.Providers']);
}

/**
 Theme 元件
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Filters
 */
namespace NineYi.Mall.Filters {
    angular.module('NineYi.Mall.Filters', []);
}

namespace NineYi.Mall.Factories {
    angular.module('NineYi.Mall.Factories', []);
}

namespace NineYi.Mall.Inteceptors {
    angular.module('NineYi.Mall.Inteceptors', ['NineYi.Mall.Utilities', 'NineYi.Mall.Configs']);
}

/**
 API Services
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Services
 */
namespace NineYi.Mall.Services {
    angular.module('NineYi.Mall.Services', ['NineYi.Mall.Configs', 'NineYi.Mall.Inteceptors', 'ui.bootstrap', 'ui.bootstrap.tpls']);
}

namespace NineYi.Mall.Utilities {
    angular.module('NineYi.Mall.Utilities', ['cfp.loadingBar']);
}

namespace NineYi.Mall.Templates {
    angular.module('NineYi.Mall.Templates', []);
}

///**
// Theme
// @memberOf NineYi
// @namespace NineYi.Theme
// */
/**
 Theme 元件
 @memberOf NineYi.Theme
 @namespace NineYi.Theme.Components
 */
namespace NineYi.Theme.Components {
    angular.module('NineYi.Theme.Components', ['NineYi.Mall.Values', 'NineYi.Mall.Services', 'NineYi.Mall.Factories','NineYi.Mall.Inteceptors',
        'NineYi.Mall.Utilities', 'NineYi.Mall.Templates', 'LocalStorageModule', 'facebook', 'ngCookies']);
}