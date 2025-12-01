// Точка входа в ваше решение
function form(form: HTMLFormElement) {
  const inputs = form.querySelectorAll("input");
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
  }
}
