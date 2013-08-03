var clock, container;

module("toBinary", {
  setup: function () {
    container = document.createElement("div");
    document.body.appendChild(container);
    clock = new BinaryClock(container);
  },
  teardown: function () {
    clock.stop();
    document.body.removeChild(container);
  }
})

test("1", function () {
  deepEqual(clock.toBinary(1,4), "0001");
});

test("2", function () {
  deepEqual(clock.toBinary(2,4), "0010");
});

test("4", function () {
  deepEqual(clock.toBinary(4,4), "0100");
});

test("8", function () {
  deepEqual(clock.toBinary(8,4), "1000");
});

module("create", {
  setup: function () {
    container = document.createElement("div");
    document.body.appendChild(container);
    clock = new BinaryClock(container,{
      sections: ["hours", "minutes", "seconds"]
    });
  },
  teardown: function () {
    clock.stop();
    document.body.removeChild(container);
  }
});

test("main sections", function () {
  equal(container.childNodes.length, 6);
});

test("hours-tens section", function () {
  equal(container.childNodes[0].className, "hours-tens");
});

test("hours-units section", function () {
  equal(container.childNodes[1].className, "hours-units");
});

test("minutes-tens section", function () {
  equal(container.childNodes[2].className, "minutes-tens");
});

test("minutes-units section", function () {
  equal(container.childNodes[3].className, "minutes-units");
});

test("seconds-tens section", function () {
  equal(container.childNodes[4].className, "seconds-tens");
});

test("seconds-units section", function () {
  equal(container.childNodes[5].className, "seconds-units");
});

test("main sections itmes", function () {
  for (var i=0; i<6; i++) {
    equal(container.childNodes[i].childNodes.length, 4);
  }
});

module("hover info", {
  setup: function () {
    container = document.createElement("div");
    document.body.appendChild(container);
    clock = new BinaryClock(container,{
      sections: ["hours", "minutes", "seconds"],
      hoverInfo: true
    });
  },
  teardown: function () {
    clock.stop();
    document.body.removeChild(container);
  }
});

test("main sections items", function () {
  for (var i=0; i<6; i++) {
    equal(container.childNodes[i].childNodes.length, 5);
  }
});

test("main sections info item", function () {
  for (var i=0; i<6; i++) {
    equal(container.childNodes[i].childNodes[4].className, "info");
  }
});
