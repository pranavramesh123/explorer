/*
 * The MIT License - http://www.opensource.org/licenses/mit-license
 * Copyright (c) 2016 Bruce Schubert.
 */

/*global WorldWind*/

define(['knockout', 'jquery', 'jqueryui'],
    function (ko, $) {
        "use strict";
        /**
         * @constructor
         * @param {String} viewFragment HTML
         * @returns {TacticalSymbolEditor}
         */
        function TacticalSymbolEditor(viewFragment) {
            var self = this;

            // Load the view fragment into the DOM's body.
            // Wrap the view in a hidden div for use in a JQuery UI dialog.
            var $view = $('<div style="display: none"></div>')
                .append(viewFragment)
                .appendTo($('body'));
            this.view = $view.children().first().get(0);

            this.symbol = ko.observable({});

            this.open = function (symbol) {
                console.log("Open Symbol: " + symbol.name());

                // Update observable(s)
                self.symbol(symbol);

                // Open the dialog
                var $symbolEditor = $(self.view);
                $symbolEditor.dialog({
                    autoOpen: false,
                    title: "Edit Symbol"
                });
                $symbolEditor.dialog("open");
            };

            // Binds the view to this view model.
            ko.applyBindings(this, this.view);

        }

        return TacticalSymbolEditor;
    }
);