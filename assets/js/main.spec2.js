
describe("Testing weekFn() Function", function () {
  it("Test weekFn(1) Function returns 'Понедельник'", function () {
    expect(weekFn(1)).toBe("Понедельник");
  });

  it("Test weekFn(3) Function returns 'Среда'", function () {
    expect(weekFn(3)).toBe("Среда");
  });

  it("Test weekFn(7) Function returns 'Воскресенье'", function () {
    expect(weekFn(7)).toBe("Воскресенье");
  });

  it("Test weekFn() Function more than 7, returns null", function () {
    expect(weekFn(9)).toBe(null);
    expect(weekFn(1.5)).toBe(null);
    expect(weekFn("2")).toBe(null);
  });
  it("Test weekFn(4) Function returns 'Четверг'", function () {
    expect(weekFn(4)).toBe("Четверг");
  });
});