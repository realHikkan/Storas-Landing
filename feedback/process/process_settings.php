<?php

// стартовый путь ('http://mydomain.ru/')
$startPath = 'http' . (isset($_SERVER['HTTPS']) ? 's' : '') . '://' . $_SERVER['HTTP_HOST'] . '/';
// максимальный размер файла 512Кбайт (512*1024=524288)
const MAX_FILE_SIZE = 524288;
// директория для хранения загруженных файлов
$uploadPath = dirname(dirname(__FILE__)) . '/uploads/';
// разрешённые расширения файлов
$allowedExtensions = array('gif', 'jpg', 'png');

// от какого email будет отправляться письмо
const MAIL_FROM = 'no-reply@mydomain.ru';
// от какого имени будет отправляться письмо
const MAIL_FROM_NAME = 'AirCargoSoft';
// тема письма
const MAIL_SUBJECT = 'Заявка с AirCargoSoft';
// кому необходимо отправить письмо
const MAIL_ADDRESS = 'it@aircargosoft.ru';

// настройки mail для информирования пользователя о доставке сообщения
const MAIL_SUBJECT_CLIENT = 'Ваше сообщение доставлено';