// This file is required for each module so that the root projects gulp file
// can include this build and concat this into the "global" javascript


var Tools = require('../../deploynaut/js/tools.jsx');

var ReactExample = require('./ReactExample.jsx');

// Render the above component onto the DOM with the ID "ReactExample". The
// Tools.Install() will ensure that the Model from the dispatcher gets loaded
// properly into the above component. See ReactExample.ss and \Dispatcher::getReactComponent()
Tools.install(ReactExample, 'ReactExample');


