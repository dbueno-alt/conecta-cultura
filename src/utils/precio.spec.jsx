import { describe, it, expect } from "vitest";
import { formatearPrecio } from "./precio.js";

describe("formatearPrecio", () => {
  it("muestra cero como Gratis", () => {
    expect(formatearPrecio(0)).toBe("Gratis");
  });

  it("formatea un valor positivo", () => {
    expect(formatearPrecio(15000)).toContain("15.000");
  });
});