<?php
function construct()
{
    load_model('index');
}


function indexAction()
{
    load('helper','format');
    @$listProdCart = $_SESSION['cart']['buy'];
    @$infoCart     = $_SESSION['cart']['info'];
    $dataSendView = array(
        "listProdCart" => $listProdCart,
        "infoCart"     => $infoCart
    );
    load_view('index',$dataSendView);
}

// add to cart
function handleCartAction()
{
    
    $dataId = $_POST['dataId'];
    $qty    = $_POST['qty'];
    $data = array(
        "idProd" => $dataId,
        "qty"    => $qty
    );
    addToCart($data);
    $prodItem = getProductItemById($dataId);
    $dataSendView = array(
        "productItem" => $prodItem,
        "numOrder"    => $_SESSION['cart']['info']['numOrder'],
        "listProductCart" => $_SESSION['cart']
    );
    echo json_encode($dataSendView);
}

function addToCart($data) {
    $prodItem = getProductItemById($data["idProd"]);
    $qty = $data['qty'];
    if ( isset($_SESSION['cart']) && array_key_exists($data['idProd'] , $_SESSION['cart']['buy']) ){
        $qty = $_SESSION['cart']['buy'][$data['idProd']]['qty_product'] + $qty;
    }
    $_SESSION['cart']['buy'][$data['idProd']] = array(
        "id_product"     => $prodItem['id_product'],
        "name_product"   => $prodItem['name_product'],
        "code_product"   => $prodItem['code_product'],
        "price_product"  => $prodItem['price_product'],
        "avatar_product" => $prodItem['avatar_product'],
        "max_qty"        => $prodItem['qty_product'],
        "qty_product"    => $qty,
        "totalPrice"     => $qty * $prodItem['price_product']
    );
    updateInfoCart();
}
function updateInfoCart()
{
    $numOrder = 0;
    $total = 0;
    if(isset($_SESSION['cart'])){
        foreach($_SESSION['cart']['buy'] as $item){
            $numOrder += $item['qty_product'];
            $total    += $item['totalPrice'];
        }
        $_SESSION['cart']['info'] = array(
            "numOrder" => $numOrder,
            "total"    => $total
        );
    }
}



// update info cart
// -- update order cart
function updateOrderCartAction()
{
    load('helper','format');
    $numOrder = $_POST['numOrder'];
    $idProd   = $_POST['idProd'];
    foreach($_SESSION['cart']['buy'] as $cartItem) {
        if ( $cartItem["id_product"] == $idProd ) {
            $productCartItem = $cartItem;
            break;
        }
    }
    if( isset($_SESSION['cart']) && array_key_exists($idProd,$_SESSION['cart']['buy']) ) {
        $dataSendView['status'] = "success";
        $_SESSION['cart']['buy'][$idProd]['qty_product'] = $numOrder;
        $totalPrice = $productCartItem['price_product'] * $numOrder;
        $_SESSION['cart']['buy'][$idProd]['totalPrice'] = $totalPrice;
        updateInfoCart();
        $dataSendView = array(
            "totalPrice"      => currency_format($_SESSION['cart']['buy'][$idProd]['totalPrice']),
            "total"           => currency_format($_SESSION['cart']['info']['total']),
            "numOrder"        => $_SESSION['cart']['info']['numOrder'],
            "idProd"          => $_SESSION['cart']['buy'][$idProd]['id_product'],
            "listProductCart" => $_SESSION['cart']
        );
    } else {
        $dataSendView['status'] = "error";
    }
    echo json_encode($dataSendView);    
}

