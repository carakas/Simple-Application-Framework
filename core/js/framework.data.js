// Generated by CoffeeScript 1.6.3
(function() {
  var Data;

  Data = (function() {
    function Data() {}

    Data.prototype.isInitialized = false;

    Data.prototype.data = null;

    Data.prototype.initialize = function() {
      if (typeof jsData === "undefined" || jsData === null) {
        throw Error('jsData is not available');
      }
      this.data = jsData;
      return this.isInitialized = true;
    };

    false;

    Data.prototype.exists = function(key) {
      return this.get(key) != null;
    };

    Data.prototype.get = function(key) {
      var chunks, dataKey, module, value;
      if (!this.isInitialized) {
        this.initialize();
      }
      chunks = key.split('.');
      module = chunks[0];
      if (chunks.length >= 2) {
        dataKey = chunks.splice(1).join('.');
        value = this.data[module][dataKey];
      } else {
        value = this.data[module];
      }
      return value;
    };

    return Data;

  })();

  Data.current = new Data;

  window.Data = Data.current;

}).call(this);
