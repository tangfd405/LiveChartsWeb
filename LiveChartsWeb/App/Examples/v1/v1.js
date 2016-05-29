﻿'use strict';

app.factory('examplesV1Service', [
    function () {

        var article = function(name, fileName) {
            this.name = name;
            this.fileName = fileName;
        }

        return function() {
            return [
                new article('Install'),
                new article('Basics'),
                new article('Types and Configuration'),
                new article('Labels'),
                new article('Fully Responsive', 'fully responsive.gif'),
                new article('The Cartesian Chart'),
                new article('Customizing Line Series'),
                new article('Basics'),
                new article('Basics'),
                new article('Basics'),
                new article('Basics')
            ];
        };

    }
]);