// -- delete product cart
function deleteProdCartAction()
{
    load('helper','format');
    $type = $_GET['type'];
    if ( $type == 'deleteItem' ) {
        $idProd = (int) $_POST['idProdCart'];
        deleteCart($idProd);
    } else {
        deleteCart();
    }
    @$listProdCart = $_SESSION['cart']['buy'];
    @$infoCart     = $_SESSION['cart']['info'];
    if(isset($_SESSION['cart'])){
        ?>
        <div class="section" id="info-cart-wp">
            <div class="section-detail table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <td>M?? s???n ph???m</td>
                            <td>???nh s???n ph???m</td>
                            <td>T??n s???n ph???m</td>
                            <td>Gi?? s???n ph???m</td>
                            <td>S??? l?????ng</td>
                            <td colspan="2">Th??nh ti???n</td>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        foreach($listProdCart as $prodCartItem){
                            $prodCartItem['avatar_product'] = "admin/" . $prodCartItem['avatar_product'];
                            $prodCartItem['url']            = "?mod=products&action=detail&id={$prodCartItem['id_product']}";
                        ?>
                        <tr>
                            <td><?php echo $prodCartItem['code_product'] ?></td>
                            <td>
                                <a href="<?php echo $prodCartItem['url'] ?>" title="" class="thumb">
                                    <img src="<?php echo $prodCartItem['avatar_product'] ?>" alt="">
                                </a>
                            </td>
                            <td>
                                <a href="<?php echo $prodCartItem['url'] ?>" title="" class="name-product"><?php echo $prodCartItem['name_product'] ?></a>
                            </td>
                            <td><?php echo currency_format($prodCartItem['price_product']) ?></td>
                            <td class="d-flex">
                                <span class="control-order minus-order"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                <input type="number" data-id_prod="<?php echo $prodCartItem['id_product'] ?>" value="<?php echo $prodCartItem['qty_product'] ?>" name="num-order" min="1" max="<?php echo $prodCartItem['max_qty'] ?>" value="<?php echo $prodCartItem['qty_product'] ?>" class="num-order">
                                <span class="control-order plus-order"><i class="fa fa-plus" aria-hidden="true"></i></span>
                            </td>
                            <td>
                                <span class="total-price"><?php echo currency_format($prodCartItem['totalPrice']) ?></span>
                            </td>
                            <td>
                                <a href="" title="" data-id_prod="<?php echo $prodCartItem['id_product'] ?>" class="del-product"><i class="fa fa-trash-o"></i></a>
                            </td>
                        </tr>
                        <?php
                        }
                        ?>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="7">
                                <div class="clearfix">
                                    <p id="total-price" class="fl-right">T???ng gi??: <span><?php echo currency_format($infoCart['total']) ?></span></p>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="7">
                                <div class="clearfix">
                                    <div class="fl-right">
                                        <a href="?page=checkout" title="" id="checkout-cart">Thanh to??n</a>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="section" id="action-cart-wp">
            <div class="section-detail">
                <a href="?page=home" title="" id="buy-more">Mua ti???p</a><br/>
                <a href="" title="" id="delete-cart">X??a gi??? h??ng</a>
            </div>
        </div>
        <?php
    } else {
        ?>
            <div class="notification-cart">
                <span class="thumb-img">
                    <img src="public/images/cart.png" alt="">
                </span>
                <p>Kh??ng c?? s???n ph???m n??o trong gi??? h??ng c???a b???n.</p>
                <a href="?">Ti???p t???c mua s???p</a>
            </div>
        <?php 
    }
}

// delete product incart
function deleteCart($id = "")
{
    if(isset($_SESSION['cart'])) {
        if ( !empty($id) ) {
            unset($_SESSION['cart']['buy'][$id]);
        } else {
            unset($_SESSION['cart']);
        }
        updateInfoCart();
    }
}

// update info cart
function updateInfoCartAction()
{
    if(!isset($_SESSION['cart'])){
        $listProductCart['info']['numOrder'] = 0;
        $listProductCart['info']['total'] = 0;
        $listProductCart['buy'] = array();
    } else {
        $listProductCart = $_SESSION['cart'];
    }
    $dataSendView = array(
        "listProductCart" => $listProductCart
    );
    echo json_encode($dataSendView);
}

