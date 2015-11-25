
    var Constants = {};

    Constants.Location = {
        'apiLocation' : 'http://wistecmo.azurewebsites.net/'
    };


    Constants.GetUserId = function ($rootScope) {
        return ($rootScope === null) ? 794430 : $rootScope.globals.currentUser.userid;
    }

    Constants.GetTeamId = function ($rootScope) {
        return ($rootScope === null) ? 794430 : $rootScope.globals.currentUser.userid;
    }
