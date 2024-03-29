<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "astronomy";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$name = $_GET['name'];
$email = "unknown"

$name = $conn->real_escape_string($name);
#$email = $conn->real_escape_string($email);

$sql = "INSERT INTO emailist (fullname, email)
VALUES ('$name', '$email')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>