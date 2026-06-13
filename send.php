<?php
header('Content-Type: application/json');

$nombre   = trim($_POST['nombre'] ?? '');
$email    = trim($_POST['email'] ?? '');
$telefono = trim($_POST['telefono'] ?? '');
$fecha    = trim($_POST['fecha'] ?? '');
$destino  = trim($_POST['destino'] ?? '');
$presupuesto = trim($_POST['presupuesto'] ?? '');

$errors = [];
if (strlen($nombre) < 5) $errors[] = 'Nombre debe tener al menos 5 caracteres.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Correo electrónico inválido.';
if (!preg_match('/^[\d\s\-+]{7,20}$/', $telefono)) $errors[] = 'Teléfono inválido.';
if (empty($fecha)) $errors[] = 'Selecciona una fecha.';
if (empty($destino)) $errors[] = 'Selecciona un destino.';

if (!empty($errors)) {
  echo json_encode(['ok' => false, 'msg' => implode(' ', $errors)]);
  exit;
}

echo json_encode(['ok' => true, 'msg' => 'Reserva recibida exitosamente. Te contactaremos pronto.']);
