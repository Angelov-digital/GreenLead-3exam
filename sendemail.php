<?php
$data = json_decode(file_get_contents('php://input'));
$to = "zorgrazor@mailinator.com";
$subject = $data->subject;
$body = $data->body;
$headers = array(
  "From" => $data->from,
  "Reply-To" => $data->from
);

if (mail($to, $subject, $body, $headers)) {
  echo json_encode(["success" => true]);
} else {
  echo json_encode(["success" => false]);
}

