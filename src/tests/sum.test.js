// @vitest-environment jsdom

import { describe, test, expect } from "vitest";
import form from "../lib/form";

function setupValidForm(value) {
  document.body.innerHTML = `
    <form>
      <label for="name">Имя</label>

      <input
        id="name"
        name="name"
        placeholder="Введите имя"
        value="${value}"
      />

      <span id="name-error"></span>
    </form>
  `;

  const input = document.querySelector("input");
  const errorEl = document.querySelector("#name-error");

  Object.defineProperty(input, "ariaDescribedByElements", {
    configurable: true,
    get() {
      return [errorEl];
    },
  });

  return document.querySelector("form");
}

describe("form()", () => {
  test("если форма не передана — выбрасывается ошибка", () => {
    expect(() => form()).toThrow(Error);
  });

  test("валидная форма — validate выполняется без ошибки", () => {
    const formElement = setupValidForm("Anna");
    const f = form(formElement);

    expect(() => {
      f.validate(() => {});
    }).not.toThrow();
  });

  test("пустое поле инпут — validate выполняется без падения", () => {
    const formElement = setupValidForm("");
    const f = form(formElement);

    expect(() => {
      f.validate(() => {});
    }).not.toThrow();
  });
});
