/**
 * Created by Administrator on 13-10-21.
 */
    //取公共的session配置,处理健康平台手机接口
var per_url = 'http://218.106.144.2:8890';
var method = 'post';
function getSession($scope,$http,$log){
    $scope.user = {
        user_no: '13011111111',
        user_pwd: '96e79218965eb72c92a549dd5a330112',
        user_type: '2',
        dev_type: 'android'
    }
    common_http($scope,$http,$log,method,per_url,'/health/mobile/user/login',$scope.user);
}

function common_http($scope,$http,$log,method,pre_url,suf_url,params){
    $http({method:method, url: pre_url+suf_url,params: params}).
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