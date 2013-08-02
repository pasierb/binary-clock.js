var clock;

module("toBinary", {
  setup: function () {
    clock = new BinaryClock();
  },
  teardown: function () {
    clock.stop();
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
