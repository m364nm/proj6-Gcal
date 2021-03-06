/**
 * Bind together javascript libraries used in this application.
 * Compile these with 'browserify' to create a combined, 'minified'
 * version.  (See Makefile)
 */
"use strict";
var moment = require('moment');
var daterangepicker = require('bootstrap-daterangepicker');
var timepicker = require('bootstrap-timepicker');


/* Export to global environment */
window.moment = moment;
window.daterangepicker = daterangepicker;
window.timepicker = timepicker;
