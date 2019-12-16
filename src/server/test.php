<?php
header("content-type:text/html;charset=utf-8");
# INSERT INTO `goods` (`good_id`, `img`, `title`, `price`, `des`, `pic`) VALUES ('1', 'e32r', '32425', '3434', '3242', '2342452');

# 01 链接数据库
$db = mysqli_connect("127.0.0.1","root","","nine");

# 02 插入数据
# 加载JSON数据,把json数据逐条插入到数据库里。
$jsonData = file_get_contents("list.json");
# 把JSON数据转换PHP数组
$data = json_decode($jsonData,true);
// print_r(count($data));
# 通过for循环遍历数组
for($i = 0;$i<count($data);$i++)
{
//  print_r($data[$i]);
  $id = $data[$i]["id"];
  $img = $data[$i]["img"];
  $title = $data[$i]["title"];
  $price = $data[$i]["price"];
  $des = $data[$i]["des"];
  $pic = $data[$i]["pic"];
  $sql = "INSERT INTO `goods` (`good_id`, `img`, `title`, `price`, `des`, `pic`) 
        VALUES ($id, '$img', '$title', $price, '$des', '$pic')";
  mysqli_query($db, $sql);
}

?>