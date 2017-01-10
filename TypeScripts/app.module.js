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
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        angular.module('NineYi.Mall', []);
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Providers;
        (function (Providers) {
            angular.module('NineYi.Mall.Providers', []);
        })(Providers = Mall.Providers || (Mall.Providers = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Values;
        (function (Values) {
            angular.module('NineYi.Mall.Values', []);
        })(Values = Mall.Values || (Mall.Values = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
/**
 controller
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Controllers
 */
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Controllers;
        (function (Controllers) {
            angular.module('NineYi.Mall.Controllers', ['NineYi.Mall.Values', 'NineYi.Mall.Services', 'NineYi.Mall.Factories', 'NineYi.Mall.Providers',
                'NineYi.Mall.Utilities', 'NineYi.Mall.Templates', 'LocalStorageModule', 'facebook', 'ngCookies', 'NineYi.Theme.Components']);
        })(Controllers = Mall.Controllers || (Mall.Controllers = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
/**
 Directives
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Directives
 */
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Directives;
        (function (Directives) {
            angular.module('NineYi.Mall.Directives', ['ngAnimate', 'NineYi.Mall.Utilities', 'NineYi.Mall.Templates', 'NineYi.Mall.Providers']);
        })(Directives = Mall.Directives || (Mall.Directives = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
/**
 Theme 元件
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Filters
 */
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Filters;
        (function (Filters) {
            angular.module('NineYi.Mall.Filters', []);
        })(Filters = Mall.Filters || (Mall.Filters = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Factories;
        (function (Factories) {
            angular.module('NineYi.Mall.Factories', []);
        })(Factories = Mall.Factories || (Mall.Factories = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Inteceptors;
        (function (Inteceptors) {
            angular.module('NineYi.Mall.Inteceptors', ['NineYi.Mall.Utilities', 'NineYi.Mall.Configs']);
        })(Inteceptors = Mall.Inteceptors || (Mall.Inteceptors = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
/**
 API Services
 @memberOf NineYi.Mall
 @namespace NineYi.Mall.Services
 */
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Services;
        (function (Services) {
            angular.module('NineYi.Mall.Services', ['NineYi.Mall.Configs', 'NineYi.Mall.Inteceptors', 'ui.bootstrap', 'ui.bootstrap.tpls']);
        })(Services = Mall.Services || (Mall.Services = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Utilities;
        (function (Utilities) {
            angular.module('NineYi.Mall.Utilities', ['cfp.loadingBar']);
        })(Utilities = Mall.Utilities || (Mall.Utilities = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
var NineYi;
(function (NineYi) {
    var Mall;
    (function (Mall) {
        var Templates;
        (function (Templates) {
            angular.module('NineYi.Mall.Templates', []);
        })(Templates = Mall.Templates || (Mall.Templates = {}));
    })(Mall = NineYi.Mall || (NineYi.Mall = {}));
})(NineYi || (NineYi = {}));
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
var NineYi;
(function (NineYi) {
    var Theme;
    (function (Theme) {
        var Components;
        (function (Components) {
            angular.module('NineYi.Theme.Components', ['NineYi.Mall.Values', 'NineYi.Mall.Services', 'NineYi.Mall.Factories', 'NineYi.Mall.Inteceptors',
                'NineYi.Mall.Utilities', 'NineYi.Mall.Templates', 'LocalStorageModule', 'facebook', 'ngCookies']);
        })(Components = Theme.Components || (Theme.Components = {}));
    })(Theme = NineYi.Theme || (NineYi.Theme = {}));
})(NineYi || (NineYi = {}));
//# sourceMappingURL=app.module.js.map