// check out action
function checkOutAction()
{
    load('helper','format');
    load('lib','validation_form');
    $listProvince = getLocationByLevel(1);
    @$listProdCart = $_SESSION['cart']['buy'];
    @$infoCart     = $_SESSION['cart']['info'];
    $dataSendView = array(
        "listProvince" => $listProvince,
        "listProdCart" => $listProdCart,
        "infoCart"     => $infoCart
    );
    
    if(isset($_POST['btn_order'])){
        $error = array();
        global $error;

        // check name customer
        if ( empty($_POST['fullname']) ) {
            $error['fullname'] = "<span class='error'>(*) Vui l??ng nh???p h??? v?? t??n</span>";
        } else {
            if ( !(strlen($_POST['fullname']) >= 6 && strlen($_POST['fullname']) <= 32) ) {
                $error['fullname'] = "<span class='error'>(*) S??? k?? t??? ph???i l???n h??n 5 v?? nh??? h??n 33</span>";
            } else {
                $fullname = $_POST['fullname'];
            }
        }

        // check email
        if ( empty($_POST['email']) ) {
            $error['email'] = "<span class='error'>(*) Vui l??ng nh???p ?????a ch??? email</span>";
        } else {
            if ( !( strlen($_POST['email']) >= 6 && strlen($_POST['email']) <= 32 ) ){
                $error['email'] = "<span class='error'>(*) S??? k?? t??? ph???i l???n h??n 5 v?? nh??? h??n 33</span>";
            } else {
                if ( !is_email($_POST['email']) ){
                    $error['email'] = "<span class='error'>(*) ?????nh d???ng email kh??ng h???p l???</span>";
                } else {
                    $email = $_POST['email'];
                }
            }
        }

        // check province
        if ( empty($_POST['province']) ) {
            $error['province'] = "<span class='error'>(*) Ch??a nh???p T???nh/Th??nh ph???</span>";
        } else {
            $province = $_POST['province'];
        }

        // check distrist
        if ( empty($_POST['district']) ) {
            $error['district'] = "<span class='error'>(*) Ch??a nh???p Qu???n/Huy???n</span>";
        } else {
            $district = $_POST['district'];
        }

        // check street
        if ( empty($_POST['street']) ) {
            $error['street'] = "<span class='error'>(*) Ch??a nh???p Ph?????ng/X??</span>";
        } else {
            $street = $_POST['street'];
        }

        // check address detail
        if ( empty($_POST['address']) ) {
            $error['address'] = "<span class='error'>(*) Nh???p S??? nh??/Th??n/???p</span>";
        } else {
            $address = $_POST['address'];
        }

        // check phone number
        if ( empty($_POST['phone']) ) {
            $error['phone'] = "<span class='error'>(*) Vui l??ng nh???p s??? ??i???n tho???i</span>";
        } else {
            if ( !is_phone($_POST['phone']) ) {
                $error['phone'] = "<span class='error'>(*) S??? ??i???n tho???i kh??ng h???p l???</span>";
            } else {
                $phone = $_POST['phone'];
            }
        }

        // check note
        if ( empty($_POST['note']) ) {
            $note = null;
        } else {
            $note = $_POST['note'];
        }

        // check payment method
        if ( empty($_POST['payment_method']) ) {
            $error['payment_method'] = "<span class='error'>(*) Vui l??ng ch???n m???t ph????ng th???c thanh to??n</span>";
        } else {
            $payment_method = $_POST['payment_method'];
        }

        if(empty($error)) {
            load('lib','sendMail');
            $Orderdate = date('y-m-d');
            $address_customer = array(
                "province" => $province,
                "district" => $district,
                "street"   => $street,
            );
            $dataCustomer = array(
                "name_customer"    => $fullname,
                "phone_customer"   => $phone,
                "email_customer"   => $email,
                "address_customer" => json_encode($address_customer),
                "order_date"       => $Orderdate,
                "address"          => $address,
                "num_order"        => 1,
            );
            if(check_customer_exists($dataCustomer['name_customer'], $dataCustomer['email_customer'], $dataCustomer['phone_customer'])) {
                $customer_item = get_and_update_customer_item_item_by_multi_info($dataCustomer['name_customer'], $dataCustomer['email_customer'], $dataCustomer['phone_customer']);
                $idCustomer    = $customer_item['id_customer'];
            } else {
                $idCustomer = addCustomer($dataCustomer);
            }
            $code_order = "USTORA_".$phone."_".rand (1 , 1000);
            while(codeExists($code_order)){
                $code_order = "USTORA_".$phone."_".rand (1 , 1000);
            }
            $list_prod_cart = array();
            $i = 0;
            foreach($_SESSION['cart']['buy'] as $cartItem) {
                $list_prod_cart[$i] = array(
                    "id"    => $cartItem['id_product'],
                    "qty"   => $cartItem['qty_product'],
                    "price" => $cartItem['totalPrice'],
                );
                $i++;
            }
            $dataOrder = array(
                "code_order"        => $code_order,
                "num_order"         => $_SESSION['cart']['info']['numOrder'],
                "total_price_order" => $_SESSION['cart']['info']['total'],
                "list_prod_cart"    => json_encode($list_prod_cart),
                "status"            => "pending",
                "note_order"        => $note,
                "order_date"        => $Orderdate,
                "payment_method"    => $payment_method,
                "customer_id"       => $idCustomer
            );
            plusNumPurchases($list_prod_cart);
            addOrder($dataOrder);
            $total_price_order = currency_format($dataOrder['total_price_order']);
            $data_date  = getdate(strtotime($dataOrder['order_date']));
            $see_detail = base_url("?mod=cart");
            $order_date = "(" . format_weekday($data_date['weekday']) . ")  " . "{$data_date['mday']}/{$data_date['mon']}/{$data_date['year']}";
            $name_receiver  = $fullname;
            $email_receiver = $email;
            $subject        = "Th??ng tin ????n h??ng c???a qu?? kh??ch";
            $content        = "<div class='info-order' style='width: 680px; margin: 0 auto; background-color: #e1e1e1; padding: 20px; font-family: monospace; color: #333;'>
                                    <div class='top-info'>
                                        <h2 class='name-customer'>K??nh ch??o Anh/Ch???: {$fullname}</h2>
                                        <span class='sub-title'>C???m ??n Anh/Ch??? ???? tin t?????ng l???a ch???n Ustora</span>
                                    </div>
                                    <div class='content-info'>
                                        <h4 class='title'>Th??ng tin ????n h??ng c???a qu?? kh??ch</h4>
                                        <ul>
                                            <li style='padding: 5px 0;'>
                                                <span>M?? ????n h??ng: </span>
                                                <span>{$code_order}</span>
                                            </li>
                                            <li style='padding: 5px 0;'>
                                                <span>T???ng s???n ph???m: </span>
                                                <span>{$dataOrder['num_order']} s???n ph???m</span>
                                            </li>
                                            <li style='padding: 5px 0;'>
                                                <span>T???ng ti???n: </span>
                                                <span>{$total_price_order}</span>
                                            </li>
                                            <li style='padding: 5px 0;'>
                                                <span>Ng??y ?????t: </span>
                                                <span>{$order_date}</span>
                                            </li>
                                            <li style='padding: 5px 0;'>
                                                <span>Ng??y nh???n d??? ki???n: </span>
                                                <span>Ch??ng t??i s??? li??n h??? v???i b???n trong th???i gian s???m nh???t ????? x??c nh???n l???i</span>
                                            </li>
                                            <li style='padding: 5px 0;'>
                                                <span>G???i ph???i h???i cho ch??ng t??i(email): </span>
                                                <span>hoangtien080@gmail.com</span>
                                            </li>
                                            <li style='padding: 5px 0;'>
                                                <span>Th??ng tin chi ti???t ????n h??ng: </span>
                                                <a href='{$see_detail}'>Xem chi ti???t t???i ????y</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class'footer-info'>
                                        <p>Ustora h???n g???p l???i qu?? kh??ch !</p>
                                    </div>
                                </div>";
            send_mail($name_receiver, $email_receiver, $subject, $content);
        }
        
    }
    load_view('checkOut',$dataSendView);
}

// load location
function loadLocationAction()
{
    $levelLoad = $_POST['levelLoad'];
    $value     = $_POST['value'];
    $listLocation = loadLocation($levelLoad, $value);
    $dataSendView = array(
        "listLocation" => $listLocation
    );
    echo json_encode($dataSendView);
}
