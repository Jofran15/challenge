import decoder from "./decoder";

describe("Test decoder library", () => {
  test("String separated by zeros", () => {
    const encoded = "Robert000Smith000123";
    const decoded = decoder(encoded);
    expect(decoded.length).toBe(3);
    expect(decoded[0]).toBe("Robert");
    expect(decoded[1]).toBe("Smith");
    expect(decoded[2]).toBe("123");
  });

  test("String separated by zeros with zeros at the start", () => {
    const encoded = "000000Robert000Smith000123";
    const decoded = decoder(encoded);
    expect(decoded.length).toBe(3);
    expect(decoded[0]).toBe("Robert");
    expect(decoded[1]).toBe("Smith");
    expect(decoded[2]).toBe("123");
  });

  test("String separated by zeros with zeros at the end", () => {
    const encoded = "Robert000Smith0001230000";
    const decoded = decoder(encoded);
    expect(decoded.length).toBe(3);
    expect(decoded[0]).toBe("Robert");
    expect(decoded[1]).toBe("Smith");
    expect(decoded[2]).toBe("123");
  });

  test("String separated by zeros with zeros at the start and at the end", () => {
    const encoded = "000000Robert000Smith0001230000";
    const decoded = decoder(encoded);
    expect(decoded.length).toBe(3);
    expect(decoded[0]).toBe("Robert");
    expect(decoded[1]).toBe("Smith");
    expect(decoded[2]).toBe("123");
  });

  test("String with no zeros", () => {
    const encoded = "RobertSmith123";
    const decoded = decoder(encoded);
    expect(decoded.length).toBe(1);
    expect(decoded[0]).toBe("RobertSmith123");
  });
});
