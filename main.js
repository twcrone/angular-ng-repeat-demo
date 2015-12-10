'use strict';

angular.module("MailboxApp", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/inbox");
        $stateProvider.state("inbox", {
            url: "/inbox",
            templateUrl: "partials/inbox.html",
            controller: function ($scope, messageStore) {
                $scope.messages = messageStore.getMessages();
            }
        });
    })
    .service("messageStore", function () {
        var messages = [];
        var size = 100;

        for (var i = 0; i < size; ++i) {
            messages.push({
                sender: "john.smith" + i + "@gmail.com",
                date: Date.now() - i * 2400000000,
                id: i,
                subject: "Regarding report #" + i,
                body: "Hey Todd, Where's report #" + i + "?"
            });
        }

        return {
            getMessages: function() {
                return messages;
            }
        }
    })

