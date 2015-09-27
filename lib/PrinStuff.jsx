PrintMixin = {
  printStuff() {
    function PrintStuff() {
      this.stuff = 'stuff';
    };

    PrintStuff.prototype.printstuff = function() {
      console.log(this.stuff);
    };
    return PrintStuff;
  }
};
