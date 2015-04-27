angular.module("app", ["mwl.calendar"])
.controller('MainCtrl', ['$scope', function($scope){
  $scope.data = "app is running";
  $scope.calendarView = 'month';
  var currentYear = moment().year();
  var currentMonth = moment().month();
  $scope.events = [
    {
      title: 'Event 1',
      type: 'warning',
      starts_at: new Date(currentYear,currentMonth,25,8,30),
      ends_at: new Date(currentYear,currentMonth,25,9,30)
    },
    {
      title: 'Event 2',
      type: 'info',
      starts_at: new Date(currentYear,currentMonth,19,7,30),
      ends_at: new Date(currentYear,currentMonth,25,9,30)
    },
    {
      title: 'This is a really long event title',
      type: 'important',
      starts_at: new Date(currentYear,currentMonth,25,6,30),
      ends_at: new Date(currentYear,currentMonth,25,6,60)
    }
  ];

  }])
