/**
 * Created by Administrator on 13-10-21.
 */
function LoginController($scope,$location,$http,$log,$rootScope){
    $scope.save = function(){
        getSession($scope,$http,$log);
    }
}
//医生建议
function AdviseController($scope,$location,$http,$log,$modal){
    $scope.memberTaskId = '20130922217924';
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: AdviseModelCtrl,
            resolve: {
                memberTaskId: function () {
                    return $scope.memberTaskId;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function AdviseModelCtrl($scope, $modalInstance, memberTaskId,$log,sessionID,sessionMemberID,$http){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/taskSuggest',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,memberTaskId:memberTaskId});
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

//任务中心
function JobListController($scope,$location,$http,$log,$modal){
    $scope.page = 1;
    $scope.rows = 10;
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: JobListModalCtrl,
            resolve: {
                page: function () {
                    return $scope.page;
                },
                rows: function () {
                    return $scope.rows;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function JobListModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,page,rows){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/jobList',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,page:page,rows:rows});

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

//任务详情
function JobDetailController($scope,$location,$http,$log,$modal){
    $scope.jobId = 1;
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: JobDetailModalCtrl,
            resolve: {
                jobId: function () {
                    return $scope.jobId;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function JobDetailModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,jobId){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/jobDetail',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,jobId:jobId});

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

//我的任务列表
function MemberJobListController($scope,$location,$http,$log,$modal){
    $scope.type = 0; // 1在执行的任务,2完成过期的任务,0全部任务
    $scope.rows = 10;
    $scope.page = 1;
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: MemberJobListModalCtrl,
            resolve: {
                type: function () {
                    return $scope.type;
                },
                page: function () {
                    return $scope.page;
                },
                rows: function () {
                    return $scope.rows;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function MemberJobListModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,type,page,rows){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/memberJobList',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,type:type,page:page,rows:rows});

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

//我的任务详情
function MemberJobInfoController($scope,$location,$http,$log,$modal){
    $scope.memberJobId = '20131018414902';
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: MemberJobInfoModalCtrl,
            resolve: {
                memberJobId: function () {
                    return $scope.memberJobId;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function MemberJobInfoModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,memberJobId){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/memberJobInfo',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,memberJobId:memberJobId});

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

//完成任务
function FinishJobController($scope,$location,$http,$log,$modal){
    $scope.memberJobDetailId = '20131019418129';
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: FinishJobModalCtrl,
            resolve: {
                memberJobDetailId: function () {
                    return $scope.memberJobDetailId;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function FinishJobModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,memberJobDetailId){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/finishJob',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,memberJobDetailId:memberJobDetailId});

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}

//取消任务
function CanncelJobController($scope,$location,$http,$log,$modal){
    $scope.memberJobId = '20131019418125';
    getSession($scope,$http,$log);
    $scope.open = function () {
        var modalInstance = $modal.open({
            templateUrl: 'modal.html',
            controller: CanncelJobModalCtrl,
            resolve: {
                memberJobId: function () {
                    return $scope.memberJobId;
                },
                sessionID: function(){
                    return $scope.sessionID;
                },
                sessionMemberID:function(){
                    return $scope.sessionMemberID;
                }
            }
        });
    }
}

function CanncelJobModalCtrl($scope, $modalInstance,$log,sessionID,sessionMemberID,$http,memberJobId){
    common_http($scope,$http,$log,method,per_url,'/health/mobile/job/canncelJob',
        {sessionID:sessionID,sessionMemberID:sessionMemberID,memberJobId:memberJobId});

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
}