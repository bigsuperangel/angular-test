/**
 * Created by Administrator on 13-10-30.
 */
//    messages = [{
//        id: 0, sender: 'jean@somecompany.com',
//        subject: 'Hi there, old friend',
//        date: 'Dec 7, 2013 12:32:00',
//        recipients: ['greg@somecompany.com'],
//        message: 'Hey, we should get together for lunch somet ime and catch up. There are many things we should collaborate on this year.'
//    },{
//        id: 1, sender: 'maria@somecompany.com',
//        subject : 'Where did you leave my laptop?' ,
//        date: 'Dec 7, 2013 8:15:12',
//        recipients: ['greg@somecompany.com'],
//        message: 'I thought you were going to put it in my desk drawer. But i t does not seem to be there. '
//    },{
//        id: 2, sender: 'bill@somecompany.com',
//        subject: 'Lost python',
//        date: 'Dec 6, 2013 20:35:02',
//        recipients: ['greg@somecompany.com'],
//        message: "Nobody panic, but my pet python is missing from her cage. She doesn't move too fast, so just call me if you see her."
//    }];


//service.directive("tree", function($compile) {
//    return {
//        restrict: "E",
//        scope: {family: '='},
//        template:
//            '<p>{{ family.dictName }}</p>'+
//                '<ul>' +
//                '<li ng-repeat="child in family.children">' +
//                '<tree family="child"></tree>' +
//                '</li>' +
//                '</ul>',
//        compile: function(tElement, tAttr) {
//            var contents = tElement.contents().remove();
//            var compiledContents;
//            return function(scope, iElement, iAttr) {
//                if(!compiledContents) {
//                    compiledContents = $compile(contents);
//                }
//                compiledContents(scope, function(clone, scope) {
//                    iElement.append(clone);
//                });
//            };
//        }
//    };
//});

function ListController($scope,$log,$http,$location,$window,$route){
    //获取首次进入的数据
    $http({method:'jsonp', url: 'http://localhost:7080/Demo/msg/list.do?callback=JSON_CALLBACK',params: {page:'1',rows:'10'}}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $log.log(data);
            $scope.messages = data.rows;
            $scope.totalItems = data.totalItems;
            $scope.currentPage = 1;
            $scope.maxSize = 10;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.log('error');
        });
    // $scope.messages = messages;

    //获取分页时的数据
    $scope.changePage =function(page){
        $http({method:'jsonp', url: 'http://localhost:7080/Demo/msg/list.do?callback=JSON_CALLBACK',params: {page:page,rows:'10'}}).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $log.log(data);
                $scope.messages = data.rows;
                $scope.totalItems = data.totalItems;
                $scope.currentPage = page;
                $scope.maxSize = 10;
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $log.log('error');
            });
    }
    //删除数据
    $scope.del = function(id){
        $log.log(id);
        $http({method:'jsonp', url: 'http://localhost:7080/Demo/msg/del.do?callback=JSON_CALLBACK',params: {id:id}}).
            success(function(data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                $log.log(data);
                $log.log($scope.messages);
            }).
            error(function(data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                $log.log('error');
            });
        console.info($location.path());
        //重刷页面
        $route.reload();
    }
}

function DetailController($scope, $routeParams,$location,$http,$log){
    //$scope.message = messages[$routeParams.id];
    //保存后返回列表
    $scope.save = function(){
        $scope.$watch($scope.message,function(){
            console.log($scope.message);
            $http({method:'jsonp', url: 'http://localhost:7080/Demo/msg/update.do?callback=JSON_CALLBACK',params: $scope.message}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $log.log(data);
                    //$scope.message = data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $log.log('error');
                });
        });
        //$location.path("#/list");
        $location.url('/list');
    }

    //获取某条详细信息
    $http({method:'jsonp', url: 'http://localhost:7080/Demo/msg/detail.do?callback=JSON_CALLBACK',params: {id:$routeParams.id}}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $log.log(data);
            $scope.message = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.log('error');
        });
}

function IndexController($scope){
    $scope.name = 'hello world';
}

function AddController($scope,$location,$http,$log){
    $scope.message = undefined;
    $scope.save = function(){
        $scope.$watch($scope.message,function(){
            console.log($scope.message);
            $http({method:'jsonp', url: 'http://localhost:7080/Demo/msg/save.do?callback=JSON_CALLBACK',params: $scope.message}).
                success(function(data, status, headers, config) {
                    // this callback will be called asynchronously
                    // when the response is available
                    $log.log(data);
                    //$scope.message = data;
                }).
                error(function(data, status, headers, config) {
                    // called asynchronously if an error occurs
                    // or server returns response with an error status.
                    $log.log('error');
                });
        });
        //$location.path("#/list");
        //已经包含前缀，不用加，直接跳转到list页面
        $location.url('/list');
    };
}

function TreeController($scope,$location,$http,$log){
    $http({method:'jsonp', url: 'http://localhost:7080/Demo/dict/tree.do?callback=JSON_CALLBACK',params: $scope.message}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $log.log(JSON.stringify(data[0]));
            $scope.treeFamily = data[0];
            //$scope.message = data;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.log('error');
        });

}