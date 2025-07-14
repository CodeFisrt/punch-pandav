<?php
$servername = "localhost"; $username = "root";$password = ""; $dbname = "khopa_foundation";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
$fullname = $_POST['fullname'];
$mobile = $_POST['mobile'];
$quantity = $_POST['quantity'];
$saplingName = $_POST['saplingName'];
$location = $_POST['location'];
$message = $_POST['message'];

$sql = "INSERT INTO volunteers (fullname, mobile, quantity, sapling_name, location, message)
        VALUES (?, ?, ?, ?, ?, ?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ssisss", $fullname, $mobile, $quantity, $saplingName, $location, $message);
if ($stmt->execute()) {
    echo "<h2>Thank you! 🌱</h2><p>Your information has been successfully saved.</p>";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
