// $(function(){
    var mainMenuHtml =  '<li class="jsMenu pre_menu_item grid_item jslevel1">'+
                        '    <a href="javascript:void(0);" class="pre_menu_link" draggable="false">'+
                        '        <i class="icon_menu_dot js_icon_menu_dot dn" style="display: none;"></i>'+
                        '        <i class="icon20_common sort_gray"></i>'+
                        '        <span class="js_l1Title">菜单名称</span>'+
                        '    </a>'+
                        '    <div class="sub_pre_menu_box js_l2TitleBox" style="">'+
                        '        <ul class="sub_pre_menu_list">'+
                        '            <li class="js_addMenuBox">'+
                        '                <a href="javascript:void(0);" class="jsSubView js_addL2Btn" title="最多添加5个子菜单" draggable="false">'+
                        '                    <span class="sub_pre_menu_inner js_sub_pre_menu_inner"><i class="icon14_menu_add"></i></span>'+
                        '                </a>'+
                        '            </li>'+
                        '        </ul>'+
                        '        <i class="arrow arrow_out"></i>'+
                        '        <i class="arrow arrow_in"></i>'+
                        '    </div>'+
                        '</li>';

    var subMenuHtml =   '<li id="" class="jslevel2">'+
                        '    <a href="javascript:void(0);" class="jsSubView" draggable="false">'+
                        '        <span class="sub_pre_menu_inner js_sub_pre_menu_inner">'+
                        '            <i class="icon20_common sort_gray"></i>'+
                        '            <span class="js_l2Title">子菜单名称</span>'+
                        '        </span>'+
                        '    </a>'+
                        '</li>';

    //点击主菜单绑定
    function mainMenuClickBind() {
        $(".jsMenu.pre_menu_item>.pre_menu_link").unbind("click").bind("click", function(){
            $("#menuList li").removeClass("selected current");
            $(this).parent(".jsMenu.pre_menu_item").addClass("selected current");
            $("#menuList>li>div.sub_pre_menu_box").hide();
            $(this).siblings("div.sub_pre_menu_box").show();
        });
    }

    //添加主菜单绑定
    function mainMenuAddBind () {
        $(".pre_menu_link.js_addL1Btn").unbind("click").bind("click", function () {

            $("#menuList .js_addMenuBox.pre_menu_item").before(mainMenuHtml);

            if ($("#menuList li:last-child").hasClass("size1of1")) {
                // 无主菜单 -> 一个主菜单
                $("#menuList").removeClass("no_menu");
                $(".js_addMenuTips").hide();
                $("#menuList>li").removeClass("size1of1 size1of2 size1of3").addClass("size1of2");

            } else if ($("#menuList li:first-child").hasClass("size1of2")) {
                // 一个主菜单 -> 两个主菜单
                $("#menuList>li").removeClass("size1of1 size1of2 size1of3").addClass("size1of3");

            } else if ($("#menuList li:first-child").hasClass("size1of3")){
                // 两个主菜单 -> 三个主菜单
                $("#menuList>li").removeClass("size1of1 size1of2 size1of3").addClass("size1of3");
            }

            $("#menuList>li>div.sub_pre_menu_box").hide();
            $("#menuList li").removeClass("selected current");
            $("#menuList>li:nth-last-child(2)").addClass("selected current");
            $("#menuList>li:nth-last-child(2)>div.sub_pre_menu_box").show();
            mainMenuClickBind();
            subMenuAddBind();
        });

        validateSortBtn();
    }

    //点击子菜单绑定
    function subMenuClickBind() {
        $(".jslevel2>.jsSubView").unbind("click").bind("click", function(){
            $("#menuList li").removeClass("selected current");
            $(this).parent(".jslevel2").addClass("selected current");
        });
    }

    //添加子菜单绑定
    function subMenuAddBind () {
        $(".jsSubView.js_addL2Btn").unbind("click").bind("click", function () {
            var subAddBtn = $(this).parent(".js_addMenuBox");
            subAddBtn.parents(".sub_pre_menu_box").siblings(".pre_menu_link").find(".icon_menu_dot").show();

            subAddBtn.before(subMenuHtml);
            $("#menuList li").removeClass("selected current");
            subAddBtn.siblings(".jslevel2").last().addClass("selected current");
            subMenuClickBind();

            if (subAddBtn.siblings(".jslevel2").length==5) {
                subAddBtn.hide();
            } else {
                subAddBtn.show();
            }
        });

        validateSortBtn();
    }

    //删除菜单
    $("#deleteBtn").click(function(){

        if ($(".selected.current").hasClass("jslevel2")) { //删除子菜单

            alert("删除后“" + $(".selected.current .js_l2Title").text() + "”菜单下设置的内容将被删除");
            var _this = $(".selected.current");
            
            _this.siblings(".js_addMenuBox").show();
            
            if(_this.siblings(".jslevel2").length==0) {
                _this.parents(".sub_pre_menu_box").siblings(".pre_menu_link").find(".icon_menu_dot").hide();
            }

            _this.remove();

            $("#menuList>li>div.sub_pre_menu_box").hide();
            $("#menuList li").removeClass("selected current");

        } else if($(".selected.current").hasClass("jsMenu")) { //删除主菜单

            alert("删除后“" + $(".selected.current .js_l1Title").text() + "”菜单下设置的内容将被删除");
            var _this = $(".selected.current");

            if (_this.hasClass("size1of2")) {
                $("#menuList").addClass("no_menu");
                $(".js_addMenuTips").show();
                $("#menuList>li").removeClass("size1of1 size1of2 size1of3").addClass("size1of1");
            } else if (_this.hasClass("size1of3")&&$(".jsMenu").length==2) {
                $("#menuList>li").removeClass("size1of1 size1of2 size1of3").addClass("size1of2");
            }

            $("#menuList>li>div.sub_pre_menu_box").hide();
            $("#menuList li").removeClass("selected current");
            _this.remove();

        }

        validateSortBtn();
    });
    
    //检测排序按钮可用性
    function validateSortBtn(){
        if($(".jslevel1").length >=2 || $(".jslevel2").length >= 2) {
            $(".sort_btn_wrp").children().hide();
            $("#orderBt").show();
            orderBtnBind();

        } else {
            $(".sort_btn_wrp").children().hide();
            $("#orderDis").show();
        }
    }
    // 排序按钮点击
    function orderBtnBind () {
        $("#orderBt").unbind("click").bind("click", function(){
            $(".sort_btn_wrp").children().hide();
            $("#finishBt").show();
            finishBtnBind();
            startSort ()
        });
    }
    // 排序完成按钮点击
    function finishBtnBind () {
        $("#finishBt").unbind("click").bind("click", function(){
            endSort ();
            validateSortBtn();
        });
    }

    //隐藏添加按钮
    function startSort () {
        $(".icon_menu_dot").hide();
        $(".icon20_common.sort_gray").css("display", "inline-block");
    }

    //隐藏添加按钮
    function endSort () {
        // body...
    }

    mainMenuAddBind();

// });