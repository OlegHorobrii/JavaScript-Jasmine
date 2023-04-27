

describe("Проверка возраста:", function () {
  it("Проверка возраста: с невозможным возрастом, результат => НУЛЕВОЙ", function () {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(-3224)).toBe(null);
  });

  it("Проверка возраста: от 0 до 24, результат 'детский возраст'", function () {
    expect(ageClassification(1)).toBe("детский возраст");
    expect(ageClassification(24)).toBe("детский возраст");
  });

  it("Проверка возраста: от 24 до 44, результат 'молодой возраст'", function () {
    expect(ageClassification(24.01)).toBe("молодой возраст");
    expect(ageClassification(44)).toBe("молодой возраст");
  });

  it("Проверка возраста: от 44 до 65, результат 'средний возраст'", function () {
    expect(ageClassification(44.01)).toBe("средний возраст");
    expect(ageClassification(65)).toBe("средний возраст");
  });

  it("Проверка возраста: от 65 до 75, результат 'пожилой возраст'", function () {
    expect(ageClassification(65.01)).toBe("пожилой возраст");
    expect(ageClassification(75)).toBe("пожилой возраст");
  });

  it("Проверка возраста: от 75 до 90, результат 'старческий возраст'", function () {
    expect(ageClassification(75.01)).toBe("старческий возраст");
    expect(ageClassification(90)).toBe("старческий возраст");
  });

  it("Проверка возраста: от 90 до 122, результат 'долгожители'", function () {
    expect(ageClassification(90.01)).toBe("долгожители");
    expect(ageClassification(122)).toBe("долгожители");
  });

  it("Проверка возраста: от 122 до 150, с невозможным возрастом => результат НУЛЕВОЙ", function () {
    expect(ageClassification(122.01)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});