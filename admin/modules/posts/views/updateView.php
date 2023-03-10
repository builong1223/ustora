<?php get_header() ?>
<div id="notifi-box" data-notifi="<?php if ($process == "success") {
                                        echo "success";
                                    } ?>">
    <?php if (!empty($notification)) {
        echo $notification;
    } else {
        echo "";
    } ?>
</div>

<div id="main-content-wp" class="update-post">
    <div class="wrap clearfix">
        <?php get_sidebar() ?>
    </div>
    <?php
    if (!empty($post_item)) {
    ?>
        <div id="content" class="fl-right">
            <div class="container-fluid">
                <div id="wp-box-content" class="row changpass">
                    <div class="col-md-5 mx-auto" id="changepass">
                        <div class="modal fade" id="update_info_post" style="display: block;">
                            <!-- -------- modal child ---------  -->
                            <div class="modal fade" id="open_modal_detail_img">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content" style="background-color: rgba(0,0,0,0.8);">
                                        <div class="modal-body">
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="row">
                                                        <div class="col-md-7">
                                                            <div class="detail-img">
                                                                <span class="thumb-img">
                                                                    <img src="<?php echo $post_item['post_img'] ?>" alt="">
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div class="col-md-5">
                                                            <nav id="tab-option">
                                                                <div class='nav nav-tabs'>
                                                                    <a href="#option-1" class="nav-item nav-link active" data-toggle="tab">Th??ng tin</a>
                                                                    <a href="#option-2" class="nav-item nav-link" data-toggle="tab">List ???nh</a>
                                                                </div>
                                                            </nav>
                                                            <div class="tab-content">
                                                                <div class="tab-pane active" id="option-1">
                                                                    <div class="top-option">
                                                                        <h4 class="title-option">Th??ng tin ???nh</h4>
                                                                    </div>
                                                                    <div class="content-option">
                                                                        <ul class="list-info">
                                                                            <li>
                                                                                <span>T??n: </span>
                                                                                <?php
                                                                                $path_file = explode("/", $post_item['post_img']);
                                                                                $name = explode('.', $path_file[3]);
                                                                                ?>
                                                                                <span spellcheck="false" class="name-img" contenteditable="false" data-id_post="<?php echo $post_item['post_id'] ?>"><?php echo $name[0]; ?></span>
                                                                                <?php
                                                                                ?>
                                                                            </li>
                                                                            <li>
                                                                                <span>K??ch th?????c: </span>
                                                                                <?php
                                                                                $file_size = filesize($post_item['post_img']);
                                                                                $file_size = round($file_size / 1048576, 2) . " MB";
                                                                                ?>
                                                                                <span><?php echo $file_size ?></span>
                                                                                <?php
                                                                                ?>
                                                                            </li>
                                                                            <li>
                                                                                <span>Th?? m???c:</span>
                                                                                <?php
                                                                                $dir = "{$path_file[0]}/{$path_file[1]}/{$path_file[2]}/";
                                                                                ?>
                                                                                <span><?php echo $dir; ?></span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                                <div class="tab-pane" id="option-2">
                                                                    <div class="top-option">
                                                                        <h4 class="title-option">Danh s??ch ???nh</h4>
                                                                    </div>
                                                                    <div class="content-optiopn">
                                                                        <ul class="list-img">
                                                                            <li>
                                                                                <span class="thumb-img">
                                                                                    <img src="<?php echo $post_item['post_img'] ?>" alt="">
                                                                                </span>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- -----------------  -->
                            <div class="mx-auto modal-size">
                                <form class="modal-content overflow-auto" enctype="multipart/form-data" method="POST" id="content-update_info_post">
                                    <div class="modal-header position-relative">
                                        <div class="title">
                                            <h4 class="main-title">
                                                <span>C???p nh???t n???i dung b??i vi???t</span>
                                                <span class="fa fa-pencil"></span>
                                            </h4>
                                            <span class="sub-title">(*) T???t c??? m???i thay ?????i c???a b???n ?????u ???????c l??u l???i trong l???ch s???</span>
                                        </div>
                                        <?php
                                        if (@$process != "success") {
                                            echo form_error("process_error");
                                        } else {
                                            echo form_error("process_success");
                                        }
                                        ?>
                                        <a href="#" class="close d-block">
                                            <span class="fa fa-times"></span>
                                        </a>
                                    </div>
                                    <div class="modal-body">
                                        <div class="top-modal-body fixed d-flex justify-content-between mb-4">
                                            <div class="modal-item num_order">
                                                <h4 class="title">
                                                    <span class="fa fa-list-ol"></span>
                                                    <span>STT</span>
                                                </h4>
                                                <span class="sub-content"><?php echo $location ?></span>
                                            </div>
                                            <div class="modal-item code">
                                                <h4 class="title">
                                                    <span class="fa fa-codepen"></span>
                                                    <span>M?? s???</span>
                                                </h4>
                                                <span class="sub-content"><?php echo $post_item['post_id'] ?></span>
                                            </div>
                                            <div class="modal-item creator">
                                                <h4 class="title">
                                                    <span class="fa fa-user-plus"></span>
                                                    <span>Ng?????i t???o</span>
                                                </h4>
                                                <span class="sub-content"><?php echo $post_item['creator'] ?></span>
                                            </div>
                                            <div class="modal-item created_date">
                                                <h4 class="title">
                                                    <span class="fa fa-calendar"></span>
                                                    <span>Th???i gian</span>
                                                </h4>
                                                <span class="sub-content"><?php echo $post_item['created_date'] ?></span>
                                            </div>
                                        </div>
                                        <div class="bottom-modal-body position">
                                            <div class="form-group mx-2">
                                                <label for="post-title">Ti??u ????? b??i vi???t</label>
                                                <input type="text" name="post_title" id="post-title" class="form-control shadow-none" value="<?php echo $post_item['post_title'] ?>">
                                                <?php echo form_error("post_title") ?>
                                            </div>
                                            <div class="form-group mx-2">
                                                <label for="friendly-url">???????ng d???n th??n thi???n</label>
                                                <input type="text" name="friendly_url" id="friendly-url" class="form-control shadow-none" value="<?php echo $post_item['post_url'] ?>">
                                                <?php
                                                if (!empty(form_error("friendly_url"))) {
                                                    echo form_error("friendly_url");
                                                } else {
                                                ?>
                                                    <span class="note">(*) N???u kh??ng ch???n m???c ?????nh s??? l?? <strong>ti??u ????? b??i vi???t</strong></span>
                                                <?php
                                                }
                                                ?>
                                            </div>
                                            <div class="form-group mx-2">
                                                <label for="post_desc">M?? t??? ng???n b??i vi???t</label>
                                                <textarea name="post_desc" id="post_desc" rows="5" class="form-control shadow-none"><?php echo $post_item["post_desc"] ?></textarea>
                                                <?php echo form_error("post_desc") ?>
                                            </div>
                                            <div class="form-group mx-2" id="fine-uploader-manual-trigger">
                                                <label for="post-content">N???i dung b??i vi???t</label>
                                                <div id="post-content-append">
                                                    <textarea name="post_content" id="post-content" class="ckeditor" cols="30" style="height: 200px" rows="10"><?php echo $post_item['post_content'] ?></textarea>
                                                </div>
                                                <?php echo form_error("post_content") ?>
                                            </div>
                                            <div class="form-group mx-2">
                                                <label for="post_img">H??nh ???nh</label>
                                                <div class="uploadFile fa fa-caret-down d-flex justify-content-start mb-3">
                                                    <input type="hidden" id="thumbnail_url_update" name="thumbnail_url" value="<?php echo $post_item['post_img'] ?>">
                                                    <input type="file" name="post_img" class="btn rounded-0" id="post_img_update" value="">
                                                    <a class="shadow-none btn rounded-0 ml-2" name="btn-upload-thumb" value="Upload" id="btn-upload-thumb">Upload</a>
                                                </div>
                                                <div id="img-post-update">
                                                    <span class="thumb-img d-block position-relative">
                                                        <img id='path_img' src="<?php echo $post_item['post_img'] ?>" alt="">
                                                        <a href="#" title="Chi ti???t ???nh" class="open-modal-detail img position-absolute fa fa-eye" data-toggle="modal" data-target="#open_modal_detail_img"></a>
                                                    </span>
                                                </div>
                                                <?php echo form_error("post_img") ?>
                                            </div>
                                            <div class="form-group mx-2">
                                                <label for="status">Tr???ng th??i</label>
                                                <select name="status" id="status" class="form-control shadow-none">
                                                    <option value="">--Ch???n tr???ng th??i b??i vi???t--</option>
                                                    <option <?php if ($post_item['status'] == "publish") {
                                                                echo "selected";
                                                            } ?> value="publish">Ho???t ?????ng</option>
                                                    <option <?php if ($post_item['status'] == "pending") {
                                                                echo "selected";
                                                            } ?> value="pending">Ch??? x??t duy???t</option>
                                                </select>
                                                <span class="note">(*) N???u kh??ng ch???n m???c ?????nh s??? l?? tr???ng th??i <strong>Ch??? duy???t</strong></span>
                                            </div>
                                            <div class="form-group mx-2">
                                                <label for="parent-cat">Danh m???c</label>
                                                <select name="parent_cat" id="parent-cat" class="form-control shadow-none">
                                                    <?php
                                                    if (!empty($list_post_cat)) {
                                                    ?>
                                                        <option value="">--Ch???n danh m???c b??i vi???t--</option>
                                                        <?php
                                                        foreach ($list_post_cat as $item) {
                                                        ?>
                                                            <option <?php if ($post_item['post_cat_id'] == $item['id_postCat']) {
                                                                        echo "selected";
                                                                    } ?> value="<?php echo $item['id_postCat'] ?>"><?php echo $item['name_postCat'] ?></option>
                                                        <?php
                                                        }
                                                        ?>
                                                    <?php
                                                    } else {
                                                    ?>
                                                        <option value="">Hi???n t???i kh??ng c?? danh m???c n??o</option>
                                                    <?php
                                                    }
                                                    ?>
                                                </select>
                                                <?php echo form_error("parent_cat") ?>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="submit" name="update_info_post" class="btn shadow-none btn-block btn-update-info-post">c???p nh???t</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <input type="hidden" class="btn-show-update-post" data-toggle="modal" data-target="#update_info_post"></input>
                    </div>
                </div>
            </div>
        </div>
    <?php
    } else {
    ?>
        <div class="notifi_process mx-auto">
            <span class="thumb-img"><img src="public/images/notFoundIcon.png" class="img-fluid" alt=""></span>
            <p class="txt_notifi">Vui l??ng ch???n m???t b??i vi???t c??? th??? ..!</p>
            <div class="add">
                <a href="?mod=posts" class="link-add text-center d-block">Quay l???i t???i ????y.!</a>
            </div>
        </div>
    <?php
    }
    ?>
</div>
<?php get_footer() ?>