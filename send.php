$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];

$name = htmlspecialchars($name);
$phone = htmlspecialchars($phone);
$email = htmlspecialchars($email);
$text = htmlspecialchars($text);

$name = urldecode($name);
$phone = urldecode($phone);
$email = urldecode($email);
$text = urldecode($text);

$name = trim($name);
$phone = trim($phone);
$email = trim($email);
$text = trim($text);

if (mail("zhurbiym@gmail.com", "Заказ с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: $email \r\n"))
 {
    echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}