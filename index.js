/**
 * Created by Administrator on 13-10-11.
 */
var service = angular.module('plunker', ['ui.bootstrap']);

//Set up our mappings between URLs, tempaltes. and  controllers
function testRouteConfig($routeProvider){
    $routeProvider.
        when('/', {
            controller: IndexController,
            templateUrl: 'welcome.html'
        }).
        when('/list',{
            controller: ListController,
            templateUrl: 'list.html'
        }).
        // Notice that for the detail view, we specify a parameterized URL component by placing a colon in front of the id
        when('/view/:id', {
            controller: DetailController,
            templateUrl: 'detail.html'
        }).
        when('/add', {
            controller: AddController,
            templateUrl: 'add.html'
        }).
        when('/tree', {
            controller: TreeController,
            templateUrl: 'tree.html'
        }).
        when('/login', {
            controller: LoginController,
            templateUrl: 'login.html'
        }).
        when('/advise', {
            controller: AdviseController,
            templateUrl: 'advise.html'
        }).
        when('/jobList', {
            controller: JobListController,
            templateUrl: 'jobList.html'
        }).
        when('/jobDetail', {
            controller: JobDetailController,
            templateUrl: 'jobDetail.html'
        }).
        when('/memberJobList', {
            controller: MemberJobListController,
            templateUrl: 'memberJobList.html'
        }).
        when('/memberJobInfo', {
            controller: MemberJobInfoController,
            templateUrl: 'memberJobInfo.html'
        }).
        when('/finishJob', {
            controller: FinishJobController,
            templateUrl: 'finishJob.html'
        }).
        when('/canncelJob', {
            controller: CanncelJobController,
            templateUrl: 'memberJobInfo.html'
        }).
        when('/currentDayJob', {
            controller: CurrentDayJobController,
            templateUrl: 'finishJob.html'
        }).
        when('/getJob', {
            controller: GetJobController,
            templateUrl: 'jobDetail.html'
        }).
        when('/currentDayJob1', {
            controller: UnityController,
            templateUrl: 'unity.html'
        }).
        when('/memberJobList1', {
            controller: UnityController,
            templateUrl: 'unity.html'
        }).
        when('/getGraphsForParameters', {
            controller: UnityController,
            templateUrl: 'unity.html'
        }).
        when('/memberQuestionList', {
            controller: UnityController,
            templateUrl: 'unity.html'
        }).
        otherwise({
            redirectTo: '/'
        });
};

//Set up our route so the AMailservice can find it
service.config(testRouteConfig);

function AccordionDemoCtrl($scope,$http,$log) {
    $scope.oneAtATime = true;

    $scope.groups = [
        {
            title: "首页",
            content: [{
                tip: "index", href: "#/"
            }]
        },
        {
            title: "列表",
            content:[{
                tip:"list",href: "#/list"
            },{
                tip: "add", href: "#/add"
            },{
                tip: "tree", href: "#/tree"
            }]
        },
        {
            title: "健康平台",
            content: [{
                tip: "登录", href: "#/login"
            },{
                tip: "医生建议", href: "#/advise"
            },{
                tip: "任务中心", href: "#/jobList"
            },{
                tip: "任务详情", href: "#/jobDetail"
            },{
                tip: "我的任务列表", href: "#/memberJobList"
            },{
                tip: "我的任务详情", href: "#/memberJobInfo"
            },{
                tip: "完成任务", href: "#/finishJob"
            },{
                tip: "取消任务", href: "#/canncelJob"
            },{
                tip: "首页", href: "#/currentDayJob"
            },{
                tip: "领取任务", href: "#/getJob"
            }]
        },
        {
            title: "统一入口",
            content: [{
                tip: "通用方法", href: "#/currentDayJob1"
            },{
                tip: "我的任务列表", href: "#/memberJobList1"
            },{
                tip: "获取曲线图", href: "#/getGraphsForParameters"
            },{
                tip: "问题列表", href: "#/memberQuestionList"
            }]
        }
    ];

}



