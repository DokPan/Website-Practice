function User(login, password) {
    this.login = login;
    this.password = password;
}

var user = new User("user123", "mypassword");

user.login = "newUser";
user.password = "newPassword";

document.write("Новый логин: " + user.login + "<br>");
document.write("Новый пароль: " + user.password + "<br>");

function User(login, password) {
    this.login = login;
    this.password = password;

    this.hello = function() {
        document.write("Добро пожаловать, " + this.login + "!<br>");
    };
}

var user = new User("user123", "mypassword");
user.hello();

var user = new User("admin", "qwerty");

if (user.login === "admin" && user.password === "qwerty") {
    document.write("Логин и пароль верны!<br>");
} else {
    document.write("Ошибка: неверный логин или пароль.<br>");
}
