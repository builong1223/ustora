$(document).ready(function () {
    var defaults = {
        "place_append_table": "#table",
        "place_append_pagination": ".pagination",
        "post_URL_pagination": "?mod=posts&action=pagination",
        "post_cat_URL_pagination": "?mod=posts&controller=postsCat&action=pagination",
        "post_URL_search": "?mod=posts&action=rearch",
        "select_option_status": "#select-status",
        "action_option_status": "#sec-action"
    }

    var place_append_table = $(defaults.place_append_table);
    var place_append_pagination = $(defaults.place_append_pagination);
    var select_option_status = $(defaults.select_option_status);
    var action_option_status = $(defaults.action_option_status);

    //============
    // Pagination
    //============

    // post
    var pagination_post = {
        "wrapper_pagination": "ul.pagination[data-modules='post']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "data_id": "#content[data-id]",
        "action_item": "a.action-item.post",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "height_config": 348,
    }

    // post cat
    var pagination_post_cat = {
        "wrapper_pagination": "ul.pagination[data-modules='post_cat']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "action_item": "a.action-item.post_cat",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "height_config": 348
    }

    // trademark
    var pagination_trademark = {
        "wrapper_pagination": "ul.pagination[data-modules='trademark']",
        "num_per_page": 4,
        "total_page": 0,
        "current_page": 1,
        "data_id": "#content[data-id]",
        "action_item": "a.action-item.trademark",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=products&controller=trademark&action=pagination",
        "height_config": 400
    }

    // products
    var pagination_products = {
        "wrapper_pagination": "ul.pagination[data-modules='products']",
        "num_per_page": 10,
        "total_page": 0,
        "current_page": 1,
        "data_id": "#content[data-id]",
        "data_modules_action": "#content[data-modules_action]",
        "action_item": "a.action-item.products",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=products&action=pagination",
        "height_config": 400
    }

    // product cat
    var pagination_product_cat = {
        "wrapper_pagination": "ul.pagination[data-modules='product_cat']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "action_item": "a.action-item.product_cat",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=products&controller=product_cat&action=pagination",
        "height_config": 400
    }

    // slider
    var pagination_slider = {
        "wrapper_pagination": "ul.pagination[data-modules='sliders']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "action_item": "a.action-item.sliders",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=sliders&action=pagination",
        "height_config": 400
    }

    // advt
    var pagination_advt = {
        "wrapper_pagination": "ul.pagination[data-modules='advt']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "action_item": "a.action-item.advt",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=advt&action=pagination",
        "height_config": 400
    }

    // order
    var pagination_order = {
        "wrapper_pagination": "ul.pagination[data-modules='order']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "action_item": "a.action-item.order",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=sales&action=pagination",
        "height_config": 400
    }

    // customer
    var pagination_customer = {
        "wrapper_pagination": "ul.pagination[data-modules='customer']",
        "num_per_page": 5,
        "total_page": 0,
        "current_page": 1,
        "action_item": "a.action-item.customer",
        "status": "all",
        "btn_next": "a.page-link[data-page='next']",
        "btn_prev": "a.page-link[data-page='prev']",
        "btn_item": "a.page-link[data-page='normal']",
        "base_URL": "?mod=sales&controller=customer&action=pagination",
        "height_config": 400
    }

    //===============
    // Change status
    //===============

    // post
    var status_post = {
        "btn_change": "label.btn-change-status[for='status'][data-modules='post']",
        "status_current": null,
        "active_current": null,
        "data_status": "span.status[data-status]",
        "base_URL": "?mod=posts&action=change_status",
        "post_URL_load_num_status": "?mod=posts&action=load_num_status"
    }

    // post cat
    var status_post_cat = {
        "btn_change": "label.btn-change-status[for='status'][data-modules='post_cat']",
        "status_current": null,
        "active_current": null,
        "data_status": "span.status[data-status]",
        "base_URL": "?mod=posts&controller=postsCat&action=change_status",
        "post_URL_load_num_status": "?mod=posts&controller=postsCat&action=load_num_status"
    }

    // trademark
    var status_trademark = {
        "URL_load_num_status": "?mod=products&controller=trademark&action=load_num_status",
    }

    // products
    var status_product = {
        "btn_change": "label.btn-change-status[for='status'][data-modules='products']",
        "status_current": null,
        "active_current": null,
        "data_status": "span.status[data-status]",
        "base_URL": "?mod=products&action=change_status",
        "product_URL_load_num_status": "?mod=products&action=load_num_status"
    }

    // product cat
    var status_product_cat = {
        "btn_change": "label.btn-change-status[for='status'][data-modules='product_cat']",
        "status_current": null,
        "active_current": null,
        "data_status": "span.status[data-status]",
        "base_URL": "?mod=products&controller=product_cat&action=change_status",
        "product_cat_URL_load_num_status": "?mod=products&controller=product_cat&action=load_num_status"
    }

    // slider
    var status_slider = {
        "btn_change": "label.btn-change-status[for='status'][data-modules='sliders']",
        "status_current": null,
        "active_current": null,
        "data_status": "span.status[data-status]",
        "base_URL": "?mod=sliders&action=change_status",
        "sliders_URL_load_num_status": "?mod=sliders&action=load_num_status"
    }

    // advt
    var status_advt = {
        "btn_change": "label.btn-change-status[for='status'][data-modules='advt']",
        "status_current": null,
        "active_current": null,
        "data_status": "span.status[data-status]",
        "base_URL": "?mod=advt&action=change_status",
        "advt_URL_load_num_status": "?mod=advt&action=load_num_status"
    }

    var status_order = {
        "order_URL_load_num_status" : "?mod=sales&action=load_num_status"
    }

    //========
    // Images
    //========

    // one images
    var update_img_post = {
        "wrapper": "#update_info_post",
        "btn_update": "#btn-upload-thumb",
        "inputFile": "#post_img_update",
        "base_URL": "?mod=posts&action=upload_img_file",
        "thumbnail_url": "#thumbnail_url_update",
        "place_append_img": "#img-post-update",
    }

    // post
    var upload_img_post = {
        "wrapper": ".uploadFile.post",
        "btn_upload": "#btn-upload-thumb",
        "inputFile": "input#post_img[name='post_img']",
        "base_URL": "?mod=posts&action=upload_img_file",
        "thumbnail_url": "#thumbnail_url",
        "place_append_img": "#img-post"
    }

    // trademark product
    var upload_img_trademark_product = {
        "wrapper": ".uploadFile.trademark",
        "btn_upload": "#btn-upload-thumb-trademark",
        "inputFile": "input#img_trademark[name='img_trademark']",
        "base_URL": "?mod=products&controller=trademark&action=upload_img_file",
        "thumbnail_url": "#thumbnail_url_trademark",
        "place_append_img": "#img-trademark"
    }

    // product
    var upload_img_product = {
        "wrapper": ".uploadFile.product",
        "btn_upload": "#btn-upload-avatar-product",
        "inputFile": "input#img_product[name='img_product']",
        "base_URL": "?mod=products&action=upload_img_file",
        "thumbnail_url": '#thumbnail_url_product',
        "place_append_img": "#img-product",
        "delete_avatar_img": "#delete-detail-img"
    }

    // slider
    var upload_img_slider = {
        "wrapper": ".uploadFile.slider",
        "btn_upload": "a#btn-upload-thumb[name='btn-upload-thumb']",
        "inputFile": "input#slider_img[name='slider_img']",
        "base_URL": "?mod=sliders&action=upload_img_file",
        "thumbnail_url": "input#thumbnail_url[name='thumbnail_url']",
        "place_append_img": "#slider_img_append",
        "delete_avatar_img": "#delete-detail-img"
    }

    // advt
    var upload_img_advt = {
        "wrapper": ".uploadFile.advt",
        "btn_upload": "a#btn-upload-thumb[name='btn-upload-thumb']",
        "inputFile": "input#img_url[name='img_url']",
        "base_URL": "?mod=advt&action=upload_img_file",
        "thumbnail_url": "input#thumbnail_url[name='thumbnail_url']",
        "place_append_img": "#img_url_append",
        "delete_avatar_img": "#delete-detail-img"
    }

    // upload multi product
    var upload_multi_img_product = {
        "wrapper": ".uploadFile.multi_img_product",
        "btn_upload": "#btn-upload-img-relative-multi",
        "inputFile": "input#upload-list[name='arr_img_relative[]']",
        "base_URL": "?mod=products&action=upload_multi_relative_img",
        "limited_number": 20,
        "place_append": "#list-img-cate-product",
        "num_img": 6,
        "btn_see_more": "a.see-more[data-action='show_img_relative']",
        "btn_hide_more": "a.hide-more[data-action='hide_img_relative']",
        "btn_rename": "a.rename[data-action='rename']",
        "btn_delete": "a.delete[data-action='delete']",
        "btn_remove_modal": ".close",
        "modal_rename": ".modal_rename",
        "btn_update": "button.button[name='btn_rename']",
        "base_URL_action": "?mod=products&action=img_action",
        "notification": ".main-content .notifi"
    }

    //=================
    // update name img 
    //=================

    var update_name_img_post = {
        "name_old": ".list-info span.name-img",
        "place_append_name_new": ".list-info span.name-img",
        "src_img": "#path_img",
        "thumbnail_url": "#thumbnail_url_update",
        "base_URL": "?mod=posts&action=update_name_img",
    }


    //================
    // Back page prev
    //================

    $("#update_info_post").delegate('a.close', 'click', function () {
        history.back();
        event.preventDefault();
    });

    //==================================
    // Show h??nh ???nh trong modal update
    //==================================

    // post
    var show_img_post = {
        "btn_img_click": "#open_modal_detail_img .modal-body .tab-content ul.list-img li span.thumb-img",
        "src_img_show": "#open_modal_detail_img .modal-body .detail-img span.thumb-img img"
    }

    // products
    var show_img_products = {
        "btn_img_click": "#open_modal_total_img .thumb-img",
        "src_img_show": "#open_modal_total_img .detail-img .thumb-img img"
    }


    //=================
    //show box info img
    //=================
    // products
    var show_box_info_img_products = {
        "wrapper": "#open_modal_total_img",
        "box_info": "#open_modal_total_img .info-img",
        "btn_edit_name": "#open_modal_total_img .info-img .info-value .file-name",
        "btn_delete": ".delete",
        "base_URL": "?mod=products&action=action_img_update",
        "place_delete": ".list-img-relative-product .thumb-img",
        "total_img": 0,
        "name_curr": "",
        "notification": ".main-content .notifi",
        "option_1": "a[data-toggle='tab'][href='#option-1']",
        "option_2": "a[data-toggle='tab'][href='#option-2']"
    }

    // Th???ng n??y d??ng ????? call thaq ???nh avatar ????? cho ch????ng tr??nh n?? kh???i ngu
    $(show_box_info_img_products.option_1).click(function () {
        call_img_avatar();
    });

    // Th???ng n??y c??ng nh?? th???ng tr??n n?? c??ng d??ng ????? call thaq ???nh relative ????? cho ch????ng tr??nh n?? kh???i ngu
    $(show_box_info_img_products.option_2).click(function () {
        call_img_first_relative_img();
    });

    // g??n s??? ki???n ????? c?? th??? s??? t??n c???a ???nh trong modal 
    $(show_box_info_img_products.btn_edit_name).dblclick(function () {
        let name_curr = $(this).text();
        show_box_info_img_products.name_curr = name_curr;
        $(this).attr('contenteditable', 'true');
        $(this).css({
            "padding": "3px 5px",
            "border-bottom": "1px solid #333"
        });
    });

    // g??n s??? ki???n ????? ?????ng modal ?????i t??n ???nh trong modal c??ng l??c ki???m tra v?? ?????i t??n
    $(show_box_info_img_products.btn_edit_name).blur(function () {
        let name_new = $(this).text();
        let name_curr = show_box_info_img_products.name_curr;
        let type_img = $(this).parents('ul[data-type_image]').attr('data-type_image');
        let place_append_name = $(this);
        let place_append_path = $(this).parents('li.img-item').find('span.thumb-img').children('img');
        let place_append_path_detail = $('.detail-img .thumb-img').children('img');
        let base_URL = show_box_info_img_products.base_URL;
        let action = "rename";
        let id_changes;
        let exten_file = $(this).parents('.info-value').find('.file-exten').text();
        if (name_new.length != 0) {
            if (name_new != name_curr) {
                if (type_img == 'avatar') {
                    // type is avayar
                    let id_product = $(this).parents('#open_modal_total_img').attr('data-id_product');
                    id_changes = id_product;
                } else {
                    // type is relative
                    let id_image = $(this).parents('li.img-item').children('span.thumb-img').attr('data-id_image');
                    id_changes = id_image;
                }
                rename_relative_img(base_URL, action, type_img, id_changes, name_curr, name_new, exten_file, place_append_name, place_append_path, place_append_path_detail);
            } else {
                notifi_process("B???n ???? l??u v???i t??n c??", show_box_info_img_products.notification, "success");
            }
        } else {
            notifi_process("Vui l??ng kh??ng b??? tr???ng t??n file", show_box_info_img_products.notification, "error");
            place_append_name.text(name_curr);
        }
        $(this).attr('contenteditable', 'false');
        $(this).attr('style', '');
    });


    // g??n s??? ki???n ????? x??a ???nh trong modal
    $(show_box_info_img_products.wrapper).delegate(show_box_info_img_products.btn_delete, 'click', function () {
        let select_again = confirm("B???n th???c s??? mu???n x??a file ???nh n??y..?");
        if (select_again) {
            let src_img = $(this).parents('span.thumb-img').children('img').attr('src');
            let id_img = $(this).parents('span.thumb-img').attr('data-id_image');
            let base_URL = show_box_info_img_products.base_URL;
            let action = "delete";
            let place_delete = $(show_box_info_img_products.place_delete + "[data-id_image=" + (id_img) + "]").parents('li.img-item');
            let num_relative_img;
            count_img_relative(".list-img-relative-product li.img-item");
            // console.log(show_box_info_img_products.total_img);
            if (show_box_info_img_products.total_img > 0) {
                action_img_in_update(action, src_img, id_img, base_URL, place_delete);
            } else {
                alert('T??c v??? kh??ng th??nh c??ng: ph???i c?? ??t nh???t m???t ???nh li??n quan ?????n s???n ph???m');
            }
        }
        event.preventDefault();
    });


    // ==========================================================
    // Show h??nh ???nh trong l??c th??m s???n ph???m m???i ????? d??? t??y ch???nh
    // ==========================================================
    var show_avatar_img_product = {
        "btn_img_click": "#img-product span.thumb-img",
        "src_img_show": "#img-product span.thumb-img img"
    }

    //=============
    // Update name
    //=============

    // post cat
    var update_name_postcat = {
        "wrapper": "#table[data-table='table_postCat']",
        "btn_update": "a.edit[data-target='#edit_postCat']",
        "btn_change_name": "button.update-modal-edit",
        "btn_close_notifi": "span.close",
        "tbl_update": "#edit_postCat",
        "current_name": "span.name",
        "input_change_name": "#name_catPost[name='name_catPost']",
        "notification": ".main-content .notifi",
        "base_URL": "?mod=posts&controller=postsCat&action=update_name"
    }

    // trademark
    var update_name_trademark = {
        "wrapper": "#table[data-table='table_trademark_product']",
        "btn_update": "a.edit[data-target='#edit_trademark']",
        "btn_change_name": "button.update-modal-edit",
        "product_cat": "#id_cat_product[name='id_cat_product']",
        "name_product_old": "",
        "id_product_cat": "",
        "btn_close_notifi": "span.close",
        "tbl_update": "#edit_trademark",
        "current_name": ".name_trademark",
        "input_change_name": "#name_trademark[name='name_trademark']",
        "notification": ".main-content .notifi",
        "base_URL": "?mod=products&controller=trademark&action=update_name"
    }

    // product cat
    var update_name_product_cat = {
        "wrapper": "#table[data-table='table_product_cat']",
        "btn_update": "a.edit[data-target='#edit_product_cat']",
        "btn_change_name": "button.update-modal-edit",
        "btn_close_notifi": "span.close",
        "tbl_update": "#edit_product_cat",
        "current_name": ".name_product_cat",
        "input_change_name": "#name_product_cat[name='name_product_cat']",
        "notification": ".main-content .notifi",
        "base_URL": "?mod=products&controller=product_cat&action=update_name",
    }



    // ===========
    // update info
    // ===========

    // slider
    var update_info_slider = {
        "wrapper": "table.table[data-table='table_sliders']",
        "btn_update": "a[data-target='#modal_update_slider']",
        "btn_change": "button[name='btn_update_slider']",
        "tbl_update": "#modal_update_slider",
        "id_slider": ".status[data-id_sliders]",
        "thumb_img": ".tbody-thumb",
        "name_slider": ".name_slider",
        "numerical_order": ".numerical-order",
        "friendly_URL": ".name_slider[data-href]",
        "btn_change_img": "[for='avatar_slider']",
        "id_slider_update" : "input[name='id_slider']",
        "name_slider_update" : "input[name='name_slider']",
        "link_slider_update" : "input[name='link_slider']",
        "numerical_order_update" : "input[name='numerical_order']",
        "name_slider_old" : "",
        "link_slider_old" : "",
        "numerical_order_old" : "",
        "base_URL" : "?mod=sliders&action=update_info_slider",
        "notification" : ".main-content .notifi"
    }

    // advt
    var update_info_advt = {
        "wrapper": "table.table[data-table='table_advt']",
        "tbl_update" : "#modal_update_advt",
        "modal_img" : ".modal_update_img_advt",
        "btn_update": "a[data-target='#modal_update_advt']",
        "btn_change" : "button[name='btn_update_advt']",
        "id_advt" : ".advt-title[data-advt_id]",
        "link_url" : ".advt-title",
        "start_time" : "[data-start_time]",
        "deadline" : "[data-deadline]",
        "img_url" : ".img_wrapper img",
        "base_URL" : "?mod=advt&action=update_total_info",
        "base_change_img" : "?mod=advt&action=change_img_advt",
        "base_update_img" : "?mod=advt&action=update_img_advt",
        "notification" : ".main-content .notifi",
        "btn_close_modal_img" : "span.close_modal",
        "btn_open_modal_img" : "a.update",
        "btn_browser" : "[name='btn_update_img'][data-action='browser']",
        "btn_save" : "[name='btn_update_img'][data-action='update']"
    }

    // order
    var update_info_order = {
        "wrapper"                      : "body",
        "btn_get_info"                 : "a[data-target='#edit_order']",
        "btn_update"                   : "button.btn_update_order",
        "btn_province"                 : "#province_customer",
        "btn_district"                 : "#distrist_customer",
        "btn_street"                   : "#street_customer",
        "baseURL_get_info_customer"    : "?mod=sales&action=get_info_customer",
        "baseURL_get_address_customer" : "?mod=sales&action=get_address_customer",
        "baseURL_update"               : "?mod=sales&action=update_info_customer_and_order",
        "baseURL_loadLocation"         : "?mod=sales&action=load_location",
        "notification"                 : ".main-content .notifi",
    }

    // select location
    $(update_info_order.wrapper).delegate(update_info_order.btn_province,'change',function () {
        $("#edit_order").find("select[name='distrist_customer']").empty();
        $("#edit_order").find("select[name='street_customer']").empty();
        let level_get    = 2;
        let id_location  = $(this).val();
        let place_append = update_info_order.btn_district;
        load_location(level_get, id_location, place_append);
    });
    $(update_info_order.wrapper).delegate(update_info_order.btn_district,'change',function () {
        $("#edit_order").find("select[name='street_customer']").empty();
        let level_get   = 3;
        let id_location = $(this).val();
        let place_append = update_info_order.btn_street;
        load_location(level_get, id_location, place_append);
    });

    // load location
    function load_location(level_get, id_location, place_append){
        $.ajax({
            url : update_info_order.baseURL_loadLocation,
            method : "POST",
            data : {
                level_get   : level_get,
                id_location : id_location
            },
            beforeSend : () => {
                console.log('load location');
            },
            dataType : "json",
            success : (data) => {
                let _html = "";
                for(let i=0 ; i<data.list_location.length ; i++){
                    _html += `<option value="${data.list_location[i].id_location}">${data.list_location[i].name_location}</option>`;
                }
                $(place_append).append(_html);
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // get and append info order
    $(update_info_order.wrapper).delegate(update_info_order.btn_get_info,'click',function () {
        let id_order    = $(this).parents('tr').find('.code-status').attr('data-id_order');
        let id_customer = $(this).parents('tr').find('a.name_customer[data-id_customer]').attr('data-id_customer');
        let code_order  = $(this).parents('tr').find('.code-status').text();
        let num_order   = $(this).parents('tr').find('.num-order').text();
        let total_price = $(this).parents('tr').find('.total-price').text();
        $.ajax({
            url : update_info_order.baseURL_get_info_customer,
            method : "POST",
            data : {
                id_customer : id_customer,
                id_order    : id_order
            },
            beforeSend : () => {
                console.log('get info customer');
            },
            dataType : "json",
            success : (data) => {
                console.log(data);
                $("#edit_order").find("input[name='code_order']").val(code_order);
                $("#edit_order").find("input[name='order_customer']").val(data.customer_item.name_customer);
                $("#edit_order").find("input[name='email_customer']").val(data.customer_item.email_customer);
                $("#edit_order").find("input[name='phone_customer']").val(data.customer_item.phone_customer);
                $("#edit_order").find("input[name='order_date']").val(data.info_order_item.order_date);
                let note = data.info_order_item.note_order != null ? data.info_order_item.note_order : "Kh??ng c??";
                $("#edit_order").find("textarea[name='note']").val(note);
                $("#edit_order").find("input[name='num_order']").val(data.info_order_item.num_order);
                $("#edit_order").find("input[name='total_price_order']").val(currency_format(data.info_order_item.total_price_order));
                let html_status = ` <option ${ data.info_order_item.status === "pending"  ? "selected" : "" } value="pending">ch??? duy???t</option>
                                    <option ${ data.info_order_item.status === "delivery" ? "selected" : "" } value="delivery">??ang giao</option>
                                    <option ${ data.info_order_item.status === "complete" ? "selected" : "" } value="complete">Ho??nh th??nh</option>
                                    <option ${ data.info_order_item.status === "canceled" ? "selected" : "" } value="canceled">???? h???y</option>`;
                $("#edit_order").find("select[name='status']").empty();
                $("#edit_order").find("select[name='status']").append(html_status);
                $("#edit_order").find("button.btn_update_order").attr('data-id_order',id_order);
                $("#edit_order").find("button.btn_update_order").attr('data-id_customer',id_customer);
                $("#edit_order").find("input[name='address_customer']").val(data.address);
                get_address_customer(data.data_address);
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
        event.preventDefault();
    });

    // format currency
    function currency_format(number) {
        return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'VND' }).format(number)
    }

    // get address customer
    function get_address_customer(data_address){
        console.log(data_address);
        let id_province = parseInt(data_address.province);
        let id_district = parseInt(data_address.district);
        let id_street   = parseInt(data_address.street);
        let address     = data_address.address;
        $.ajax({
            url : update_info_order.baseURL_get_address_customer,
            method : "POST",
            data : {
                id_province : id_province,
                id_district : id_district,
                id_street   : id_street,
            },
            beforeSend : () => {
                console.log('get address customer');
            },
            dataType : "json",
            success : (data) => {
                let html_province = "";
                for(let i=0 ; i<data['list_province'].length ; i++){
                    html_province += `<option ${ data['province'].id_location == data['list_province'][i].id_location ? "selected" : "" } value="${data['list_province'][i].id_location}">${data['list_province'][i].name_location}</option>`;
                }
                let html_district = "";
                for(let i=0 ; i<data['list_district'].length ; i++){
                    html_district += `<option ${ data['district'].id_location == data['list_district'][i].id_location ? "selected" : "" } value="${data['list_district'][i].id_location}">${data['list_district'][i].name_location}</option>`;
                }
                let html_street = "";
                for(let i=0 ; i<data['list_street'].length ; i++){
                    html_street += `<option ${ data['street'].id_location == data['list_street'][i].id_location ? "selected" : "" } value="${data['list_street'][i].id_location}">${data['list_street'][i].name_location}</option>`;
                }
                $("#edit_order").find("select[name='province_customer']").empty();
                $("#edit_order").find("select[name='distrist_customer']").empty();
                $("#edit_order").find("select[name='street_customer']").empty();
                $("#edit_order").find("select[name='province_customer']").append(html_province);
                $("#edit_order").find("select[name='distrist_customer']").append(html_district);
                $("#edit_order").find("select[name='street_customer']").append(html_street);
                
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // btn update
    $(update_info_order.wrapper).delegate(update_info_order.btn_update,'click',function () {
        let name_customer     = $("#edit_order").find("input[name='order_customer']").val();
        let email_customer    = $("#edit_order").find("input[name='email_customer']").val();
        let province_customer = $("#edit_order").find("select[name='province_customer']").val();
        let district_customer = $("#edit_order").find("select[name='distrist_customer']").val();
        let street_customer   = $("#edit_order").find("select[name='street_customer']").val();
        let address_customer  = $("#edit_order").find("input[name='address_customer']").val();
        let phone_customer    = $("#edit_order").find("input[name='phone_customer']").val();
        let note_order        = $("#edit_order").find("textarea[name='note']").val();
        let status            = $("#edit_order").find("select[name='status']").val();
        let order_date        = $("#edit_order").find("input[name='order_date']").val();
        let id_customer       = $("#edit_order").find('button.btn_update_order').attr('data-id_customer');
        let id_order          = $("#edit_order").find('button.btn_update_order').attr('data-id_order');
        
        if ( name_customer.length > 0 && email_customer.length > 0 && province_customer.length > 0 && district_customer.length > 0 && street_customer.length > 0 && address_customer.length > 0 && phone_customer.length > 0 && note_order.length > 0 ){
            $.ajax({
                url : update_info_order.baseURL_update,
                method : "POST",
                data : {
                    name_customer     : name_customer,
                    email_customer    : email_customer,
                    province_customer : province_customer,
                    district_customer : district_customer,
                    street_customer   : street_customer,
                    address_customer  : address_customer,
                    phone_customer    : phone_customer,
                    note_order        : note_order,
                    status            : status,
                    order_date        : order_date,
                    id_customer       : id_customer,
                    id_order          : id_order
                },
                beforeSend : () => {
                    console.log('update info customer and order');
                },
                dataType : "json",
                success : (data) => {
                    console.log(data);
                    if(data.status === "success") {
                        console.log(data);
                        init(pagination_order.status, pagination_order, pagination_order.base_URL);
                        notifi_process("Update d??? li???u th??nh c??ng",update_info_order.notification,"success");
                        load_num_status_order();
                    }
                },
                error : (xhr, ajaxOptions, thrownError) => {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        } else {
            notifi_process("Vui l??ng ??i???n ?????y ????? th??ng tin, kh??ng ???????c ????? tr???ng",update_info_order.notification,"error");
        }
        event.preventDefault();
    });




    //===============
    // X??a v??nh vi???n
    //===============

    // post
    var delete_permanently_post = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='post']",
        "base_URL": "?mod=posts&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active",
        "unlink": false
    }

    // post cat
    var delete_permanently_post_cat = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='post_cat']",
        "base_URL": "?mod=posts&controller=postsCat&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active",
    }

    // trademark
    var delete_permanently_trademark = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='trademark']",
        "base_URL": "?mod=products&controller=trademark&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.trademark-status li a.active",
        "unlink": false
    }

    // products
    var delete_permanently_product = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='products']",
        "base_URL": "?mod=products&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.products-status li a.active",
        "unlink": false
    }

    // product cat
    var delete_permanently_product_cat = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='product_cat']",
        "base_URL": "?mod=products&controller=product_cat&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.product_cat-status li a.active",
        "unlink": false
    }

    // sliders
    var delete_permanently_slider = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='sliders']",
        "base_URL": "?mod=sliders&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.sliders-status li a.active",
        "unlink": false
    }

    // advt 
    var delete_permanently_advt = {
        "btn_delete": "a.permanently[data-option='permanently'][data-modules='advt']",
        "base_URL": "?mod=advt&action=delete_permanently",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.advt-status li a.active",
        "unlink": false
    }

    // order
    var delete_permanently_order = {
        "btn_delete"    : "a.delete.permanently[data-modules='order']",
        "base_URL"      : "?mod=sales&action=delete_order",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.order-status li a.active",
    }

    // customer 
    var delete_permanently_customer = {
        "btn_delete"    : "a.delete.permanently[data-modules='customer']",
        "base_URL"      : "?mod=sales&controller=customer&action=delete_customer",
        "notification"  : ".main-content .notifi"
    }

    //======================
    // Chuy???n v??o th??ng r??c
    //======================

    // post
    var post_goto_trash = {
        "btn_goto_trash": "a.goto-trash[data-option='goto_trash'][data-modules='post']",
        "base_URL": "?mod=posts&action=goto_trash",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active"
    }

    // post cat
    var post_cat_goto_trash = {
        "btn_goto_trash": "a.goto-trash[data-option='goto_trash'][data-modules='post_cat']",
        "base_URL": "?mod=posts&controller=postsCat&action=goto_trash",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active"
    }

    // products
    var product_goto_trash = {
        "btn_goto_trash": "a.goto-trash[data-option='goto_trash'][data-modules='products']",
        "base_URL": "?mod=products&action=goto_trash",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.products-status li a.active"
    }

    // product cat 
    var product_cat_goto_trash = {
        "btn_goto_trash": "a.goto-trash[data-option='goto_trash'][data-modules='product_cat']",
        "base_URL": "?mod=products&controller=product_cat&action=goto_trash",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.product_cat-status li a.active"
    }

    // slider
    var slider_goto_trash = {
        "btn_goto_trash" : "a.goto-trash[data-option='goto_trash'][data-modules='sliders']",
        "base_URL" : "?mod=sliders&action=goto_trash",
        "status_tab_curr" : "#main-content-wp #content.content-list-page .sec-option ul.sliders-status li a.active"
    }

    // advt
    var advt_goto_trash = {
        "btn_goto_trash" : "a.goto-trash[data-option='goto_trash'][data-modules='advt']",
        "base_URL" : "?mod=advt&action=goto_trash",
        "status_tab_curr" : "#main-content-wp #content.content-list-page .sec-option ul.advt-status li a.active"
    }

    //==============================
    // Kh??i ph???c t??? trong th??ng r??c
    //==============================

    // post
    var restore_post = {
        "btn_restore": "a.restore.post[data-option='restore']",
        "base_URL": "?mod=posts&action=restore",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active"
    }

    // post cat
    var restore_post_cat = {
        "btn_restore": "a.restore.post_cat[data-option='restore']",
        "base_URL": "?mod=posts&controller=postsCat&action=restore",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active"
    }

    // products
    var restore_product = {
        "btn_restore": "a.restore.product[data-option='restore']",
        "base_URL": "?mod=products&action=restore",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.products-status li a.active"
    }

    // products cat
    var restore_product_cat = {
        "btn_restore": "a.restore.product_cat[data-option='restore']",
        "base_URL": "?mod=products&controller=product_cat&action=restore",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.product_cat-status li a.active"
    }

    // sliders
    var restore_slider = {
        "btn_restore" : "a.restore.sliders[data-option='restore']",
        "base_URL": "?mod=sliders&action=restore",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.sliders-status li a.active"
    }

    // advt
    var restore_advt = {
        "btn_restore" : "a.restore.advt[data-option='restore']",
        "base_URL": "?mod=advt&action=restore",
        "status_tab_curr": "#main-content-wp #content.content-list-page .sec-option ul.sliders-status li a.active"
    }

    //=========================
    // T??c v??? theo t???ng status
    //=========================

    // post
    var action_option_posts = {
        "btn_action": "button[type='button'][name='btn_action_post']",
        "action_status": "select[name='actions']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_change_status": "?mod=posts&action=change_status",
        "base_URL_delete": "?mod=posts&action=delete_permanently",
        "base_URL_restore": "?mod=posts&action=restore",
        "base_URL_goto_trash": "?mod=posts&action=goto_trash",
        "unlink": false
    }

    // post cat
    var action_option_post_cat = {
        "btn_action": "button[type='button'][name='btn_action_post_cat']",
        "action_status": "select[name='actions']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_change_status": "?mod=posts&controller=postsCat&action=change_status",
        "base_URL_delete": "?mod=posts&controller=postsCat&action=delete_permanently",
        "base_URL_restore": "?mod=posts&controller=postsCat&action=restore",
        "base_URL_goto_trash": "?mod=posts&controller=postsCat&action=goto_trash",
        "notification": ".main-content .notifi",
    }

    // trademark
    var action_option_trademark = {
        "btn_action": "button[type='button'][name='btn_action_trademark']",
        "action_status": "select[name='actions-trademark']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.trademark-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_delete": "?mod=products&controller=trademark&action=delete_permanently",
        "notification": ".main-content .notifi"
    }

    //products
    var action_option_product = {
        "btn_action": "button[type='button'][name='btn_action_products']",
        "action_status": "select[name='actions']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.products-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_change_status": "?mod=products&action=change_status",
        "base_URL_delete": "?mod=products&action=delete_permanently",
        "base_URL_restore": "?mod=products&action=restore",
        "base_URL_goto_trash": "?mod=products&action=goto_trash",
        "notification": ".main-content .notifi",
    }

    //product cat
    var action_option_product_cat = {
        "btn_action": "button[type='button'][name='btn_action_product_cat']",
        "action_status": "select[name='actions']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.product_cat-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_change_status": "?mod=products&controller=product_cat&action=change_status",
        "base_URL_delete": "?mod=products&controller=product_cat&action=delete_permanently",
        "base_URL_restore": "?mod=products&controller=product_cat&action=restore",
        "base_URL_goto_trash": "?mod=products&controller=product_cat&action=goto_trash",
        "notification": ".main-content .notifi",
    }

    //sliders
    var action_option_slider = {
        "btn_action": "button[type='button'][name='btn_action_sliders']",
        "action_status": "select[name='actions']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.sliders-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_change_status": "?mod=sliders&action=change_status",
        "base_URL_delete": "?mod=sliders&action=delete_permanently",
        "base_URL_restore": "?mod=sliders&action=restore",
        "base_URL_goto_trash": "?mod=sliders&action=goto_trash",
        "notification": ".main-content .notifi",
        "unlink" : false
    }

    // advt
    var action_option_advt = {
        "btn_action": "button[type='button'][name='btn_action_advt']",
        "action_status": "select[name='actions']",
        "status_current": "#main-content-wp #content.content-list-page .sec-option ul.advt-status li a.active",
        "list_checked": "input.checkItem[name='checkItem[]']:checked",
        "base_URL_change_status": "?mod=advt&action=change_status",
        "base_URL_delete": "?mod=advt&action=delete_permanently",
        "base_URL_restore": "?mod=advt&action=restore",
        "base_URL_goto_trash": "?mod=advt&action=goto_trash",
        "notification": ".main-content .notifi",
        "unlink" : false
    }

    // order
    var action_option_order = {
        "btn_action" : "button[type='button'][name='btn_action_order']",
        "action_status" : "select[name='actions_order']",
        "status_current" : "#main-content-wp #content.content-list-page .sec-option ul.order-status li a.active",
        "list_checked" : "input.checkItem[name='checkItem[]']:checked",
        "base_URL_delete" : "?mod=sales&action=delete_order"
    }

    // customer 
    var action_option_customer = {
        "btn_action" : "button[type='button'][name='btn_action_customer']",
        "action_status" : "select[name='actions_customer']",
        "list_checked" : "input.checkItem[name='checkItem[]']:checked",
        "base_URL_delete" : "?mod=sales&controller=customer&action=delete_customer"
    }

    //=================
    // T??c v??? t??m ki???m
    //=================

    // option search post
    var option_search_posts = {
        "wrapper": "form.form-s[data-search_table='tbl_posts']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link",
    }

    // option search post cat
    var option_search_post_cat = {
        "wrapper": "form.form-s[data-search_table='tbl_postcat']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // option search trademark
    var option_search_trademark = {
        "wrapper": "form.form-s[data-search_table='tbl_trademark_product']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // option search product
    var option_search_product = {
        "wrapper": "form.form-s[data-search_table='tbl_products']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // product cat
    var option_search_product_cat = {
        "wrapper": "form.form-s[data-search_table='tbl_productcat']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // sliders
    var option_search_slider = {
        "wrapper": "form.form-s[data-search_table='tbl_sliders']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // advt
    var option_search_advt = {
        "wrapper": "form.form-s[data-search_table='tbl_advt']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // order
    var option_seach_order = {
        "wrapper": "form.form-s[data-search_table='tbl_order']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    // customer
    var option_search_customer = {
        "wrapper": "form.form-s[data-search_table='tbl_customer']",
        "btn_open_option": "a.select-option",
        "table_option": ".box-option",
        "option_item": "ul.list-opt-s li.opt-item a.opt-link"
    }

    //============
    // search bar
    //============

    // search bar post 
    var search_bar_posts = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=posts&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=posts&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active"
    }

    // search bar post cat
    var search_bar_post_cat = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=posts&controller=postsCat&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=posts&controller=postsCat&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.post-status li a.active"
    }

    // search bar trademark
    var search_bar_trademark = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=products&controller=trademark&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=products&controller=trademark&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.trademark-status li a.active"
    }

    // products
    var search_bar_product = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=products&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=products&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.products-status li a.active"
    }

    // product cat
    var search_bar_product_cat = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=products&controller=product_cat&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=products&controller=product_cat&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.product_cat-status li a.active"
    }

    // slider
    var search_bar_slider = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=sliders&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=sliders&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.sliders-status li a.active"
    }

    // advt
    var search_bar_advt = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=advt&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=advt&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.advt-status li a.active"
    }

    // order
    var search_bar_order = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=sales&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=sales&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.order-status li a.active"
    }

    // customer
    var search_bar_customer = {
        "input_search": "input#s[name='q']",
        "q": "",
        "option_search": "",
        "btn_search": "button.btn-s[type='submit'][name='btn_s']",
        "base_URL": "?mod=sales&controller=customer&action=search",
        "tbl_search": "form.form-s[data-search_table]",
        "base_URL_load_data": "?mod=sales&controller=customer&action=pagination&info=load_page_search",
        "status_curr": "#main-content-wp #content.content-list-page .sec-option ul.customer-status li a.active"
    }

    //======================
    // table search history
    //======================

    // post
    var history_search_posts = {
        "table_history": ".search-history[data-search_table='tbl_posts']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=posts&action=load_data_histoty_search",
        "base_URL_delete": "?mod=posts&action=delete_search_history",
        "base_URL_search_history": "?mod=posts&action=search_history"
    }

    // post cat
    var history_search_post_cat = {
        "table_history": ".search-history[data-search_table='tbl_postcat']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=posts&controller=postscat&action=load_data_histoty_search",
        "base_URL_delete": "?mod=posts&controller=postsCat&action=delete_search_history",
        "base_URL_search_history": "?mod=posts&controller=postsCat&action=search_history"
    }

    // trademark
    var history_search_trademark = {
        "table_history": ".search-history[data-search_table='tbl_trademark_product']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=products&controller=trademark&action=load_data_histoty_search",
        "base_URL_delete": "?mod=products&controller=trademark&action=delete_search_history",
        "base_URL_search_history": "?mod=products&controller=trademark&action=search_history"
    }

    // products
    var history_search_product = {
        "table_history": ".search-history[data-search_table='tbl_products']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=products&action=load_data_histoty_search",
        "base_URL_delete": "?mod=products&action=delete_search_history",
        "base_URL_search_history": "?mod=products&action=search_history"
    }

    // product cat
    var history_search_product_cat = {
        "table_history": ".search-history[data-search_table='tbl_productcat']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=products&controller=product_cat&action=load_data_histoty_search",
        "base_URL_delete": "?mod=products&controller=product_cat&action=delete_search_history",
        "base_URL_search_history": "?mod=products&controller=product_cat&action=search_history"
    }

    // slider
    var history_search_slider = {
        "table_history": ".search-history[data-search_table='tbl_sliders']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=sliders&action=load_data_histoty_search",
        "base_URL_delete": "?mod=sliders&action=delete_search_history",
        "base_URL_search_history": "?mod=sliders&action=search_history"
    }

    // advt
    var history_search_advt = {
        "table_history": ".search-history[data-search_table='tbl_advt']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=advt&action=load_data_histoty_search",
        "base_URL_delete": "?mod=advt&action=delete_search_history",
        "base_URL_search_history": "?mod=advt&action=search_history"
    }

    // order
    var history_search_order = {
        "table_history": ".search-history[data-search_table='tbl_order']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=sales&action=load_data_histoty_search",
        "base_URL_delete": "?mod=sales&action=delete_search_history",
        "base_URL_search_history": "?mod=sales&action=search_history"
    }

    // customer
    var history_search_customer = {
        "table_history": ".search-history[data-search_table='tbl_customer']",
        "place_append_history": ".search-history",
        "history_item": "ul.list-history li.history-item a.content",
        "btn_selete_history_item": "a.delete[data-search_id]",
        "base_URL": "?mod=sales&controller=customer&action=load_data_histoty_search",
        "base_URL_delete": "?mod=sales&controller=customer&action=delete_search_history",
        "base_URL_search_history": "?mod=sales&controller=customer&action=search_history"
    }
    // ===============
    // change category
    // ===============

    // trademark
    var name_category_trademark = {
        "wrapper": "table.table[data-table='table_trademark_product']",
        "btn_change": "span.name-category",
        "btn_save": ".change-cat-modal-content .save-modal",
        "btn_close": ".change-cat-modal-content .close-modal",
        "tbl_option_category": ".change-cat-modal",
        "select_option": "select#id_cat_product",
        "base_URL": "?mod=products&controller=trademark&action=update_category",
        "notification": ".main-content .notifi"
    }

    // ===========================================
    // Load trademark products by product category
    // ===========================================
    // add products
    var load_trademark_by_cate_product = {
        "wrapper": "#main-content-wp.add-product",
        "btn_load_tradmark": "select[name='parent_id']",
        "place_append": "select[name='trademark_id']",
        "base_URL": "?mod=products&action=load_trademark"
    }

    // update products
    var load_trademark_in_update_by_cate_product = {
        "wrapper": "#update_info_post",
        "btn_load_tradmark": "select[name='parent_id']",
        "place_append": "select[name='trademark_id']",
        "base_URL": "?mod=products&action=load_trademark"
    }

    // ===============
    // Add detail item
    // ===============

    var detail_item_product = {
        "wrapper": "#main-content-wp.add-product",
        "btn_add": ".action-detail-item[data-action='add']",
        "btn_delete": ".action-detail-item[data-action='delete']",
        "num_detail_item_curr": 1,
        "btn_add_detail_option": ".btn-add-detail-item",
        "place_append_detail_item": ".detail-item",
    }

    // =============
    // change images
    // =============

    var change_img_product = {
        "wrapper": "#open_modal_total_img",
        "btn_change": "a.change[data-action='change']",
        "btn_get_file": "button.btn_change_img_new[data-action='load_img']",
        "btn_save_file": "button.btn_change_img_new[data-action='save_img']",
        "btn_close_modal": ".close-modal-change",
        "box_change": ".modal-change-img",
        "inputFile": ".img-new[name='img_new']",
        "place_append_path": "input[name='thumb_img_new']",
        "box_append_img": ".detail_img_change",
        "src_append": "span.thumb-img img",
        "src_bg": "span.thumb-bg img",
        "base_URL": "?mod=products&action=update_img",
        "type_image": "",
        "base_URL_update_img": "?mod=products&action=upload_img_new",
        "data_id": 0,
        "saving": false,
        "src_img_curr": "",
        "notification": ".main-content .notifi"
    }

    //=======================
    // Xem chi ti???t s???n ph???m
    //=======================

    var show_total_info_product = {
        "wrapper": "#content[data-modules='products']",
        "btn_show": "a.see-detail[data-target]",
        "base_URL": "?mod=products&action=get_list_info_products",
        "id_product": ".list-info .info-item #id_product",
        "name_product": ".list-info .info-item #name_product",
        "code_product": ".list-info .info-item #code_product",
        "price_product": ".list-info .info-item #price_product",
        "price_old_product": ".list-info .info-item #price_old_product",
        "avatar_product": "",
        "list_img_relative": new Array(),
        "qty_product": ".list-info .info-item #qty_product",
        "status": ".list-info .info-item #status",
        "status_old": ".list-info .info-item #status_old",
        "creator": ".list-info .info-item #creator",
        "created_date": ".list-info .info-item #created_date",
        "update_date": ".list-info .info-item #update_date",
        "product_cate_item": ".list-info .info-item #products_cate",
        "trademark_product": ".list-info .info-item #trademark_products",
        "btn_show_avatar": "#avatar_product[name='avatar_product']",
        "btn_show_img_relative": "#img_relative_product[type='button']",
        "btn_close": ".back_info_text"
    }

    // g??n s??? ki???n ????? hi???n l??n b???ng h??nh ???nh avatar s???n ph???m            
    $(show_total_info_product.btn_show_avatar).click(function () {
        $(".img-relative-product").stop().hide(0);
        $(".avatar-product").find('.thumb-img').children('img').attr('src', show_total_info_product.avatar_product);
        $(".avatar-product").stop().fadeIn(300);
        $("#modal_total_info_products .modal-body").addClass('show');
    });

    // g??n s??? ki???n ????? ???n ??i ph???n info text products
    $(show_total_info_product.btn_close).click(function () {
        $("#modal_total_info_products .modal-body").removeClass('show');
        $("#modal_total_info_products .modal-body").addClass('hide');
    });

    // G??n s??? ki???n ????? hi???n ph???n ???nh li??n quan ?????n s???n ph???m
    $(show_total_info_product.btn_show_img_relative).click(function () {
        $(".avatar-product").stop().hide(0);
        var num_img = show_total_info_product.list_img_relative.length;
        var _html = '<ul class="list-img-relative">';
        for (let i = 0; i < num_img; i++) {
            _html += '  <li class="p-3">\
                            <span class="thumb-img w-100 h-100 d-block">\
                                <img src="' + (show_total_info_product.list_img_relative[i]['name_img_relative']) + '" class="d-block w-100 h-100" alt="">\
                            </span>\
                        </li>'
        }
        _html += "</ul>"
        $(".img-relative-product").empty();
        $(".img-relative-product").append(_html);
        $(".img-relative-product").stop().fadeIn(300);
        $("#modal_total_info_products .modal-body").addClass('show');
    });


    // G??n s??? ki???n ????? g???i d??? li???u id product l??n server v?? l???y to??n b??? th??ng tin c???a s???n ph???m v??? ????? hi???n l??n modal info total product
    $(show_total_info_product.wrapper).delegate(show_total_info_product.btn_show, 'click', function () {
        let id_product = $(this).parents('tr').find('span[data-id_products]').attr('data-id_products');
        $.ajax({
            url: show_total_info_product.base_URL,
            method: "POST",
            data: {
                id_product: id_product
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                $(show_total_info_product.id_product).val(data.id_product);
                $(show_total_info_product.code_product).val(data.code_product);
                $(show_total_info_product.name_product).val(data.name_product);
                $(show_total_info_product.price_product).val(data.price_product);
                if (data.price_old_product == null) {
                    price_old_product = "B???n ch??a nh???p gi?? c?? s???n ph???m, ch???n n??t update s???n ph???m ????? th??m"
                } else {
                    price_old_product = data.price_old_product;
                }
                $(show_total_info_product.price_old_product).val(price_old_product);
                $(show_total_info_product.qty_product).val(data.qty_product);
                $(show_total_info_product.status).val(data.status);
                if (data.status_old == null) {
                    status_old = "Hi???n t???i ch??a c?? gi?? tr??? ...";
                } else {
                    status_old = data.status_old;
                }
                $(show_total_info_product.status_old).val(status_old);
                $(show_total_info_product.creator).val(data.creator);
                $(show_total_info_product.created_date).val(data.created_date);
                if (data.update_date == null) {
                    update_date = "Hi???n t???i ch??a c?? gi?? tr??? ...";
                } else {
                    update_date = data.update_date;
                }
                $(show_total_info_product.update_date).val(update_date);
                $(show_total_info_product.product_cate_item).val(data.product_cate_item);
                $(show_total_info_product.trademark_product).val(data.trademark_product);
                show_total_info_product.avatar_product = data.avatar_product;
                show_total_info_product.list_img_relative = data.list_img_relative;
                $("#modal_total_info_products .modal-body").removeClass('show');
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    });

    var modules = $("#content").attr('data-modules');
    console.log(modules);
    if (modules == 'post') {
        init(pagination_post.status, pagination_post, defaults.post_URL_pagination);
    } else if (modules === 'post_cat') {
        init(pagination_post_cat.status, pagination_post_cat, defaults.post_cat_URL_pagination);
    } else if (modules === 'trademark') {
        init(pagination_trademark.status, pagination_trademark, pagination_trademark.base_URL);
    } else if (modules === 'products') {
        init(pagination_products.status, pagination_products, pagination_products.base_URL);
    } else if (modules === 'product_cat') {
        init(pagination_product_cat.status, pagination_product_cat, pagination_product_cat.base_URL);
    } else if (modules === 'sliders') {
        init(pagination_slider.status, pagination_slider, pagination_slider.base_URL);
    } else if (modules === 'advt') {
        init(pagination_advt.status, pagination_advt, pagination_advt.base_URL);
    } else if (modules === 'order') {
        init(pagination_order.status, pagination_order, pagination_order.base_URL);
    } else if (modules === 'customer') {
        init(pagination_customer.status, pagination_customer, pagination_customer.base_URL);
    }

    set_height_config();

    //=====================
    // Load page by status
    //=====================

    // post
    select_option_status.delegate(pagination_post.action_item, 'click', function () {
        $("table.table[data-action]").attr('data-action', '');
        pagination_post.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_post.status = status;
        init(pagination_post.status, pagination_post, defaults.post_URL_pagination);
        event.preventDefault();
    });

    // post cat
    select_option_status.delegate(pagination_post_cat.action_item, 'click', function () {
        $("table.table[data-action]").attr('data-action', '');
        pagination_post_cat.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_post_cat.status = status;
        init(pagination_post_cat.status, pagination_post_cat, defaults.post_cat_URL_pagination);
        event.preventDefault();
    });

    // product
    select_option_status.delegate(pagination_products.action_item, 'click', function () {
        $('a.action-item').removeClass('active');
        $(this).parent('li').children('a.action-item').addClass('active');
        $("table.table[data-action]").attr('data-action', '');
        pagination_products.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_products.status = status;
        init(pagination_products.status, pagination_products, pagination_products.base_URL);
        event.preventDefault();
    });

    // product cat
    select_option_status.delegate(pagination_product_cat.action_item, 'click', function () {
        $("a.action-item").removeClass('active');
        $(this).parent('li').children('a.action-item').addClass('active');
        $("table.table[data-action]").attr('data-action', '');
        pagination_product_cat.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_product_cat.status = status;
        init(pagination_product_cat.status, pagination_product_cat, pagination_product_cat.base_URL);
        event.preventDefault();
    });

    // slider
    select_option_status.delegate(pagination_slider.action_item,'click',function() {
        $("a.action-item").removeClass('active');
        $(this).parent('li').children('a.action-item').addClass('active');
        $("table.table[data-action]").attr('data-action', '');
        pagination_slider.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_slider.status = status;
        init(pagination_slider.status, pagination_slider, pagination_slider.base_URL);
        event.preventDefault();
    });

    // advt
    select_option_status.delegate(pagination_advt.action_item,'click',function () {
        $("a.action-item").removeClass('active');
        $(this).parents('li').children('a.action-item').addClass('active');
        $("table.table[data-action]").attr('data-action', '');
        pagination_advt.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_advt.status = status;
        init(pagination_advt.status, pagination_advt, pagination_advt.base_URL);
        event.preventDefault();
    });
    select_option_status.delegate(pagination_order.action_item,'click',function () {
        $("a.action-item").removeClass('active');
        $(this).parents('li').children('a.action-item').addClass('active');
        $("table.table[data-action]").attr('data-action', '');
        pagination_order.current_page = 1;
        let status = $(this).parent('li').attr('class');
        pagination_order.status = status;
        init(pagination_order.status, pagination_order, pagination_order.base_URL);
        event.preventDefault();
    });

    //===============
    // Change status
    //===============

    // post
    place_append_table.delegate(status_post.btn_change, 'click', function () {
        let data_id = $(this).attr('data-id_post');
        let status_current = $(this).parents('tr').find(status_post.data_status).attr('data-status');
        let active_current = $(this).attr('data-active');
        let action = "change_status_item";
        status_post.active_current = active_current;
        status_post.status_current = status_current;
        let URL_load_num_status = status_post.post_URL_load_num_status;
        let place_append_status = $(status_post.data_status + "[data-id_post=" + (data_id) + "]");
        let place_append_active = $(status_post.btn_change + "[data-id_post=" + (data_id) + "]");
        let pagination_of = pagination_post;
        let URL_pagination = defaults.post_URL_pagination;
        change_status(status_post, data_id, status_post.active_current, status_post.status_current, status_post.base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination);
    });

    // post cat
    place_append_table.delegate(status_post_cat.btn_change, 'click', function () {
        let data_id = $(this).attr('data-id_post_cat');
        let status_current = $(this).parents('tr').find(status_post_cat.data_status).attr('data-status');
        let active_current = $(this).attr('data-active');
        let action = "change_status_item";
        status_post_cat.active_current = active_current;
        status_post_cat.status_current = status_current;
        let URL_load_num_status = status_post_cat.post_URL_load_num_status;
        let place_append_status = $(status_post_cat.data_status + "[data-id_post_cat=" + (data_id) + "]");
        let place_append_active = $(status_post_cat.btn_change + "[data-id_post_cat=" + (data_id) + "]");
        let pagination_of = pagination_post_cat;
        let URL_pagination = defaults.post_cat_URL_pagination;
        change_status(status_post_cat, data_id, status_post_cat.active_current, status_post_cat.status_current, status_post_cat.base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination);
    });

    // products
    place_append_table.delegate(status_product.btn_change, 'click', function () {
        console.log('change status');
        let data_id = $(this).attr('data-id_products');
        let status_current = $(this).parents('tr').find(status_product.data_status).attr('data-status');
        let active_current = $(this).attr('data-active');
        let action = 'change_status_item';
        status_product.active_current = active_current;
        status_product.status_current = status_current;
        let URL_load_num_status = status_product.product_URL_load_num_status;
        let place_append_status = $(status_product.data_status + "[data-id_products=" + (data_id) + "]");
        let place_append_active = $(status_product.btn_change + "[data-id_products=" + (data_id) + "]");
        let pagination_of = pagination_products;
        let URL_pagination = pagination_products.base_URL;
        change_status(status_product, data_id, status_product.active_current, status_product.status_current, status_product.base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination);
    });

    // product cat
    place_append_table.delegate(status_product_cat.btn_change, 'click', function () {
        let data_id = $(this).attr('data-id_product_cat');
        let status_current = $(this).parents('tr').find(status_product_cat.data_status).attr('data-status');
        let active_current = $(this).attr('data-active');
        let action = 'change_status_item';
        status_product_cat.active_current = active_current;
        status_product_cat.status_current = status_current;
        let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
        let place_append_status = $(status_product_cat.data_status + "[data-id_product_cat=" + (data_id) + "]");
        let place_append_active = $(status_product_cat.btn_change + "[data-id_product_cat=" + (data_id) + "]");
        let pagination_of = pagination_product_cat;
        let URL_pagination = pagination_product_cat.base_URL;
        change_status(status_product_cat, data_id, status_product_cat.active_current, status_product_cat.status_current, status_product_cat.base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination);
    });

    // sliders
    place_append_table.delegate(status_slider.btn_change,'click',function () {
        let data_id = $(this).attr('data-id_sliders');
        let status_current = $(this).parents('tr').find(status_slider.data_status).attr('data-status');
        let active_current = $(this).attr('data-active');
        let action = 'change_status_item';
        status_slider.active_current = active_current;
        status_slider.status_current = status_current;
        let URL_load_num_status = status_slider.sliders_URL_load_num_status;
        let place_append_status = $(status_slider.data_status + "[data-id_sliders="+(data_id)+"]");
        let place_append_active = $(status_slider.btn_change + "[data-id_sliders="+(data_id)+"]");
        let pagination_of = pagination_slider;
        let URL_pagination = pagination_slider.base_URL;
        change_status(status_slider, data_id, status_slider.active_current, status_slider.status_current, status_slider.base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination);
    });

    // advt
    place_append_table.delegate(status_advt.btn_change,'click',function () {
        let data_id = $(this).attr('data-id_advt');
        let status_current = $(this).parents('tr').find(status_advt.data_status).attr('data-status');
        let active_current = $(this).attr('data-active');
        let action = "change_status_item";
        status_advt.active_current = active_current;
        status_advt.status_current = status_current;
        let URL_load_num_status = status_advt.advt_URL_load_num_status;
        let place_append_status = $(status_advt.data_status + "[data-id_advt=" + ( data_id ) + " ] ");
        let place_append_active = $(status_advt.btn_change + "[data-id_advt=" + ( data_id ) + " ] ");
        let pagination_of = pagination_advt;
        let URL_pagination = pagination_advt.base_URL;
        change_status(status_advt, data_id, status_advt.active_current, status_advt.status_current, status_advt.base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination);
    });
    //==============
    // H??m kh???i t???o
    //==============

    function init(status, pagination_of, URL_pagination) {
        let data_id = $(pagination_of.data_id).attr('data-id');
        let modules_action = $(pagination_of.data_modules_action).attr('data-modules_action');
        console.log('init running(' + URL_pagination + ")");
        $.ajax({
            url: URL_pagination + "&type=get_total_page",
            method: "GET",
            data: {
                status: status,
                num_per_page: pagination_of.num_per_page,
                data_id: data_id,
                modules_action: modules_action
            },
            dataType: "json",
        }).done(function (data) {
            console.log(data);
            pagination_of.total_page = parseInt(data.total_page);
            let modules = pagination_of;
            load_btn_pagination(pagination_of.total_page, modules);
            load_data_page(pagination_of, pagination_of.current_page, URL_pagination);
            load_action_by_status(status);
        });
    }

    //================================
    // g??n s??? ki???n click cho btn next
    //================================

    // post
    $(pagination_post.wrapper_pagination).delegate(pagination_post.btn_next, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = defaults.post_URL_pagination;
        click_next_pagin(pagination_post, search_bar_posts, action_curr, URL_pagination);
        event.preventDefault();
    });

    //post cat
    $(pagination_post_cat.wrapper_pagination).delegate(pagination_post_cat.btn_next, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = defaults.post_cat_URL_pagination;
        click_next_pagin(pagination_post_cat, search_bar_post_cat, action_curr, URL_pagination);
        event.preventDefault();
    });

    //trademark
    $(pagination_trademark.wrapper_pagination).delegate(pagination_trademark.btn_next, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_trademark.base_URL;
        click_next_pagin(pagination_trademark, search_bar_trademark, action_curr, URL_pagination);
        event.preventDefault();
    });

    //products
    $(pagination_products.wrapper_pagination).delegate(pagination_products.btn_next, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_products.base_URL;
        click_next_pagin(pagination_products, search_bar_product, action_curr, URL_pagination);
        event.preventDefault();
    });

    // product cat
    $(pagination_product_cat.wrapper_pagination).delegate(pagination_product_cat.btn_next, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_product_cat.base_URL;
        click_next_pagin(pagination_product_cat, search_bar_product_cat, action_curr, URL_pagination);
        event.preventDefault();
    });

    // slider
    $(pagination_slider.wrapper_pagination).delegate(pagination_slider.btn_next,'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_slider.base_URL;
        click_next_pagin(pagination_slider, search_bar_product, action_curr, URL_pagination);
        event.preventDefault();
    });

    // advt
    $(pagination_advt.wrapper_pagination).delegate(pagination_advt.btn_next, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_advt.base_URL;
        click_next_pagin(pagination_advt, search_bar_advt, action_curr, URL_pagination);
        event.preventDefault();
    });

    // order
    $(pagination_order.wrapper_pagination).delegate(pagination_order.btn_next, 'click',function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_order.base_URL;
        click_next_pagin(pagination_order, search_bar_customer, action_curr, URL_pagination);
        event.preventDefault();
    })

    // customer
    $(pagination_customer.wrapper_pagination).delegate(pagination_customer.btn_next, 'click',function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_customer.base_URL;
        click_next_pagin(pagination_customer, search_bar_order, action_curr, URL_pagination);
        event.preventDefault();
    });

    //================================
    // g??n s??? ki???n click cho btn prev
    //================================

    // post
    $(pagination_post.wrapper_pagination).delegate(pagination_post.btn_prev, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = defaults.post_URL_pagination;
        click_prev_pagin(pagination_post, search_bar_posts, action_curr, URL_pagination);
        event.preventDefault();
    });

    // post cat
    $(pagination_post_cat.wrapper_pagination).delegate(pagination_post_cat.btn_prev, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = defaults.post_cat_URL_pagination;
        click_prev_pagin(pagination_post_cat, search_bar_post_cat, action_curr, URL_pagination);
        event.preventDefault();
    });

    // trademark
    $(pagination_trademark.wrapper_pagination).delegate(pagination_trademark.btn_prev, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_trademark.base_URL;
        click_prev_pagin(pagination_trademark, search_bar_trademark, action_curr, URL_pagination);
        event.preventDefault();
    });

    // products
    $(pagination_products.wrapper_pagination).delegate(pagination_products.btn_prev, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_products.base_URL;
        click_prev_pagin(pagination_products, search_bar_product, action_curr, URL_pagination);
        event.preventDefault();
    });

    // product cat
    $(pagination_product_cat.wrapper_pagination).delegate(pagination_product_cat.btn_prev, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_product_cat.base_URL;
        click_prev_pagin(pagination_product_cat, search_bar_product_cat, action_curr, URL_pagination);
        event.preventDefault();
    });

    // slider
    $(pagination_slider.wrapper_pagination).delegate(pagination_slider.btn_prev,'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_slider.base_URL;  
        click_prev_pagin(pagination_slider, search_bar_slider, action_curr, URL_pagination);
        event.preventDefault();
    });

    // advt
    $(pagination_advt.wrapper_pagination).delegate(pagination_advt.btn_prev, 'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_advt.base_URL;
        click_prev_pagin(pagination_advt, search_bar_advt, action_curr, URL_pagination);
        event.preventDefault();
    });

    // order
    $(pagination_order.wrapper_pagination).delegate(pagination_order.btn_prev ,'click',function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_order.base_URL;
        click_prev_pagin(pagination_order, search_bar_customer, action_curr, URL_pagination);
        event.preventDefault();
    });

    // customer
    $(pagination_customer.wrapper_pagination).delegate(pagination_customer.btn_prev ,'click', function () {
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_customer.base_URL;
        click_prev_pagin(pagination_customer, search_bar_order, action_curr, URL_pagination);
        event.preventDefault();
    });

    //================================
    // g??n s??? ki???n click cho btn item
    //================================

    // post
    $(pagination_post.wrapper_pagination).delegate(pagination_post.btn_item, 'click', function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = defaults.post_URL_pagination;
        click_item_pagin(pagination_post, search_bar_posts, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // post cat
    $(pagination_post_cat.wrapper_pagination).delegate(pagination_post_cat.btn_item, 'click', function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = defaults.post_cat_URL_pagination;
        click_item_pagin(pagination_post_cat, search_bar_post_cat, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // trademark
    $(pagination_trademark.wrapper_pagination).delegate(pagination_trademark.btn_item, 'click', function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_trademark.base_URL;
        click_item_pagin(pagination_trademark, search_bar_trademark, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // products
    $(pagination_products.wrapper_pagination).delegate(pagination_products.btn_item, 'click', function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_products.base_URL;
        click_item_pagin(pagination_products, search_bar_product, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // product cat
    $(pagination_product_cat.wrapper_pagination).delegate(pagination_product_cat.btn_item, 'click', function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_product_cat.base_URL;
        click_item_pagin(pagination_product_cat, search_bar_product_cat, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // slider
    $(pagination_slider.wrapper_pagination).delegate(pagination_slider.btn_item,'click',function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_slider.base_URL;
        click_item_pagin(pagination_slider, search_bar_slider, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // advt
    $(pagination_advt.wrapper_pagination).delegate(pagination_advt.btn_item,'click',function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_advt.base_URL;
        click_item_pagin(pagination_advt, search_bar_advt, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });

    // order
    $(pagination_order.wrapper_pagination).delegate(pagination_order.btn_item,'click',function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_order.base_URL;
        click_item_pagin(pagination_order, search_bar_order, current_page, action_curr, URL_pagination);
        event.preventDefault();
    }); 

    // customer
    $(pagination_customer.wrapper_pagination).delegate(pagination_customer.btn_item, 'click', function () {
        let current_page = $(this).attr('data-page_number');
        let action_curr = $("table.table[data-action]").attr('data-action');
        let URL_pagination = pagination_customer.base_URL;
        click_item_pagin(pagination_customer, search_bar_customer, current_page, action_curr, URL_pagination);
        event.preventDefault();
    });
    //=====================================================
    // G??n s??? ki???n click cho update info post (update imt)
    //=====================================================

    $(update_img_post.wrapper).delegate(update_img_post.btn_update, 'click', function () {
        var inputFile = $(update_img_post.inputFile);
        append_file_img(inputFile, update_img_post.base_URL, update_img_post.thumbnail_url, update_img_post.place_append_img);
        event.preventDefault();
    });

    //=======================================
    // g??n s??? ki???n click update name post cat
    //=======================================

    // post cat
    $(update_name_postcat.wrapper).delegate(update_name_postcat.btn_update, 'click', function () {
        // Get current name and id post cat
        let current_name = $(this).parents('tr').find(update_name_postcat.current_name).text();
        let id_post_cat = $(this).parents('ul.list-operation').attr('data-id_post_cat');
        // Append current into modal update name and append id post cat into modal update
        $(update_name_postcat.tbl_update).find(update_name_postcat.input_change_name).val(current_name);
        $(update_name_postcat.tbl_update).find(update_name_postcat.btn_change_name).attr('data-id_post_cat', id_post_cat);
    });

    // trademark
    $(update_name_trademark.wrapper).delegate(update_name_trademark.btn_update, 'click', function () {
        // Get current name and id trademark
        let current_name = $(this).parents('tr').find(update_name_trademark.current_name).text();
        let id_trademark = $(this).parents('ul.list-operation').attr('data-id_trademark');
        let product_cat = $(this).parents('tr').find('span.name-category').text();
        let id_product_cat = $(this).parents('tr').find('span.name-category').attr('data-id_product_cat');
        update_name_trademark.name_product_old = product_cat;
        update_name_trademark.id_product_cat = id_product_cat;
        // Append current into modal update name and append id trademark into modal update
        $(update_name_trademark.tbl_update).find(update_name_trademark.input_change_name).val(current_name);
        $(update_name_trademark.tbl_update).find(update_name_trademark.btn_change_name).attr('data-id_trademark', id_trademark);
        $(update_name_trademark.tbl_update).find(update_name_trademark.product_cat).children('option').attr('selected', false);
        $(update_name_trademark.tbl_update).find(update_name_trademark.product_cat).children('option').each(function () {
            if (product_cat == $(this).text()) {
                $(this).attr('selected', 'selected');
                let name_curr = $(this).text();
            }
        });
    });

    // product
    $(update_name_product_cat.wrapper).delegate(update_name_product_cat.btn_update, 'click', function () {
        // get current name and id product cat
        let current_name = $(this).parents('tr').find(update_name_product_cat.current_name).children('.name').text();
        let id_product_cat = $(this).parents('ul.list-operation').attr('data-id_product_cat');
        // Append current into modal update name and append id product cat into modal update
        $(update_name_product_cat.tbl_update).find(update_name_product_cat.input_change_name).val(current_name);
        $(update_name_product_cat.tbl_update).find(update_name_product_cat.btn_change_name).attr('data-id_product_cat', id_product_cat);
    });


    // ==============================
    // G??n s??? ki???n update total info 
    // ==============================
    $(update_info_slider.wrapper).delegate(update_info_slider.btn_update, 'click', function () {
        // get value
        let id_slider = $(this).parents('tr').find(update_info_slider.id_slider).attr('data-id_sliders');
        let avatar_slider = $(this).parents('tr').find(update_info_slider.thumb_img).find('img').attr('src');
        let name_slider = $(this).parents('tr').find(update_info_slider.name_slider).text();
        let numerical_order = $(this).parents('tr').find(update_info_slider.numerical_order).text();
        let friendly_URL = $(this).parents('tr').find(update_info_slider.friendly_URL).attr('data-href');

        // save value
        update_info_slider.name_slider_old = name_slider;
        update_info_slider.link_slider_old = friendly_URL;
        update_info_slider.numerical_order_old = numerical_order;

        // assign value
        $(update_info_slider.tbl_update).find("input[name='id_slider']").val(id_slider);
        $(update_info_slider.tbl_update).find("input[name='name_slider']").val(name_slider);
        $(update_info_slider.tbl_update).find("input[name='link_slider']").val(friendly_URL);
        $(update_info_slider.tbl_update).find('.thumb-img').children('img').attr('src', avatar_slider);
        $(update_info_slider.tbl_update).find("input[name='numerical_order']").val(numerical_order);
    });

    // thay ?????i h??nh ???nh c???a slider 
    var change_img_sliders = {
        "wrapper": ".chages_img_slider",
        "btn_browser": ".btn_avatar[data-action='browser']",
        "btn_open_modal": "span.avatar_slider",
        "btn_update": ".btn_avatar[data-action='update']",
        "mask_slider": ".mask-slider",
        "btn_close_modal": ".close-modal-slider",
        "inputFile": "input[name='avatar_slider']",
        "base_URL": "?mod=sliders&action=change_img_slider",
        "place_img_new": ".image_slider .thumb-img img",
        "src_img_curr": ".avatar > span.thumb-img",
        "data_id": "#modal_update_slider input[name='id_slider']",
        "src_img_new": "",
        "base_update_img": "?mod=sliders&action=update_img_slider",
        "notification": ".main-content .notifi"
    }

    $(change_img_sliders.wrapper).delegate(change_img_sliders.btn_browser, 'click', function () {
        let inputFile = $(change_img_sliders.inputFile);
        let fileToUpload = inputFile[0].files[0];
        if (fileToUpload != null) {
            let exten_file = fileToUpload.name.split('.').pop().toLowerCase();
            let exten_file_allow = Array('jpg', 'png', 'jpeg', 'gif');
            if ($.inArray(exten_file, exten_file_allow) == -1) {
                alert('H??? th???ng ch??? h??? tr??? nh???ng file ???nh d???nh d???ng ( .jpg, .png, .jpeg, .gif )');
            } else {
                let oFReader = new FileReader();
                oFReader.readAsDataURL(fileToUpload);
                let fSize = fileToUpload.size;
                if (fSize > 5242880) {
                    alert('K??ch th?????c file kh??ng ???????c v?????c qu?? 5MB');
                } else {
                    let formData = new FormData();
                    formData.append('file', fileToUpload);
                    $.ajax({
                        url: change_img_sliders.base_URL,
                        method: "POST",
                        data: formData,
                        contentType: false,
                        processData: false,
                        beforeSend: () => {
                            console.log('uploading...');
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data.status == 'success') {
                                $(change_img_sliders.place_img_new).attr('src', data.path_img);
                                $(change_img_sliders.btn_browser + "[data-action='browser']").text('update');
                                $(change_img_sliders.btn_browser + "[data-action='browser']").attr('data-action', 'update');
                                change_img_sliders.src_img_new = data.path_img;
                            } else {
                                alert("update kh??ng th??nh c??ng");
                            }
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr.status);
                            console.log(thrownError);
                        }
                    });
                }
            }
        } else {
            alert('Vui l??ng ch???n m???t file ???nh');
        }
    });

    // 
    $(change_img_sliders.wrapper).delegate(change_img_sliders.btn_update, 'click', function () {
        let src_img_curr = $(change_img_sliders.src_img_curr).find('img').attr('src');
        let data_id = $(change_img_sliders.data_id).val();
        let src_img_new = change_img_sliders.src_img_new;
        let allow_delete_img_old;
        let select_delete_img_old = confirm("B???n c?? mu???n x??a ??i file ???nh c?? trong th?? m???c");
        if (select_delete_img_old) {
            allow_delete_img_old = true;
        } else {
            allow_delete_img_old = false;
        }
        $.ajax({
            url: change_img_sliders.base_update_img,
            method: "POST",
            dataType: "json",
            data: {
                src_img_curr: src_img_curr,
                data_id: data_id,
                src_img_new: src_img_new,
                allow_delete_img_old: allow_delete_img_old
            },
            beforeSend: () => {
                console.log("updating...");
            },
            success: function (data) {
                console.log(data);
                if (data.status == "success") {
                    close_modal_change_img_slider();
                    $(change_img_sliders.place_img_new).attr('src', data.path_img);
                    $(change_img_sliders.inputFile).val('');
                    $(change_img_sliders.btn_update + "[data-action='update']").text('Duy???t ???nh');
                    $(change_img_sliders.btn_update + "[data-action='update']").attr('data-action', 'browser');
                    let src_img_curr = $(change_img_sliders.src_img_curr).find('img').attr('src', data.path_img);
                    change_img_sliders.src_img_new = data.path_img;
                    init(pagination_slider.status, pagination_slider, pagination_slider.base_URL);
                    notifi_process("Update th??nh c??ng", change_img_sliders.notification, 'success');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    });

    // clike open modal chages img slider
    $(change_img_sliders.btn_open_modal).click(() => {
        open_modal_change_img_slider();
    });

    // click close modal change img slider
    $(change_img_sliders.btn_close_modal).click(() => {
        let action_curr = $("button[name='btn_change_img_slider']").attr('data-action');
        if (action_curr == 'update') {
            if (confirm("B??? th???c thi update ???nh...?")) {
                close_modal_change_img_slider();
                let src_img_curr = $(change_img_sliders.src_img_curr).find('img').attr('src');
                $(change_img_sliders.place_img_new).attr('src', src_img_curr);
                $(change_img_sliders.inputFile).val('');
                $(change_img_sliders.btn_update + "[data-action='update']").text('Duy???t ???nh');
                $(change_img_sliders.btn_update + "[data-action='update']").attr('data-action', 'browser');
            }
        } else {
            close_modal_change_img_slider();
        }
    });

    // function open modal change img file avatar slider
    function open_modal_change_img_slider() {
        $(change_img_sliders.mask_slider).stop().fadeIn(300);
    }

    // function close modal change img file avatar slider
    function close_modal_change_img_slider() {
        $(change_img_sliders.mask_slider).stop().fadeOut(300);
    }

    //============================================
    // G??n s??? ki???n click ????? thay ?????i current name
    //============================================

    // post cat
    $(update_name_postcat.tbl_update).delegate(update_name_postcat.btn_change_name, 'click', function () {
        let name_new = $(update_name_postcat.tbl_update).find(update_name_postcat.input_change_name).val();
        let id_post_cat = $(this).attr('data-id_post_cat');
        let current_name = $(update_name_postcat.wrapper).find("span.name[data-id_post_cat=" + (id_post_cat) + "]").text();
        if (name_new == '') {
            let notifi = "B???n ch??a nh???p t??n danh m???c m???i";
            notifi_process(notifi, update_name_postcat.notification, "error");
        } else {
            if (name_new != current_name) {
                let place_append_name = update_name_postcat.current_name + "[data-id_post_cat=" + (id_post_cat) + "]";
                update_name(name_new, current_name, id_post_cat, update_name_postcat.base_URL, place_append_name, update_name_postcat.notification, update_name_postcat.btn_change_name);
            }
        }
        event.preventDefault();
    });

    // trademark
    $(update_name_trademark.tbl_update).delegate(update_name_trademark.btn_change_name, 'click', function () {
        let name_new = $(update_name_trademark.tbl_update).find(update_name_trademark.input_change_name).val();
        let id_trademark = $(this).attr('data-id_trademark');
        let current_name = $(update_name_trademark.wrapper).find("a.name_trademark[data-id_trademark=" + (id_trademark) + "]").text();
        if (name_new == '') {
            let notifi = "B???n ch??a nh???p t??n danh m???c m???i";
            notifi_process(notifi, update_name_trademark.notification, 'error');
        } else {
            var id_product_cat = $(update_name_trademark.product_cat).val();
            var name_product_cat = $(update_name_trademark.product_cat).children('option[value=' + (id_product_cat) + ']').attr('data-name');
            if (name_product_cat.length != 0) {
                if (name_new != current_name || name_product_cat != update_name_trademark.name_product_old) {
                    $.ajax({
                        url: update_name_trademark.base_URL,
                        method: "POST",
                        data: {
                            id_trademark: id_trademark,
                            current_name: current_name,
                            name_new: name_new,
                            id_product_cat: id_product_cat
                        },
                        dataType: "json",
                        success: function (data) {
                            if (data.status == 'success') {
                                notifi_process("C???p nh???t th??nh c??ng", update_name_trademark.notification, 'success');
                                $(update_name_trademark.tbl_update).find('.close-modal-edit').click();
                                init(pagination_trademark.status, pagination_trademark, pagination_trademark.base_URL);
                            } else {
                                notifi_process("C???p nh???t kh??ng th??nh th??nh c??ng", update_name_trademark.notification, 'error');
                            }
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr.status);
                            console.log(thrownError);
                        }
                    });
                } else {
                    $(update_name_trademark.tbl_update).find('.close-modal-edit').click();
                }
            } else {
                notifi_process("Vui l??ng ch???n m???t danh m???c m???i cho th????ng hi???u", update_name_trademark.notification, 'error');
            }
        }
        event.preventDefault();
    });


    // product cat
    $(update_name_product_cat.tbl_update).delegate(update_name_product_cat.btn_change_name, 'click', function () {
        let name_new = $(update_name_product_cat.tbl_update).find(update_name_product_cat.input_change_name).val();
        let id_product_cat = $(this).attr('data-id_product_cat');
        let current_name = $(update_name_product_cat.wrapper).find('.name[data-id_product_cat=' + (id_product_cat) + ']').text();
        if (name_new.length == 0) {
            let notifi = "B???n ch??a nh???p t??n danh m???c m???i";
            notifi_process(notifi, update_name_product_cat.notification, 'error');
        } else {
            if (name_new != current_name) {
                let place_append_name = update_name_product_cat.current_name + ' .name[data-id_product_cat="' + (id_product_cat) + '"]';
                console.log(place_append_name);
                update_name(name_new, current_name, id_product_cat, update_name_product_cat.base_URL, place_append_name, update_name_product_cat.notification, update_name_product_cat.btn_change_name);
            } else {
                $(update_name_product_cat.tbl_update).find('.close-modal-edit').click();
            }
        }
        event.preventDefault();
    });

    //=============================================
    // G??n s??? ki???n click close modal notifi process
    //============================================= 

    $(update_name_postcat.notification).delegate(update_name_postcat.btn_close_notifi, 'click', function () {
        $(update_name_postcat.notification).removeClass('show');
        setTimeout(function () {
            $(update_name_postcat.notification).empty();
        }, 1000);
    });

    //================================================
    // G??n s??? ki???n click cho update name img in modal
    //================================================

    $(update_name_img_post.name_old).on('dblclick', function () {
        $(this).attr('contenteditable', 'true');
        $(this).addClass('active');
    });
    $(update_name_img_post.name_old).on('blur', function () {
        $(this).attr('contenteditable', 'false');
        $(this).removeClass('active');
        let name_new = $(this).text();
        if (name_new == '') {
            alert('Kh??ng ???????c b??? tr???ng t??n c???a h??nh ???nh');
            $(this).dblclick();
        } else {
            let data_id = $(this).attr('data-id_post');
            update_name_img(update_name_img_post.base_URL, name_new, data_id, update_name_img_post.place_append_name_new, update_name_img_post.src_img, update_name_img_post.thumbnail_url)
        };
    })

    //=========================================================
    // G??n s??? ki???n click cho btn show h??nh ???nh trong modal img
    //=========================================================
    // post 
    $(show_img_post.btn_img_click).on('click', function () {
        let src_img = $(this).children('img').attr('src');
        show_img_to_detail(src_img, show_img_post.src_img_show);
    });

    // products
    $(show_img_products.btn_img_click).click(function () {
        let this_img = $(this).children('img').attr('src');
        $(show_img_products.src_img_show).attr('src', this_img);
        $(this).parents('li.img-item').children('.info-img').stop().fadeToggle(300);
        if ($(this).attr('title') != '?????? Click v??o l???i ????? ???n') {
            $(this).attr('title', '?????? Click v??o l???i ????? ???n');
        } else {
            $(this).attr('title', '?????? Click v??o ????? xem th??ng tin');
        }
    });

    // =============================================================
    // G??n s??? ki???n click cho btn show h??nh ???nh ??? modal trong product
    // =============================================================

    //======================================
    // G??n s??? ki???n click cho upload img post
    //======================================

    // post
    $(upload_img_post.wrapper).delegate(upload_img_post.btn_upload, 'click', function () {
        var inputFile = $(upload_img_post.inputFile);
        append_file_img(inputFile, upload_img_post.base_URL, upload_img_post.thumbnail_url, upload_img_post.place_append_img);
        event.preventDefault();
    });

    // trademark
    $(upload_img_trademark_product.wrapper).delegate(upload_img_trademark_product.btn_upload, 'click', function () {
        var inputFile = $(upload_img_trademark_product.inputFile);
        append_file_img(inputFile, upload_img_trademark_product.base_URL, upload_img_trademark_product.thumbnail_url, upload_img_trademark_product.place_append_img);
        event.preventDefault();
    });

    // product
    $(upload_img_product.wrapper).delegate(upload_img_product.btn_upload, 'click', function () {
        var inputFile = $(upload_img_product.inputFile);
        append_file_img(inputFile, upload_img_product.base_URL, upload_img_product.thumbnail_url, upload_img_product.place_append_img);
    });

    // slider
    $(upload_img_slider.wrapper).delegate(upload_img_slider.btn_upload, 'click', function () {
        var inputFile = $(upload_img_slider.inputFile);
        append_file_img(inputFile, upload_img_slider.base_URL, upload_img_slider.thumbnail_url, upload_img_slider.place_append_img);
        event.preventDefault();
    });

    // advt
    $(upload_img_advt.wrapper).delegate(upload_img_advt.btn_upload,'click',function () {
        var inputFile = $(upload_img_advt.inputFile);
        append_file_img(inputFile, upload_img_advt.base_URL, upload_img_advt.thumbnail_url, upload_img_advt.place_append_img);
        event.preventDefault();
    });


    // =============================================
    // g??n s??? ki???n ????? upload nhi???u ???nh c???a s???n ph???m
    // =============================================

    $(upload_multi_img_product.wrapper).delegate(upload_multi_img_product.btn_upload, 'click', function () {
        var error_form_img = "";
        var inputFile = $(upload_multi_img_product.inputFile);
        var fileToUpload = inputFile[0].files;
        if (fileToUpload.length == 0) {
            error_form_img += "<span class='error'>(*) B???n ph???i ch???n ??ch nh???t m???t file ???nh m???i c?? th??? upload ???????c</span>";
        } else {
            if (fileToUpload.length > upload_multi_img_product.limited_number) {
                error_form_img += "<span class='error'>(*) Kh??ng ???????c ph??p upload qu?? " + (upload_multi_img_product.limited_number) + " s???n ph???m</span>";
            } else {
                var formData = new FormData();
                for (let i = 0; i < fileToUpload.length; i++) {
                    let name_file = inputFile[0].files[i].name;
                    let exten_file = name_file.split('.').pop().toLowerCase();
                    let exten_file_allow = Array('jpg', 'png', 'jpeg', 'gif');
                    if ($.inArray(exten_file, exten_file_allow) == -1) {
                        error_form_img += "<span class='error'>(*) File ???nh th??? " + (i + 1) + " ch???a ??u??i m??? r???ng kh??ng h???p l???</span>";
                    } else {
                        var oFReader = new FileReader();
                        oFReader.readAsDataURL(inputFile[0].files[i]);
                        var file_size = inputFile[0].files[i];
                        var fSize = file_size.size;
                        if (fSize > 5242880) {
                            error_form_img += "<span class='error'>(*) K??ch th?????c file kh??ng ???????c v?????c qu?? 5MB</span>";
                        } else {
                            let file = fileToUpload[i];
                            formData.append('file[]', file, file.name);
                        }
                    }
                }
                $.ajax({
                    url: upload_multi_img_product.base_URL,
                    method: "POST",
                    data: formData,
                    contentType: false,
                    processData: false,
                    dataType: 'json',
                    beforeSend: () => {
                        $(upload_multi_img_product.place_append).empty();
                        $(upload_multi_img_product.place_append).append('<div class="loader">Loading...</div>');
                    },
                    success: function (data) {
                        $(upload_multi_img_product.place_append).empty();
                        $(upload_multi_img_product.place_append).append(data.html_structure);
                        if (data.num_img > upload_multi_img_product.num_img) {
                            for (let i = 6; i <= data.num_img; i++) {
                                $(upload_multi_img_product.place_append).find('li:eq(' + (i) + ')').hide(0);
                            }
                            $(upload_multi_img_product.place_append).find('li:eq(' + (upload_multi_img_product.num_img - 1) + ')').after("<li class='see-more'><a href='' class='see-more' data-action='show_img_relative'>Xem th??m</a></li>");
                            click_show_more_relative_img_product(data.num_img);
                        }
                        change_name_file_img_relative_item_product();
                        delete_file_img_relative_item_product();
                        get_name_old_and_new();
                    },
                    error: function (xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    }
                });
            }
        }
        $(upload_multi_img_product.place_append).empty();
        $(upload_multi_img_product.place_append).append(error_form_img);
        event.preventDefault();
    });

    //==================================
    // G??n s??? ki???n click cho x??a m??i m??i
    //==================================

    // post
    place_append_table.delegate(delete_permanently_post.btn_delete, 'click', function () {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i b??i vi???t n??y");
        if (select_again) {
            let post_id = $(this).parents('ul.list-operation').attr('data-id_post');
            let status = $(delete_permanently_post.status_current).parent('li').attr('class');
            let action = "delete_item";
            let select_inlink_img = confirm("B???n c?? mu???n x??a c??? h??nh ???nh c???a b??i vi???t n??y kh??ng");
            if (select_inlink_img) {
                delete_permanently_post.unlink = true
            } else {
                delete_permanently_post.unlink = false
            }
            let URL_load_num_status = status_post.post_URL_load_num_status;
            delete_permanently(delete_permanently_post.base_URL, post_id, delete_permanently_post.unlink, status, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
        }
        event.preventDefault();
    });

    // post cat
    place_append_table.delegate(delete_permanently_post_cat.btn_delete, 'click', function () {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i danh m???c n??y");
        if (select_again) {
            let post_cat_id = $(this).parents('ul.list-operation').attr('data-id_post_cat');
            let status = $(delete_permanently_post_cat.status_current).parents('li').attr('class');
            let action = "delete_item";
            let URL_load_num_status = status_post_cat.post_URL_load_num_status;
            delete_permanently(delete_permanently_post_cat.base_URL, post_cat_id, delete_permanently_post_cat.unlink, status, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
        }
        event.preventDefault();
    });

    // trademark
    place_append_table.delegate(delete_permanently_trademark.btn_delete, 'click', function () {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i th????ng hi???u n??y");
        if (select_again) {
            let id_trademark = $(this).parents('ul.list-operation').attr('data-id_trademark');
            let status = $(delete_permanently_trademark.status_current).parents('li').attr('class');
            let action = "delete_item";
            let select_logo_trademark = confirm("B???n c?? mu???n x??a c??? logo c???a th????ng hi???u n??y kh??ng");
            if (select_logo_trademark) {
                delete_permanently_trademark.unlink = true
            } else {
                delete_permanently_trademark.unlink = false
            }
            let URL_load_num_status = status_trademark.URL_load_num_status;
            delete_permanently(delete_permanently_trademark.base_URL, id_trademark, delete_permanently_trademark.unlink, status, action, URL_load_num_status, pagination_trademark, pagination_trademark.base_URL);
        }
        event.preventDefault();
    });

    // products
    place_append_table.delegate(delete_permanently_product.btn_delete, 'click', function () {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i s???n ph???m n??y");
        if (select_again) {
            let id_product = $(this).parents('ul.list-operation').attr('data-id_products');
            let status = $(delete_permanently_product.status_current).parents('li').attr('class');
            let action = 'delete_item';
            let select_delete_total_img = confirm("B???n c?? mu???n x??a ??i to??n b??? ???nh li??n quan ?????n s???n ph???m n??y kh??ng");
            if (select_delete_total_img) {
                delete_permanently_product.unlink = true;
            } else {
                delete_permanently_product.unlink = false;
            }
            let URL_load_num_status = status_product.product_URL_load_num_status;
            delete_permanently(delete_permanently_product.base_URL, id_product, delete_permanently_product.unlink, status, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
        }
        event.preventDefault();
    });

    // product cat
    place_append_table.delegate(delete_permanently_product_cat.btn_delete, 'click', function () {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i danh m???c s???n ph???m n??y");
        if (select_again) {
            let id_product_cat = $(this).parents('ul.list-operation').attr('data-id_product_cat');
            let status = $(delete_permanently_product_cat.status_current).parents('li').attr('class');
            let action = 'delete_item';
            let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
            delete_permanently(delete_permanently_product_cat.base_URL, id_product_cat, delete_permanently_product_cat.unlink, status, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
        }
        event.preventDefault();
    });

    // sliders
    place_append_table.delegate(delete_permanently_slider.btn_delete,'click',function () {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i slider n??y");
        if (select_again) {
            let id_slider = $(this).parents('ul.list-operation').attr('data-id_sliders');
            let status = $(delete_permanently_slider.status_current).parents('li').attr('class');
            let action = 'delete_item';
            let selecct_delete_img = confirm("B???n c?? mu???n x??a ???nh c???a slider ??? trong th?? m???c");
            if(selecct_delete_img) {
                delete_permanently_slider.unlink = true;
            } else {
                delete_permanently_slider.unlink = false;
            }
            let URL_load_num_status = status_slider.sliders_URL_load_num_status;
            delete_permanently(delete_permanently_slider.base_URL, id_slider, delete_permanently_slider.unlink, status, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
        }
        event.preventDefault();
    });

    // advt 
    place_append_table.delegate(delete_permanently_advt.btn_delete,'click',function() {
        let select_again = confirm("S??? kh??ng th??? kh??i ph???c l???i qu???ng c??o n??y");
        if (select_again) {
            let id_advt = $(this).parents('ul.list-operation').attr('data-id_advt');
            let status = $(delete_permanently_advt.status_current).parents('li').attr('class');
            let action = 'delete_item';
            let selecct_delete_img = confirm("B???n c?? mu???n x??a ???nh c???a qu???ng c??o ??? trong th?? m???c");
            if(selecct_delete_img) {
                delete_permanently_advt.unlink = true;
            } else {
                delete_permanently_advt.unlink = false;
            }
            let URL_load_num_status = status_advt.advt_URL_load_num_status;
            delete_permanently(delete_permanently_advt.base_URL, id_advt, delete_permanently_advt.unlink, status, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
        } 
        event.preventDefault();
    });

    // order
    place_append_table.delegate(delete_permanently_order.btn_delete,'click',function () {
        let select_again = confirm("B???n th???c s??? mu???n x??a ????n h??ng n??y");
        if (select_again) {
            let id_order = $(this).parents('ul.list-operation').attr('data-id_order');
            let status   = $(delete_permanently_order.status_current).parents('li').attr('class');
            let action   = "delete_item";
            $.ajax({
                url : delete_permanently_order.base_URL,
                method : "POST",
                data : {
                    id_order : id_order,
                    action   : action
                },
                dataType : "json",
                success : (data) => {
                    console.log(data);
                    if (data.status === "success") {
                        init(status, pagination_order, pagination_order.base_URL);
                        load_num_status_order();
                    }
                },
                error: (xhr, ajaxOptions, thrownError) => {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        }
        event.preventDefault();
    });
    // customer
    place_append_table.delegate(delete_permanently_customer.btn_delete,'click',function () {
        let select_again = confirm("B???n th???c s??? mu???n x??a kh??ch h??ng n??y");
        if (select_again) {
            let id_customer = $(this).parents('ul.list-operation').attr('data-id_customer');
            let action   = "delete_item";
            $.ajax({
                url : delete_permanently_customer.base_URL,
                method : "POST",
                data : {
                    id_customer : id_customer,
                    action      : action
                },
                dataType : "json",
                success : (data) => {
                    if(data.status === 'success') {
                        init(pagination_customer.status, pagination_customer, pagination_customer.base_URL);
                    } else {
                        notifi_process("X??a kh??ng th??nh c??ng",delete_permanently_customer.notification,'error');
                    }
                },
                error: (xhr, ajaxOptions, thrownError) => {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        }
        event.preventDefault();
    });
    // load num status order
    function load_num_status_order(){
        $.ajax({
            url : status_order.order_URL_load_num_status,
            method : "POST",
            success : (data) => {
                console.log(data);
                $("#select-status").find('li.all').find('.count').empty();
                $("#select-status").find('li.pending').find('.count').empty();
                $("#select-status").find('li.delivery').find('.count').empty();
                $("#select-status").find('li.complete').find('.count').empty();
                $("#select-status").find('li.canceled').find('.count').empty();

                $("#select-status").find('li.all').find('.count').append(data.num_all);
                $("#select-status").find('li.pending').find('.count').append(data.num_pending);
                $("#select-status").find('li.delivery').find('.count').append(data.num_delivery);
                $("#select-status").find('li.complete').find('.count').append(data.num_complete);
                $("#select-status").find('li.canceled').find('.count').append(data.num_canceled);
            },
            dataType : "json",
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        })
    }

    //===============================
    // G??n s??? ki???n click go to trash
    //===============================

    // post
    place_append_table.delegate(post_goto_trash.btn_goto_trash, 'click', function () {
        let data_id = $(this).parents('ul.list-operation').attr('data-id_post');
        let status_old = $(this).parents(place_append_table).find('span.status[data-id_post=' + (data_id) + ']').attr('data-status');
        let status_tab_curr = $(post_goto_trash.status_tab_curr).parent('li').attr('class');
        let action = "goto_trash_item";
        let URL_load_num_status = status_post.post_URL_load_num_status;
        goto_trash(post_goto_trash.base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
        event.preventDefault();
    });

    // post cat
    place_append_table.delegate(post_cat_goto_trash.btn_goto_trash, 'click', function () {
        let data_id = $(this).parents('ul.list-operation').attr('data-id_post_cat');
        let status_old = $(this).parents(place_append_table).find('span.status[data-id_post_cat=' + (data_id) + ']').attr('data-status');
        let status_tab_curr = $(post_cat_goto_trash.status_tab_curr).parent('li').attr('class');
        let action = "goto_trash_item";
        let URL_load_num_status = status_post_cat.post_URL_load_num_status;
        goto_trash(post_cat_goto_trash.base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
        event.preventDefault();
    });

    // products
    place_append_table.delegate(product_goto_trash.btn_goto_trash, 'click', function () {
        let data_id = $(this).parents('ul.list-operation').attr('data-id_products');
        let status_old = $(this).parents(place_append_table).find('span.status[data-id_products=' + (data_id) + ']').attr('data-status');
        let status_tab_curr = $(product_goto_trash.status_tab_curr).parents('li').attr('class');
        let action = "goto_trash_item";
        let URL_load_num_status = status_product.product_URL_load_num_status;
        goto_trash(product_goto_trash.base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
        event.preventDefault();
    });

    // product cat
    place_append_table.delegate(product_cat_goto_trash.btn_goto_trash, 'click', function () {
        let data_id = $(this).parents('ul.list-operation').attr('data-id_product_cat');
        let status_old = $(this).parents(place_append_table).find('span.status[data-id_product_cat=' + (data_id) + ']').attr('data-status');
        let status_tab_curr = $(product_cat_goto_trash.status_tab_curr).parents('li').attr('class');
        let action = 'goto_trash_item';
        let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
        goto_trash(product_cat_goto_trash.base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
        event.preventDefault();
    });

    // slider
    place_append_table.delegate(slider_goto_trash.btn_goto_trash,'click',function () {
        let data_id = $(this).parents('ul.list-operation').attr('data-id_sliders');
        let status_old = $(this).parents(place_append_table).find('span.status[data-id_sliders=' + (data_id) + ']').attr('data-status');
        let status_tab_curr = $(slider_goto_trash.status_tab_curr).parents('li').attr('class');
        let action = 'goto_trash_item';
        let URL_load_num_status = status_slider.sliders_URL_load_num_status;
        goto_trash(slider_goto_trash.base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
        event.preventDefault();
    });

    // advt
    place_append_table.delegate(advt_goto_trash.btn_goto_trash,'click',function() {
        let data_id = $(this).parents('ul.list-operation').attr('data-id_advt');
        let status_old = $(this).parents(place_append_table).find('span.status[data-id_advt=' + (data_id) + ']').attr('data-status');
        let status_tab_curr = $(advt_goto_trash.status_tab_curr).parents('li').attr('class');
        let action = "goto_trash_item";
        let URL_load_num_status = status_advt.advt_URL_load_num_status;
        goto_trash(advt_goto_trash.base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
        event.preventDefault();
    });

    //=================================
    // G??n s??? ki???n click cho kh??i ph???c
    //=================================

    // post
    place_append_table.delegate(restore_post.btn_restore, 'click', function () {
        let select_again = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c b??i vi???t n??y ?");
        if (select_again) {
            let data_id = $(this).parents('ul.list-operation').attr('data-id_post');
            let status_tab_curr = $(post_goto_trash.status_tab_curr).parent('li').attr('class');
            let action = "restore_item";
            let URL_load_num_status = status_post.post_URL_load_num_status;
            restore(restore_post.base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
        }
        event.preventDefault();
    });

    // post cat
    place_append_table.delegate(restore_post_cat.btn_restore, 'click', function () {
        let select_again = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c danh m???c n??y ?");
        if (select_again) {
            let data_id = $(this).parents("ul.list-operation").attr('data-id_post_cat');
            let status_tab_curr = $(post_cat_goto_trash.status_tab_curr).parent('li').attr('class');
            let action = "restore_item";
            let URL_load_num_status = status_post_cat.post_URL_load_num_status;
            restore(restore_post_cat.base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
        }
        event.preventDefault();
    });

    // products
    place_append_table.delegate(restore_product.btn_restore, 'click', function () {
        let select_again = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c s???n ph???m n??y");
        if (select_again) {
            let data_id = $(this).parents('ul.list-operation').attr('data-id_products');
            let status_tab_curr = $(product_goto_trash.status_tab_curr).parent('li').attr('class');
            let action = 'restore_item';
            let URL_load_num_status = status_product.product_URL_load_num_status;
            restore(restore_product.base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
        }
        event.preventDefault();
    });

    // product cat
    place_append_table.delegate(restore_product_cat.btn_restore, 'click', function () {
        let select_again = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c s???n ph???m n??y");
        if (select_again) {
            let data_id = $(this).parents('ul.list-operation').attr('data-id_product_cat');
            let status_tab_curr = $(product_cat_goto_trash.status_tab_curr).parents('li').attr('class');
            let action = "restore_item";
            let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
            restore(restore_product_cat.base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
        }
        event.preventDefault();
    });

    // slider
    place_append_table.delegate(restore_slider.btn_restore,'click',function () {
        let select_again = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c slider n??y");
        if (select_again) {
            let data_id = $(this).parents('ul.list-operation').attr('data-id_sliders');
            let status_tab_curr = $(slider_goto_trash.status_tab_curr).parents('li').attr('class');
            let action = "restore_item";
            let URL_load_num_status = status_slider.sliders_URL_load_num_status;
            restore(restore_slider.base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
        }
        event.preventDefault();
    });

    // advt
    place_append_table.delegate(restore_advt.btn_restore,'click',function () {
        let select_again = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c l???i qu???ng c??o n??y");
        if (select_again) {
            let data_id = $(this).parents('ul.list-operation').attr('data-id_advt');
            let status_tab_curr = $(advt_goto_trash.status_tab_curr).parents('li').attr('class');
            let action = "restore_item";
            let URL_load_num_status = status_advt.advt_URL_load_num_status;
            restore(restore_advt.base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
        }
        event.preventDefault();
    });
    //===============================================
    // G??n s??? ki???n click cho action theo t???ng status
    //===============================================

    // post
    action_option_status.delegate(action_option_posts.btn_action, 'click', function () {
        let action_status = action_option_status.find(action_option_posts.action_status).val();
        let status_current = $(action_option_posts.status_current).parents('li').attr('class');
        let action = "change_list_status";
        let list_checked = new Array();
        $(action_option_posts.list_checked).each(function () {
            let post_id = $(this).attr('data-id');
            list_checked.push(post_id);
        });
        if (action_status == '') {
            alert("B???n ch??a ch???n t??c v??? n??o");
        } else {
            if (list_checked.length == 0) {
                alert("B???n ph???i ch???n ??t nh???t m???t b??i ????ng");
            } else {
                if (action_status == 'delete') {
                    let select_again = confirm("B???n th???c s??? m??n x??a nh???ng b??i vi???t n??y");
                    if (select_again) {
                        let select_inlink_img = confirm("B???n c?? m??n x??a c??? h??nh ???nh c???a b??i vi???t n??y kh??ng");
                        if (select_inlink_img) {
                            action_option_posts.unlink = true
                        } else {
                            action_option_posts.unlink = false
                        }
                        let action = "delete_list";
                        let URL_load_num_status = status_post.post_URL_load_num_status;
                        delete_permanently(action_option_posts.base_URL_delete, list_checked, action_option_posts.unlink, status_current, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
                    }
                } else if (action_status == 'restore') {
                    let select_restore = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c nh???ng b??i vi???t n??y");
                    if (select_restore) {
                        let action = "restore_list";
                        let URL_load_num_status = status_post.post_URL_load_num_status;
                        restore(action_option_posts.base_URL_restore, list_checked, status_current, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
                    }
                } else if (action_status == 'trash') {
                    let select_goto_trash = confirm("B???n th???c s??? mu???n chuy???n nh???ng b??i vi???t n??y v??o r??c");
                    if (select_goto_trash) {
                        var list_status_old = new Array();
                        $(action_option_posts.list_checked).parents('tr').find('span.status').each(function () {
                            var status_old = $(this).attr('data-status');
                            var data_id = $(this).attr('data-id_post');
                            list_status_old[data_id] = status_old;
                        });
                        let action = "goto_trash_list";
                        let URL_load_num_status = status_post.post_URL_load_num_status;
                        goto_trash(action_option_posts.base_URL_goto_trash, null, list_status_old, status_current, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
                    }
                } else {
                    let URL_load_num_status = status_post.post_URL_load_num_status;
                    handling_action_by_status(action_option_posts.base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_post, defaults.post_URL_pagination);
                }
            }
        }
        event.preventDefault();
    });

    // post cat
    action_option_status.delegate(action_option_post_cat.btn_action, 'click', function () {
        let action_status = action_option_status.find(action_option_post_cat.action_status).val();
        let status_current = $(action_option_post_cat.status_current).parents('li').attr('class');
        let action = "change_list_status";
        let list_checked = new Array();
        $(action_option_post_cat.list_checked).each(function () {
            let post_cat_id = $(this).attr('data-id_post_cat');
            list_checked.push(post_cat_id);
        });
        if (action_status == '') {
            notifi_process("B???n ch??a ch???n t??c v??? n??o", action_option_post_cat.notification, "error");
        } else {
            if (list_checked.length == 0) {
                notifi_process("B???n ph???i ch???n ??t nh???t m???t danh m???c", action_option_post_cat.notification, "error");
            } else {
                $(action_option_post_cat.notification).removeClass('show');
                setTimeout(function () {
                    $(action_option_post_cat.notification).empty();
                }, 2000);
                if (action_status == 'delete') {
                    let select_again = confirm("B???n th???c s??? mu???n x??a nh???ng danh m???c n??y");
                    if (select_again) {
                        let action = "delete_list";
                        let URL_load_num_status = status_post_cat.post_URL_load_num_status;
                        delete_permanently(action_option_post_cat.base_URL_delete, list_checked, action_option_post_cat.unlink, status_current, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
                    }
                } else if (action_status == 'restore') {
                    let select_restore = confirm("C?? ph???i b???n ??anh mu???n kh??i ph???c nh???ng danh m???c n??y");
                    if (select_restore) {
                        let action = "restore_list";
                        let URL_load_num_status = status_post_cat.post_URL_load_num_status;
                        restore(action_option_post_cat.base_URL_restore, list_checked, status_current, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
                    }
                } else if (action_status == 'trash') {
                    let select_goto_trash = confirm("B???n th???c s??? mu???n chuy???n nh???ng b??i vi???t n??y v??o r??c");
                    if (select_goto_trash) {
                        var list_status_old = new Array();
                        $(action_option_post_cat.list_checked).parents('tr').find('span.status').each(function () {
                            var status_old = $(this).attr('data-status');
                            var data_id = $(this).attr('data-id_post_cat');
                            list_status_old[data_id] = status_old;
                        });
                        let action = "goto_trash_list";
                        let URL_load_num_status = status_post_cat.post_URL_load_num_status;
                        goto_trash(action_option_post_cat.base_URL_goto_trash, null, list_status_old, status_current, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
                    }
                } else {
                    let URL_load_num_status = status_post_cat.post_URL_load_num_status;
                    handling_action_by_status(action_option_post_cat.base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_post_cat, defaults.post_cat_URL_pagination);
                }
            }
        }
        event.preventDefault();
    });

    // trademark
    action_option_status.delegate(action_option_trademark.btn_action, 'click', function () {
        let action_status = action_option_status.find(action_option_trademark.action_status).val();
        let status_current = $(action_option_trademark.status_current).parents('li').attr('class');
        let list_checked = new Array();
        $(action_option_trademark.list_checked).each(function () {
            let id_trademark = $(this).attr('data-id_trademark');
            list_checked.push(id_trademark);
        });
        if (action_status == '') {
            notifi_process("B???n ch??a ch???n t??c v??? n??o", action_option_trademark.notification, "error");
        } else {
            if (list_checked.length == 0) {
                notifi_process("B???n ph???i ch???n ??t nh???t m???t th????ng hi???u", action_option_trademark.notification, "error");
            } else {
                let select_again = confirm("B???n th???c s??? mu???n x??a nh???ng th????ng hi???u n??y");
                if (select_again) {
                    let select_inlink_logo = confirm("B???n c?? mu???n x??a c??? logo c???a th????ng hi???u trong th?? m???c");
                    if (select_inlink_logo) {
                        action_option_trademark.unlink = true
                    } else {
                        action_option_trademark.unlink = false
                    }
                    let action = "delete_list";
                    let URL_load_num_status = status_trademark.URL_load_num_status;
                    delete_permanently(action_option_trademark.base_URL_delete, list_checked, action_option_trademark.unlink, status_current, action, URL_load_num_status, pagination_trademark, pagination_trademark.base_URL);
                }
            }
        }
        event.preventDefault();
    })

    //product
    action_option_status.delegate(action_option_product.btn_action, 'click', function () {
        let action_status = action_option_status.find(action_option_product.action_status).val();
        let status_current = $(action_option_product.status_current).parents('li').attr('class');
        let action = "change_list_status";
        let list_checked = new Array();
        $(action_option_product.list_checked).each(function () {
            let product_id = $(this).attr('data-id');
            list_checked.push(product_id);
        });
        if (action_status == '') {
            alert('B???n ch??a ch???n t??c v??? n??o');
        } else {
            if (list_checked.length == 0) {
                alert('B???n ph???i ch???n ??t nh???t m???t b??i ????ng');
            } else {
                if (action_status == 'delete') {
                    let select_again = confirm("B???n th???c s??? mu???n x??a s???n ph???m n??y");
                    if (select_again) {
                        let select_inlink_img = confirm("B???n c?? mu???n x??a t???t c??? ???nh c???a s???n ph???m n??y");
                        if (select_inlink_img) {
                            action_option_product.unlink = true;
                        } else {
                            action_option_product.unlink = false;
                        }
                        let action = 'delete_list';
                        let URL_load_num_status = status_product.product_URL_load_num_status;
                        delete_permanently(action_option_product.base_URL_delete, list_checked, action_option_product.unlink, status_current, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
                    }
                } else if (action_status == 'restore') {
                    let select_restore = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c nh???ng s???n ph???m n??y");
                    if (select_restore) {
                        let action = 'restore_list';
                        let URL_load_num_status = status_product.product_URL_load_num_status;
                        restore(action_option_product.base_URL_restore, list_checked, status_current, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
                    }
                } else if (action_status == 'trash') {
                    console.log('goto trash list products');
                    let select_goto_trash = confirm("B???n th???c s??? mu???n chuy???n nh???ng s???n ph???m n??y v??o r??c");
                    if (select_goto_trash) {
                        var list_status_old = new Array();
                        $(action_option_product.list_checked).parents('tr').find('span.status').each(function () {
                            var status_old = $(this).attr('data-status');
                            var data_id = $(this).attr('data-id_products');
                            list_status_old[data_id] = status_old;
                        });
                        let action = 'goto_trash_list';
                        let URL_load_num_status = status_product.product_URL_load_num_status;
                        goto_trash(action_option_product.base_URL_goto_trash, null, list_status_old, status_current, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
                    }
                } else {
                    let URL_load_num_status = status_product.product_URL_load_num_status;
                    handling_action_by_status(action_option_product.base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_products, pagination_products.base_URL);
                }
            }
        }
        event.preventDefault();
    });

    // product cat
    action_option_status.delegate(action_option_product_cat.btn_action, 'click', function () {
        let action_status = action_option_status.find(action_option_product_cat.action_status).val();
        let status_current = $(action_option_product_cat.status_current).parents('li').attr('class');
        let action = "change_list_status";
        let list_checked = new Array();
        $(action_option_product_cat.list_checked).each(function () {
            let product_cate_id = $(this).attr('data-id_product_cat');
            list_checked.push(product_cate_id);
        });
        if (action_status == '') {
            alert("B???n ch??a ch???n t??c v??? n??o");
        } else {
            if (list_checked.length == 0) {
                alert("B???n ph???i ch???n ??t nh???t m???t danh m???c");
            } else {
                if (action_status == 'delete') {
                    let select_again = confirm("B???n c?? th???c s??? mu???n x??a ??i nh???ng danh m???c n??y");
                    if (select_again) {
                        let action = 'delete_list';
                        let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
                        delete_permanently(action_option_product_cat.base_URL_delete, list_checked, action_option_product_cat.unlink, status_current, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
                    }
                } else if (action_status == 'restore') {
                    let select_restore = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c nh???ng danh m???c s???n ph???m n??y");
                    if (select_restore) {
                        let action = 'restore_list';
                        let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
                        restore(action_option_product_cat.base_URL_restore, list_checked, status_current, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
                    }
                } else if (action_status == 'trash') {
                    let select_goto_trash = confirm("B???n th???c s??? mu???n chuy???n nh???ng danh m???c n??y v??o r??c");
                    if (select_goto_trash) {
                        var list_status_old = new Array();
                        $(action_option_product_cat.list_checked).parents('tr').find('span.status').each(function () {
                            var status_old = $(this).attr('data-status');
                            var data_id = $(this).attr('data-id_product_cat');
                            list_status_old[data_id] = status_old;
                        });
                        let action = 'goto_trash_list';
                        let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
                        goto_trash(action_option_product_cat.base_URL_goto_trash, null, list_status_old, status_current, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
                    }
                } else {
                    let URL_load_num_status = status_product_cat.product_cat_URL_load_num_status;
                    handling_action_by_status(action_option_product_cat.base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_product_cat, pagination_product_cat.base_URL);
                }
            }
        }
    });

    // slider
    action_option_status.delegate(action_option_slider.btn_action,'click',function () {
        let action_status = action_option_status.find(action_option_slider.action_status).val();
        let status_current = $(action_option_slider.status_current).parents('li').attr('class');
        let action = "change_list_status";
        let list_checked = new Array();
        $(action_option_slider.list_checked).each(function () {
            let slider_id = $(this).attr('data-id');
            list_checked.push(slider_id);
        });
        if (action_status.length === 0) {
            alert('B???n ch??a ch???n t??c v??? n??o');
        } else {
            if ( list_checked.length === 0 ) {
                alert('B???n ph???i ch???n ??t nh???t m???t slider');
            } else {
                if( action_status == 'delete' ) {
                    let select_again = confirm("B???n c?? th???c s??? mu???n x??a nh???ng danh s??ch slider n??y");
                    if ( select_again ) {
                        let delete_img = confirm("B???n c?? mu???n x??a lu??n ???nh c???a slider trong th?? m???c");
                        if ( delete_img ) {
                            action_option_slider.unlink = true;
                        } else {
                            action_option_slider.unlink = false;
                        }
                        let action = "delete_list";
                        let URL_load_num_status = status_slider.sliders_URL_load_num_status;
                        delete_permanently(action_option_slider.base_URL_delete, list_checked, action_option_slider.unlink, status_current, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
                    }
                } else if ( action_status == 'restore' ) {
                    let select_restore = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c nh???ng slider n??y");
                    if ( select_restore ) {
                        let action = "restore_list";
                        let URL_load_num_status = status_slider.sliders_URL_load_num_status;
                        restore(action_option_slider.base_URL_restore, list_checked, status_current, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
                    }
                } else if ( action_status == 'trash' ) {
                    let select_goto_trash = confirm("B???n th???c s??? mu???n chuy???n nh???ng slider n??y v??o r??c");
                    var list_status_old = new Array();
                    $(action_option_slider.list_checked).parents('tr').find('span.status').each(function () {
                        var status_old = $(this).attr('data-status');
                        var data_id = $(this).attr('data-id_sliders');
                        list_status_old[data_id] = status_old;
                    });
                    let action = "goto_trash_list";
                    let URL_load_num_status = status_slider.sliders_URL_load_num_status;
                    goto_trash(action_option_slider.base_URL_goto_trash, null, list_status_old, status_current, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
                } else {
                    let URL_load_num_status = status_slider.sliders_URL_load_num_status;
                    handling_action_by_status(action_option_slider.base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_slider, pagination_slider.base_URL);
                }
            }
        }
        event.preventDefault();
    });

    // advt
    action_option_status.delegate(action_option_advt.btn_action,'click',function() {
        console.log('click button');
        let action_status = action_option_status.find(action_option_advt.action_status).val();
        let status_current = $(action_option_advt.status_current).parents('li').attr('class');
        let action = "change_list_status";
        let list_checked = new Array();
        $(action_option_advt.list_checked).each(function () {
            let advt_id =$(this).attr('data-id');
            list_checked.push(advt_id);
        });
        if ( action_status.length === 0 ) {
            alert('B???n ch??a ch???n t??c v??? n??o');
        } else {
            if( list_checked.length === 0 ) {
                alert('B???n ph???i ch???n ??t nh???t m???t qu???ng c??o');
            } else {
                if ( action_status == 'delete' ) {
                    let select_again = confirm("B???n c?? th???c s??? mu???n x??a nh???ng qu???n c??o n??y");
                    if(select_again) {
                        let delete_img = confirm("b???n c?? mu???n x??a lu??n ???nh c???a qu???ng c??o trong th?? m???c");
                        if(delete_img) {
                            action_option_advt.unlink = true;
                        } else {
                            action_option_advt.unlink = false;
                        }
                        let action = "delete_list";
                        let URL_load_num_status = status_advt.advt_URL_load_num_status;
                        delete_permanently(action_option_advt.base_URL_delete, list_checked, action_option_advt.unlink, status_current, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
                    }
                } else if( action_status == 'restore' ) {
                    let select_restore = confirm("C?? ph???i b???n ??ang mu???n kh??i ph???c l???i qu???ng c??o n??y");
                    if(select_restore) {
                        let action = "restore_list";
                        let URL_load_num_status = status_advt.advt_URL_load_num_status;
                        restore(action_option_advt.base_URL_restore, list_checked, status_current, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
                    }
                } else if( action_status == 'trash' ) {
                    let select_goto_trash = confirm("B???n th???c s??? mu???n chuy???n nh???ng qu???ng c??o n??y v??o r??c");
                    var list_status_old = new Array();
                    $(action_option_advt.list_checked).parents('tr').find('span.status').each(function () {
                        var status_old = $(this).attr('data-status');
                        var data_id = $(this).attr('data-id_advt');
                        list_status_old[data_id] = status_old;
                    });
                    let action = "goto_trash_list";
                    let URL_load_num_status = status_advt.advt_URL_load_num_status;
                    goto_trash(action_option_advt.base_URL_goto_trash, null, list_status_old, status_current, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
                } else {
                    let URL_load_num_status = status_advt.advt_URL_load_num_status;
                    handling_action_by_status(action_option_advt.base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_advt, pagination_advt.base_URL);
                }
            }
        }
        event.preventDefault();
    });

    // order
    action_option_status.delegate(action_option_order.btn_action,'click',function () {
        console.log('click button action');
        let action_status = action_option_status.find(action_option_order.action_status).val();
        let list_checked = new Array();
        $(action_option_order.list_checked).each(function () {
            let order_id = $(this).attr('data-id');
            list_checked.push(order_id);
        });
        if(action_status.length === 0 ) {
            alert('B???n ch??a ch???n t??c v??? n??o');
        } else {
            if (list_checked.length === 0) {
                alert("B???n ph???i ch???n ??t nh???t m???t ????n h??ng");
            } else {
                if ( action_status === 'delete' ) {
                    let select_again = confirm("B???n th???c s??? mu???n x??a nh???ng ????n h??ng n??y");
                    if (select_again) {
                        let action = "delete_list";
                        $.ajax({
                            url : action_option_order.base_URL_delete,
                            method : "POST",
                            data : {
                                data_id : list_checked,
                                action  : action
                            },
                            dataType : "json",
                            success  : (data) => {
                                console.log(data);
                                if (data.status === "success") {
                                    init(pagination_order.status, pagination_order, pagination_order.base_URL);
                                } else {
                                    alert('T??c v??? x??a kh??ng th??nh c??ng');
                                }
                            },
                            error : (xhr, ajaxOptions, thrownError) => {
                                console.log(xhr.status);
                                console.log(thrownError);
                            }
                        })
                    }
                }
            }
        }
        event.preventDefault();
    });

    // customer
    action_option_status.delegate(action_option_customer.btn_action,'click',function () {
        console.log('click button action');
        let action_status = action_option_status.find(action_option_customer.action_status).val();
        let list_checked = new Array();
        $(action_option_customer.list_checked).each(function () {
            let customer_id = $(this).attr('data-id');
            list_checked.push(customer_id);
        });
        if(action_status.length === 0 ) {
            alert('B???n ch??a ch???n t??c v??? n??o');
        } else {
            if (list_checked.length === 0) {
                alert("B???n ph???i ch???n ??t nh???t m???t kh??ch h??ng");
            } else {
                if ( action_status === 'delete' ) {
                    let select_again = confirm("B???n th???c s??? mu???n x??a nh???ng kh??ch h??ng n??y");
                    if (select_again) {
                        let action = "delete_list";
                        $.ajax({
                            url : action_option_customer.base_URL_delete,
                            method : "POST",
                            data : {
                                data_id : list_checked,
                                action  : action
                            },
                            dataType : "json",
                            success  : (data) => {
                                if (data.status === "success") {
                                    init(pagination_customer.status, pagination_customer, pagination_customer.base_URL);
                                } else {
                                    alert('T??c v??? x??a kh??ng th??nh c??ng');
                                }
                            },
                            error : (xhr, ajaxOptions, thrownError) => {
                                console.log(xhr.status);
                                console.log(thrownError);
                            }
                        })
                    }
                }
            }
        }
        event.preventDefault();
    });

    // change status
    $("button[name='btn_update_status']").click(function () {
        let status   = $(this).parents('form').find("select[name='actions']").val();
        let id_order = $(this).attr('data-id_order'); 
        console.log(status);
        $.ajax({
            url : "?mod=sales&action=change_status_in_detail_order",
            method : "POST",
            data : {
                id_order : id_order,
                status   : status
            },
            dataType : "json",
            success : (data) => {
                if(data.status === 'success') {
                    let place_append_notifi = $(".main-content .notifi")
                    notifi_process("Update th??nh c??ng",place_append_notifi,"success");
                } 
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
        event.preventDefault();
    });

    //=======================================
    // G??n s??? ki???n click ????? m??? option search
    //=======================================

    // post
    $(option_search_posts.wrapper).on('click', option_search_posts.btn_open_option, function () {
        $(option_search_posts.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // post cat
    $(option_search_post_cat.wrapper).on('click', option_search_post_cat.btn_open_option, function () {
        $(option_search_post_cat.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // trademark
    $(option_search_trademark.wrapper).on('click', option_search_trademark.btn_open_option, function () {
        $(option_search_trademark.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // products
    $(option_search_product.wrapper).on('click', option_search_product.btn_open_option, function () {
        $(option_search_product.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // product cat
    $(option_search_product_cat.wrapper).on('click', option_search_product_cat.btn_open_option, function () {
        $(option_search_product_cat.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // slider
    $(option_search_slider.wrapper).on('click', option_search_slider.btn_open_option, function () {
        $(option_search_slider.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // advt
    $(option_search_advt.wrapper).on('click', option_search_advt.btn_open_option,function () {
        $(option_search_advt.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // order
    $(option_seach_order.wrapper).on('click', option_seach_order.btn_open_option,function () {
        $(option_seach_order.table_option).fadeToggle(300);
        event.preventDefault();
    });

    // customer
    $(option_search_customer.wrapper).on('click', option_search_customer.btn_open_option, function () {
        $(option_search_customer.table_option).fadeToggle(300);
        event.preventDefault();
    });
    //=========================================
    // G??n s??? ki???n click ????? ch???n option search
    //=========================================

    // post
    $(option_search_posts.wrapper).on('click', option_search_posts.option_item, function () {
        // reset input form
        $(search_bar_posts.input_search).val('');
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_posts.input_search).attr('placeholder', placeholder_search);
        $(search_bar_posts.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_posts.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_search_posts.table_option).fadeOut(300);
        event.preventDefault();
    });

    // post cat
    $(option_search_post_cat.wrapper).on('click', option_search_post_cat.option_item, function () {
        // reset input form
        $(search_bar_post_cat.input_search).val();
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_post_cat.input_search).attr('placeholder', placeholder_search);
        $(search_bar_post_cat.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_post_cat.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_search_post_cat.table_option).fadeOut(300);
        event.preventDefault();
    });

    // trademark
    $(option_search_trademark.wrapper).on('click', option_search_trademark.option_item, function () {
        // reset input form 
        $(search_bar_trademark.input_search).val();
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_trademark.input_search).attr('placeholder', placeholder_search);
        $(search_bar_trademark.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_trademark.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_search_trademark.table_option).fadeOut(300);
        event.preventDefault();
    });

    // products
    $(option_search_product.wrapper).on('click', option_search_product.option_item, function () {
        // reset input form
        $(search_bar_product.input_search).val('');
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_product.input_search).attr('placeholder', placeholder_search);
        $(search_bar_product.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_product.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_search_product.table_option).fadeOut(300);
        event.preventDefault();
    });

    // product cat 
    $(option_search_product_cat.wrapper).on('click', option_search_product_cat.option_item, function () {
        // reset input form
        $(search_bar_product_cat.input_search).val('');
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_product_cat.input_search).attr('placeholder', placeholder_search);
        $(search_bar_product_cat.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_product_cat.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_search_product_cat.table_option).fadeOut(300);
        event.preventDefault();
    });

    // slider
    $(option_search_slider.wrapper).on('click',option_search_slider.option_item, function () {
        // reset input form
        $(search_bar_slider.input_search).val();
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_slider.input_search).attr('placeholder', placeholder_search);
        $(search_bar_slider.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_slider.option_item).removeClass('active'); 
        $(this).addClass('active');
        // close this
        $(option_search_slider.table_option).fadeOut(300);
        event.preventDefault();
    });

    // advt
    $(option_search_advt.wrapper).on('click', option_search_advt.option_item, function () {
        // reset input form
        $(search_bar_advt.input_search).val('');
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value 
        $(search_bar_advt.input_search).attr('placeholder',placeholder_search);
        $(search_bar_advt.input_search).attr('data-option_search', option_search);
        // assign active
        $(option_search_advt.option_item).removeClass('active');
        $(this).addClass('active');
        // close
        $(option_search_advt.table_option).fadeOut(300);
        event.preventDefault();
    });

    // order
    $(option_seach_order.wrapper).on('click', option_seach_order.option_item, function () {
        // reset input form
        $(search_bar_order.input_search).val('');
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_order.input_search).attr('placeholder',placeholder_search);
        $(search_bar_order.input_search).attr('data-option_search',option_search);
        // assign active
        $(option_seach_order.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_seach_order.table_option).fadeOut(300);
        event.preventDefault();
    });

    // order
    $(option_search_customer.wrapper).on('click', option_search_customer.option_item, function () {
        // reset input form
        $(search_bar_customer.input_search).val('');
        // get value
        let option_search = $(this).attr('data-option_search');
        let txt_option_search = $(this).text().toLowerCase();
        let placeholder_search = "Nh???p " + (txt_option_search) + " b???n mu???n t??m ki???m ..?";
        // assign value
        $(search_bar_customer.input_search).attr('placeholder',placeholder_search);
        $(search_bar_customer.input_search).attr('data-option_search',option_search);
        // assign active
        $(option_search_customer.option_item).removeClass('active');
        $(this).addClass('active');
        // close this
        $(option_search_customer.table_option).fadeOut(300);
        event.preventDefault();
    });

    //===========================================================================
    // G??n s??? ki???n focus cho input ????? t???c option search v?? m??? tbl search history
    //===========================================================================

    // post
    $(option_search_posts.wrapper).on('focus', search_bar_posts.input_search, function () {
        // close option search
        $(option_search_posts.table_option).fadeOut(300);
        // open history search
        $(history_search_posts.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_posts.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_posts.input_search).css('border', '1px solid #ccc');
    });


    // post cat
    $(option_search_post_cat.wrapper).on('focus', search_bar_post_cat.input_search, function () {
        // close option search
        $(option_search_post_cat.table_option).fadeOut(300);
        // open history search
        $(history_search_post_cat.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_post_cat.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_post_cat.input_search).css('border', '1px solid #ccc');
    });

    // trademark
    $(option_search_trademark.wrapper).on('focus', search_bar_trademark.input_search, function () {
        // close option search
        $(option_search_trademark.table_option).fadeOut(300);
        // open history search
        $(history_search_trademark.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_trademark.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_trademark.input_search).css('border', '1px solid #ccc');
    });

    // products
    $(option_search_product.wrapper).on('focus', search_bar_product.input_search, function () {
        console.log('focus');
        // close option search
        $(option_search_product.table_option).fadeOut(300);
        // option history search
        $(history_search_product.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_product.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_product.input_search).css('border', '1px solid #ccc');
    });

    // product cat
    $(option_search_product_cat.wrapper).on('focus', search_bar_product_cat.input_search, function () {
        // close option search
        $(option_search_product_cat.table_option).fadeOut(300);
        // option history search
        $(history_search_product_cat.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_product_cat.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_product_cat.input_search).css('border', '1px solid #ccc');
    });

    // slider
    $(option_search_slider.wrapper).on('focus', search_bar_slider.input_search, function () {
        // close option search
        $(option_search_slider.table_option).fadeOut(300);
        // option history search
        $(history_search_slider.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_slider.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_slider.input_search).css('border','1px solid #ccc');
    });

    // advt
    $(option_search_advt.wrapper).on('focus', search_bar_advt.input_search, function () {
        // close option search
        $(option_search_advt.table_option).fadeOut(300);
        // option history search
        $(history_search_advt.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_advt.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_advt.input_search).css('border','1px solid #ccc');
    });

    // order
    $(option_seach_order.wrapper).on('focus', search_bar_order.input_search, function () {
        // close option search
        $(option_seach_order.table_option).fadeOut(300);
        // option history search
        $(history_search_order.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_seach_order.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_order.input_search).css('border','1px solid #ccc');
    })

    // customer
    $(option_search_customer.wrapper).on('focus', search_bar_customer.input_search, function () {
        // close option search
        $(option_search_customer.table_option).fadeOut(300);
        // option history search
        $(history_search_customer.table_history).fadeIn(200);
        // get placeholder old
        let option_active = $(option_search_customer.option_item + ".active").text().toLowerCase();
        let txt_option_search = "Nh???p " + (option_active) + " b???n mu???n t??m ki???m ..?";
        $(this).attr('placeholder', txt_option_search);
        // reset border
        $(search_bar_order.input_search).css('border','1px solid #ccc');
    })
    //========================================================
    // G??n s??? ki???n blur ????? t???c b???ng t??m ki???m l???ch s??? t??m ki???m
    //========================================================

    // post
    $(option_search_posts.wrapper).on('blur', search_bar_posts.input_search, function () {
        $(history_search_posts.table_history).fadeOut(400);
    });

    // post cat
    $(option_search_post_cat.wrapper).on('blur', search_bar_post_cat.input_search, function () {
        $(history_search_post_cat.table_history).fadeOut(400);
    });

    // trademark
    $(option_search_trademark.wrapper).on('blur', search_bar_trademark.input_search, function () {
        $(history_search_trademark.table_history).fadeOut(400);
    });

    // products
    $(option_search_product.wrapper).on('blur', search_bar_product.input_search, function () {
        $(history_search_product.table_history).fadeOut(200);
    });

    // product cat 
    $(option_search_product_cat.wrapper).on('blur', search_bar_product_cat.input_search, function () {
        $(history_search_product_cat.table_history).fadeOut(200);
    });

    // slider
    $(option_search_slider.wrapper).on('blur', search_bar_slider.input_search, function () {
        $(history_search_slider.table_history).fadeOut(200);
    });

    // advt
    $(option_search_advt.wrapper).on('blur', search_bar_advt.input_search, function () {
        $(history_search_advt.table_history).fadeOut(200);
    });

    // order
    $(option_seach_order.wrapper).on('blur', search_bar_order.input_search, function () {
        $(history_search_order.table_history).fadeOut(200);
    });

    // order
    $(option_search_customer.wrapper).on('blur', search_bar_customer.input_search, function () {
        $(history_search_customer.table_history).fadeOut(200);
    })

    //===========================================
    // G??n s??? ki???n click ????? t??m k???t qu??? t??m ki???m
    //===========================================

    // post
    $(option_search_posts.wrapper).on('click', search_bar_posts.btn_search, function () {
        let q = $(search_bar_posts.input_search).val();
        if (q.length == 0) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m...";
            $(search_bar_posts.input_search).attr('placeholder', placeholder_search);
            $(search_bar_posts.input_search).css('border', '1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_posts.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_posts.input_search).attr('data-option_search');
            $("table.table[data-action]").attr('data-action', 'search');
            if (option_search == 'created_date') {
                alert('Ch???c n??ng n??y t??m ki???m theo th???i gian ??ang ???????c ch??ng t??i c???p nh???t...');
            } else {
                if (option_search == 'post_id') {
                    let patt = /[0-9]/;
                    if (patt.test(q) == false) {
                        alert("D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9");
                        return false;
                    } else {
                        q = parseInt(q);
                    }
                }
                let status_curr = $(search_bar_posts.status_curr).parent('li').attr('class');
                search(pagination_post, search_bar_posts, search_bar_posts.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_posts.base_URL, history_search_posts.place_append_history);
            }
        }
        event.preventDefault();
    });

    // post cat
    $(option_search_post_cat.wrapper).on('click', search_bar_post_cat.btn_search, function () {
        let q = $(search_bar_post_cat.input_search).val();
        if (q.length == 0) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m...";
            $(search_bar_post_cat.input_search).attr('placeholder', placeholder_search);
            $(search_bar_post_cat.input_search).css('border', '1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_post_cat.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_post_cat.input_search).attr('data-option_search');
            $('table.table[data-action]').attr('data-action', 'search');
            if (option_search == 'created_date') {
                alert("Ch???c n??ng t??m ki???m theo th???i gian ??anh ???????c ch??ng t??i c???p nh???t...");
            } else {
                let status_curr = $(search_bar_post_cat.status_curr).parent('li').attr('class');
                search(pagination_post_cat, search_bar_post_cat, search_bar_post_cat.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_post_cat.base_URL, history_search_post_cat.place_append_history);
            }
        }
        event.preventDefault();
    });

    // trademark
    $(option_search_trademark.wrapper).on('click', search_bar_trademark.btn_search, function () {
        let q = $(search_bar_trademark.input_search).val();
        if (q.length == 0) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a t??m ki???m...";
            $(search_bar_trademark.input_search).attr('placeholder', placeholder_search);
            $(search_bar_trademark.input_search).css('border', '1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_trademark.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_trademark.input_search).attr('data-option_search');
            $("table.table[data-action]").attr('data-action', 'search');
            if (option_search == 'created_date') {
                alert("Ch???c n??ng t??m ki???m theo th???i gian ??anh ???????c ch??ng t??i c???p nh???t...");
            } else {
                if (option_search == 'id_trademark') {
                    let patt = /[0-9]/;
                    if (patt.test(q) == false) {
                        alert('D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9');
                    } else {
                        q = parseInt(q);
                    }
                }
                let status_curr = $(search_bar_trademark.status_curr).parents('li').attr('class');
                search(pagination_trademark, search_bar_trademark, search_bar_trademark.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_trademark.base_URL, history_search_trademark.place_append_history);
            }
        }
        event.preventDefault();
    });


    // products
    $(option_search_product.wrapper).on('click', search_bar_product.btn_search, function () {
        console.log('search product');
        let q = $(search_bar_product.input_search).val();
        if (q.length == 0) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m...";
            $(search_bar_product.input_search).attr('placeholder', placeholder_search);
            $(search_bar_product.input_search).css('border', '1px solid rgb(225,113,0)');
        } else {
            let tbl_search = $(search_bar_product.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_product.input_search).attr('data-option_search');
            $("table.table[data-action]").attr('data-action', 'search');
            if (option_search == 'created_date') {
                alert('Ch???c n??ng n??y t??m ki???m theo th???i gian ??ang ???????c ch??ng t??i c???p nh???t...');
            } else {
                if (option_search == 'id_product') {
                    let path = /[0-9]/;
                    if (path.test(q) == false) {
                        alert('D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9');
                        return false;
                    } else {
                        q = parseInt(q);
                    }
                }
                let status_curr = $(search_bar_product.status_curr).parent('li').attr('class');
                search(pagination_products, search_bar_product, search_bar_product.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_product.base_URL, history_search_product.place_append_history);
            }
        }
        event.preventDefault();
    });

    // product cat
    $(option_search_product_cat.wrapper).on('click', search_bar_product_cat.btn_search, function () {
        let q = $(search_bar_product_cat.input_search).val();
        if (q.length == 0) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m ...";
            $(search_bar_product_cat.input_search).attr('placeholder', placeholder_search);
            $(search_bar_product_cat.input_search).css('border', '1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_product_cat.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_product_cat.input_search).attr('data-option_search');
            $('table.table[data-action]').attr('data-action', 'search');
            if (option_search == 'created_date') {
                alert('Ch???c n??ng t??m ki???m theo th???i gian ??ang ???????c ch??ng t??i c???p nh???t...');
            } else {
                if (option_search == 'id_productCat') {
                    let path = /[0-9]/;
                    if (path.test(q) == false) {
                        alert('D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9');
                    } else {
                        q = parseInt(q);
                    }
                }
                let status_curr = $(search_bar_product_cat.status_curr).parents('li').attr('class');
                search(pagination_product_cat, search_bar_product_cat, search_bar_product_cat.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_product_cat.base_URL, history_search_product_cat.place_append_history);
            }
        }
        event.preventDefault();
    });

    // slider
    $(option_search_slider.wrapper).on('click',search_bar_slider.btn_search, function () {
        let q = $(search_bar_slider.input_search).val();
        if ( q.length === 0 ) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m ...";
            $(search_bar_slider.input_search).attr('placeholder',placeholder_search);
            $(search_bar_slider.input_search).css('border','1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_slider.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_slider.input_search).attr('data-option_search');
            $('table.table[data-action]').attr('data-action', 'search');
            if (option_search == 'created_date') {
                alert("Ch???c n??ng t??m ki???m theo th???i gian ??ang trong qu?? tr??nh ho??ng thi???n");
            } else {
                if ( option_search == 'id_slider' || option_search == 'numerical_order' ) {
                    let path = /[0-9]/;
                    if ( path.test(q) == false ) {
                        alert("D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9");
                    } else {
                        q = parseInt(q);
                    }
                }
                let status_curr = $(search_bar_slider.status_curr).parents('li').attr('class');
                search(pagination_slider, search_bar_slider, search_bar_slider.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_slider.base_URL, history_search_slider.place_append_history);
            }
        }
        event.preventDefault();
    });

    // advt
    $(option_search_advt.wrapper).on("click", search_bar_advt.btn_search,function() {
        let q = $(search_bar_advt.input_search).val();
        if ( q.length === 0 ) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m ...";
            $(search_bar_advt.input_search).attr('placeholder',placeholder_search);
            $(search_bar_advt.input_search).css('border','1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_advt.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_advt.input_search).attr('data-option_search');
            $('table.table[data-action]').attr('data-action', 'search');
            if ( option_search == 'created_date' ) {
                alert("Ch???c n??ng t??m ki???m theo th???i gian ??ang trong qu?? tr??nh ho??ng thi???n");
            } else {
                if ( option_search == 'id_advt' ) {
                    let patt = /[0-9]/;
                    if ( patt.test(q) == false ) {
                        alert("D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9");
                    }
                    q = parseInt(q);
                }
                let status_curr = $(search_bar_advt.status_curr).parents('li').attr('class');
                search(pagination_advt, search_bar_advt, search_bar_advt.base_URL, q, option_search, tbl_search, status_curr);
                append_data_history(history_search_advt.base_URL, history_search_advt.place_append_history);
            }
        }
        event.preventDefault();
    })

    // order
    $(option_seach_order.wrapper).on('click', search_bar_order.btn_search,function () {
        let q = $(search_bar_order.input_search).val();
        if ( q.length === 0 ) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m ...";
            $(search_bar_order.input_search).attr('placeholder',placeholder_search);
            $(search_bar_order.input_search).css('border','1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_order.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_order.input_search).attr('data-option_search');
            $('table.table[data-action]').attr('data-action', 'search');
            if ( option_search === "id_order" ) {
                let patt = /[0-9]/;
                if ( patt.test(q) == false ) {
                    alert("D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9");
                }
                q = parseInt(q);
            }
            let status_curr = $(search_bar_order.status_curr).parents('li').attr('class');
            search(pagination_order, search_bar_order, search_bar_order.base_URL, q, option_search, tbl_search, status_curr);
            append_data_history(history_search_order.base_URL, history_search_order.place_append_history);
        }
        event.preventDefault();
    });

    // customer
    $(option_search_customer.wrapper).on('click', search_bar_customer.btn_search,function () {
        let q = $(search_bar_customer.input_search).val();
        if ( q.length === 0 ) {
            let placeholder_search = "B???n ch??a nh???p t??? kh??a ????? t??m ki???m ...";
            $(search_bar_customer.input_search).attr('placeholder',placeholder_search);
            $(search_bar_customer.input_search).css('border','1px solid rgb(255, 113, 0)');
        } else {
            let tbl_search = $(search_bar_customer.tbl_search).attr('data-search_table');
            let option_search = $(search_bar_customer.input_search).attr('data-option_search');
            $('table.table[data-action]').attr('data-action', 'search');
            if ( option_search === "id_customer" ) {
                let patt = /[0-9]/;
                if ( patt.test(q) == false ) {
                    alert("D??? li???u b???n nh???p kh??ng h???p l???, ch??? ch???p nh???n nh???ng s??? t??? 0 ?????n 9");
                }
                q = parseInt(q);
            }
            let status_curr = $(search_bar_customer.status_curr).parents('li').attr('class');
            search(pagination_customer, search_bar_customer, search_bar_customer.base_URL, q, option_search, tbl_search, status_curr);
            append_data_history(history_search_customer.base_URL, history_search_customer.place_append_history);
        }
        event.preventDefault();
    });

    //===============================================
    // G??n s??? ki???n ????? t??m ki???m b???ng l???ch s??? t??m ki???m
    //===============================================

    // post
    $(option_search_posts.wrapper).delegate(history_search_posts.history_item, 'click', function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_posts.input_search).val(q);
        $(search_bar_posts.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // post cat
    $(option_search_post_cat.wrapper).delegate(history_search_post_cat.history_item, 'click', function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_post_cat.input_search).val(q);
        $(search_bar_post_cat.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });


    // trademark
    $(option_search_trademark.wrapper).delegate(history_search_product.history_item, 'click', function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_product.input_search).val(q);
        $(search_bar_product.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // products
    $(option_search_product.wrapper).delegate(history_search_product.history_item, 'click', function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_product.input_search).val(q);
        $(search_bar_product.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // product 
    $(option_search_product_cat.wrapper).delegate(history_search_product_cat.history_item, 'click', function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_product_cat.input_search).val(q);
        $(search_bar_product_cat.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // slider
    $(option_search_slider.wrapper).delegate(history_search_slider.history_item,'click',function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_slider.input_search).val(q);
        $(search_bar_slider.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // advt
    $(option_search_advt.wrapper).delegate(history_search_advt.history_item,'click',function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_advt.input_search).val(q);
        $(search_bar_advt.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // order
    $(option_seach_order.wrapper).delegate(history_search_order.history_item,'click',function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_order.input_search).val(q);
        $(search_bar_order.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    // customer
    $(option_search_customer.wrapper).delegate(history_search_customer.history_item,'click',function () {
        let q = $(this).children('span.text').text();
        let option_search = $(this).attr('data-option_search');
        $(search_bar_customer.input_search).val(q);
        $(search_bar_customer.input_search).attr('data-option_search', option_search);
        event.preventDefault();
    });

    //==================================
    // G??n s??? ki???n x??a l???ch s??? t??m ki???m
    //==================================

    // post
    $(option_search_posts.wrapper).delegate(history_search_posts.btn_selete_history_item, 'click', function () {
        let id_post = $(this).attr('data-search_id');
        delete_search_history(history_search_posts, search_bar_posts, history_search_posts.base_URL_delete, id_post);
        event.preventDefault();
    });

    // post cat
    $(option_search_post_cat.wrapper).delegate(history_search_post_cat.btn_selete_history_item, 'click', function () {
        let id_post_cat = $(this).attr('data-search_id');
        delete_search_history(history_search_post_cat, search_bar_post_cat, history_search_post_cat.base_URL_delete, id_post_cat);
        event.preventDefault();
    });

    // trademark
    $(option_search_trademark.wrapper).delegate(history_search_trademark.btn_selete_history_item, 'click', function () {
        let id_trademark = $(this).attr('data-search_id');
        delete_search_history(history_search_trademark, search_bar_trademark, history_search_trademark.base_URL_delete, id_trademark);
        event.preventDefault();
    });

    // products
    $(option_search_product.wrapper).delegate(history_search_product.btn_selete_history_item, 'click', function () {
        let id_product = $(this).attr('data-search_id');
        delete_search_history(history_search_product, search_bar_product, history_search_product.base_URL_delete, id_product);
        event.preventDefault();
    });

    // product cat
    $(option_search_product_cat.wrapper).delegate(history_search_product_cat.btn_selete_history_item, 'click', function () {
        let id_product_cat = $(this).attr('data-search_id');
        console.log(history_search_product_cat.base_URL_delete);
        delete_search_history(history_search_product_cat, search_bar_product_cat, history_search_product_cat.base_URL_delete, id_product_cat);
        event.preventDefault();
    });

    // slider
    $(option_search_slider.wrapper).delegate(history_search_slider.btn_selete_history_item,'click',function() {
        let id_slider = $(this).attr('data-search_id');
        delete_search_history(history_search_slider, search_bar_slider, history_search_slider.base_URL_delete, id_slider);
        event.preventDefault();
    });

    // advt
    $(option_search_advt.wrapper).delegate(history_search_advt.btn_selete_history_item,'click',function () {
        let id_advt = $(this).attr('data-search_id');
        delete_search_history(history_search_advt, search_bar_advt, history_search_advt.base_URL_delete, id_advt);
        event.preventDefault();
    });

    // order 
    $(option_seach_order.wrapper).delegate(history_search_order.btn_selete_history_item,'click',function () {
        let id_order = $(this).attr('data-search_id');
        delete_search_history(history_search_order, search_bar_order, history_search_order.base_URL_delete, id_order);
        event.preventDefault();
    });

    // customer
    $(option_search_customer.wrapper).delegate(history_search_customer.btn_selete_history_item,'click',function () {
        let id_order = $(this).attr('data-search_id');
        delete_search_history(history_search_customer, search_bar_order, history_search_customer.base_URL_delete, id_order);
        event.preventDefault();
    });

    //================================================
    // G??n s??? ki???n keyup ????? t??m ki???m l???ch s??? t??m ki???m
    //================================================

    // post
    $(option_search_posts.wrapper).delegate(search_bar_posts.input_search, 'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_posts";
        search_history(history_search_posts.base_URL_search_history, key_text, option_search, tbl_search, history_search_posts.place_append_history);
    });

    // post cat
    $(option_search_post_cat.wrapper).delegate(search_bar_post_cat.input_search, 'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_postcat";
        search_history(history_search_post_cat.base_URL_search_history, key_text, option_search, tbl_search, history_search_post_cat.place_append_history);
    });

    // trademark 
    $(option_search_trademark.wrapper).delegate(search_bar_trademark.input_search, 'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_trademark_product";
        search_history(history_search_trademark.base_URL_search_history, key_text, option_search, tbl_search, history_search_trademark.place_append_history);
    });

    // product
    $(option_search_product.wrapper).delegate(search_bar_product.input_search, 'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_products";
        search_history(history_search_product.base_URL_search_history, key_text, option_search, tbl_search, history_search_product.place_append_history);
    });

    // product cat
    $(option_search_product_cat.wrapper).delegate(search_bar_product_cat.input_search, 'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_productcat";
        search_history(history_search_product_cat.base_URL_search_history, key_text, option_search, tbl_search, history_search_product_cat.place_append_history);
    });

    // slider
    $(option_search_slider.wrapper).delegate(search_bar_slider.input_search,'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_sliders";
        search_history(history_search_slider.base_URL_search_history, key_text, option_search, tbl_search, history_search_slider.place_append_history);
    });

    // order 
    $(option_seach_order.wrapper).delegate(search_bar_order.input_search,'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_order";
        search_history(history_search_order.base_URL_search_history, key_text, option_search, tbl_search, history_search_order.place_append_history);
    });

    // customer 
    $(option_search_customer.wrapper).delegate(search_bar_customer.input_search,'keyup', function () {
        let key_text = $(this).val();
        let option_search = "search_text";
        let tbl_search = "tbl_customer";
        search_history(history_search_customer.base_URL_search_history, key_text, option_search, tbl_search, history_search_customer.place_append_history);
    });

    // ===========================
    // Update date name trademark
    // ===========================
    // open and close modal
    $(name_category_trademark.wrapper).delegate(name_category_trademark.btn_change, 'dblclick', function () {
        // assign handling
        $(name_category_trademark.btn_change).attr('contenteditable', 'false');
        $(name_category_trademark.btn_change).removeAttr('style');
        $(name_category_trademark.tbl_option_category).fadeOut(300);
        $(this).attr('contenteditable', 'true');
        $(this).css({
            "border": "1.2px solid rgb(202, 195, 195)",
            "width": "90px",
            "display": "block",
            "text-align": "center",
            "font-size": "13px",
            "background": "rgb(255, 255, 255)",
        });
        $(this).next().fadeIn(300);
        $(this).attr('data-name_current', $(this).text());
        $(this).attr('data-id_product_current', $(this).attr('data-id_product_cat'));
    });


    // assign a change event to get category
    $(name_category_trademark.wrapper).delegate(name_category_trademark.select_option, 'change', function () {
        let id_category_curr = $(this).parents('tr').find(name_category_trademark.btn_change).attr('data-id_product_cat');
        let id_category = $(this).val();
        let place_append = $(this).parents('tr').find(name_category_trademark.btn_change + "[data-id_product_cat=" + (id_category_curr) + "]");
        let base_URL = name_category_trademark.base_URL;
        load_data_category(base_URL, id_category, place_append);
    });
    // save category modal
    $(name_category_trademark.wrapper).delegate(name_category_trademark.btn_save, 'click', function () {
        let id_product_cat_curr = $(this).parents('td').find(name_category_trademark.btn_change).attr('data-id_product_current');
        let id_product_cat_new = $(this).parents('td').find(name_category_trademark.btn_change).attr('data-id_product_cat');
        $(this).parents(name_category_trademark.tbl_option_category).fadeOut(300);
        $(this).parents('td').find(name_category_trademark.btn_change).attr('contenteditable', 'false');
        $(this).parents('td').find(name_category_trademark.btn_change).removeAttr('style');
        $(this).parents('td').find(name_category_trademark.btn_change).removeAttr('data-name_current');
        $(this).parents('td').find(name_category_trademark.btn_change).removeAttr('data-id_product_current');
        if (id_product_cat_curr != id_product_cat_new) {
            let base_URL = name_category_trademark.base_URL;
            let place_append_notifi = name_category_trademark.notification;
            let id_trademark = $(this).parents('tr').find('.name_trademark').attr('data-id_trademark');
            save_category(base_URL, id_trademark, id_product_cat_new, place_append_notifi);
        } else {
            notifi_process("???? l??u danh m???c v???i t??n c??", name_category_trademark.notification, "success");
        }
    });
    // Close category modal
    $(name_category_trademark.wrapper).delegate(name_category_trademark.btn_close, 'click', function () {
        let name_curr = $(this).parents('td').find(name_category_trademark.btn_change).attr('data-name_current');
        let id_product_cat_curr = $(this).parents('td').find(name_category_trademark.btn_change).attr('data-id_product_current');
        $(this).parents(name_category_trademark.tbl_option_category).fadeOut(300);
        $(this).parents('td').find(name_category_trademark.btn_change).attr('contenteditable', 'false');
        $(this).parents('td').find(name_category_trademark.btn_change).removeAttr('style');
        $(this).parents('td').find(name_category_trademark.btn_change).removeAttr('data-name_current');
        $(this).parents('td').find(name_category_trademark.btn_change).removeAttr('data-id_product_current');
        $(this).parents('td').find(name_category_trademark.btn_change).text(name_curr);
        $(this).parents('td').find(name_category_trademark.btn_change).attr('data-id_product_cat', id_product_cat_curr);
    });


    // ============
    // detail item
    // ============

    //th??m m???t ?? input ????? t?? t??? th??m v??? s???n ph???m
    //b???t s??? ki???n click th??m m???t ph???n t???
    $(detail_item_product.wrapper).delegate(detail_item_product.btn_add, 'click', function () {
        let num_add = 1;
        let place_append = $(detail_item_product.place_append_detail_item + "[data-detail_item=" + (detail_item_product.num_detail_item_curr) + "]");
        $(place_append).find(detail_item_product.btn_add).attr('data-action', 'delete');
        $(place_append).find(detail_item_product.btn_delete).text('X??a');
        detail_item_product.num_detail_item_curr++;
        add_detail_item_product(num_add, place_append);
        event.preventDefault();
    });

    //b???t s??? ki???n ????? x??a ??i m???t ph???n t??? c???a detail item product
    $(detail_item_product.wrapper).delegate(detail_item_product.btn_delete, 'click', function () {
        let id_detail_item = $(this).parents('.detail-item').attr('data-detail_item');
        $(detail_item_product.place_append_detail_item + "[data-detail_item=" + (id_detail_item) + "]").remove();
        event.preventDefault();
    })

    // ====================================
    // load data trademark by product cate
    // ====================================
    // b???t s??? ki???n change ????? load trademark by cate products
    $(load_trademark_by_cate_product.wrapper).delegate(load_trademark_by_cate_product.btn_load_tradmark, 'change', function () {
        let product_cate_id = $(this).val();
        load_trademark_by_product_cate(product_cate_id, load_trademark_by_cate_product.base_URL, load_trademark_by_cate_product.place_append);
    });

    // b???t s??? ki???n change ????? load trademark trong update product by cate products
    $(load_trademark_in_update_by_cate_product.wrapper).delegate(load_trademark_in_update_by_cate_product.btn_load_tradmark, 'change', function () {
        let product_cate_id = $(this).val();
        load_trademark_by_product_cate(product_cate_id, load_trademark_in_update_by_cate_product.base_URL, load_trademark_in_update_by_cate_product.place_append);
    });


    // =======================================
    // G??n s??? ki???n thay ?????i img trong products
    // =======================================

    // click open box modal change img
    $(change_img_product.wrapper).delegate(change_img_product.btn_change, 'click', function () {
        $(change_img_product.box_change).stop().fadeToggle(300);
        let type_image = $(this).parents('ul[data-type_image]').attr('data-type_image');
        let data_id;
        if (type_image == 'avatar') {
            data_id = $(this).parents('[data-id_product]').attr('data-id_product');
        } else {
            data_id = $(this).parents('span.thumb-img').attr('data-id_image');
        }
        change_img_product.data_id = data_id;
        let src_img_curr = $(this).parents('span.thumb-img').find('img').attr('src');
        change_img_product.src_img_curr = src_img_curr;
        $("body").prepend("<div class='mark_upload position-fixed' style='top: 0; left: 0; z-index: 9998;width: 100vw; height: 100vh; overflow: hidden; background-color: rgba(0,0,0,0.4)'></div>")
        change_img_product.type_image = type_image;
        change_img_product.data_id = data_id;
        event.preventDefault();
    });

    // click close box modal chang img
    $(change_img_product.box_change).delegate(change_img_product.btn_close_modal, 'click', function () {
        let action = $(change_img_product.box_change).find('button.btn_change_img_new').attr('data-action');
        if (action == 'save_img') {
            change_img_product.saving = false;
        } else {
            change_img_product.saving = true;
        }
        console.log(change_img_product.saving);
        if (change_img_product.saving == false) {
            let select_again = confirm("H???y l??u file ???nh n??y");
            if (select_again) {
                reset_modal_img();
            }
        } else {
            reset_modal_img();
        }
        // con nua
    });

    // function hide and reset modal update img
    function reset_modal_img() {
        $('body').find('.mark_upload').remove();
        $(change_img_product.box_change).stop().fadeOut(300);
        $(change_img_product.place_append_path).val(null);
        let box_append_img = $(change_img_product.box_append_img);
        box_append_img.find(change_img_product.src_append).attr('src', '');
        box_append_img.find(change_img_product.src_bg).attr('src', '');
        $(change_img_product.inputFile).css('display', 'block');
        $(change_img_product.inputFile).val(null);
        console.log(change_img_product.btn_save_file);
        $('.btn_change_img_new[data-action]').attr('data-action', 'load_img');
        $('.btn_change_img_new[data-action]').text('Duy???t ???nh');
        box_append_img.fadeOut(300);
    }

    // click get file img
    $(change_img_product.box_change).delegate(change_img_product.btn_get_file, 'click', function () {
        let inputFile = $(change_img_product.inputFile)
        let base_URL = change_img_product.base_URL;
        console.log(change_img_product.place_append_path);
        let place_append_path = $(change_img_product.place_append_path);
        let box_append_img = $(change_img_product.box_append_img); // ????? m??? box img hi???n ???nh l??n ??
        let src_append = box_append_img.find(change_img_product.src_append); // main img
        let src_bg = box_append_img.find(change_img_product.src_bg); // img bg 
        let btn_get_file = $(change_img_product.btn_get_file);
        change_img_new(inputFile, base_URL, place_append_path, box_append_img, src_append, src_bg, btn_get_file);
        event.preventDefault();
    });

    // click save file img
    $(change_img_product.box_change).delegate(change_img_product.btn_save_file, 'click', function () {
        // ---
        let src_img_curr = change_img_product.src_img_curr;
        let src_img_new = $(this).parents('form').find("input[type='hidden'][name='thumb_img_new']").val();
        let data_id = change_img_product.data_id;
        let option_delete_img_old;
        let base_URL = change_img_product.base_URL_update_img;
        let type_image = change_img_product.type_image;
        let select_delete_img_old = confirm("B???n c?? mu???n x??a ??i file ???nh c?? trong th?? m???c ?");
        if (select_delete_img_old == true) {
            option_delete_img_old = true;
        } else {
            option_delete_img_old = false;
        }
        upload_img_new(src_img_curr, src_img_new, data_id, option_delete_img_old, base_URL, type_image);
        event.preventDefault();
    });


    // update img new 
    function upload_img_new(src_img_curr, src_img_new, data_id, option_delete_img_old, base_URL, type_image, ) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                src_img_curr: src_img_curr,
                src_img_new: src_img_new,
                data_id: data_id,
                option_delete_img_old: option_delete_img_old,
                type_image: type_image
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    reset_modal_img();
                    $(".detail-img").find('.thumb-img').children('img').attr('src', data.path_img);
                    if (type_image == 'relative') {
                        $(".thumb-img[data-id_image=" + (data_id) + "]").children('img').attr('src', data.path_img);
                    } else {
                        $("#option-1").find('span.thumb-img').children('img').attr('src', data.path_img);
                    }
                    notifi_process("B???n v???a update th??nh c??ng m???t file ???nh", change_img_product.notification, "success");
                } else {
                    notifi_process("Update ???nh m???i kh??ng th??nh c??ng", change_img_product.notification, "error");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }
    // function help change img product
    function change_img_new(inputFile, base_URL, place_append_path, box_append_img, src_append, src_bg, btn_get_file) {
        let fileToUpload = inputFile[0].files[0];
        if (fileToUpload != null) {
            let exten_file = fileToUpload.name.split('.').pop().toLowerCase();
            let exten_file_allow = Array('jpg', 'png', 'jpeg', 'gif');
            if ($.inArray(exten_file, exten_file_allow) == -1) {
                alert('H??? th???ng ch??? h??? tr??? nh???ng file ???nh d???nh d???ng ( .jpg, .png, .jpeg, .gif )');
            } else {
                let oFReader = new FileReader();
                oFReader.readAsDataURL(fileToUpload);
                let fSize = fileToUpload.size;
                if (fSize > 5242880) {
                    alert('K??ch th?????c file kh??ng ???????c v?????c qu?? 5MB');
                } else {
                    let formData = new FormData();
                    formData.append('file', fileToUpload);
                    $.ajax({
                        url: base_URL,
                        method: "POST",
                        data: formData,
                        contentType: false,
                        processData: false,
                        dataType: "json",
                        beforeSend: () => {
                            console.log('uploading...');
                        },
                        success: function (data) {
                            inputFile.css('display', 'none');
                            btn_get_file.attr('data-action', 'save_img');
                            btn_get_file.text('L??u ???nh');
                            place_append_path.val(data.path_img);
                            src_bg.attr('src', data.path_img);
                            src_append.attr('src', data.path_img);
                            setTimeout(() => {
                                box_append_img.fadeIn(300);
                            }, 300);
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            console.log(xhr.status);
                            console.log(thrownError);
                        }
                    });
                }
            }

        } else {
            alert('Vui l??ng ch???n m???t file ???nh');
        }
    }



    function load_trademark_by_product_cate(product_cate_id, base_URL, place_append) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                product_cate_id: product_cate_id
            },
            dataType: "text",
            success: function (data) {
                $(place_append).empty();
                $(place_append).append(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // h??m n??y d??ng ????? t??nh to??n v?? g???i d??? ki???u cho h??m sinh ra th??nh ph???n detail item products
    function add_detail_item_product(num_add, place_append) {
        let html_input_detail_item_product = "";
        html_input_detail_item_product += creat_input_detail_item_product(detail_item_product.num_detail_item_curr);
        $(place_append).after(html_input_detail_item_product);
    }

    //H??m n??y d??ng ????? sinh ra c??c ph???n t??? c???a input detail item product
    function creat_input_detail_item_product(detail_id) {
        return "<div class=\"detail-item\" data-detail_item=\"" + (detail_id) + "\">\n" +
            "                                            <div class=\"row\">\n" +
            "                                                <div class=\"col-md-12\">\n" +
            "                                                    <div class=\"row\">\n" +
            "                                                        <div class=\"col-md-1\">\n" +
            "                                                            <span class=\"check-detail\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"col-md-5\">\n" +
            "                                                            <input type=\"text\" name=\"name_detail[]\" class=\"form-control shadow-none\" placeholder=\"Nh???p t??n chi ti???t\">\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"col-md-4\">\n" +
            "                                                            <input type=\"text\" name=\"value_detail[]\" class=\"form-control shadow-none\" placeholder=\"Nh???p gi?? tr???\">\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"col-md-2\">\n" +
            "                                                            <a href=\"\" class=\"action-detail-item\" data-action=\"add\">Th??m</a>\n" +
            "                                                        </div>\n" +
            "                                                    </div>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>"
    }

    //=========================================
    // H??m n??y ???????c g???i khi click v??o n??t next
    //=========================================

    function click_next_pagin(pagination_of, search_bar_of, action_curr, URL_pagination) {
        if (pagination_of.current_page < pagination_of.total_page) {
            pagination_of.current_page++;
            // history.pushState({},"","?mod=posts&page="+pagination_of.current_page);
            let modules = pagination_of;
            load_btn_pagination(pagination_of.total_page, modules);
            if (action_curr == 'search') {
                let status_curr = $(search_bar_of.status_curr).parent('li').attr('class');
                load_data_page_search(pagination_of, search_bar_of, search_bar_of.q, search_bar_of.option_search, search_bar_of.base_URL_load_data, pagination_of.current_page, status_curr);
            } else {
                load_data_page(pagination_of, pagination_of.current_page, URL_pagination);
            }
        }
    }

    //=========================================
    // H??m n??y ???????c g???i khi click v??o n??t prev
    //=========================================

    function click_prev_pagin(pagination_of, search_bar_of, action_curr, URL_pagination) {
        if (pagination_of.current_page > 1) {
            pagination_of.current_page--;
            let modules = pagination_of;
            load_btn_pagination(pagination_of.total_page, modules);
            if (action_curr == 'search') {
                let status_curr = $(search_bar_of.status_curr).parent('li').attr('class');
                load_data_page_search(pagination_of, search_bar_of, search_bar_of.q, search_bar_of.option_search, search_bar_of.base_URL_load_data, pagination_of.current_page, status_curr);
            } else {
                load_data_page(pagination_of, pagination_of.current_page, URL_pagination);
            }
        }
    }

    //==============================================
    // H??m n??y ???????c g???i khi click v??o t???ng n??t item
    //==============================================

    function click_item_pagin(pagination_of, search_bar_of, current_page, action_curr, URL_pagination) {
        pagination_of.current_page = parseInt(current_page);
        // history.pushState({},"","?mod=posts&page="+pagination_of.current_page);
        let modules = pagination_of;
        load_btn_pagination(pagination_of.total_page, modules);
        if (action_curr == 'search') {
            let status_curr = $(search_bar_of.status_curr).parent('li').attr('class');
            load_data_page_search(pagination_of, search_bar_of, search_bar_of.q, search_bar_of.option_search, search_bar_of.base_URL_load_data, pagination_of.current_page, status_curr);
        } else {
            load_data_page(pagination_of, pagination_of.current_page, URL_pagination);
        }
    }

    //================================
    // Function load button pagination
    //================================

    function load_btn_pagination(total_page, modules) {
        console.log(modules);
        let active;
        let disable_prev;
        let disable_next;
        if (total_page > 0) {
            if (total_page >= 2) {
                var html_btn_page;
                if (modules.current_page >= 2) {
                    disable_prev = '';
                } else {
                    disable_prev = 'disabled';
                };
                html_btn_page = "   <li class='page-item " + (disable_prev) + "'>\
                                        <a href='#' class='page-link shadow-none' data-page='prev' data-page_number='" + (modules.current_page - 1) + "'>&laquo;</a>\
                                    </li>";
                if (total_page >= 7) {
                    // --------------------
                    if (modules.current_page == total_page - 1 || modules.current_page == total_page - 2 || modules.current_page == total_page - 3 || modules.current_page == total_page) {
                        for (i = 1; i <= 2; i++) {
                            active = '';
                            data_page = 'normal';
                            link = "href='#'"
                            if (i == modules.current_page) {
                                active = 'active'
                                data_page = 'current';
                                link = '';
                            }
                            html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                     <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                                 </li>";
                        }
                        // ---------------------
                        html_btn_page += "<span class='page-more'>...</span>";
                        //  ---------------------
                        for (i = total_page - 3; i <= total_page; i++) {
                            active = '';
                            data_page = 'normal';
                            link = "href='#'"
                            if (i == modules.current_page) {
                                active = 'active'
                                data_page = 'current';
                                link = '';
                            }
                            html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                     <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                                 </li>";
                        }
                    } else {
                        var list_item = new Array();
                        for (h = 3; h < total_page - 3; h++) {
                            list_item.push(h);
                        }
                        if ($.inArray(modules.current_page, list_item)) {
                            for (i = modules.current_page - 1; i <= modules.current_page + 2; i++) {
                                if (i != 0) {
                                    active = '';
                                    data_page = 'normal';
                                    link = "href='#'"
                                    if (i == modules.current_page) {
                                        active = 'active'
                                        data_page = 'current';
                                        link = '';
                                    }
                                    html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                         <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                                     </li>";
                                }
                            }
                            html_btn_page += "<span class='page-more'>...</span>";
                            for (i = total_page - 1; i <= total_page; i++) {
                                active = '';
                                data_page = 'normal';
                                link = "href='#'"
                                if (i == modules.current_page) {
                                    active = 'active'
                                    data_page = 'current';
                                    link = '';
                                }
                                html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                         <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                                     </li>";
                            }
                        } else {
                            for (i = 1; i <= 4; i++) {
                                active = '';
                                data_page = 'normal';
                                link = "href='#'"
                                if (i == modules.current_page) {
                                    active = 'active'
                                    data_page = 'current';
                                    link = '';
                                }
                                html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                         <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                                     </li>";
                            }
                            // ---------------------
                            html_btn_page += "<span class='page-more'>...</span>";
                            //  ---------------------
                            for (i = total_page - 1; i <= total_page; i++) {
                                active = '';
                                data_page = 'normal';
                                link = "href='#'"
                                if (i == modules.current_page) {
                                    active = 'active'
                                    data_page = 'current';
                                    link = '';
                                }
                                html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                         <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                                     </li>";
                            }
                        }
                    }
                } else {
                    for (i = 1; i <= total_page; i++) {
                        active = '';
                        data_page = 'normal';
                        link = "href='#'"
                        if (i == modules.current_page) {
                            active = 'active'
                            data_page = 'current';
                            link = '';
                        }
                        html_btn_page += "  <li class='page-item " + (active) + "'>\
                                                 <a " + (link) + " class='page-link shadow-none' data-page='" + (data_page) + "' data-page_number='" + (i) + "'>" + (i) + "</a>\
                                             </li>";
                    }
                }
                if (modules.current_page < total_page) {
                    disable_next = '';
                } else {
                    disable_next = 'disabled'
                }
                html_btn_page += "  <li class='page-item " + (disable_next) + "'>\
                                        <a href='#' class='page-link shadow-none' data-page='next' data-page_number='" + (modules.current_page + 1) + "'>&raquo;</a>\
                                    </li>";
            } else {
                html_btn_page = "  <li class='page-item active'>\
                                        <a class='page-link shadow-none' data-page='current' data-page_number='1'>1</a>\
                                    </li>";
            }
        }
        place_append_pagination.empty();
        place_append_pagination.append(html_btn_page);
    }

    //========================
    // Function load data page
    //========================

    function load_data_page(pagination_of, current_page, base_URL) {
        console.log(pagination_of.status);
        console.log('load data page running (' + base_URL + ")");    
        let data_id = $(pagination_of.data_id).attr('data-id');
        let modules_action = $(pagination_of.data_modules_action).attr('data-modules_action');
        $.ajax({
            url: base_URL + "&info=load_data_pagin&type=load_data",
            method: "POST",
            data: {
                current_page: current_page,
                status: pagination_of.status,
                num_per_page: pagination_of.num_per_page,
                data_id: data_id,
                modules_action: modules_action
            },
            dataType: "text"
        }).done(function (data) {
            loading(place_append_table);
            setTimeout(function () {
                place_append_table.empty();
                place_append_table.append(data);
            }, 400)
        });
    }

    //======================================
    // Function set height config for table
    //======================================

    function set_height_config() {
        var height_config = pagination_post.height_config + "px";
        place_append_table.css('height', height_config);
    }

    //==============
    // Change status
    //==============

    function change_status(status_of, data_id, active_current, status_current, base_URL, action, URL_load_num_status, place_append_status, place_append_active, pagination_of, URL_pagination) {
        if (active_current == "on") {
            status_of.active_current = "off";
            status_of.status_current = "pending";
        } else {
            status_of.active_current = "on";
            status_of.status_current = "publish";
        }
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                data_id: data_id,
                status_current: status_of.status_current,
                action: action
            },
            dataType: "json",
            success: function (data) {
                place_append_status.attr('data-status', data.status);
                place_append_status.text(data.status_vnm);
                place_append_active.attr('data-active', status_of.active_current);
                load_num_status(URL_load_num_status);
                setTimeout(function () {
                    init(pagination_of.status, pagination_of, URL_pagination);
                }, 1500)
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //============================
    // Get number stats by status
    //============================

    function load_num_status(base_URL) {
        $.ajax({
            url: base_URL,
            dataType: "json",
            success: function (data) {
                select_option_status.find('li a span.count').empty();
                select_option_status.find('li.all a span.count').append(data.num_all);
                select_option_status.find('li.publish a span.count').append(data.num_publish);
                select_option_status.find('li.pending a span.count').append(data.num_pending);
                select_option_status.find('li.trash a span.count').append(data.num_trash);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //==================================================
    // Save file image and return path image if success
    //==================================================

    function append_file_img(inputFile, base_URL, thumb_nail, place_append) {
        let fileToUpload = inputFile[0].files[0];
        let formData = new FormData();
        formData.append('file', fileToUpload);
        $.ajax({
            url: base_URL,
            type: "POST",
            data: formData,
            contentType: false,
            processData: false,
            dataType: 'json',
            success: function (data) {
                if (data.status == "success") {
                    $("" + (thumb_nail) + "").val(data.file_path);
                    appendFileThumbImg(place_append, data.file_path);
                } else {
                    notifi_error(place_append, data.error.file);
                }
                console.log(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //================================
    // Append path file img into html
    //================================

    function appendFileThumbImg(thumb_nail, data) {
        console.log(thumb_nail);
        console.log(data);
        let img_items;
        img_items = "   <span class='thumb-img position-relative'><img src='" + (data) + "' id='path_img'>\
                            <a href='#' title='Chi ti???t ???nh' class='open-modal-detail img position-absolute fa fa-eye' data-toggle='modal' data-target='#open_modal_detail_img'></a>\
                        </span>";
        $("" + (thumb_nail) + "").empty();
        $("" + (thumb_nail) + "").append(img_items);
    }

    //=========================
    // Form error notification
    //=========================

    function notifi_error(thumb_nail, data) {
        let error_items;
        error_items = "<span class='error'>(*) " + (data) + "</span>";
        $("" + (thumb_nail) + "").html(error_items);
    }

    //================
    // Upate name img
    //================

    function update_name_img(base_URL, name_new, data_id, place_append, src_img, thumbnail_url) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                name_new: name_new,
                data_id: data_id
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    $(place_append).empty();
                    $(place_append).append(data.name_new);
                    $(src_img).attr('src', data.path_name_new);
                    $(thumbnail_url).val(data.path_name_new);
                } else {
                    if (data.status == 'error') {
                        $(place_append).empty();
                        $(place_append).append(data.name_old);
                    } else {
                        alert(data.content_error);
                    }
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //==========================
    // Show img into detail img
    //==========================

    function show_img_to_detail(src_img, src_img_show) {
        $(src_img_show).attr('src', src_img);
    }

    //====================
    // Delete permanently
    //====================

    function delete_permanently(base_URL, data_id, unlink, status, action, URL_load_num_status, pagination_of, URL_pagination) {
        if (unlink == true) {
            unlink = 1
        } else {
            unlink = -1
        }
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                action: action,
                data_id: data_id,
                unlink: unlink
            },
            dataType: "json",
            success: function (data) {
                console.log(data);
                if (data.status == "success") {
                    if (status == null) {
                        status = 'all';
                    } else {
                        status = status;
                    }
                    init(status, pagination_of, URL_pagination);
                    load_num_status(URL_load_num_status);
                } else {
                    alert('X??a kh??ng th??nh c??ng');
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //============
    // Goto trash
    //============
    function goto_trash(base_URL, data_id, status_old, status_tab_curr, action, URL_load_num_status, pagination_of, URL_pagination) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                action: action,
                data_id: data_id,
                status_old: status_old
            },
            dataType: "text",
            success: function (data) {
                if (status_tab_curr == null) {
                    status_tab_curr = 'all';
                } else {
                    status_tab_curr = status_tab_curr;
                }
                init(status_tab_curr, pagination_of, URL_pagination);
                load_num_status(URL_load_num_status);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        })
    }

    //=========
    // restore
    //=========
    function restore(base_URL, data_id, status_tab_curr, action, URL_load_num_status, pagination_of, URL_pagination) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                data_id: data_id,
                action: action
            },
            dataType: "text",
            success: function (data) {
                if (status_tab_curr == null) {
                    status_tab_curr = 'all';
                } else {
                    status_tab_curr = status_tab_curr;
                }
                init(status_tab_curr, pagination_of, URL_pagination);
                load_num_status(URL_load_num_status);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //=======================
    // Load action by status
    //=======================

    function load_action_by_status(status) {
        let html_action_status;
        if (status == 'all') {
            html_action_status = " <option value=''>T??c v???</option>\
            <option value='publish'>Ho???t ?????ng</option>\
            <option value='pending'>Ch??? x??t duy???t</option>\
            <option value='delete'>X??a v??nh vi???n</option>\
            <option value='trash'>B??? v??o th??ng r??c</option>";
        } else if (status == 'publish') {
            html_action_status = " <option value=''>T??c v???</option>\
            <option value='pending'>Ch??? x??t duy???t</option>\
            <option value='delete'>X??a v??nh vi???n</option>\
            <option value='trash'>B??? v??o th??ng r??c</option>";
        } else if (status == 'pending') {
            html_action_status = " <option value=''>T??c v???</option>\
            <option value='publish'>Ho???t ?????ng</option>\
            <option value='delete'>X??a v??nh vi???n</option>\
            <option value='trash'>B??? v??o th??ng r??c</option>";
        } else {
            html_action_status = " <option value=''>T??c v???</option>\
            <option value='restore'>Kh??i ph???c</option>\
            <option value='delete'>X??a v??nh vi???n</option>";
        }

        action_option_status.children("form.form-action").children("select[name='actions']").empty();
        action_option_status.children("form.form-action").children("select[name='actions']").append(html_action_status);
    }

    //========================================================================
    // Function handling when emforcement action by status punlish and pending
    //========================================================================

    function handling_action_by_status(base_URL_change_status, action_status, status_current, list_checked, action, URL_load_num_status, pagination_of, URL_pagination) {
        $.ajax({
            url: base_URL_change_status,
            method: "POST",
            data: {
                action: action,
                list_checked: list_checked,
                action_status: action_status
            },
            dataType: "text",
            success: function (data) {
                init(status_current, pagination_of, URL_pagination);
                load_num_status(URL_load_num_status);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //========
    // Search 
    //========

    function search(pagination_of, search_bar_of, base_URL, q, option_search, tbl_search, status_curr) {
        $.ajax({
            url: base_URL + "&type=get_total_page",
            method: "GET",
            data: {
                q: q,
                option_search: option_search,
                tbl_search: tbl_search,
                num_per_page: pagination_of.num_per_page,
                status_curr: status_curr
            },
            dataType: 'json',
            success: function (data) {
                console.log(data);
                pagination_of.total_page = parseInt(data.total_page);
                pagination_of.current_page = 1;
                let modules = pagination_of;
                load_btn_pagination(pagination_of.total_page, modules);
                load_data_page_search(pagination_of, search_bar_of, q, option_search, search_bar_of.base_URL_load_data, pagination_of.current_page, status_curr);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //============================
    // Load data of result search
    //============================

    function load_data_page_search(pagination_of, search_bar_of, q, option_search, base_URL_load_data, current_page, status_curr) {
        console.log(base_URL_load_data);
        $.ajax({
            url: base_URL_load_data + "&type=load_data",
            method: "POST",
            data: {
                q: q,
                option_search: option_search,
                current_page: current_page,
                num_per_page: pagination_of.num_per_page,
                status_curr: status_curr
            },
            dataType: "text",
            success: function (data) {
                search_bar_of.q = q;
                search_bar_of.option_search = option_search;
                loading(place_append_table);
                setTimeout(function () {
                    place_append_table.empty();
                    place_append_table.append(data);
                }, 400)
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //=============================
    // Load data of history search
    //=============================

    function append_data_history(base_URL, place_append_history) {
        $.ajax({
            url: base_URL,
            method: "POST",
            dataType: "text",
            success: function (data) {
                $(place_append_history).empty();
                $(place_append_history).append(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //=======================
    // Delete history search
    //=======================

    function delete_search_history(history_search_of, search_bar_of, base_URL_delete, data_id) {
        $.ajax({
            url: base_URL_delete,
            method: "POST",
            data: {
                data_id: data_id
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    append_data_history(history_search_of.base_URL, history_search_of.place_append_history);
                    $(search_bar_of.input_search).focus();
                } else {
                    alert("T??c v??? x??a kh??ng th??nh c??ng");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //======================
    // Search history search
    //======================

    function search_history(base_URL_search_history, key_text, option_search, tbl_search, place_append_history) {
        $.ajax({
            url: base_URL_search_history,
            method: "POST",
            data: {
                key_text: key_text,
                option_search: option_search,
                tbl_search: tbl_search
            },
            dataType: "text",
            success: function (data) {
                $(place_append_history).empty();
                $(place_append_history).append(data);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        })
    }


    //=============
    // Update name 
    //=============

    function update_name(name_new, current_name, data_id, base_URL, place_append_name, place_append_notifi, btn_change_name) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                name_new: name_new,
                current_name: current_name,
                data_id: data_id
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    // append notification
                    notifi_process(data.notifi, place_append_notifi, data.status);
                    // append name new
                    $(place_append_name).empty();
                    $(place_append_name).text(data.name_new);
                } else {
                    notifi_process(data.notifi, place_append_notifi, data.status);
                    // append name old
                    $(place_append_name).empty();
                    $(place_append_name).text(data.name_old);
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    //======================
    // Notification process
    //======================
    function notifi_process(text_notifi, place_append_notifi, status) {
        let html_notifi = " <div class='d-flex justify-content-between position-relative'>\
                                <span class='close'></span>\
                                <span class='icon mr-1'><i class='fa fa-check' aria-hidden='true'></i></span>\
                                <span class='text-notifi' data-notifi=''></span>\
                            </div>";
        if (status == 'success') {
            $(place_append_notifi).removeClass('error');
            $(place_append_notifi).addClass('success');
        } else {
            $(place_append_notifi).addClass('error');
            $(place_append_notifi).removeClass('success');
        }
        $(place_append_notifi).empty();
        $(place_append_notifi).append(html_notifi);
        $(place_append_notifi).addClass('show');
        $(place_append_notifi).find('span.text-notifi').attr('data-notifi', text_notifi);
        if (status == "success") {
            setTimeout(function () {
                $(place_append_notifi).removeClass("show");
            }, 3000);
            setTimeout(function () {
                $(place_append_notifi).empty();
            }, 3100);
        }
    }

    // ===============
    // Handing loading
    // ===============

    function loading(place_append_load) {
        let html_loading = "<div class='lds-ring'><div></div><div></div><div></div><div></div></div>";
        place_append_load.empty();
        place_append_load.append(html_loading);
    }


    // ===================
    // Load data category
    // ===================

    function load_data_category(base_URL, id_category, place_append) {
        $.ajax({
            url: base_URL + "&type=get_name_category",
            method: "POST",
            data: {
                id_category: id_category
            },
            dataType: "json",
            success: function (data) {
                place_append.empty();
                place_append.append(data.name_post_cat);
                place_append.attr('data-id_product_cat', id_category);
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // ===================
    // Save data category
    // ===================

    function save_category(base_URL, id_trademark, data_id_new, place_append_notifi) {
        $.ajax({
            url: base_URL + "&type=save_category",
            method: "POST",
            data: {
                id_trademark: id_trademark,
                data_id_new: data_id_new
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    notifi_process(data.notifi, place_append_notifi, "success");
                } else {
                    notifi_process(data.notifi, place_append_notifi, "error");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // ===============================
    // ACTION IMG RELATIVE IMG PRODUCT
    // ===============================

    // show more relative img product
    function click_show_more_relative_img_product(num_img) {
        $(upload_multi_img_product.place_append).delegate(upload_multi_img_product.btn_see_more, 'click', function () {
            for (let i = upload_multi_img_product.num_img; i <= num_img; i++) {
                $(upload_multi_img_product.place_append).find('li:eq(' + (i) + ')').slideDown(300);
            }
            $(upload_multi_img_product.place_append).find('li.see-more').remove();
            $(upload_multi_img_product.place_append).find('li:eq(' + (num_img - 1) + ')').after("<li class='hide-more'><a href='' class='hide-more' data-action='hide_img_relative'>???n b???t</a></li>");
            click_hide_more_relative_img_product(num_img);
            event.preventDefault();
        });
    }

    // x??? l?? click hide more img product
    function click_hide_more_relative_img_product(num_img) {
        $(upload_multi_img_product.place_append).delegate(upload_multi_img_product.btn_hide_more, 'click', function () {
            for (let i = 6; i <= num_img; i++) {
                $(upload_multi_img_product.place_append).find('li:eq(' + (i) + ')').slideUp(400);
            }
            $(upload_multi_img_product.place_append).find('li.hide-more').remove();
            $(upload_multi_img_product.place_append).find('li.see-more').remove();
            $(upload_multi_img_product.place_append).find('li:eq(' + (upload_multi_img_product.num_img - 1) + ')').after("<li class='see-more'><a href='' class='see-more' data-action='show_img_relative'>Xem th??m</a></li>");
            event.preventDefault();
        });
    }

    // X??? l?? hi???n modal updata ?????i t??n file img product
    function change_name_file_img_relative_item_product() {
        $(upload_multi_img_product.place_append).delegate(upload_multi_img_product.btn_rename, 'click', function () {
            console.log('rename relative file img');
            $(upload_multi_img_product.btn_rename).parents('li').children('.modal_rename').remove();
            $(this).parents('li').prepend(modal_change_name());
            remove_modal_change_name();
            event.preventDefault();
        });
    }
    // x??? l?? l???y t??n c?? v?? t??n m???i c???a file ???nh ????? chu???n b??? cho vi???n update
    function get_name_old_and_new() {
        $(upload_multi_img_product.place_append).delegate(upload_multi_img_product.btn_update, 'click', function () {
            let name_curr = $(this).parents('li').find(upload_multi_img_product.btn_rename).attr('title');
            name_curr = name_curr.split(' ').pop();

            let name_new = $(this).parents('.modal_content').find("input[name='name_file_img_curr']").val();
            if (name_new.length == 0) {
                alert('Vui l??ng nh???p m???t t??n m???i cho file ???nh tr?????c khi update');
            } else {
                if (name_curr != name_new) {
                    let exten_file = $(this).parents('li').find(upload_multi_img_product.btn_rename).attr('data-extension');
                    let base_URL = upload_multi_img_product.base_URL_action;
                    let place_append_notifi = $(upload_multi_img_product.notification);
                    let index_img = $(this).parents('li').index();
                    let place_append_path_img = $(upload_multi_img_product.place_append).find("li:eq(" + (index_img) + ")");
                    rename_img(name_curr, name_new, base_URL, exten_file, place_append_notifi, place_append_path_img);
                } else {
                    alert('B???n ???? nh???p t??n c??');
                }
            }
            event.preventDefault();
        });
    }

    // x??? d???ng ajax ????? thay ?????i t??n file v?? tr??? d??? t??n file ???nh m???i v???
    function rename_img(name_curr, name_new, base_URL, exten_file, place_append_notifi, place_append_path_img) {
        $.ajax({
            url: base_URL += "&type=update",
            method: "POST",
            data: {
                name_curr: name_curr,
                name_new: name_new,
                exten_file: exten_file
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    notifi_process("Thay ?????i th??nh c??ng", place_append_notifi, "success");
                    place_append_path_img.find('span.thumb-img').children('img').attr('src', data.path_img);
                    place_append_path_img.find('span.thumb-img').children("input.relative-img[type='hidden']").val(data.path_img);
                } else {
                    notifi_process("Thay ?????i kh??ng th??nh c??ng", place_append_notifi, "error");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // x??? l?? x??a m???t ph???n c???a file img product
    function delete_file_img_relative_item_product() {
        $(upload_multi_img_product.place_append).delegate(upload_multi_img_product.btn_delete, 'click', function () {
            console.log('delete relative file img');
            let select_again = confirm("C?? ph???i b???n ??ang mu???n x??a file n??y ?");
            if (select_again) {
                let path_img_delete = $(this).parents('li').find('span.thumb-img').children('img').attr('src');
                let base_URL = upload_multi_img_product.base_URL_action;
                let place_append_notifi = $(upload_multi_img_product.notification);
                let index_img = $(this).parents('li').index();
                let place_remove_path_img = $(upload_multi_img_product.place_append).find("li:eq(" + (index_img) + ")");
                delete_img(path_img_delete, base_URL, place_append_notifi, place_remove_path_img);
            }
            event.preventDefault();
        });
    }

    // x??? d???ng ajax ????? x??a ??i file ???nh ???????c ch???n
    function delete_img(path_img_delete, base_URL, place_append_notifi, place_remove_path_img) {
        $.ajax({
            url: base_URL + "&type=delete",
            method: "POST",
            data: {
                path_img_delete: path_img_delete
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    place_remove_path_img.remove();
                    notifi_process("B???n v???a x??a th??nh c??ng m???t file ???nh", place_append_notifi, "success");
                } else {
                    notifi_process("T??c v??? x??a kh??ng th??nh c??ng", place_append_notifi, "error");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // X??a ??i modal change name img product
    function remove_modal_change_name() {
        $(upload_multi_img_product.modal_rename).delegate(upload_multi_img_product.btn_remove_modal, 'click', function () {
            $(this).parents(upload_multi_img_product.modal_rename).remove();
        });
    }

    // hi???n modal update t??n file ???nh
    function modal_change_name() {
        return "<div class='modal_rename position-absolute'>\
                    <div class='dialog_modal position-relative'>\
                        <span class='close position-absolute'><i class='fa fa-times' aria-hidden='true'></i></span>\
                        <div class='modal_content'>\
                            <form method='POST'>\
                                <input type='text' name='name_file_img_curr' spellcheck='false' placeholder='Nh???p t??n m???i c???a file ???nh'>\
                                <button type='button' class='button' name='btn_rename' class='btn_rename'>Update</button>\
                            </form>\
                        </div>\
                    </div>\
                </div>"
    }

    // H??m n??y d??ng ????? ?????m c?? bao nhi??n ???nh li??n quan ?????n s???n ph???m
    function count_img_relative(class_father_name) {
        var num_img = 0
        $(class_father_name).each(function () {
            $(this).addClass('checked');
            show_box_info_img_products.total_img = num_img;
            num_img++;
        });
    }

    // function action delete or update name img
    function action_img_in_update(action, src_img, id_img, base_URL, place_delete) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                action: action,
                src_img: src_img,
                id_img: id_img,
            },
            dataType: "json",
            success: function (data) {
                if (action == 'delete') {
                    if (data.status == 'success') {
                        place_delete.remove();
                        call_img_first_relative_img();
                    }
                }
            },
            erorr: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }

    // function n??y d??ng ????? g???i ???nh avatar ?????u ti??n trong file
    function call_img_avatar() {
        let src = $("ul[data-type_image='avatar']").find('span.thumb-img').children('img').attr('src');
        $(".detail-img").find('span.thumb-img').children('img').attr('src', src);
    }

    // function n??y d??ng ????? g???i thaq ???nh relative ?????u ti??n trong file
    function call_img_first_relative_img() {
        let src = $(".list-img-relative-product li:eq(0)").find('span.thumb-img').children('img').attr('src');
        $(".detail-img").find('span.thumb-img').children('img').attr('src', src);
    }

    //H??m s??? l?? ?????i t??n c???a ???nh
    function rename_relative_img(base_URL, action, type_img, id_changes, name_curr, name_new, exten_file, place_append_name, place_append_path, place_append_path_detail) {
        $.ajax({
            url: base_URL,
            method: "POST",
            data: {
                action: action,
                type_img: type_img,
                id_changes: id_changes,
                name_curr: name_curr,
                exten_file: exten_file,
                name_new: name_new
            },
            dataType: "json",
            success: function (data) {
                if (data.status == 'success') {
                    place_append_name.text(data.name_file);
                    place_append_path.attr('src', data.path_file);
                    place_append_path_detail.attr('src', data.path_file);
                    notifi_process("B???n v???a ?????i th??nh c??ng m???t file ???nh", show_box_info_img_products.notification, "success");
                }
            },
            error: function (xhr, ajaxOptions, thrownError) {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }


    // Th??m th??ng tin chi ti???t v?? ch???nh s???a th??ng tin chi ti???t s???n ph???m
    var edit_info_detail_product = {
        "wrapper": "#update_info_post",
        "btn_add": "a.action-detail-item[data-action='add']",
        "btn_delete": "a.action-detail-item[data-action='delete']",
        "num_detail_item_curr": 1,
        "place_append_detail_item": ".detail-item"
    }

    // Th??m m???t ph???n t??? info detail product b???ng c??ch click v??o thaq n??y
    $(edit_info_detail_product.wrapper).delegate(edit_info_detail_product.btn_add, 'click', function () {
        let num_add = 1;
        var k = 0;
        $(edit_info_detail_product.place_append_detail_item + "[data-detail_item]").each(function () {
            k = $(this).attr('data-detail_item');
        });
        edit_info_detail_product.num_detail_item_curr = k;
        let place_append = $(edit_info_detail_product.place_append_detail_item + "[data-detail_item=" + (k) + "]");
        edit_info_detail_product.num_detail_item_curr++;
        add_detail_update_product(num_add, place_append);
        event.preventDefault();
    });

    // x??a m???t ph???n t??? info detail product b???ng c??ch click v??o th???ng n??y
    $(edit_info_detail_product.wrapper).delegate(edit_info_detail_product.btn_delete, 'click', function () {
        console.log('delete');
        let id_info_item = $(this).parents(edit_info_detail_product.place_append_detail_item + "[data-detail_item]").attr('data-detail_item');
        $(this).parents(edit_info_detail_product.place_append_detail_item + "[data-detail_item=" + (id_info_item) + "]").remove();
        var k = 0;
        $(edit_info_detail_product.place_append_detail_item + "[data-detail_item]").each(function () {
            k = $(this).attr('data-detail_item');
        });
        edit_info_detail_product.num_detail_item_curr = k;
        event.preventDefault();
    });

    // th??m m???t ph???n t??? detail info item cho update product
    function add_detail_update_product(num_add, place_append) {
        let html_input_detail_item_product = "";
        html_input_detail_item_product += creat_input_detail_update_item_product(edit_info_detail_product.num_detail_item_curr);
        $(place_append).after(html_input_detail_item_product);
    }

    // function n??y gi??p sinh ra m???t ph???n t??? info detail item
    function creat_input_detail_update_item_product(detail_id) {
        return "<div class=\"detail-item\" data-detail_item=\"" + (detail_id) + "\">\n" +
            "                                            <div class=\"row\">\n" +
            "                                                <div class=\"col-md-12\">\n" +
            "                                                    <div class=\"row\">\n" +
            "                                                        <div class=\"col-md-1\">\n" +
            "                                                            <span class=\"check-detail\"><i class=\"fa fa-check\" aria-hidden=\"true\"></i></span>\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"col-md-5\">\n" +
            "                                                            <input type=\"text\" name=\"name_detail[]\" class=\"form-control shadow-none\" placeholder=\"Nh???p t??n chi ti???t\">\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"col-md-4\">\n" +
            "                                                            <input type=\"text\" name=\"value_detail[]\" class=\"form-control shadow-none\" placeholder=\"Nh???p gi?? tr???\">\n" +
            "                                                        </div>\n" +
            "                                                        <div class=\"col-md-2\">\n" +
            "                                                            <a href=\"\" class=\"action-detail-item\" data-action=\"delete\">X??a</a>\n" +
            "                                                        </div>\n" +
            "                                                    </div>\n" +
            "                                                </div>\n" +
            "                                            </div>\n" +
            "                                        </div>"
    }




    // ===================
    // slider
    //===================
    // b???t s??? ki???n ????? ki???m tra s??? th??? t??? c???a slider ???? ???? t???n t???i ch??a
    var slider = {
        "wrapper": "#wp-box-content",
        "input_key_up": "input#numerical_order[name='numerical_order']",
        "place_notification": "#notification-numerical_order",
        "base_URL": "?mod=sliders&action=check_numerical_order_exists"
    }
    $(slider.wrapper).delegate(slider.input_key_up, 'keyup', function () {
        let numerical_order = $(this).val();
        if (numerical_order.length != 0) {
            let patt = /[0-9]/;
            if (patt.test(numerical_order) == false) {
                let notifi = "<span class='note'>(*) Sai ?????nh d???ng, h??? th???ng ch??? ch???p nh???n s??? v?? kh??ng bao g???m kho???ng tr???ng</span>"
                $(slider.place_notification).empty();
                $(slider.place_notification).append(notifi);
            } else {
                if (parseInt(numerical_order) <= 100) {
                    if (parseInt(numerical_order) >= 1) {
                        $.ajax({
                            url: slider.base_URL,
                            method: "POST",
                            data: {
                                numerical_order: parseInt(numerical_order)
                            },
                            dataType: "json",
                            success: function (data) {
                                if (data.status == true) {
                                    console.log(data.slider_item.name_slider);
                                    let notifi = "<span class='note'>(*) S??? th??? t??? ???? t???n t???i ( <a class='info_exists'>xem</a> )</span>";
                                    let html_item = '   <div class="tootip position-absolute">\
                                                            <a href="" class="info" title="T??n slider" style="font-size: .8rem;font-style: italic;">' + (data.slider_item.name_slider) + '<span title="ID slider"> ( ' + (data.slider_item.id_slider) + ' ) </span></a>\
                                                        </div>'
                                    $(slider.place_notification).empty();
                                    $(slider.place_notification).append(notifi);
                                    $(slider.place_notification).find('.note').after(html_item);
                                    $('.tootip').css({
                                        "top": "-27px",
                                        "background-color": "#fff",
                                        "left": "76px",
                                        "box-shadow": "0 0 5px",
                                        "padding": "0px 10px",
                                        "border-radius": "5px",
                                        "display": "none"
                                    });
                                    $(".info_exists").css({
                                        "cursor": "pointer",
                                        "color": "#00aaff"
                                    });
                                    $(".info_exists").hover(function () {
                                        $('.tootip').stop().fadeIn();
                                    }, function () {
                                        $('.tootip').stop().fadeOut();
                                    });
                                    console.log(data);
                                } else {
                                    $(slider.place_notification).empty();
                                }
                            },
                            error: function (xhr, ajaxOptions, thrownError) {
                                console.log(xhr.status);
                                console.log(thrownError);
                            }
                        });
                    } else {
                        let notifi = "<span class='note'>(*) S??? th??? t??? ph???i l???n h??n ho???c b???ng 1</span>"
                        $(slider.place_notification).empty();
                        $(slider.place_notification).append(notifi);
                    }
                } else {
                    let notifi = "<span class='note'>(*) S??? slider ???? v?????c m???c 100 slider</span>"
                    $(slider.place_notification).empty();
                    $(slider.place_notification).append(notifi);
                }
            }
        } else {
            $(slider.place_notification).empty();
        }
    });


    // update total info slider modal
    $(update_info_slider.tbl_update).delegate(update_info_slider.btn_change,'click',function() {
        let id_slider   = $(update_info_slider.id_slider_update).val();
        let name_slider = $(update_info_slider.name_slider_update).val();
        let link_slider = $(update_info_slider.link_slider_update).val();
        let numerical_order = $(update_info_slider.numerical_order_update).val();

        if( name_slider == update_info_slider.name_slider_old && link_slider == update_info_slider.link_slider_old && numerical_order == update_info_slider.numerical_order_old ) {
            notifi_process("B???n ch??a nh???p th??ng tin m???i n??o",update_info_slider.notification,"error");
        } else {
            let error = new Array();
            // check name slider
            if ( name_slider.length == 0 ) {
                let name_slider = "Vui l??ng nh???p t??n slider";
                error.push(name_slider);
            } else {
                __name_slider = name_slider;
            }
            // check numerical order
            if ( numerical_order.length == 0 ) {
                let numerical_order_error = "Vui l??ng nh???p s??? th??? t???";
                error.push(numerical_order_error);
            } else {
                let patt = /[0-9]/;
                if ( patt.test(numerical_order) == false ) {
                    let numerical_order = "S??? th??? t??? kh??ng ????ng ?????nh d???ng, h??? th???ng ch??? ch???p nh???n s??? t??? 0 - 9";
                    error.push(numerical_order);
                } else {
                    __numerical_order = parseInt(numerical_order);
                }
            }
            if ( error.length == 0 ) {
                $.ajax({
                    url : update_info_slider.base_URL,
                    method : "POST",
                    data : {
                        id_slider : id_slider,
                        name_slider : __name_slider,
                        link_slider : link_slider,
                        numerical_order : __numerical_order
                    },
                    dataType : "json",
                    beforeSend : () => {
                        $(this).empty();
                        $(this).append('<div class="lds-dual-ring"></div>');
                    },
                    success : function (data) {
                        if(data.status == 'success') {
                            init(pagination_slider.status, pagination_slider, pagination_slider.base_URL);
                            $(update_info_slider.btn_change).empty();
                            $(update_info_slider.btn_change).append('C???p nh???t');
                            $(update_info_slider.tbl_update).find('button[data-dismiss]').click();
                        } else {
                            notifi_process("C???p nh???t kh??ng th??nh c??ng",update_info_slider.notification,"error");
                        }
                    },
                    error : function(xhr, ajaxOptions, thrownError) {
                        console.log(xhr.status);
                        console.log(thrownError);
                    }
                });
            } else {
                for( let i = 0 ; i < error.length ; i++ ) {
                    notifi_process("C???p nh???t kh??ng th??nh c??ng",update_info_slider.notification,"error");
                }
            }
        }
        event.preventDefault();
    });



    // advt
    $(update_info_advt.wrapper).delegate(update_info_advt.btn_update,'click',function () {
        let id_advt = $(this).parents('tr').find(update_info_advt.id_advt).attr('data-advt_id');
        let link_url = $(this).parents('tr').find(update_info_advt.link_url).text();
        let start_time = $(this).parents('tr').find(update_info_advt.start_time).attr('data-start_time');
        let deadline = $(this).parents('tr').find(update_info_advt.deadline).attr('data-deadline');
        let img_url = $(this).parents('tr').find(update_info_advt.img_url).attr('src');
        $("#modal_update_advt").find("input[name='id_advt']").val(id_advt);
        $("#modal_update_advt").find("input[name='link_url']").val(link_url);
        $("#modal_update_advt").find("input[name='start_time']").val(start_time);
        $("#modal_update_advt").find("input[name='deadline']").val(deadline);
        $("#modal_update_advt").find(".thumb-img").children('img').attr('src',img_url);
        event.preventDefault();
    });
    
    // click close modal update advt
    $(update_info_advt.tbl_update).delegate(update_info_advt.btn_close_modal_img,"click",function() {
        let action_curr = $("button[name='btn_update_img']").attr('data-action');
        if (action_curr == 'update') {
            if (confirm("B??? th???c thi update ???nh...?")) {
                close_modal_advt();
                let src_img_curr = $(update_info_advt.tbl_update).find('.img_wrapper').children('span.thumb-img').children('img').attr('src');
                console.log(src_img_curr);
                $(update_info_advt.tbl_update).find('.thumb_img_modal').children("span.thumb-img").children('img').attr('src',src_img_curr);
                $(update_info_advt.modal_img).find("input[name='img_url_update']").val('');
                $(update_info_advt.btn_save).text('Duy???t ???nh');
                $(update_info_advt.btn_save).attr('data-action','browser');
            }
        } else {
            close_modal_advt();
        }
    });

    // click open modal update advt
    $(update_info_advt.tbl_update).delegate(update_info_advt.btn_open_modal_img,"click",function() {
        open_modal_advt();
        event.preventDefault();
    });
    
    $(update_info_advt.tbl_update).delegate(update_info_advt.btn_change,'click',function () {
        let id_advt = $("#modal_update_advt").find("input[name='id_advt']").val();
        let link_url = $("#modal_update_advt").find("input[name='link_url']").val();
        let start_time = $("#modal_update_advt").find("input[name='start_time']").val();
        let deadline = $("#modal_update_advt").find("input[name='deadline']").val();
        if( id_advt.length == 0 || link_url.length == 0 || start_time.length == 0 || deadline.length ==0 ) {
            notifi_process("Kh??ng ???????c b??? tr???ng b???t c??? d??? li???u n??o",update_info_advt.notification,'error');
        } else {
            $.ajax({
                url : update_info_advt.base_URL,
                method : "POST",
                data : {
                    id_advt : id_advt,
                    link_url : link_url,
                    start_time : start_time,
                    deadline : deadline
                },
                dataType : "json",
                beforeSend : () => {
                    console.log('Updating...');
                },
                success : (data) => {
                    console.log(data);
                    if(data.status == "success") {
                        notifi_process("Update th??nh c??ng",update_info_advt.notification,'success');
                        init(pagination_advt.status, pagination_advt, pagination_advt.base_URL);
                    } else {
                        notifi_process("Update kh??ng th??nh c??ng",update_info_advt.notification,'error');
                    }
                },
                error : (xhr, ajaxOptions, thrownError) => {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        }
        event.preventDefault();
    });

    function close_modal_advt() {
        $(update_info_advt.modal_img).stop().fadeOut(300);
    }
    function open_modal_advt() {
        $(update_info_advt.modal_img).stop().fadeIn(300);
    }

    // change img advt
    $(update_info_advt.tbl_update).delegate(update_info_advt.btn_browser,'click',function() {
        let inputFile = $(this).parents(update_info_advt.modal_img).find("input[name='img_url_update']");
        let fileToUpload = inputFile[0].files[0];
        if(fileToUpload != null) {
            let exten_file = fileToUpload.name.split('.').pop().toLowerCase();
            let exten_file_allow = Array('jpg','png','jpeg','gif');
            if( $.inArray(exten_file,exten_file_allow) == -1 ) {
                notifi_process("H??? th???ng kh??ng h??? tr??? file ???nh n??y ch??? ch???p nh??n ( .png, .jpg, .jpeg, .gif )",update_info_advt.notification,'error');
            } else {
                let oFReader = new FileReader();
                oFReader.readAsDataURL(fileToUpload);
                let fSize = fileToUpload.size;
                if(fSize > 5242880) {
                    notifi_process("Dung l?????ng file kh??ng ???????c v?????c qu?? 5MB",update_info_advt.notification,'error');
                } else {
                    let formData = new FormData();
                    formData.append('file',fileToUpload);
                    $.ajax({
                        url : update_info_advt.base_change_img,
                        method : "POST",
                        data : formData,
                        contentType : false,
                        processData : false,
                        dataType: "json",
                        beforeSend : () => {
                            notifi_process("??ang update ...",update_info_advt.notification,'success');
                        },
                        success: (data) => {
                            console.log(data);
                            console.log(data.status);
                            if(data.status == "success") {
                                $(".thumb_img_modal").find('img').attr('src',data.path_img);
                                $(update_info_advt.btn_browser).text('C???p nh???t');
                                $(update_info_advt.btn_browser).attr('data-action','update');
                            } else {
                                notifi_process("C???p nh???t file ???nh kh??ng th??nh c??ng",update_info_advt.notification,'error');
                            }
                        },
                        error: (xhr, ajaxOptions, thrownError) => {
                            console.log(xhr.status);
                            console.log(thrownError);
                        }
                    });
                }
            }
        } else {
            notifi_process("Vui l??ng ch???n ??t nh???t m???t file ???nh",update_info_advt.notification,'error');
        }
    });

    $(update_info_advt.tbl_update).delegate(update_info_advt.btn_save,'click',function() {
        let src_img_curr = $(update_info_advt.tbl_update).find('.img_wrapper').children('span.thumb-img').children('img').attr('src');
        let id_advt = $(update_info_advt.tbl_update).find("input[name='id_advt']").val();
        let src_img_new = $(update_info_advt.tbl_update).find('.thumb_img_modal').children('span.thumb-img').children('img').attr('src');
        let allow_delete_img_old;
        let select_delete_img_old = confirm("B???n c?? mu???n x??a ??i file ???nh c?? trong th?? m???c");
        if(select_delete_img_old) {
            allow_delete_img_old = true;
        } else {
            allow_delete_img_old = false;
        }
        $.ajax({
            url : update_info_advt.base_update_img,
            method : "POST",
            data : {
                src_img_curr: src_img_curr,
                data_id: id_advt,
                src_img_new: src_img_new,
                allow_delete_img_old: allow_delete_img_old
            },
            dataType : "json",
            success : (data) => {
                console.log(data);
                if(data.status == "success") {
                    close_modal_advt();
                    $(update_info_advt.tbl_update).find('.img_wrapper').children('span.thumb-img').children('img').attr('src',data.path_img);
                    $(update_info_advt.modal_img).find("input[name='img_url_update']").val('');
                    $(update_info_advt.btn_save).text('Duy???t ???nh');
                    $(update_info_advt.btn_save).attr('data-action','browser');
                    init(pagination_advt.status, pagination_advt, pagination_advt.base_URL);
                    notifi_process("C???p nh???t th??nh c??ng",update_info_advt.notification,'success');
                } else {
                    notifi_process("C???p nh???t file ???nh kh??ng th??nh c??ng",update_info_advt.notification,'error');
                }
            },
            error : (xhr,ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    });


    // load location
    $("#form-add-location").delegate("select[name='type_location']",'change',function () {
        let name_location = $("#name_location[name='name_location']").val();
        if( name_location.length == 0 ) {
            $("#name_location[name='name_location']").css('border','1px solid #f00');
            $("#name_location[name='name_location']").parents('.form-group').append("<span class='error'>(*) Vui l??ng ch???n m???t ?????a ??i???m</span>");
        } else {
            $("#name_location[name='name_location']").css('border-color',' #ced4da');
            $("#name_location[name='name_location']").parents('.form-group').find(".error").remove();
            let type_location = parseInt($(this).val());
            if(type_location == 1) {
                console.log('th???ng n??y l?? c???p cao nh???t r???i kh??ng load n???a nh??');
            } else if(type_location == 2) {
                load_province(".form-group.province");
                $(".form-group.district").empty();
            } else {
                console.log('load distrist');
                load_province(".form-group.province");
                load_district(".form-group.district");
            }
        }
    });

    //
    var search_key_world_location = {
        "q_province" : "",
        "q_distrist" : ""
    }
    $("#form-add-location").delegate('#type_province','keyup',function () {
        let q = $(this).val();
        if(q.length > 5 ) {
            $.ajax({
                url : "?mod=location&action=search_key_word_location&type=province",
                method : "POST",
                data : {q : q},
                dataType : "json",
                success : (data) => {
                    console.log(data);
                    search_key_world_location.q_province = data.q;
                    $("[name='parent_id_province'").val(data.id);
                    let type_location = $("#type_location").val();
                    console.log(type_location);
                    if(type_location == 3) {
                        load_distrist_by_province(data.id, ".form-group.district");
                    }
                },
                error : (xhr, ajaxOptions, thrownError) => {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            });
        }
    });

    $("#form-add-location").delegate('#type_province','blur',function () {
        $("#type_province").val(search_key_world_location.q_province);
    });

    function load_province(place_append) {
        console.log('load province');
        $.ajax({
            url : "?mod=location&action=load_province",
            method : "POST",
            beforeSend : () => {
                console.log('Loading province ...');
            },
            dataType : "json",
            success : (data) => {
                console.log('load success');
                let _html  = '<label for="type_province">Ch???n T???nh / Th??nh ph???</label>';
                    _html += '<input type="hidden" name="parent_id_province" value="">';
                    _html += '<input type="text" autocomplete="off" name="province" id="type_province" spellcheck="false" class="form-control shadow-none" list="province_modal" placeholder="Ch???n m???t T???nh / Th??nh ph???">';
                    _html += '<datalist id="province_modal">';
                    for(let i = 0 ; i<data.length ; i++) {
                        _html += '<option data-id="'+(data[i].id_location)+'" value="'+(data[i].name_location)+'"></option>';
                    }
                    _html += '</datalist>';
                    $(place_append).empty();
                    $(place_append).append(_html);
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.start_time);
                console.log(thrownError);
            }
        });
    }

    function load_district(place_append) {
        console.log('load district');
        $.ajax({
            url : "?mod=location&action=load_district&by=distrist",
            method : "POST",
            beforeSend : () => {
                console.log('load distrist');
            },
            dataType : "json",
            success : (data) => {
                console.log(data);
                load_data_distrist(data,place_append);
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        })
    }

    function load_data_distrist(data,place_append) {
        let _html  = '<label for="type_district">Ch???n Qu???n / Huy???n</label>';
                    _html += '<input type="hidden" name="parent_id_district" value="">'; 
                    _html += '<input type="text" autocomplete="off" name="district" id="type_district" spellcheck="false" class="form-control shadow-none" list="district_modal" placeholder="Qu???n / Huy???n">';
                    _html += '<datalist id="district_modal">';
                    for(let i=0 ; i < data.length ; i++) {
                        _html += '<option data-id="'+(data[i].id_location)+'" value="'+(data[i].name_location)+'"></option>';
                    }
                    _html += '</datalist>';
                    $(place_append).empty();
                    $(place_append).append(_html);
    }

    function load_distrist_by_province(id, place_append) {
        console.log('ok r???i ???? ');
        $.ajax({
            url : "?mod=location&action=load_district&by=province",
            method : "POST",
            data : {
                id : id
            },
            beforeSend : () => {
                console.log('load distrist by province');
            },
            dataType : "json",
            success : (data) => {
                console.log(data);
                load_data_distrist(data,place_append);
            },
            error : (xhr, ajaxOptions, thrownError) => {
                console.log(xhr.status);
                console.log(thrownError);
            }
        });
    }
    $("#form-add-location").delegate("#type_district",'keyup',function () {
        let q = $(this).val();
        console.log(q);
        if(q.length > 5) {
            $.ajax({
                url : "?mod=location&action=search_key_word_location&type=distrist",
                method : "POST",
                data : { q : q }, 
                beforeSend : () => {
                    console.log('search distrist location');
                },
                dataType : "json",
                success : (data) => {
                    console.log(data);
                    search_key_world_location.q_distrist = data.q;
                    $("[name='parent_id_district'").val(data.id);
                    $.ajax({
                        url : "?mod=location&action=load_province_item",
                        method : "POST",
                        data : { id : data.id },
                        dataType : "json",
                        success : (data) => {
                            console.log(data);
                            search_key_world_location.q_province = data.name;
                            $("[name='parent_id_province'").val(data.id);
                            $("#type_province").val(data.name);
                        },
                        error : (xhr, ajaxOptions,thrownError) => {
                            cnsole.log(xhr.status);
                            console.log(thrownError);
                        }
                    });
                },
                error : (xhr, ajaxOptions, thrownError) => {
                    console.log(xhr.status);
                    console.log(thrownError);
                }
            })
        }
    });
    $("#form-add-location").delegate("#type_district",'blur',function () {
        let q = $("#type_district").val();
        if( q.length != 0 ) {
            $(this).val(q);
        } else {
            $(this).val(search_key_world_location.q_distrist);
        }
    });
    
});