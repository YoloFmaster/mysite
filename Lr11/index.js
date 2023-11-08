const formElement = document.getElementById('form'); // извлекаем элемент формы

formElement.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
  // теперь можно извлечь данные
  let bla = [];
  const email = formData.get('email'); 
  const janry = formData.get('janry'); 
  const da = formData.get('da'); 
  const date = formData.get('date'); 
  const firstname = formData.get('firstname'); 
  const old = formData.get('old'); 
  bla = getValue()
  const password = formData.get('password'); 
  const time = formData.get('time'); 
  const character = formData.get('character'); 
  
  document.open();
  document.write("<h1>Ваши ответы  </h1>");
  document.write("Ваш email: ");
  document.write(email);
  document.write("<br>")
  document.write("Ваш ответ на просмотр аниме: ");
  document.write(da);
  document.write("<br>")
  document.write("Когда вы начали смотреть аниме: ");
  document.write(date);
  document.write("<br>")
  document.write("Ваши любимые жанры: ");
  document.write(firstname);
  document.write("<br>")
  document.write("Сколько лет вы смотрите аниме: ");
  document.write(old);
  document.write("<br>")
  document.write("Ваш любимый возростной жанр: ");
  document.write(janry);
  document.write("<br>")
  document.write("Ваш любимый аниме режиссёр: ");
  document.write(bla);
  document.write("<br>")
  document.write("Вот что вы ответили на вопрос: ");
  document.write(password);
  document.write("<br>")
  document.write("'Вы препочитаете такую длительность серии: ");
  document.write(time);
  document.write("<br>")
  document.write("Ваш любимый персонаж");
  document.write(character);
  document.close();


});

function getValue() {
  var bla =
      document.getElementsByName('bla');
  var result = "";
  for (var i = 0; i < bla.length; i++) {
      if (bla[i].checked) {
          result += bla[i].value + ", ";
      }
  }
  return result;
}
