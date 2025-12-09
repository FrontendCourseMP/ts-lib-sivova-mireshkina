import Input from "./Input";

function form(form: HTMLFormElement) {
  const inputs = form.querySelectorAll("input");
  const classOfInputs: Input[] = [];
  const mapOfInputs = new Map<string, HTMLInputElement>();
  if (inputs.length === 0) {
    throw new Error("нет инпутов!!");
  }

  for (const input of inputs) {
    if (!input.labels || input.labels.length === 0) {
      throw new Error("у инпута нет лэйбла");
    }
    if (!input.name) {
      throw new Error("у инпута нет имени:(");
    }
    if (!input.placeholder) {
      throw new Error("нет плэйсхолдера:(");
    }

    if (
      !input.ariaDescribedByElements ||
      input.ariaDescribedByElements.length === 0
    ) {
      throw new Error("нет поля для вывода ошибки");
    }
    mapOfInputs.set(input.name, input);
  }

  return {
    field(fieldName: string) {
      const input = mapOfInputs.get(fieldName);
      if (!input) {
        throw new Error("нет такого поля");
      }
      const inputClass = new Input(input);
      classOfInputs.push(inputClass);
      return inputClass;
    },
    validate(callback: (data: FormData) => void) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (classOfInputs.every((input) => input.validate())) {
          const data = new FormData(form);
          callback(data);
        }
      });
    },
  };
}

export default form;
