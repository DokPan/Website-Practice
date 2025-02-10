<?php
class User {
    public $login;
    private $password;
    protected $email;
    
    public static $zagolovok = 'h1';
    const WELCOME = 'Welcome';

    public function __construct($login = 'user', $password = '12345', $email = '') {
        $this->login = $login;
        $this->password = $password;
        $this->email = $email;
    }
    public function hello() {
        echo "<" . self::$zagolovok . ">" 
            . self::WELCOME . ", " . $this->login . "!" 
            . "</" . self::$zagolovok . "><br>";
    }
}

$user1 = new User();
$user1->login = 'jhjggcthrd';
$user1->hello();

$user2 = new User('kdanhjv', 'grejyRFnbgtt1', 'hjgafjf@example.com');
$user2->hello();

$user3 = new User();
$user3->hello();

User::$zagolovok = 'h3';
$user1->hello();
?>
