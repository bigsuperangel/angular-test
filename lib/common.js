/**
 * Created by Administrator on 13-10-21.
 */
    //取公共的session配置,处理健康平台手机接口
//var per_url = 'http://218.106.144.2:8890';
var per_url = 'http://192.168.9.101:8080';
var method = 'jsonp';
var url_param = '?callback=JSON_CALLBACK';
function getSession($scope,$http,$log){
    $scope.user = {
        user_no: '18950454896',
        user_pwd: 'e10adc3949ba59abbe56e057f20f883e',
        user_type: '2',
        dev_type: 'android'
    }
    common_http($scope,$http,$log,method,per_url,'/health/mobile/user/login',$scope.user,url_param);
}

function common_http($scope,$http,$log,method,pre_url,suf_url,params,url_param){
    $http({method:method, url: pre_url+suf_url+url_param,params: params}).
        success(function(data, status, headers, config) {
            // this callback will be called asynchronously
            // when the response is available
            $log.log(angular.toJson(data,true));
            $scope.result = data;
            //$scope.result = angular.toJson(data,true);
            $scope.sessionID = data.sessionID;
            $scope.sessionMemberID = data.sessionMemberID;
        }).
        error(function(data, status, headers, config) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            $log.log('error');
        });
}