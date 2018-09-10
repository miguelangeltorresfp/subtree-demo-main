'use strict';

/* global Demo */

(function(plugins) {
  function DemoPlugin() {
    console.log("Yay plugin!");
    console.log("modificacion arbitraria");
  }

  plugins.register(DemoPlugin);
})(Demo.plugins);
