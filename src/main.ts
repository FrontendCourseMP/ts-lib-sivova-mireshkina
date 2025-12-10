import * as m from "./lib";
// const check = m.form(document.querySelector("form"));
// check.field("name").required("заполните поле").min("должно быть минимум 3");
// check.validate(console.log);

  const checkA = m.form(document.getElementById('formA'));
  checkA.field('name').required('fill me').min('min 3');
  checkA.validate(console.log);    



  const checkB = m.form(document.getElementById('formB'));
  checkB.field('name')
  checkB.validate(console.log)


