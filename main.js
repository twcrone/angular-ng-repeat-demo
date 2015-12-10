angular.module("MailboxApp", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/inbox");
    $stateProvider.state("inbox", {
        url: "/inbox",
        controller: function() {
            console.log("Inbox...");
        }
    });
});

