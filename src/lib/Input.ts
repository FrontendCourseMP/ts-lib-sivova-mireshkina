class Input {
  private element: HTMLInputElement;
  private messages: Partial<Record<keyof ValidityState, string>> = {};

  constructor(element: HTMLInputElement) {
    this.element = element;
  }
  number() {
    const checkType = this.element.getAttribute("type");
    if (checkType !== "number") {
      throw new Error("неправильный атрибут type");
    }
    return this;
  }
  string() {
    const checkType = this.element.getAttribute("type");
    if (checkType !== "text") {
      throw new Error("неправильный атрибут type");
    }
    return this;
  }
  email() {
    const checkType = this.element.getAttribute("type");
    if (checkType !== "email") {
      throw new Error("неправильный атрибут type");
    }
    return this;
  }
  min(message: string) {
    const checkType = this.element.getAttribute("type");

    if (checkType !== "number" && checkType !== "range") {
      if (!this.element.getAttribute("minlength")) {
        throw new Error("у тега инпут нет атрибута minlength");
      }

      this.messages.tooShort = message;
    } else {
      if (!this.element.getAttribute("min")) {
        throw new Error("у тега инпут нет атрибута min");
      }
      this.messages.rangeUnderflow = message;
    }
    return this;
  }
  max(message: string) {
    const checkType = this.element.getAttribute("type");

    if (checkType !== "number" && checkType !== "range") {
      if (!this.element.getAttribute("maxlength")) {
        throw new Error("у тега инпут нет атрибута maxlength");
      }

      this.messages.tooLong = message;
    } else {
      if (!this.element.getAttribute("max")) {
        throw new Error("у тега инпут нет атрибута max");
      }
      this.messages.rangeOverflow = message;
    }
    return this;
  }
  required(message: string) {
    if (!this.element.required) {
      throw new Error("у тега инпут нет атрибута required");
    }
    this.messages.valueMissing = message;
    return this;
  }
  pattern(message: string) {
    if (this.element.pattern === "") {
      throw new Error("у тега инпут нет атрибута pattern");
    }
    this.messages.patternMismatch = message;
  }
  validate() {
    const id = this.element.getAttribute("aria-describedby");
    const element = document.querySelector(`#${id}`)!;
    for (const key in this.element.validity) {
      const result = this.element.validity[key];
      if (key === "valid" && result) {
        element.textContent = "";
        return true;
      } else if (result) {
        element.textContent = this.messages[key];
        return false;
      }
    }
  }
}

export default Input;
