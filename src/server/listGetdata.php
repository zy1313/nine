<?php
header("content-type:text/html;charset=utf-8");
# page =  2 
# 链接数据库
$db = mysqli_connect("127.0.0.1", "root", "", "nine");

# 查询获取数据库中的数据
# page 1 = 0,20
# page 2 = 20,20
# page 3 = 40,20
# 获取参数
$page = ($_REQUEST["page"] -1 ) * 16;
$type = $_REQUEST["sortType"];

# 02-查询获取数据库所有的数据
if($type == 0)
{
  $sql = "SELECT * FROM goods LIMIT $page, 16";
}elseif($type == 1){
  $sql = "SELECT * FROM goods ORDER BY price DESC LIMIT $page, 16";
}else{
  $sql = "SELECT * FROM goods ORDER BY price ASC LIMIT $page, 16";
}
$result = mysqli_query($db,$sql);
$data = mysqli_fetch_all($result,MYSQLI_ASSOC);
// print_r($data);

# 如果1 0~19
# 如果2 20~39

# 把数据转换为JSON返回
echo json_encode($data,true);
?>