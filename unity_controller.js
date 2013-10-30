/**
 * Created by Administrator on 13-10-30.
 */

//统一调用接口
function UnityController($scope,$location,$http,$log,$modal){
    $log.log($location.absUrl());
    $log.log($location.port());
    $log.log($location.path());
    $log.log($location.host());
    var path = $location.path();
    switch (path){
        case '/currentDayJob1':
            break;
        case '/memberJobList1':
            $scope.type = 0; // 1在执行的任务,2完成过期的任务,0全部任务
            $scope.rows = 10;
            $scope.page = 1;
            break;
        case '/getGraphsForParameters':
            $scope.startDt = '2013-07-01 11:11:11';
            $scope.endDt = '2013-09-10 11:11:11';
            $scope.paramKey = '[{"code":"bmi"},{"code":"bloodpressurediastolic"},{"code":"bloodpressuresystolic"},{"code":"fastingbloodglucose"},{"code":"height"},{"code":"weight"}]';
            break;
        case '/memberQuestionList':
            break;
    }
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: UnityModalCtrl,
            resolve: {
                path: function(){
                    return path;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                },
                type:function(){
                    return $scope.type;
                },
                rows:function(){
                    return $scope.rows;
                },
                page:function(){
                    return $scope.page;
                },
                startDt:function(){
                    return $scope.startDt;
                },
                endDt:function(){
                    return $scope.endDt;
                },
                paramKey:function(){
                    return $scope.paramKey;
                }
            }
        });
    }
}

function UnityModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,path,type,rows,page,startDt,endDt,paramKey){
    $log.log(path);
    var url = undefined;
    var params = undefined;
    switch (path){
        case '/currentDayJob1':
            url = '/health/mobile/job/currentDayJob';
            params = {sessionID:sessionID,sessionMemberID:sessionMemberID};
            break;
        case '/memberJobList1':
            url = '/health/mobile/job/memberJobList';
            params = {sessionID:sessionID,sessionMemberID:sessionMemberID,type:type,page:page,rows:rows};
            break;
        case '/getGraphsForParameters':
            url = '/health/mobile/member/getGraphsForParameters';
            params = {sessionID:sessionID,sessionMemberID:sessionMemberID,startDt:startDt,endDt:endDt,paramKey:paramKey};
            break;
        case '/memberQuestionList':
            url = '/mobile/guide/memberQuestionList';
            params = {sessionID:sessionID,sessionMemberID:sessionMemberID};
            break;
    }
    //执行查询
    common_http($scope,$http,$log,method,per_url,url,params,url_param);

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}