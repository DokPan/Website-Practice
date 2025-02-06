document.addEventListener("keydown", (event) => {
   let keyName = event.key;
   let keyCode = event.code;
            
   document.write(`Клавиша: ${keyName}, Код: ${keyCode}`+"<br>");

   let specialKeys = {
     "ArrowUp": "Стрелка вверх",
     "ArrowDown": "Стрелка вниз",
     "ArrowLeft": "Стрелка влево",
     "ArrowRight": "Стрелка вправо",
     "Enter": "Enter",
     "Escape": "Esc",
     "Alt": "Alt",
     "Control": "Control",
     "Shift": "Shift"
};
    if (specialKeys[keyName]) {
      document.write(`Вы нажали: ${specialKeys[keyName]}`);
    }
});
