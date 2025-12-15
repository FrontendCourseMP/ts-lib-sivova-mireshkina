import * as m from "./lib";
const check = m.form(document.querySelector("form"));
check.field("name").required("заполните поле").min("должно быть минимум 3");
check.validate(console.log);
