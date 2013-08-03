var BinaryClock = function (container, options) {
  this.container = container;
  this.options = (options || {});
  this.options.sections = (this.options.sections || ["hours","minutes","seconds"])

  this.create();
  this.start();

  return this;
}

BinaryClock.prototype.start = function () {
  var that = this;
  this.timer = window.setInterval((function () {
    return function () { that.onTick() };
  }).apply(this), 1000);
  return this.timer;
}

BinaryClock.prototype.stop = function () {
  clearInterval(this.timer);
}

BinaryClock.prototype.onTick = function () {
  var date = new Date();
  var sectionsElements = this.container.childNodes;
  var section, sectionValue, sectionElementItems, binary;

  for (var i=0; i<this.options.sections.length; i++) {
    section = this.options.sections[i];
    sectionValue = date["get"+section.charAt(0).toUpperCase()+section.slice(1)]();

    for (var j=0; j<2; j++) {
      sectionElementItems = sectionsElements[(i*2)+j].childNodes
      binary = this.toBinary((j == 0 ? parseInt(sectionValue/10) : (sectionValue%10)),4);
      for (var k=0; k<4; k++) {
        sectionElementItems[k].className = (binary[k] === "1" ? "set" : "");
      }
    }
  }
}

BinaryClock.prototype.toBinary = function (number, precision) {
  var result = number.toString(2);
  var length = result.length;
  if (precision && precision > length) {
    for (var i=0; i<(precision-length); i++) {
      result = "0"+result;
    }
  }
  return result;
}

BinaryClock.prototype.create = function () {
  var subsections = ["tens","units"];
  var wrapper = document.createElement("div");
  var section, sectionName, sectionItem;

  this.container.className += " binary-clock";

  for (var i=0; i<this.options.sections.length; i++) {
    for (var j=0; j<subsections.length; j++) {
      section = document.createElement("div");
      sectionName = this.options.sections[i]+"-"+subsections[j];
      section.className = sectionName;
      for (var k=0; k<4; k++) {
        sectionItem = document.createElement("div");
        section.appendChild(sectionItem);
      }
      this.container.appendChild(section);
    }
  }
}
