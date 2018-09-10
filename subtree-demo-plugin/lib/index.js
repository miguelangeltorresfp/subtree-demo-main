'use strict';

/* global Demo */

(function(plugins) {
  function DemoPlugin() {
    console.log("Yay plugin!");
    console.log("modificacion arbitraria");
    console.log("modificacion arbitraria 2")
  }

  plugins.register(DemoPlugin);
})(Demo.plugins);
