meetingPlannerApp.factory('People',function ($resource, $firebaseArray, $firebaseObject) {

this.ref = new Firebase("https://peoples-potential.firebaseio.com/");


return this;
});