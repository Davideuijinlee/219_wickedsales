<?php
require_once('mysqlconnect.php');

require_once('functions.php');

set_exception_handler('handleError');



if(empty($_GET['productID'])){
    throw new Exception ("productID is a required value");
};

$id = (int)$_GET['productID'];

$query = " SELECT p.`id`, p.`name`, p.`price`, p.`description`, p.`misc_details` AS `miscDetails`,
            GROUP_CONCAT(i.url) AS `images` FROM `products` AS p JOIN `images` AS i ON p.`id` = i.`products_id`
            WHERE p.`id` = $id
            GROUP BY p.`id`
";
$result = mysqli_query($conn, $query);

if(!$result){
    throw new Exception(mysqli_error($conn));
}

// print_r($result);

if(mysqli_num_rows($result) === 0){
    throw new Exception('no data available for product id');
}

$data = mysqli_fetch_assoc($result);
$data['price'] = intval($data['price']);
$data['miscDetails'] = json_decode($data['miscDetails']);
$data['images'] = explode(',',$data['images']);

$output = [
    'success'=>true,
    'productInfo'=> $data
];

$json_output = json_encode($output);

print($json_output);

?>