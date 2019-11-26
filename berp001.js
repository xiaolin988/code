//$-----Auto generated script block, Please do not edit or modify script below this line.-----$////引入外部JS
document.write('<script type="text/javascript" src="../../CustomJsLib/EFGPShareMethod.js"></script>');
document.write('<script type="text/javascript" src="../../CustomJsLib/BPMPublicMethod.js"></script>');
document.write('<script type="text/javascript" src="/XpBpmWeb/dwrCustom/interface/ajax_ExcelAjax.js"></script>');
document.write('<script type="text/javascript" src="/XpBpmWeb/dwrCustom/interface/ajax_DateAjax.js"></script>');
document.write('<script type="text/javascript" src="/XpBpmWeb/dwrCustom/interface/ajax_ErpWsAjax.js"></script>');

// 2019-06-21 14:26:04 czc [应急措施]量产/试产类别，原因码强制为空
// 2019-07-25 10:55:15 czc 调用获取单价接口，单位被写死成PCS,调整为取页面单位
// 2019-07-29 11:59:46 czc 添加ERP料号选择时，带出IMA单位IMA31
// 2019-07-29 14:20:47 FUN-2019072901 byljl 调整倍数使用功能及计算逻辑（备份单价栏位值）
// 2019-08-05 11:30:36 czc 更新了邮件通知人按钮获取有效账号
// 2019-08-06 11:02:34 czc 更新了导出按钮强制可用
// 2019-08-08 16:23:47 czc 导出Excel增加“客户PO号tb_cust_order”列
// 2019-08-15 16:59:50 czc 虚拟订单时生成客户订单号增加pmm_FILE表
// 2019-09-20 11:54:17 czc 增加明细倍数和价格条件的判断


//获取表单栏位
var tb_org_id = document.getElementById("tb_org_id");//公司ID
var tb_org_name = document.getElementById("tb_org_name");//公司名
var tb_dept_id = document.getElementById("tb_dept_id");//部门ID
var tb_dept_name = document.getElementById("tb_dept_name");//部门名称
var tb_user_id = document.getElementById("tb_user_id");//人员ID
var tb_user_name = document.getElementById("tb_user_name");//人员姓名
var tb_time = document.getElementById("tb_time");//时间
var tb_order1 = document.getElementById("tb_order1");//回写回来的内销订单号
var tb_order2 = document.getElementById("tb_order2");//KPE/XPNA采购单号：
var tb_order3 = document.getElementById("tb_order3");//外销订单号
var d_account_set = document.getElementById("d_account_set");//来源账套
var d_order_nature = document.getElementById("d_order_nature");//订单性质
var d_order_type = document.getElementById("d_order_type");//订单类别
var tb_po = document.getElementById("tb_po");//PO单据别
var tb_process_no = document.getElementById("tb_process_no");//多角贸易流程代号
var date_order = document.getElementById("date_order_txt");//订单日期合约日期
var tb_userid = document.getElementById("tb_userid");//资料所有者
var btn_userid = document.getElementById("btn_userid");
var tb_username = document.getElementById("tb_username");//资料所有者姓名
var tb_deptid = document.getElementById("tb_deptid");//资料所有部门
var btn_deptid = document.getElementById("btn_deptid");
var tb_deptname = document.getElementById("tb_deptname");//资料所有部门名称
var tb_cust_no = document.getElementById("tb_cust_no");//客户编号
var btn_cust_no = document.getElementById("btn_cust_no");
var tb_cust_shortname = document.getElementById("tb_cust_shortname");
var tb_delivery_no = document.getElementById("tb_delivery_no");//送货客户
var tb_delivery_name = document.getElementById("tb_delivery_name");
var tb_collection_no = document.getElementById("tb_collection_no");//收款客户
var btn_delivery_no = document.getElementById("btn_delivery_no");
var btn_collection_no = document.getElementById("btn_collection_no");
var tb_collection_name = document.getElementById("tb_collection_name");
var tb_final_cust_no = document.getElementById("tb_final_cust_no");//最终客户编号
var btn_final_cust_no = document.getElementById("btn_final_cust_no");
var tb_final_cust_name = document.getElementById("tb_final_cust_name");
var tb_cust_order = document.getElementById("tb_cust_order");//客户订单
var tb_pur_order = document.getElementById("tb_pur_order");//KPE/XPNA采购订单
var tb_supplier = document.getElementById("tb_supplier");//供应商
var tb_price_limit = document.getElementById("tb_price_limit");//价格条件
var tb_salesman = document.getElementById("tb_salesman");//业务员
var tb_salesman_id = document.getElementById("tb_salesman_id");//业务员ERP账号
var btn_salesman = document.getElementById("btn_salesman");
var tb_price_limit_no = document.getElementById("tb_price_limit_no");
var btn_price_limit_no = document.getElementById("btn_price_limit_no");
var tb_currency = document.getElementById("tb_currency");//币别
var btn_currency = document.getElementById("btn_currency");
var btn_unit = document.getElementById("btn_unit");

var tb_erpno = document.getElementById("tb_erpno");//产品编号（料号）
var btn_erpno = document.getElementById("btn_erpno");
var tb_cust_productno = document.getElementById("tb_cust_productno");//客户产品编号
var tb_unit = document.getElementById("tb_unit");//销售单位
var tb_amount = document.getElementById("tb_amount");//数量
var tb_price_to_cust = document.getElementById("tb_price_to_cust");//对客单价
var tb_pur_price = document.getElementById("tb_pur_price");//KPE/XPNA采购单价
var tb_multiple = document.getElementById("tb_multiple");//倍数
var tb_cost_center = document.getElementById("tb_cost_center");//成本中心
var btn_cost_center = document.getElementById("btn_cost_center");
var tb_cost_center_id = document.getElementById("tb_cost_center_id");
var date_convention = document.getElementById("date_convention_txt");//约定交货日
var date_plan = document.getElementById("date_plan_txt");//排定交货日
var tb_supplier_no = document.getElementById("tb_supplier_no");//供应商
var btn_supplier_no = document.getElementById("btn_supplier_no");
var tb_so_name = document.getElementById("tb_so_name");//单别名称
var tb_po_name = document.getElementById("tb_po_name");
var tb_so = document.getElementById("tb_so");//so单据别
var btn_add = document.getElementById("btn_add");//新增
var btn_edit = document.getElementById("btn_edit");//编辑
var btn_delete = document.getElementById("btn_delete");//删除
var btn_export = document.getElementById("btn_export");//导出Excel
var g_order = document.getElementById("g_order");
var btn_notic = document.getElementById("btn_notic");//选择通知人
var ht_return = document.getElementById("ht_return");
var ht_notic_ids = document.getElementById("ht_notic_ids");
var ta_notic = document.getElementById("ta_notic");
var tb_mka_id = document.getElementById("tb_mka_id");//业务员确认人
var btn_mka_id = document.getElementById("btn_mka_id");
var tb_mka_name = document.getElementById("tb_mka_name");
var ht_call_back = document.getElementById("ht_call_back");//ERP回传
var ht_temp = document.getElementById("ht_temp");//暂存栏位
var tb_erp_signid = document.getElementById("tb_erp_signid");//ERP系统审核人
var btn_erp_sign = document.getElementById("btn_erp_sign");
var tb_erp_signname = document.getElementById("tb_erp_signname");
var d_is_virtual = document.getElementById("d_is_virtual");
var d_is_virtual2 = document.getElementById("d_is_virtual2");
var tb_pur_price = document.getElementById("tb_pur_price");//采购单价

var tb_exchange_rate = document.getElementById("tb_exchange_rate");//汇率
var tb_tax_id = document.getElementById("tb_tax_id");//税种
var btn_tax_id = document.getElementById("btn_tax_id");
var tb_tax_name = document.getElementById("tb_tax_name");
var tb_collection_terms_id = document.getElementById("tb_collection_terms_id");//收款条件
var btn_collection_terms_id = document.getElementById("btn_collection_terms_id");
var tb_collection_terms_name = document.getElementById("tb_collection_terms_name");
var tb_pay_type_id = document.getElementById("tb_pay_type_id");//付款方式
var btn_pay_type_id = document.getElementById("btn_pay_type_id");
var tb_pay_type_name = document.getElementById("tb_pay_type_name");
var tb_reason_no = document.getElementById("tb_reason_no");//原因码
var btn_reason_no = document.getElementById("btn_reason_no");
var d_status_firm = document.getElementById("d_status_firm");
var d_ship_via = document.getElementById("d_ship_via");
var tb_warehouse = document.getElementById("tb_warehouse");//出货仓库
var btn_warehouse = document.getElementById("btn_warehouse");
var ht_g_order_2 = document.getElementById("ht_g_order_2");//暂存grid
var btn_reason_no_delete = document.getElementById("btn_reason_no_delete");//删除原因码
var ht_account_set = document.getElementById("ht_account_set");
var d_factory = document.getElementById("d_factory");//出货工厂
var d_review_status = document.getElementById("d_review_status");//评审状态
var d_is_xpe = document.getElementById("d_is_xpe");//是否经过xpe
var btn_getsopo = document.getElementById("btn_getsopo");//点击生成SOPO和多角贸易流程代码
var ht_mka_response = document.getElementById("ht_mka_response");//确认是否需市场部业务员确认单价
var tb_mka_responsor_id = document.getElementById("tb_mka_responsor_id");//市场部业务员
var btn_mka_responsor_id = document.getElementById("btn_mka_responsor_id");
var tb_mka_responsor = document.getElementById("tb_mka_responsor");
var tb_mka_grouper_id = document.getElementById("tb_mka_grouper_id");//市场部组长
var btn_mka_grouper_id = document.getElementById("btn_mka_grouper_id");
var tb_mka_grouper = document.getElementById("tb_mka_grouper");

var databaseEFGPId = "EFGP";
var onlyReadDatabaseEFGPId = "OREFGP";

// FUN-2019072901 byljl 备份核价原始值以便按照基础单价*倍数进行计算
var priceCust = "";
var pricePur = "";

var account_set = "";
if (d_account_set.value == "01HZJM") {
    account_set = "hzjm";
} else if (d_account_set.value == "02KPL") {
    account_set = "kpl";
} else if (d_account_set.value == "0OTGTL") {
    account_set = "tgtl";
} else if (d_account_set.value == "0GKPE") {
    account_set = "kpe";
} else if (d_account_set.value == "0FXPNA") {
    account_set = "xpna";
}
//默认Form相关Function

// 表单创建时执行
function formCreate() {
    componentDisable("date_plan", true);
    //非市场部且非项目的人员，不能发起样品和试产，默认量产且无法更改
    defaultValue();
    return true;

}

// 表单开启时执行
function formOpen() {
    componentDisable("btn_export", false);
    setLabelGray();
    //grid里面的价格列只对市场部显示
    if (mainOrgId != "01HZJM" || (mainOrgId == "01HZJM" && mainOrgUnitIds != "905" && mainOrgUnitIds != "90501")) {
        hideColumn("lbl_tb_price_to_cust,tb_price_to_cust,explicit_tb_price_to_cust,lbl_tb_pur_price,tb_pur_price,explicit_tb_pur_price");
        document.write("<style>#" + g_orderObj.getId() + " .aw-column-5 { display : none; } </style> ");
        document.write("<style>#" + g_orderObj.getId() + " .aw-column-6 { display : none; } </style> ");
    }
    labelHide();
    if (serialNumber == "" || activityId == "act_request") {

    } else if (activityId == "act_mka_responsor") {
        if (d_review_status.value == "量产") {
            componentDisable("tb_multiple", true);
        }
    }
    var tGridTest = document.getElementById("g_order").value; //取出儲存在隱藏欄位中的Grid資料
    if (typeof (g_orderObj) != "undefined") {  //判斷grid物件是否存在表單中
        if (tGridTest.length > 1) {  //判斷Grid是否有資料
            g_orderObj.reload(eval(tGridTest));  //若Grid有資料則將存於隱藏中的值載入Grid中
        }
    }
    if (!isEmpty(ht_g_order_2.value) && ht_g_order_2.value.length > 6 && (isEmpty(g_orderObj.toArrayString()) || g_orderObj.toArrayString().length <= 4 || isGridEmpty("g_order"))) {
        alert("表单未加载完毕，请重新进入以加载.");
        return false;
    }

    return true;
}


// 报表保存时执行([保存表单]/[继续派送])
function formSave() {
    g_orderObj.clearBinding();
    if (typeof (g_orderObj) != "undefined") {  //判斷grid物件是否存在表單中
        document.getElementById("g_order").value = g_orderObj.toArrayString();  //將Grid裡的資料儲存至隱藏欄位中
    }
    if (!isEmpty(ht_g_order_2.value) && ht_g_order_2.value.length > 6 && (isEmpty(g_orderObj.toArrayString()) || g_orderObj.toArrayString().length <= 4 || isGridEmpty("g_order"))) {
        alert("表单未加载完毕，请重新进入以加载.");
        return false;
    }
    ht_g_order_2.value = g_order.value;
    if (serialNumber == "" || activityId == "act_request") {
        if (!deteParams()) {
            return false;
        }
        if (isGridEmpty("g_order")) {
            alert("单身不能为空！");
            return false;
        }

        //同一条流程原因码需保证一致
        if (!reasonNoCheck()) {
            return false;
        }
        //确认流程是否需要市场部业务员填单价,需要的话业务员不能为空
        if (!getMkaReponse()) {
            return false;
        }
        //除了市场部和项目部，其它部门不允许录入样品和试产订单
        ht_account_set.value = account_set;
    } else if (activityId == "act_mka_responsor") {
        if (!mkaformSave()) {
            return false;
        }
        //重新获取一遍单价，如果获取失败，则不能通过
        if (!mkaGetPrice()) {
            return false;
        }
        //确认单价是否为空
        if (!judgePrice()) {
            return false;
        }
        if (!checkPriceLimitNo()) {
            return false;
        }
    }

    return true;
}

// 表单关闭时执行（一般不用）
function formClose() {
    return true;
}

// 表单继续派送时执行([继续派送])
function formDispatch() {
    if (serialNumber == "" || activityId == "act_request") {
        //KPE或XPNA的，免费的需要将对客单价设置为0.1，采购单价设置为0
        //getFree();
    }
    if (activityId == "act_mka_erp" || activityId == "act_it") {
        var serialString = getCustOrderNo();
        //var serialString2 = serialString.substring(0,11)+getZero(parseInt(serialString.substring(11),10)+1,3);
        //3种情况
        if (d_is_virtual.value == "YES" && d_is_virtual2.value == "YES") {
            tb_cust_order.value = serialString;
            tb_pur_order.value = serialString;
        } else if (d_is_virtual.value == "YES" && d_is_virtual2.value == "NO") {
            tb_cust_order.value = serialString;
        } else if (d_is_virtual.value == "NO" && d_is_virtual2.value == "YES") {
            tb_pur_order.value = serialString;
        }
        if (tb_cust_order.value == "系统生成，无需填写！" || tb_cust_order.value == "") {
            return false;
        }
        // 检查明细倍数和价格条件
        if (!checkPriceLimitNo()) {
            return false;
        }
    }

    if (deteOpinion()) {
    }
    return true;
}

//自写Function
/**
 * 默认参数
 */
function defaultValue() {
    date_order.value = systemDateTime;
    componentBgColor("tb_time,tb_org_id,tb_org_name,tb_deptid,tb_deptname,tb_userid,tb_username,tb_order1,tb_order2,tb_order3", 'c7c7c7');
    hideColumn("tb_mka_grouper_id,lbl_tb_mka_grouper_id,btn_mka_grouper_id,tb_mka_grouper");
    if (mainOrgUnitIds == "905" || mainOrgUnitIds == "90501") {
        showColumn("tb_mka_grouper_id,lbl_tb_mka_grouper_id,btn_mka_grouper_id,tb_mka_grouper");
    }
}

//栏位隐藏和显示
function labelHide() {
    hideColumn("d_is_virtual2,lbl_d_is_virtual2,tb_pur_order,lbl_tb_pur_order,tb_pur_price,explicit_tb_pur_price,lbl_tb_pur_price,d_status_firm,lbl_d_status_firm,d_ship_via,lbl_d_ship_via,tb_warehouse,lbl_tb_warehouse,btn_warehouse,tb_po,lbl_tb_po,tb_po_name,tb_process_no,lbl_tb_process_no,d_is_xpe,lbl_d_is_xpe,tb_reason_no,lbl_tb_reason_no,btn_reason_no,btn_reason_no_delete,tb_cost_center_id,lbl_tb_cost_center_id,btn_cost_center,tb_cost_center");//隐藏某些栏位
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        showColumn("d_is_virtual2,lbl_d_is_virtual2,tb_pur_order,lbl_tb_pur_order,tb_po,lbl_tb_po,tb_po_name,tb_pur_price,explicit_tb_pur_price,lbl_tb_pur_price");//显示某些栏位
    }

    if (d_account_set.value == "02KPL" || d_account_set.value == "0OTGTL" || d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        showColumn("tb_process_no,lbl_tb_process_no");
    }
    if (d_account_set.value == "0GKPE") {
        showColumn("d_is_xpe,lbl_d_is_xpe");
    }
    if (d_review_status.value == "样品") {
        showColumn("tb_reason_no,lbl_tb_reason_no,btn_reason_no,btn_reason_no_delete");
    }
    if (d_account_set.value != "0GKPE" && d_account_set.value != "0FXPNA") {
        showColumn("tb_cost_center_id,lbl_tb_cost_center_id,btn_cost_center,tb_cost_center");
    }
    if ((d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") && d_is_xpe.value == "是") {
        showColumn("tb_warehouse,lbl_tb_warehouse,btn_warehouse");
    }
    //FUN-2019072901-ljl
    if (d_review_status.value == "量产") {
        hideColumn("tb_multiple");
    }
    //只有市场部可看单价
    hiddenPrice();
    //只有KPE可看是否经过XPE

}

//初始化下拉框出货工厂
function init_d_factory() {
    var sql = " select DISTINCT FACTORY from ERP_SOPO where 1=1 AND FACTORY is not null ";
    DWREngine.setAsync(false);//关闭Ajax同步
    ajax_DatabaseAccessor.executeQuery("EFGP", sql, null, null, function (data) {
        var resultArray = data.recordValues; // 查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            DWRUtil.removeAllOptions("d_factory");  //先移除所有下拉式選單內容

            var tOption = document.createElement('option');
            tOption.value = "";
            tOption.text = "请选择";
            d_factory.add(tOption);

            for (var i = 0; i < resultArray.length; i++) {
                var tOption = document.createElement('option');  //建立option選項
                tOption.value = resultArray[i][0];  //放入內容值
                tOption.text = resultArray[i][0];  //放入表面值
                d_factory.add(tOption);  //將選項填入下拉式選單中
            }

        } else {
            alert("未找到出货工厂信息，请恰管理员！");
        }
    });
    DWREngine.setAsync(true);//开启Ajax同步
}

//初始化下拉框出货工厂
function init_d_review_status() {
    var sql = " select DISTINCT REVIEW_STATUS from ERP_SOPO where 1=1 AND REVIEW_STATUS is not null ";
    DWREngine.setAsync(false);//关闭Ajax同步
    ajax_DatabaseAccessor.executeQuery("EFGP", sql, null, null, function (data) {
        var resultArray = data.recordValues; // 查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            DWRUtil.removeAllOptions("d_review_status");  //先移除所有下拉式選單內容

            var tOption = document.createElement('option');
            tOption.value = "";
            tOption.text = "请选择";
            d_review_status.add(tOption);

            for (var i = 0; i < resultArray.length; i++) {
                var tOption = document.createElement('option');  //建立option選項
                tOption.value = resultArray[i][0];  //放入內容值
                tOption.text = resultArray[i][0];  //放入表面值
                d_review_status.add(tOption);  //將選項填入下拉式選單中
            }

        } else {
            alert("未找到评审状态信息，请恰管理员！");
        }
    });
    DWREngine.setAsync(true);//开启Ajax同步
}

function d_account_set_onchange() {
    //清空grid
    // g_orderObj.reload(new Array());
    //g_order.value = g_orderObj.toArrayString();
    //grid置空，单价置空（因为账套选取会影响价格条件，同样的还有评审状态）
    clearGrid3();
    if (d_account_set.value == "01HZJM") {
        account_set = "hzjm";
    } else if (d_account_set.value == "02KPL") {
        account_set = "kpl";
    } else if (d_account_set.value == "0OTGTL") {
        account_set = "tgtl";
    } else if (d_account_set.value == "0GKPE") {
        account_set = "kpe";
    } else if (d_account_set.value == "0FXPNA") {
        account_set = "xpna";
    }
    clearColumnValue("tb_so,tb_so_name,tb_po,tb_po_name,tb_process_no,tb_supplier_no,tb_supplier,tb_pay_type_id,tb_pay_type_name,tb_tax_id,tb_tax_name,d_is_xpe");
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        //componentDisable("btn_supplier_no,btn_final_cust_no",false);//设置PO单据别可选状态
        showColumn("d_is_virtual2,lbl_d_is_virtual2,tb_pur_order,lbl_tb_pur_order,lbl_tb_po,tb_po_name,tb_pur_price,explicit_tb_pur_price,lbl_tb_pur_price");//显示某些栏位
        dropdownSelected("d_status_firm", "1");
        dropdownSelected("d_ship_via", "3");
        if (tb_delivery_no.value != "") {
            tb_final_cust_no.value = tb_delivery_no.value;
            tb_final_cust_name.value = tb_delivery_name.value;
        }
    } else {
        clearColumnValue("tb_po,tb_po_name,tb_pur_price,explicit_tb_pur_price,tb_supplier_no,tb_supplier,tb_pur_order,tb_final_cust_no,tb_final_cust_name,d_status_firm,d_ship_via,tb_pay_type_id,tb_pay_type_name,tb_tax_id,tb_tax_name");
        //componentDisable("btn_supplier_no,btn_final_cust_no",true);//设置某些栏位不可填写
        d_is_virtual2.value = "NO";
        hideColumn("d_is_virtual2,lbl_d_is_virtual2,tb_pur_order,lbl_tb_pur_order,tb_po,lbl_tb_po,tb_po_name,tb_pur_price,explicit_tb_pur_price,lbl_tb_pur_price");//隐藏某些栏位
    }
    //HZJM时隐藏多角贸易流程代码
    if (d_account_set.value != "01HZJM") {
        showColumn("tb_process_no,lbl_tb_process_no,d_is_xpe,lbl_d_is_xpe");
    } else {
        clearColumnValue("tb_process_no,d_is_xpe");
        hideColumn("tb_process_no,lbl_tb_process_no,d_is_xpe,lbl_d_is_xpe");
    }
    //非KPE时，隐藏栏位是否经过XPE,HZJM也要隐藏
    if (d_account_set.value != "0GKPE") {
        if (d_account_set.value != "01HZJM") {
            hideColumn("d_is_xpe,lbl_d_is_xpe");
            dropdownSelected("d_is_xpe", "否");
        }
    } else {
        showColumn("d_is_xpe,lbl_d_is_xpe");
        dropdownSelected("d_is_xpe", "");
    }
    //HZJM、KPL、TGTL才显示成本中心供选择
    if (d_account_set.value != "0GKPE" && d_account_set.value != "0FXPNA") {
        showColumn("tb_cost_center_id,lbl_tb_cost_center_id,btn_cost_center,tb_cost_center");
    } else {
        clearColumnValue("tb_cost_center_id,tb_cost_center");
        hideColumn("tb_cost_center_id,lbl_tb_cost_center_id,btn_cost_center,tb_cost_center");
    }
    //KPE或XPNA，且经过XPE才需选择出货仓库
    if ((d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") && d_is_xpe.value == "是") {
        showColumn("tb_warehouse,lbl_tb_warehouse,btn_warehouse");
    } else {
        clearColumnValue("tb_warehouse");
        hideColumn("tb_warehouse,lbl_tb_warehouse,btn_warehouse");
    }
    //只有量产不能有虚拟单号
    setVirtual();
    //只有市场部可看单价
    hiddenPrice();
    //量产时系统自动判断价格是内销还是外销
    getPriceLimit();


}

function d_order_nature_onchange() {
    clearColumnValue("tb_so,tb_so_name,tb_po,tb_po_name,tb_process_no,tb_supplier_no,tb_supplier,tb_pay_type_id,tb_pay_type_name,tb_tax_id,tb_tax_name");
}

function d_factory_onchange() {
    clearColumnValue("tb_so,tb_so_name,tb_po,tb_po_name,tb_process_no,tb_supplier_no,tb_supplier,tb_pay_type_id,tb_pay_type_name,tb_tax_id,tb_tax_name");
}

function d_review_status_onchange() {
    clearColumnValue("tb_so,tb_so_name,tb_po,tb_po_name");
    componentDisable("btn_price_limit_no,tb_multiple", false);
    //g_orderObj.reload(new Array());
    //g_order.value = g_orderObj.toArrayString();
    //grid置空，单价置空（因为账套选取会影响价格条件，同样的还有评审状态）
    clearGrid3();
    //只有样品才显示原因码
    if (d_review_status.value == "样品") {
        showColumn("tb_reason_no,lbl_tb_reason_no,btn_reason_no,btn_reason_no_delete");
    } else {
        clearColumnValue("tb_reason_no");
        hideColumn("tb_reason_no,lbl_tb_reason_no,btn_reason_no,btn_reason_no_delete");
    }
    //只有量产不能有虚拟单号
    setVirtual();
    //只有量产不可以变更价格条件和倍数，倍数永远为1
    /*if(d_review_status.value == "量产"){
        componentDisable("btn_price_limit_no,tb_multiple",true);
        tb_multiple.value = "1";
        FormMgr.toPrettyValue("tb_multiple");
    }else{
        componentDisable("btn_price_limit_no,tb_multiple",false);
    }*/
    if (d_review_status.value == "量产") {
        componentDisable("btn_price_limit_no", true);
    } else {
        componentDisable("btn_price_limit_no", false);
    }
    //设置只有市场部和项目可发起样品和试产
    if (!judgeDeptBelong()) {
        if (d_review_status.value != "量产") {
            alert("您的所属部门只能发起量产订单");
            d_review_status.value = "";
            tb_price_limit_no.value = "";
            tb_price_limit.value = "";
        }
    }
    //量产时系统自动判断价格是内销核价还是外销核价
    getPriceLimit();
    //量产的话需要选择主管/组长审核人，样品和试产不需要
    tb_mka_id.value = "";
    tb_mka_name.value = "";
    if ((d_review_status.value == "样品" || d_review_status.value == "试产") || tb_deptid.value == "905" || tb_deptid.value == "90501") {
        hideColumn("lbl_tb_mka_id,tb_mka_id,btn_mka_id,tb_mka_name");
    } else {
        showColumn("lbl_tb_mka_id,tb_mka_id,btn_mka_id,tb_mka_name");
    }
    //量产或申请人是市场部的人隐藏市场部业务员，无需选择
    tb_mka_responsor_id.value = "";
    tb_mka_responsor.value = "";
    if (d_review_status.value == "量产" || tb_deptid.value == "905" || tb_deptid.value == "90501") {
        hideColumn("lbl_tb_mka_responsor_id,tb_mka_responsor_id,btn_mka_responsor_id,tb_mka_responsor");
    } else {
        showColumn("lbl_tb_mka_responsor_id,tb_mka_responsor_id,btn_mka_responsor_id,tb_mka_responsor");
    }

}

//设置量产不能填写虚拟订单号
function setVirtual() {
    d_is_virtual.value = "NO";
    d_is_virtual2.value = "NO";
    tb_cust_order.value = "";
    tb_pur_order.value = "";
    if (d_review_status.value == "量产") {
        d_is_virtual.value = "NO";
        componentDisable("d_is_virtual", true);
        d_is_virtual2.value = "NO";
        componentDisable("d_is_virtual2", true);
    } else {
        d_is_virtual.value = "NO";
        componentDisable("d_is_virtual", false);
        d_is_virtual2.value = "NO";
        componentDisable("d_is_virtual2", false);
    }

}


function d_is_xpe_onchange() {
    g_orderObj.reload(new Array());
    g_order.value = g_orderObj.toArrayString();
    clearColumnValue("tb_process_no,tb_supplier_no,tb_supplier,tb_pay_type_id,tb_pay_type_name,tb_tax_id,tb_tax_name");
    //KPE或XPNA，且经过XPE才需选择出货仓库
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        if (d_is_xpe.value == "是") {
            showColumn("tb_warehouse,lbl_tb_warehouse,btn_warehouse");
        } else {
            clearColumnValue("tb_warehouse");
            hideColumn("tb_warehouse,lbl_tb_warehouse,btn_warehouse");
        }

    }
}

// 虚拟订单时客户订单号由系统生成
function d_is_virtual_onchange() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        d_is_virtual.value = "NO";
        tb_cust_order.value = "";
        return false;
    }
    if (d_is_virtual.value == "YES") {
        componentDisable("tb_cust_order", true);
        tb_cust_order.value = "系统生成，无需填写！";
        tb_cust_order.style.color = "red";
        componentBgColor("tb_cust_order", 'f6faa0');

        if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
            d_is_virtual2.value = "YES";
            componentDisable("tb_pur_order", true);
            tb_pur_order.value = "系统生成，无需填写！";
            tb_pur_order.style.color = "red";
            componentBgColor("tb_pur_order", 'f6faa0');
        }
    } else {
        componentDisable("tb_cust_order", false);
        tb_cust_order.value = "";
        tb_cust_order.style.color = "000000";
        componentBgColor("tb_cust_order", 'ffffff');

        if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
            d_is_virtual2.value = "NO";
            componentDisable("tb_pur_order", false);
            tb_pur_order.value = "";
            tb_pur_order.style.color = "000000";
            componentBgColor("tb_pur_order", 'ffffff');
        }

    }
}

//虚拟订单时c采购单号由系统生成
function d_is_virtual2_onchange() {
    if (d_is_virtual2.value == "YES") {
        componentDisable("tb_pur_order", true);
        tb_pur_order.value = "系统生成，无需填写！";
        tb_pur_order.style.color = "red";
        componentBgColor("tb_pur_order", 'f6faa0');
    } else {
        componentDisable("tb_pur_order", false);
        tb_pur_order.value = "";
        tb_pur_order.style.color = "000000";
        componentBgColor("tb_pur_order", 'ffffff');
    }
}

//虚拟订单时生成客户订单号（规则：A-19/02/26/001(A-年/月/日/序号)）
function getCustOrderNo() {
    //找当天最高的序列号，在基础上+1
    var serialString = "";
    var date = exchangeDate();
    var sql = " (select OEA10 from " + ht_account_set.value + ".oea_file where 1=1 AND SUBSTR(OEA10,1,11) = TO_CHAR('A-')||TO_CHAR(SYSDATE,'yy/MM/dd')||TO_CHAR('/')) UNION (select OEBUD04 OEA10 from " + ht_account_set.value + ".OEB_FILE where 1=1 AND SUBSTR(OEBUD04,1,11) = TO_CHAR('A-')||TO_CHAR(SYSDATE,'yy/MM/dd')||TO_CHAR('/')) UNION (select  pmmud03 OEA10  from  " + ht_account_set.value + ".pmm_FILE where 1=1 AND SUBSTR(pmmud03,1,11) = TO_CHAR('A-')||TO_CHAR(SYSDATE,'yy/MM/dd')||TO_CHAR('/')) ORDER BY OEA10 DESC ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            var serialNo = getZero(parseInt(resultArray[0][0].substring(11), 10) + 1, 3);
            serialString = "A-" + date + "/" + serialNo;
        } else {
            serialString = "A-" + date + "/001";
        }
    });
    DWREngine.setAsync(true);
    return serialString;
}

function exchangeDate() {
    //JS sql查询
    var todayDate = "";
    DWREngine.setAsync(false);
    ajax_DateAjax.getDiffDateAndFormat(systemDateTime, 0, "yy/MM/dd", function (data) {
        todayDate = data;//查询结果为一个字符串
    });
    DWREngine.setAsync(true);
    return todayDate;
}

//数字前置补0
function getZero(num, digit) {
    var numLength = (num + "").length;
    var zeroLength = "";
    for (var i = 0; i < digit - numLength; i++) {
        zeroLength += "0";
    }
    return zeroLength + num;
}

//选择SO单据别
/*function btn_so_onclick(){
    if(d_account_set.value == ""){
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT oayslip,oaydesc FROM "+account_set+".oay_file WHERE oayacti = 'Y' AND 1=1 AND oaysys = 'axm' AND oaytype = '30' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array( "单别", "单别名称");// 客制开窗的Grid Label
    var QBEField = new Array("OAYSLIP", "OAYDESC");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array( "单别", "单别名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_so", "tb_so_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
    var sql = " SELECT SO_NO,PO_NO,ACCOUNT_SET,FACTORY,REVIEW_STATUS,SALE_TYPE,INSTRUCTION from ERP_SOPO where 1=1 and ACCOUNT_SET = '"+d_account_set.value+"' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array( "SO单据别","PO单据别","账套", "出货工厂","评审状态","内外销","说明");// 客制开窗的Grid Label
    var QBEField = new Array("SO_NO","PO_NO","ACCOUNT_SET", "FACTORY","REVIEW_STATUS","SALE_TYPE");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("SO单据别","PO单据别","账套", "出货工厂","评审状态","内外销");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_so", "tb_po","ht_temp","ht_temp","ht_temp","ht_temp","ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}*/

//点击生成SOPO单据别以及多角贸易流程代码
function btn_getsopo_onclick() {
    if (!clearGrid()) {
        return false;
    }
    if (!notNullCheckById("d_account_set", "账套不能为空！")
        || !notNullCheckById("d_order_nature", "订单性质不能为空！")
        || (d_account_set.value != "01HZJM" && !notNullCheckById("d_is_xpe", "请选择是否经过XPE！"))
    ) {
        return false;
    }
    var sql1 = "";
    var sql2 = "";
    if (d_factory.value == "") {
        sql1 = " AND FACTORY IS NULL";
    } else {
        sql1 = " AND FACTORY = '" + d_factory.value + "'";
    }
    if (d_review_status.value == "") {
        sql2 = " AND REVIEW_STATUS IS NULL";
    } else {
        sql2 = " AND REVIEW_STATUS = '" + d_review_status.value + "'";
    }
    //SOPO单据别
    var sql = " select SO_NO,PO_NO from ERP_SOPO where 1=1 AND ACCOUNT_SET = '" + d_account_set.value + "' AND SALE_TYPE = '" + d_order_nature.value + "' " + sql1 + sql2;
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP", sql, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            tb_so.value = emptyStr(resultArray[0][0]);
            tb_po.value = emptyStr(resultArray[0][1]);
        } else {
            alert("无法查询到单据别！");
        }
    });
    DWREngine.setAsync(true);
    //SOPO单据别说明
    getSoPo();
    if (d_account_set.value != "01HZJM") {
        //多角贸易流程代码(KPE和出货工厂无关，仅和是否经过XPE有关)
        var sql = "";
        if (d_account_set.value == "0GKPE") {
            sql = " select PROCESS_NO,SUPPLIER from ERP_PROCESS_NO where 1=1 AND ACCOUNT_SET = '" + d_account_set.value + "' AND IS_XPE = '" + d_is_xpe.value + "' ";
        } else {
            sql = " select PROCESS_NO,SUPPLIER from ERP_PROCESS_NO where 1=1 AND ACCOUNT_SET = '" + d_account_set.value + "' AND FACTORY = '" + d_factory.value + "' AND IS_XPE = '" + d_is_xpe.value + "' ";
        }

        DWREngine.setAsync(false);
        ajax_DatabaseAccessor.executeQuery("EFGP", sql, null, null, function (data) {
            var resultArray = data.recordValues;//查询结果为一个二维数组
            if (!isResultArrayEmpty(resultArray)) {
                tb_process_no.value = emptyStr(resultArray[0][0]);
                tb_supplier_no.value = emptyStr(resultArray[0][1]);
            } else {
                alert("无法查询到多角贸易流程代码！");
            }
        });
        DWREngine.setAsync(true);
        //供应商资料、付款方式、税种
        getInstruction();
    }

}


//从ERP查找PO单据说明SO单据别说明
function getSoPo() {
    //SO
    var sql = " SELECT oaydesc FROM " + account_set + ".oay_file WHERE oayacti = 'Y' AND 1=1 AND oaysys = 'axm' AND oaytype = '30' and oayslip = '" + tb_so.value + "' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            tb_so_name.value = resultArray[0][0];
        }
    });
    DWREngine.setAsync(true);
    //PO
    if (tb_po.value != "") {
        var sql = " SELECT smydesc FROM " + account_set + ".smy_file WHERE 1=1 AND smyacti='Y' AND upper(smysys) ='APM' AND smykind ='2' and smyslip = '" + tb_po.value + "' ";
        DWREngine.setAsync(false);
        ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
            var resultArray = data.recordValues;//查询结果为一个二维数组
            if (!isResultArrayEmpty(resultArray)) {
                tb_po_name.value = resultArray[0][0];
            }
        });
        DWREngine.setAsync(true);
    }
}

//选择PO单据别
/*function btn_po_onclick(){
    if(d_account_set.value == ""){
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT smyslip,smydesc  FROM "+account_set+".smy_file WHERE 1=1 AND smyacti='Y' AND upper(smysys) ='APM' AND smykind ='2' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array( "单别", "单别名称");// 客制开窗的Grid Label
    var QBEField = new Array("SMYSLIP", "SMYDESC");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array( "单别", "单别名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_po", "tb_po_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}*/


//选择客户编号
function btn_cust_no_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    if (!clearGrid()) {
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select OCC01,OCC02,OCC07,OCC09 from " + account_set + ".occ_file where 1=1 AND occacti IN ('Y','H' ) AND occ06 IN ('1','3','4') AND occ1004 IN ('1','2') ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("客户编号", "客户公司名称", "付款客户编号", "送货客户编号");// 客制开窗的Grid Label
    var QBEField = new Array("OCC01", "OCC02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("客户编号", "客户公司名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_cust_no", "tb_cust_shortname", "tb_collection_no", "tb_delivery_no");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//带出送货客户、收款客户、惯用币种、惯用价格条件
function getCustInformation() {
    //JS sql查询
    var sql = " SELECT OCC42,OCC44,OAH02,OCC41,GEC02,OCC45,OAG02 from " + account_set + ".occ_file LEFT JOIN " + account_set + ".OAH_FILE ON occ_file.OCC44 = OAH_FILE.OAH01 LEFT JOIN " + account_set + ".gec_file ON OCC_FILE.occ41 = GEC_FILE.GEC01 LEFT JOIN " + account_set + ".OAG_FILE ON OCC_FILE.OCC45 = OAG_FILE.OAG01 where 1=1 AND occ_file.OCC01 = '" + tb_cust_no.value + "' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            //tb_currency.value = emptyStr(resultArray[0][0]);
            //如果是项目部的人申请，则自动带出价格条件
            if (judgeDeptBelong()) {
                if (mainOrgUnitIds != "905" && mainOrgUnitIds != "90501") {
                    tb_price_limit_no.value = emptyStr(resultArray[0][1]);
                    tb_price_limit.value = emptyStr(resultArray[0][2]);
                }
            }
            //tb_tax_id.value = emptyStr(resultArray[0][3]);
            //tb_tax_name.value = emptyStr(resultArray[0][4]);
            tb_collection_terms_id.value = emptyStr(resultArray[0][5]);
            tb_collection_terms_name.value = emptyStr(resultArray[0][6]);
        } else {
            //tb_currency.value = "";
            tb_price_limit_no.value = "";
            tb_price_limit.value = "";
            //tb_tax_id.value = "";
            //tb_tax_name.value = "";
            tb_collection_terms_id.value = "";
            tb_collection_terms_name.value = "";
            tb_final_cust_no.value = "";
            tb_final_cust_name.value = "";
        }
    });
    DWREngine.setAsync(true);
    //JS sql查询(带出送货客户名称)
    var sql2 = " select OCC02 from OCC_FILE where 1=1 AND OCC01 = '" + tb_delivery_no.value + "' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("01HZJM", sql2, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            tb_delivery_name.value = emptyStr(resultArray[0][0]);
        }
    });
    DWREngine.setAsync(true);
    //JS sql查询(带出付款客户名称)
    var sql3 = " select OCC02 from OCC_FILE where 1=1 AND OCC01 = '" + tb_collection_no.value + "' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("01HZJM", sql3, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            tb_collection_name.value = emptyStr(resultArray[0][0]);
        }
    });
    DWREngine.setAsync(true);
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        tb_final_cust_no.value = tb_delivery_no.value;
        tb_final_cust_name.value = tb_delivery_name.value;
    } else {
        tb_final_cust_no.value = "";
        tb_final_cust_name.value = "";
    }
    //获取汇率
    getTax();
    //如果是项目部的人员填写，付款客户由市场部选择
    if (judgeDeptBelong()) {
        if (mainOrgUnitIds != "905" && mainOrgUnitIds != "90501") {
            tb_collection_no.value = "";
            tb_collection_name.value = "";
        }
    }

}

//获取汇率
function getTax() {
    //JS sql查询(带出汇率)
    if (tb_currency.value != "") {
        var sql = " select azj03 from azj_file where 1=1 AND AZJ01 = '" + tb_currency.value + "' ORDER BY AZJ02 DESC";
        DWREngine.setAsync(false);
        ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
            var resultArray = data.recordValues;//查询结果为一个二维数组
            if (!isResultArrayEmpty(resultArray)) {
                tb_exchange_rate.value = resultArray[0][0];
            } else {
                tb_exchange_rate.value = "尚未维护！";
            }
        });
        DWREngine.setAsync(true);
    }
}

//选择送货客户
function btn_delivery_no_onclick() {
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select OCC01,OCC02 from occ_file where 1=1 AND OCCACTI = 'Y' AND OCC1004 = '1' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("客户公司编号", "客户公司名称");// 客制开窗的Grid Label
    var QBEField = new Array("OCC01", "OCC02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("客户公司编号", "客户公司名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_delivery_no", "tb_delivery_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择收款客户
function btn_collection_no_onclick() {
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select OCC01,OCC02 from occ_file where 1=1 AND OCCACTI = 'Y' AND OCC1004 = '1' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("客户公司编号", "客户公司名称");// 客制开窗的Grid Label
    var QBEField = new Array("OCC01", "OCC02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("客户公司编号", "客户公司名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_collection_no", "tb_collection_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择最终客户
function btn_final_cust_no_onclick() {
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select OCC01,OCC02 from occ_file where 1=1 AND OCCACTI = 'Y' AND OCC1004 = '1' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("客户公司编号", "客户公司名称");// 客制开窗的Grid Label
    var QBEField = new Array("OCC01", "OCC02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("客户公司编号", "客户公司名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_final_cust_no", "tb_final_cust_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择币别
function btn_currency_onclick() {
    if (!clearGrid()) {
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT AZI01,AZI02 from AZI_FILE where 1=1 AND AZIACTI = 'Y' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("币别代码", "币别说明");// 客制开窗的Grid Label
    var QBEField = new Array("AZI01", "AZI02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("币别代码", "币别说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_currency", "ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择税种
function btn_tax_id_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        if (!clearGrid()) {
            return false;
        }
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select GEC01,GEC02 from " + account_set + ".gec_file where 1=1 AND GECACTI = 'Y' AND gec011 = '1' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("税别码", "税别名称");// 客制开窗的Grid Label
    var QBEField = new Array("GEC01", "GEC02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("税别码", "税别名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_tax_id", "tb_tax_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择价格条件
function btn_price_limit_no_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    if (activityId == "act_request") {
        if (!clearGrid2()) {
            return false;
        }
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT OAH01,OAH02 from " + account_set + ".OAH_FILE where 1=1 and OAH01 != '004' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("价格条件编号", "价格条件说明");// 客制开窗的Grid Label
    var QBEField = new Array("OAH01", "OAH02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("价格条件编号", "价格条件说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_price_limit_no", "tb_price_limit");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//单价获取相关条件变化时,价格码是001的时候无需变动
function clearGrid() {
    if (tb_price_limit_no.value != "001") {
        if (!isGridEmpty("g_order")) {
            if (confirm("重新选择影响单价获取，单身资料会清空，请确认是否要重新选取！") == true) {
                //清空单身全部资料
                clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
                FormMgr.toPrettyValue("tb_price_to_cust");
                FormMgr.toPrettyValue("tb_pur_price");
                g_orderObj.reload(new Array());
                g_order.value = g_orderObj.toArrayString();
                hiddenPriceExplicete();
                return true;
            } else {
                return false;
            }
        } else {
            if (tb_erpno.value != "" || tb_price_to_cust.value != "") {
                if (confirm("重新选择影响单价获取，料号及单价栏位将置空，请确认是否要重新选取！") == true) {
                    //清空单身全部资料
                    clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
                    FormMgr.toPrettyValue("tb_price_to_cust");
                    FormMgr.toPrettyValue("tb_pur_price");
                    hiddenPriceExplicete();
                    return true;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    } else {
        return true;
    }

}

//单价获取价格条件变化时（不管是变成什么都要清空）
function clearGrid2() {
    if (!isGridEmpty("g_order")) {
        if (confirm("重新选择影响单价获取，单身资料会清空，请确认是否要重新选取！") == true) {
            //清空单身全部资料
            clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
            FormMgr.toPrettyValue("tb_price_to_cust");
            FormMgr.toPrettyValue("tb_pur_price");
            g_orderObj.reload(new Array());
            g_order.value = g_orderObj.toArrayString();
            hiddenPriceExplicete();
            return true;
        } else {
            return false;
        }
    } else {
        if (tb_erpno.value != "" || tb_price_to_cust.value != "") {
            if (confirm("重新选择影响单价获取，料号及单价栏位将置空，请确认是否要重新选取！") == true) {
                //清空单身全部资料
                clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
                FormMgr.toPrettyValue("tb_price_to_cust");
                FormMgr.toPrettyValue("tb_pur_price");
                hiddenPriceExplicete();
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }
}

function clearGrid3() {
    if (!isGridEmpty("g_order")) {
        alert("重新选择影响单价获取，单身资料将清空");
        //清空单身全部资料
        clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
        FormMgr.toPrettyValue("tb_price_to_cust");
        FormMgr.toPrettyValue("tb_pur_price");
        g_orderObj.reload(new Array());
        g_order.value = g_orderObj.toArrayString();
        hiddenPriceExplicete();
    } else {
        if (tb_erpno.value != "" || tb_price_to_cust.value != "") {
            //清空单身全部资料
            alert("重新选择影响单价获取，料号及单价栏位将置空");
            clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
            FormMgr.toPrettyValue("tb_price_to_cust");
            FormMgr.toPrettyValue("tb_pur_price");
            hiddenPriceExplicete();
        }
    }
}

//选择收款条件
function btn_collection_terms_id_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    if (!clearGrid()) {
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT OAG01,OAG02 from OAG_FILE where 1=1 ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("收款条件编号", "说明");// 客制开窗的Grid Label
    var QBEField = new Array("OAG01", "OAG02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("收款条件编号", "说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_collection_terms_id", "tb_collection_terms_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择付款方式
function btn_pay_type_id_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    if (tb_supplier_no.value == "") {
        alert("请先选择供应商！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT PMA01,PMA02 from PMA_FILE where 1=1 AND PMAACTI = 'Y' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("付款方式", "付款方式说明");// 客制开窗的Grid Label
    var QBEField = new Array("PMA01", "PMA02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("付款方式", "付款方式说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_pay_type_id", "tb_pay_type_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择原因码
function btn_reason_no_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT azf01,azf03 FROM " + account_set + ".azf_file WHERE  ( azfacti = 'Y' AND azf02 = '2' and azf09 = '1' ) AND  1=1 AND azf01 in ('102','200') ORDER BY azf01 ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("原因码编号", "说明");// 客制开窗的Grid Label
    var QBEField = new Array("AZF01", "AZF03");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("原因码编号", "说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_reason_no", "ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择出货仓库
function btn_warehouse_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT IMD01,IMD02 FROM KPE.IMD_FILE WHERE 1=1 AND IMDACTI='Y' AND IMD20 ='0GKPE' ORDER BY IMD01 ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("仓库别", "仓库名称");// 客制开窗的Grid Label
    var QBEField = new Array("IMD01", "IMD02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("仓库别", "仓库名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_warehouse", "ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择多角贸易流程代号
/*function btn_process_no_onclick(){
    if(d_account_set.value == ""){
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select POZ01,POZ02 from "+account_set+".poz_file where 1=1 AND pozacti = 'Y' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array( "多角贸易流程代号","说明");// 客制开窗的Grid Label
    var QBEField = new Array("POZ01","POZ02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array( "多角贸易流程代号","说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_process_no","ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select PROCESS_NO,ACCOUNT_SET,FACTORY,IS_XPE,INSTRUCTION,SUPPLIER from ERP_PROCESS_NO where 1=1 and ACCOUNT_SET = '"+d_account_set.value+"' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array( "多角贸易流程代号","账套","出货工厂","是否经过XPE","说明","供应商");// 客制开窗的Grid Label
    var QBEField = new Array("PROCESS_NO","ACCOUNT_SET","FACTORY","IS_XPE");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array( "多角贸易流程代号","账套","出货工厂","是否经过XPE");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_process_no","ht_temp","ht_temp","ht_temp","ht_temp","tb_supplier_no");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}*/

//选择多角流程代码时带出说明和供应商付款方式和税种
function getInstruction() {
    //供应商信息
    if (tb_supplier_no.value != "") {
        var sql = " select PMC03,PMC17,PMA02,PMC47,GEC02 from " + account_set + ".PMC_FILE LEFT JOIN " + account_set + ".PMA_FILE ON PMC_FILE.PMC17 = PMA_FILE.PMA01 LEFT JOIN " + account_set + ".GEC_FILE ON PMC_FILE.PMC47 = GEC_FILE.GEC01 where 1=1 and PMCACTI = 'Y' and PMC01 = '" + tb_supplier_no.value + "' ";
        DWREngine.setAsync(false);
        ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
            var resultArray = data.recordValues;//查询结果为一个二维数组
            if (!isResultArrayEmpty(resultArray)) {
                tb_supplier.value = resultArray[0][0];
                tb_pay_type_id.value = resultArray[0][1];
                tb_pay_type_name.value = resultArray[0][2];
                tb_tax_id.value = resultArray[0][3];
                tb_tax_name.value = resultArray[0][4];
            }
        });
        DWREngine.setAsync(true);
    }
}

//选择供应商
function btn_supplier_no_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    if (!clearGrid()) {
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select PMC01,PMC03,PMC17,PMA02,PMC47,GEC02 from " + account_set + ".PMC_FILE LEFT JOIN " + account_set + ".PMA_FILE ON PMC_FILE.PMC17 = PMA_FILE.PMA01 LEFT JOIN " + account_set + ".GEC_FILE ON PMC_FILE.PMC47 = GEC_FILE.GEC01 where 1=1 and PMCACTI = 'Y' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("供应厂商编号", "简称", "付款方式编号", "付款方式", "税别码", "税别");// 客制开窗的Grid Label
    var QBEField = new Array("PMC01", "PMC03", "PMC17", "PMA02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("供应厂商编号", "简称", "付款方式编号", "付款方式");// 模糊查询的Label
    var pHidden = new Array("4", "5");
    var OriginallyData = new Array("tb_supplier_no", "tb_supplier", "tb_pay_type_id", "tb_pay_type_name", "tb_tax_id", "tb_tax_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择业务员
function btn_salesman_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select GEN01,GEN02 from " + account_set + ".GEN_FILE where GENACTI = 'Y' AND GEN03 = '905' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("人员账号", "人员姓名");// 客制开窗的Grid Label
    var QBEField = new Array("GEN01", "GEN02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("人员账号", "人员姓名");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_salesman_id", "tb_salesman");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//从BPM查找看是否能查到对应的人员
/*function getPersonConfirm(){
    //JS sql查询
    var sql = " select USERID,USERNAME from V_ORG_UNIT_USER_01 where 1=1 AND ISMAIN = 1 AND OID = '01HZJM' AND OUID like '905%' AND USERNAME = '"+tb_salesman.value+"'  ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("EFGP",sql,null,null,function(data){
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if(!isResultArrayEmpty(resultArray)){
            tb_mka_id.value = resultArray[0][0];
            tb_mka_name.value = resultArray[0][1];
        }else{
            alert("系统对应不到业务员的BPM账号，请手动选择业务员确认人！");
            tb_mka_id.value = "";
            tb_mka_name.value = "";
        }
    });
    DWREngine.setAsync(true);
}*/

//选择部门审核人
function btn_mka_id_onclick() {
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select USERID,USERNAME from V_ORG_UNIT_USER_01 where 1=1  ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("人员账号", "人员姓名");// 客制开窗的Grid Label
    var QBEField = new Array("USERID", "USERNAME");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("人员账号", "人员姓名");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_mka_id", "tb_mka_name");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择ERP系统审核人
function btn_erp_sign_onclick() {
    if (d_review_status.value == "") {
        alert("请先选择评审状态！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " select USERID,USERNAME,OUNAME,ONAME from V_ORG_UNIT_USER_01 where 1=1 ";
    if (d_review_status.value == "试产") {
        sql = "select USERID,USERNAME,OUNAME,ONAME from V_ORG_UNIT_USER_01 where 1=1 AND USERID in (select USERS.id from GROUP_USER LEFT JOIN GROUPS on GROUP_USER.GROUPOID = GROUPS.OID LEFT JOIN USERS on GROUP_USER.USEROID = USERS.OID where GROUPS.ID = 'CUSTORDER_ERP_SIGNHUMAN_001') and ISMAIN = '1'";
    }
    var tSqld = new Array(sql);
    var SQLLabel = new Array("人员账号", "人员姓名", "部门", "公司");// 客制开窗的Grid Label
    var QBEField = new Array("USERID", "USERNAME");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("人员账号", "人员姓名", "部门", "公司");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_erp_signid", "tb_erp_signname", "ht_temp", "ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

function btn_reason_no_delete_onclick() {
    tb_reason_no.value = "";
}

//选择料号、客户产品编号
function btn_erpno_onclick() {
    if (!notNullCheckById("d_account_set", "来源账套不能为空！")
        || !notNullCheckById("tb_so", "SO单据别不能为空！")
        || !notNullCheckById("date_order_txt", "订单日期不能为空！")
        || !notNullCheckById("tb_cust_no", "客户编号不能为空！")
        || !notNullCheckById("tb_price_limit_no", "价格条件不能为空！")
        || !notNullCheckById("tb_currency", "币别不能为空！")
    ) {
        tb_erpno.value = "";
        tb_cust_productno.value = "";
        return false;
    }
    if (tb_price_limit_no.value == "") {
        alert("请先选择价格条件！");
        return false;
    }
    if ((tb_supplier_no.value == "") && (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA")) {
        alert("供应商不能为空！");
        tb_erpno.value = "";
        tb_cust_productno.value = "";
        return false;
    }

    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT TC_OBK04,TC_OBK06,tc_obk02,OCC02,TC_OBK03,IMA31 from XPC.TC_OBK_FILE LEFT JOIN OCC_FILE ON TC_OBK_FILE.TC_OBK02 = OCC_FILE.OCC01 INNER JOIN IMA_FILE ON TC_OBK04 = IMA01 where 1=1 AND TC_OBK02 = '" + tb_cust_no.value + "' ";
    /*var sql = " SELECT TC_OBK04,TC_OBK06,tc_obk02,OCC02,TC_OBK03 from XPC.TC_OBK_FILE LEFT JOIN OCC_FILE ON TC_OBK_FILE.TC_OBK02 = OCC_FILE.OCC01 where 1=1 ";*/
    var tSqld = new Array(sql);
    var SQLLabel = new Array("产品编号", "客户产品编号", "最终客户编号", "最终客户简称", "币别", "单位");// 客制开窗的Grid Label
    var QBEField = new Array("TC_OBK04", "TC_OBK06", "tc_obk02", "OCC02", "TC_OBK03");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("产品编号", "客户产品编号", "最终客户编号", "最终客户简称", "币别");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_erpno", "tb_cust_productno", "ht_temp", "ht_temp", "ht_temp", "tb_unit");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择单位
function btn_unit_onclick() {
    if (!clearGrid()) {
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT GFE01,GFE02 from GFE_FILE where 1=1 AND GFEACTI = 'Y' ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("单位", "说明");// 客制开窗的Grid Label
    var QBEField = new Array("GFE01", "GFE02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("单位", "说明");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_unit", "ht_temp");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择成本中心
function btn_cost_center_onclick() {
    if (d_account_set.value == "") {
        alert("请先选择来源账套！");
        return false;
    }
    var FileName = "SingleOpenWinWinHiddenFuzzy";// 单选开窗
    var sql = " SELECT GEM01,GEM02 from " + account_set + ".GEM_FILE where 1=1 AND GEMACTI = 'Y' order by decode(GEM01, '90601','01', '90602','02', '90603','03', '90604','04', '90606','05', '90610','06', '90611','07', '90612','08', '90630','09') ";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("成本中心代号", "成本中心名称");// 客制开窗的Grid Label
    var QBEField = new Array("GEM01", "GEM02");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("成本中心代号", "成本中心名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_cost_center_id", "tb_cost_center");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "01HZJM", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}


//选取资料所有者

/**
 * Grid增加
 */
function btn_add_onclick() {
    if (!addCheck()) {
        return false;
    }
    //量产或试产的时候原因码默认是收费
    g_orderObj.addRow();  //將Binding欄位的資料填入Grid中
    g_orderObj.clearBinding();  //新增後清除Binding欄位資料
    document.getElementById("g_order").value = g_orderObj.toArrayString();  //將新的資料存入Grid隱藏欄位中

    tb_multiple.value = 1;
    FormMgr.toPrettyValue("tb_multiple");
    tb_unit.value = "pcs";
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        dropdownSelected("d_status_firm", "1");
        dropdownSelected("d_ship_via", "3");
    }
}

//Grid编辑   没有编辑项
function btn_edit_onclick() {
    if (!addCheck()) {
        return false;
    }
    g_orderObj.editRow();  //將修改後的欄位的資料填入Grid中
    g_orderObj.clearBinding();  //清除Binding欄位資料
    document.getElementById("g_order").value = g_orderObj.toArrayString();  //將新的資料存入Grid隱藏欄位中

    tb_multiple.value = 1;
    FormMgr.toPrettyValue("tb_multiple");
    tb_unit.value = "pcs";
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        dropdownSelected("d_status_firm", "1");
        dropdownSelected("d_ship_via", "3");
    }
}

/**
 * Grid删除
 */
function btn_delete_onclick() {
    g_orderObj.deleteRow();  //將Grid某筆資料刪除
    g_orderObj.clearBinding();  //清除Binding欄位資料
    document.getElementById("g_order").value = g_orderObj.toArrayString();  //將新的資料存入Grid隱藏欄位中

    tb_multiple.value = 1;
    FormMgr.toPrettyValue("tb_multiple");
    tb_unit.value = "pcs";
}

//邮件通知
function btn_notic_onclick() {
    var FileName = "PluralityOpenWin";// 单选开窗
    var sql = "SELECT ONAME,OUNAME,USERID,USERNAME FROM V_ORG_UNIT_USER_01 WHERE 1=1 AND ISMAIN = '1' ORDER BY OID,OUID,USERID";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("公司", "部门名称", "ID", "姓名");// 客制开窗的Grid Label
    var QBEField = new Array("ONAME", "OUNAME", "USERID", "USERNAME");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("公司", "部门名称", "ID", "姓名");// 模糊查询的Label
    var OriginallyData = new Array("ht_return");// 回传页面上的栏位
    pluralityOpenWin(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, OriginallyData, 720, 600);
}

// 开窗回调函数，选择邮件通知人
function checkPointOnClose(pReturnId) {
    if (pReturnId == "ht_return") {
        var tempArr = eval(ht_return.value);
        ta_notic.value = "";
        ht_notic_ids.value = "";
        for (var i = 0; i < tempArr.length; i++) {
            ta_notic.value = ta_notic.value + tempArr[i][1] + "-" + tempArr[i][2] + "-" + tempArr[i][3] + "-" + tempArr[i][4] + "\n";
            ht_notic_ids.value = ht_notic_ids.value + tempArr[i][3] + ";";
        }
    }

    //选取客户公司后自动带出送货客户和收款客户、惯用币种、价格条件、税种、收款条件还有业务员
    if (pReturnId == "tb_cust_no") {
        getCustInformation();
        getResponsibility();
        if (tb_price_limit_no.value == "001") {
            componentDisable("tb_price_to_cust,tb_pur_price", false);
        } else {
            componentDisable("tb_price_to_cust,tb_pur_price", true);
        }
    }
    //选取价格条件时时设定只有001让填写单价
    if (pReturnId == "tb_price_limit_no") {
        if (tb_price_limit_no.value == "001") {
            componentDisable("tb_price_to_cust,tb_pur_price", false);
            componentDisable("tb_multiple", true); //FUN-2019072901 byljl
        } else {
            componentDisable("tb_price_to_cust,tb_pur_price", true);
        }
        if (tb_deptid.value == "905" || tb_deptid.value == "90501") {
            tb_mka_grouper_id.value = "";
            tb_mka_grouper.value = "";
            if (tb_price_limit_no.value == "001") {
                showColumn("tb_mka_grouper_id,lbl_tb_mka_grouper_id,btn_mka_grouper_id,tb_mka_grouper");
            } else {
                hideColumn("tb_mka_grouper_id,lbl_tb_mka_grouper_id,btn_mka_grouper_id,tb_mka_grouper");
            }
        }
    }
    //选取料号时,如果价格码不是001带出单价
    if (pReturnId == "tb_erpno" && tb_price_limit_no.value != "001") {
        getPrice();
    }
    //选取币别时带出汇率
    if (pReturnId == "tb_currency") {
        getTax();
    }
}

//选择客户时带出业务员信息，带不出的提醒找市场部维护
function getResponsibility() {
    //JS sql查询
    var sql = " select gen01,gen02 from " + account_set + ".occ_file LEFT JOIN " + account_set + ".gen_file on occ_file.occ04 = gen_file.gen01 where 1=1 AND occ_file.OCC01 = '" + tb_cust_no.value + "' ";
    DWREngine.setAsync(false);
    ajax_DatabaseAccessor.executeQuery("01HZJM", sql, null, null, function (data) {
        var resultArray = data.recordValues;//查询结果为一个二维数组
        if (!isResultArrayEmpty(resultArray)) {
            tb_salesman_id.value = emptyStr(resultArray[0][0]);
            tb_salesman.value = emptyStr(resultArray[0][1]);
        } else {
            alert("ERP系统尚未维护业务人员，请联系市场部补录信息！");
            tb_salesman_id.value = "";
            tb_salesman.value = "";
        }
    });
    DWREngine.setAsync(true);
}

//新增修改时必填项校验
function addCheck() {
    if (!notNullCheckById("tb_erpno", "产品编号不能为空！")
        || !notNullCheckById("tb_cust_productno", "客户产品编号不能为空！")
        || !notNullCheckById("tb_unit", "销售单位不能为空！")
        || !notNullCheckById("tb_amount", "数量不能为空！")
        //|| !notNullCheckById("tb_price_to_cust","对客单价不能为空！")
        //|| !notNullCheckById("tb_multiple","倍数不能为空！")
        //|| !notNullCheckById("tb_cost_center","成本中心不能为空！")
        || !notNullCheckById("date_convention_txt", "约定交货日不能为空！")
        || !notNullCheckById("date_plan_txt", "排定交货日不能为空！")
    //|| !notNullCheckById("tb_reason_no","原因码不能为空！")
    ) {
        return false;
    }
    //如果是市场部的人员，对客单价、倍数不能为空
    if (tb_deptid.value == "905" || tb_deptid.value == "90501") {
        if (!notNullCheckById("tb_price_to_cust", "对客单价不能为空！") || !notNullCheckById("tb_multiple", "倍数不能为空！")) {
            return false;
        }
        if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
            if (!notNullCheckById("tb_pur_price", "KPE/XPNA采购单价不能为空！")) {
                return false;
            }
        }

    }

    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        if (!notNullCheckById("d_status_firm", "Status Firm不能为空！")
            || !notNullCheckById("d_ship_via", "Ship Via不能为空！")) {
            return false;
        }
    }
    if (d_account_set.value != "0GKPE" && d_account_set.value != "0FXPNA") {//成本中心只有账套为HZJM/KPL/TGTL时才需要选
        if (!notNullCheckById("tb_cost_center", "成本中心不能为空！")) {
            return false;
        }
    }
    if (d_review_status.value == "样品") {//样品才需要选原因码，量产和样品的原因码肯定是收费102
        if (!notNullCheckById("tb_reason_no", "原因码不能为空！")) {
            return false;
        }
    } else if (d_review_status.value == "量产" || d_review_status.value == "试产") {
        // 2019-06-21 14:26:04 czc [应急措施]量产/试产类别，原因码强制为空
        tb_reason_no.value = "";
    } else {
        tb_reason_no.value = "102";
    }
    if ((d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") && d_is_xpe.value == "是") {
        if (!notNullCheckById("tb_warehouse", "出货仓库不能为空！")) {
            return false;
        }
    }

    /*if((d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") && d_review_status.value == "样品" && tb_reason_no.value == "200"){
        //KPE和XPNA免费样品的对客单价必须为0.1
        if(tb_price_to_cust.value != "0.1"){
            alert("KPE/XPNA免费样品时，对客单价只能为0.1！");
            return false;
        }
    }*/
    return true;
}

//检查，不能同时有收费和免费的情况出现
function reasonNoCheck() {
    var gridArray = eval(g_order.value);
    for (var i = 0; i < gridArray.length; i++) {
        if (gridArray[i][10] != gridArray[0][10]) {
            alert("同一条流程中原因码需保持一致，请更改！");
            return false;
        }
    }
    return true;
}

//确认是否需要市场部业务员填单价,如果需要市场部业务员不能为空
function getMkaReponse() {
    //样品或试产且原因码为102收费（试产肯定收费）
    var gridArray = eval(g_order.value);
    if ((d_review_status.value == "试产" || (d_review_status.value == "样品" && gridArray[0][10] == "102")) && tb_deptid.value != "905" && tb_deptid.value != "90501") {
        ht_mka_response.value = "YES";
    } else {
        ht_mka_response.value = "NO";
    }
    if (ht_mka_response.value == "YES") {
        if (!notNullCheckById("tb_mka_responsor_id", "市场部业务员不能为空！")) {
            return false;
        }
    } else {
        tb_mka_responsor_id.value = "";
        tb_mka_responsor.value = "";
    }
    return true;
}

//必填项校验
function deteParams() {
    if (!notNullCheckById("d_account_set", "来源账套不能为空！")
        || !notNullCheckById("d_order_nature", "订单性质不能为空！")
        || !notNullCheckById("d_order_type", "类别不能为空！")
        || !notNullCheckById("tb_so", "SO单据别不能为空！")
        || !notNullCheckById("date_order_txt", "订单日期不能为空！")
        || !notNullCheckById("tb_userid", "资料所有者不能为空！")
        || !notNullCheckById("tb_deptid", "资料所有部门不能为空！")
        || !notNullCheckById("tb_cust_no", "客户编号不能为空！")
        || !notNullCheckById("tb_cust_shortname", "客户编号不能为空！")
        || !notNullCheckById("tb_cust_order", "客户订单不能为空！")
        || !notNullCheckById("tb_delivery_no", "送货客户不能为空！")
        || !notNullCheckById("tb_delivery_name", "送货客户不能为空！")
        || !notNullCheckById("tb_currency", "币别不能为空！")
        //|| !notNullCheckById("tb_collection_no","收款客户不能为空！")
        //|| !notNullCheckById("tb_collection_name","收款客户不能为空！")
        || !notNullCheckById("tb_price_limit", "价格条件不能为空！")
        || !notNullCheckById("tb_salesman", "业务员不能为空！")
        || !notNullCheckById("tb_collection_terms_id", "收款条件不能为空！")
    ) {
        return false;
    }
    //非项目部的人填写时，付款客户不能为空
    if (!judgeDeptBelong() || (mainOrgId == "01HZJM" && (mainOrgUnitIds == "905" || mainOrgUnitIds == "90501"))) {
        if (!notNullCheckById("tb_collection_no", "付款客户不能为空！")
            || !notNullCheckById("tb_collection_name", "付款客户不能为空！")
        ) {
            return false;
        }
    }
    if (d_account_set.value != "01HZJM") {
        if (!notNullCheckById("tb_process_no", "多角贸易流程代码不能为空！")) {
            return false;
        }
    }
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        if (!notNullCheckById("tb_po", "PO单据别不能为空！")
            || !notNullCheckById("tb_final_cust_no", "最终客户编号不能为空！")
            || !notNullCheckById("tb_final_cust_name", "最终客户编号不能为空！")
            || !notNullCheckById("tb_pur_order", "KPE/XPNA采购单号不能为空！")
            || !notNullCheckById("tb_supplier", "供应商不能为空！")
            || !notNullCheckById("tb_pay_type_id", "付款方式不能为空！")
            || !notNullCheckById("tb_tax_id", "税种不能为空！")

        ) {
            return false;
        }
    }
    //量产的价格条件不能为001手工录入
    if (d_review_status.value == "量产" && tb_price_limit_no.value == "001") {
        alert("评审状态为量产时，价格条件不能为001");
        return false;
    }
    if (d_review_status.value == "量产") {
        if (tb_deptid.value != "905" && tb_deptid.value != "90501") {
            if (!notNullCheckById("tb_mka_id", "主管/组长确认人不能为空！")) {
                return false;
            }
        }
    }
    if (!notNullCheckById("tb_erp_signid", "ERP系统审核人不能为空！")) {
        return false;
    }
    //市场部价格条件为001、组长签核不能为空
    if (tb_deptid.value == "905" || tb_deptid.value == "90501") {
        if (tb_price_limit_no.value == "001") {
            if (tb_mka_grouper_id.value == "") {
                alert("请选择组长签核人");
                return false;
            }
        } else {
            tb_mka_grouper_id.value = "";
            tb_mka_grouper.value = "";
        }
    }

    return true;
}

//判断部们是否属于市场部或项目部(false代表不属于，true代表属于)
function judgeDeptBelong() {
    if ((mainOrgId != "01HZJM" && mainOrgId != "0CHZJB") || (mainOrgId == "01HZJM" && (mainOrgUnitIds != "905" && mainOrgUnitIds != "90501" && mainOrgUnitIds != "90601" && mainOrgUnitIds != "90602" && mainOrgUnitIds != "90603" && mainOrgUnitIds != "90604" && mainOrgUnitIds != "90606" && mainOrgUnitIds != "90610" && mainOrgUnitIds != "90611" && mainOrgUnitIds != "90612" && mainOrgUnitIds != "90630" && mainOrgUnitIds != "109" && mainOrgUnitIds != "115")) || (mainOrgId == "0CHZJB" && mainOrgUnitIds != "109")) {
        return false;
    } else {
        return true;
    }
}

//点击grid数据时隐藏显示千分位的特殊栏位
function gridRowClick() {
    if (d_account_set.value != "0GKPE" && d_account_set.value != "0FXPNA") {
        hideColumn("explicit_tb_pur_price");
    }
    hiddenPrice();

}

//数字金额的校验（数量）
function tb_amount_onkeyup() {
    var event = arguments.callee.caller.arguments[0] || window.event;
    if (event.keyCode == 13) {
        tb_amount_onblur();
    }
}

function tb_amount_onblur() {
    if (!numberCheck("tb_amount", true, "请输入数字！")) {
        return false;
    }
}

//数字金额的校验（对客单价）
function tb_price_to_cust_onkeyup() {
    var event = arguments.callee.caller.arguments[0] || window.event;
    if (event.keyCode == 13) {
        tb_price_to_cust_onblur();
        getMultiple();
        //getMultiple2();
    }
}

function tb_price_to_cust_onblur() {
    if (!numberCheck("tb_price_to_cust", true, "请输入数字！")) {
        return false;
    }

}

//数字金额的校验（KPE/XPNA采购单价）
function tb_pur_price_onkeyup() {
    var event = arguments.callee.caller.arguments[0] || window.event;
    if (event.keyCode == 13) {
        tb_pur_price_onblur();
        //getMultiple();
        getMultiple2();
    }
}

function tb_pur_price_onblur() {
    if (!numberCheck("tb_pur_price", true, "请输入数字！")) {
        return false;
    }

}

//数字金额的校验（倍数）为数字或0.5的倍数
function tb_multiple_onkeyup() {
    var event = arguments.callee.caller.arguments[0] || window.event;
    if (event.keyCode == 13) {
        tb_multiple_onblur();
        getMultiple();
        getMultiple2();
    }
}

function tb_multiple_onblur() {
    if (!numberCheck("tb_multiple", true, "请输入数字！")) {
        return false;
    }
    CheckInputIntFloat(tb_multiple.value);
}

//计算对客单价和倍数乘积（样品、试产、倍数不为1）FUN-2019072901 by ljl
function getMultiple() {
    if (d_review_status.value == "样品" || d_review_status.value == "试产") {
        if (tb_price_to_cust.value != "" && tb_multiple.value != "") {
            tb_price_to_cust.value = accMul(priceCust, tb_multiple.value);
            FormMgr.toPrettyValue("tb_price_to_cust");
            hiddenPriceExplicete();
        }
    }
}

//计算采购单价和倍数乘积（样品、试产、倍数不为1）FUN-2019072901 by ljl
function getMultiple2() {
    if (d_review_status.value == "样品" || d_review_status.value == "试产") {
        if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
            if (tb_pur_price.value != "" && tb_multiple.value != "") {
                tb_pur_price.value = accMul(pricePur, tb_multiple.value);
                FormMgr.toPrettyValue("tb_pur_price");
                hiddenPriceExplicete();
            }
        }
    }
}

//排定交货日等同于约定交货日
function getDatePlan() {
    date_plan.value = date_convention.value;
}

setInterval("getDatePlan()", 1000);


//导出Excel
function btn_export_onclick() {
    if (isEmpty(g_order.value) || g_order.value.length <= 4) {
        return false;
    }
// 表头信息 byxiaolin 20190730
    var tableArray = new Array();
    tableArray[0] = d_account_set.value;//来源账套
    tableArray[1] = d_factory.value;//出货工厂
    tableArray[2] = d_review_status.value;//评审状态
    tableArray[3] = d_is_xpe.value;//是否经过xpe
    tableArray[4] = d_order_nature.value;//订单性质
    tableArray[5] = tb_cust_no.value;//客户编号
    tableArray[6] = tb_cust_shortname.value;//客户名称
    tableArray[7] = tb_salesman.value;//业务员
    tableArray[8] = tb_order1.value;//内销订单号码
    tableArray[9] = tb_order2.value;//KPE/XPNA采购单号
    tableArray[10] = tb_order3.value;//外销订单号
    tableArray[11] = tb_currency.value;//币别
    tableArray[12] = tb_cust_order.value;//客户订单号
    tableArray[13] = tb_pur_order.value;//KPE/XPNA PO号

    if (tableArray[4] == "1") {
        tableArray[4] = "内销";
    }
    if (tableArray[4] == "2") {
        tableArray[4] = "外销";
    }
    if (tableArray[4] == "3") {
        tableArray[4] = "转厂";
    }

    var exportArr = eval(g_order.value);
    for (var x = 0; x < exportArr.length; x++) {
        for (var i = 0; i < tableArray.length; i++) {
            exportArr[x][exportArr[x].length] = tableArray[i];
        }
    }
    var titleArr = new Array("序号", "产品编号", "客户产品编号", "销售单位", "数量", "对客单价", "KPE/XPNA采购单价", "倍数", "成本中心代号", "成本中心名称", "原因码", "约定交货日", "排定交货日", "Status Firm", "Ship Via", "出货仓库", "来源账套", "出货工厂", "评审状态", "是否经过xpe", "订单性质", "客户编号", "客户名称", "业务员", "内销订单号码", "KPE/XPNA采购单号", "外销订单号", "币别", "客户PO号", "KPE/XPNA PO号");// 回传页面上的栏位
    var folderName = "DEFAULT_EXPORT";
    var fileName = "CUSTORDER_EXPORT";
    DWREngine.setAsync(false);
    ajax_ExcelAjax.exportExcelDefaultArr(folderName, fileName, exportArr, titleArr, function (data) {
        fileName = data;
    });
    DWREngine.setAsync(true);
    setTimeout("download('" + folderName + "','" + fileName + "')", 1000);
}

function download(folderName, fileName) {
    window.open(EFGP_getServer() + "/NaNaWeb/ExcelExport/" + folderName + "/" + fileName + ".xls");
}


//获取单价
function getPrice() {
    //判断哪些栏位不能为空（否则获取单价信息不够）
    var basicArray = new Array();
    basicArray[0] = d_account_set.value;//来源账套
    basicArray[1] = tb_so.value;//SO单据据别
    basicArray[2] = date_order.value.substring(2, 10);//订单日期
    basicArray[3] = tb_cust_no.value;//账款客户编号
    basicArray[4] = tb_price_limit_no.value;//价格条件编号
    basicArray[5] = tb_currency.value;//币别
    basicArray[6] = tb_supplier_no.value;//供应厂商
    basicArray[7] = "1";//项次
    basicArray[8] = tb_erpno.value;//产品编号
    basicArray[9] = tb_unit.value;//单位
    basicArray[10] = "1";//数量
    DWREngine.setAsync(false);
    ajax_ErpWsAjax.getPrice(basicArray, function (data) {
        var priceArray = data;
        if (priceArray[0] == "无法正常获取单价，请恰管理员！") {
            alert("请检查录入客户、币别、料号等数据是否匹配并且确保ERP系统中有维护此类单价，如以上没有问题，请恰管理员！");
            clearColumnValue("tb_erpno,tb_cust_productno,tb_price_to_cust,tb_pur_price");
            hiddenPriceExplicete();
            //hideColumn("explicit_tb_price_to_cust,explicit_tb_pur_price");
        } else {
            tb_price_to_cust.value = priceArray[0];
            //FUN-2019072901 ljl
            priceCust = priceArray[0];
            FormMgr.toPrettyValue("tb_price_to_cust");
            if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
                tb_pur_price.value = priceArray[1];
                //FUN-2019072901 ljl
                pricePur = priceArray[1];
                FormMgr.toPrettyValue("tb_pur_price");
            }
            hiddenPriceExplicete();
            //hideColumn("explicit_tb_price_to_cust,explicit_tb_pur_price");
        }
    });
    DWREngine.setAsync(true);
}

//检验倍数栏位的数值是0.5的倍数
function CheckInputIntFloat(el) {
    //除以0.5得到的值为正整数
    var temp = accDiv(el, 0.5);
    var reg = /^\+?[1-9][0-9]*$/;
    if (!reg.test(temp)) {
        alert("倍数栏位只能为0.5的正整数倍！");
        tb_multiple.value = "";
    }
}

//非市场部的人员，所有单价都隐藏,申请人都不能看
function hiddenPrice() {
    if (mainOrgId != "01HZJM" || (mainOrgId == "01HZJM" && mainOrgUnitIds != "905" && mainOrgUnitIds != "90501")) {
        hideColumn("lbl_tb_price_to_cust,tb_price_to_cust,explicit_tb_price_to_cust,lbl_tb_pur_price,tb_pur_price,explicit_tb_pur_price");
    }
}

//隐藏单价的显示值栏位
function hiddenPriceExplicete() {
    if (mainOrgId != "01HZJM" || (mainOrgId == "01HZJM" && mainOrgUnitIds != "905" && mainOrgUnitIds != "90501")) {
        hideColumn("explicit_tb_price_to_cust,explicit_tb_pur_price");
    } else {
        if (d_account_set.value == "01HZJM" || d_account_set.value == "02KPL" || d_account_set.value == "0OTGTL") {
            hideColumn("explicit_tb_pur_price");
        }
    }
}

//量产时，系统根据账套和评审状态自动获取价格条件（HZJM为内销核价，其他都是外销核价），但是量产中的售后件有手工录入单价
function getPriceLimit() {
    if (d_account_set.value == "01HZJM" && d_review_status.value == "量产") {
        tb_price_limit_no.value = "003";
        tb_price_limit.value = "内销客户订价(内销核价)";
    } else if ((d_account_set.value == "02KPL" || d_account_set.value == "0OTGTL" || d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") && d_review_status.value == "量产") {
        tb_price_limit_no.value = "002";
        tb_price_limit.value = "外销客户部门订价(外销核价)";
    } else {
        tb_price_limit_no.value = "";
        tb_price_limit.value = "";
    }
}

//选择市场部业务员
function btn_mka_responsor_id_onclick() {
    var FileName = "SingleOpenWinWinHidden";// 单选开窗
    var sql = "select USERID,USERNAME from V_ORG_UNIT_USER_01 where 1=1 and OID = '01HZJM' and OUID in ('905','90501')";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("人员代号", "人员名称");// 客制开窗的Grid Label
    var QBEField = new Array("USERID", "USERNAME");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("人员代号", "人员名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_mka_responsor_id", "tb_mka_responsor");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//选择市场部组长
function btn_mka_grouper_id_onclick() {
    var FileName = "SingleOpenWinWinHidden";// 单选开窗
    var sql = "SELECT USERID,USERNAME from V_ORG_UNIT_USER_01 where 1=1 and USERID in (select USERS.ID from GROUPS INNER JOIN GROUP_USER on GROUPS.OID = GROUP_USER.GROUPOID INNER JOIN USERS on GROUP_USER.USEROID = USERS.OID where GROUPS.ID = 'MKA_GROUP_LEADER')";
    var tSqld = new Array(sql);
    var SQLLabel = new Array("人员代号", "人员名称");// 客制开窗的Grid Label
    var QBEField = new Array("USERID", "USERNAME");// 模糊查询，须和DB Table字段名称相同
    var QBELabel = new Array("人员代号", "人员名称");// 模糊查询的Label
    var pHidden = new Array("999");
    var OriginallyData = new Array("tb_mka_grouper_id", "tb_mka_grouper");// 回传页面上的栏位
    singleOpenWinHidden(FileName, "EFGP", tSqld, SQLLabel, QBEField, QBELabel, pHidden, OriginallyData, 720, 430);
}

//市场部业务员填写表单时校验,组长签核人、倍数
function mkaformSave() {
    //付款客户不能为空
    if (!notNullCheckById("tb_collection_no", "付款客户不能为空！")
        || !notNullCheckById("tb_collection_name", "付款客户不能为空！")
    ) {
        return false;
    }
    if (tb_price_limit_no.value == "001") {
        if (tb_mka_grouper_id.value == "") {
            alert("请选择组长签核人");
            return false;
        }
    } else {
        tb_mka_grouper_id.value = "";
        tb_mka_grouper.value = "";
    }
    var gridArray = eval(g_order.value);
    for (var i = 0; i < gridArray.length; i++) {
        if (gridArray[i][7] == "") {
            alert("倍数不能为空");
            return false;
        }
    }
    return true;
}

//保存时如果是002、003重新获取一遍价格，试产样品乘以倍数，如果获取不到则给弹窗提示不能派送
function mkaGetPrice() {
    if (tb_price_limit_no.value == "002" || tb_price_limit_no.value == "003") {
        var gridArray = eval(g_order.value);
        for (var i = 0; i < gridArray.length; i++) {
            var tempArray = new Array();
            var priceArray = new Array();
            tempArray[0] = d_account_set.value;//来源账套
            tempArray[1] = tb_so.value;//SO单据据别
            tempArray[2] = date_order.value.substring(2, 10);//订单日期
            tempArray[3] = tb_cust_no.value;//账款客户编号
            tempArray[4] = tb_price_limit_no.value;//价格条件编号
            tempArray[5] = tb_currency.value;//币别
            tempArray[6] = tb_supplier_no.value;//供应厂商
            tempArray[7] = "1";//项次
            tempArray[8] = gridArray[i][1];//产品编号
            tempArray[9] = "pcs";//单位
            tempArray[10] = "1";//数量*/
            priceArray = getPrice2(tempArray);
            if (priceArray[0] == "无法正常获取单价，请恰管理员！") {
                alert("无法正常获取单价，请检查录入客户、币别、料号等数据是否匹配并且确保ERP系统中有维护此类单价，如以上没有问题，请恰管理员！");
                return false;
            } else {
                if (d_review_status.value == "样品" || d_review_status.value == "试产") {
                    gridArray[i][5] = accMul(priceArray[0], gridArray[i][7]);
                    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
                        gridArray[i][6] = accMul(priceArray[1], gridArray[i][7]);
                    }
                } else {
                    gridArray[i][5] = priceArray[0];
                    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
                        gridArray[i][6] = priceArray[1];
                    }
                }
            }
        }
        //重写grid
        g_orderObj.reload(gridArray);
        g_order.value = g_orderObj.toArrayString();
    }
    return true;
}

//市场部业务员获取价格
function getPrice2(basicArray) {
    var priceArray = new Array();
    DWREngine.setAsync(false);
    ajax_ErpWsAjax.getPrice(basicArray, function (data) {
        priceArray = data;
    });
    DWREngine.setAsync(true);
    return priceArray;
}

//市场部业务员关卡处获取完单价后确认单价是否为空
function judgePrice() {
    var gridArray = eval(g_order.value);
    for (var i = 0; i < gridArray.length; i++) {
        if (gridArray[i][5] == "") {
            alert("对客单价不能为空！");
            return false;
        }
        if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
            if (gridArray[i][6] == "") {
                alert("采购单价不能为空！");
                return false;
            }
        }
    }
    return true;
}

function getFree() {
    var gridArray = eval(g_order.value);
    if (d_account_set.value == "0GKPE" || d_account_set.value == "0FXPNA") {
        for (var i = 0; i < gridArray.length; i++) {
            if (gridArray[i][10] == "200") {
                gridArray[i][5] = "0.1";
                gridArray[i][6] = "0";
            }
        }
        //重写grid
        g_orderObj.reload(gridArray);
        g_order.value = g_orderObj.toArrayString();
    }

}

//市场部业务员打开表单时设置不可填写部分为灰色
function setLabelGray() {
    if (activityId == "act_mka_responsor") {
        componentBgColor("d_account_set,d_order_nature,d_order_type,d_factory,d_review_status,d_is_xpe,tb_so,tb_so_name,tb_po,tb_po_name,tb_process_no,date_order_txt,tb_cust_no,tb_cust_shortname,d_is_virtual,tb_cust_order,d_is_virtual2,tb_pur_order,tb_currency,tb_salesman_id,tb_salesman,tb_erpno,tb_unit,tb_amount,tb_cost_center_id,tb_cost_center,tb_reason_no,date_convention_txt,date_plan_txt,tb_warehouse,tb_mka_id,tb_mka_name,tb_erp_signid,tb_erp_signname,tb_mka_responsor_id,tb_mka_responsor", 'c7c7c7');
    } else {
        componentBgColor("d_account_set,d_order_nature,d_order_type,d_factory,d_review_status,d_is_xpe,tb_so,tb_so_name,tb_po,tb_po_name,tb_process_no,date_order_txt,tb_cust_no,tb_cust_shortname,d_is_virtual,tb_cust_order,d_is_virtual2,tb_pur_order,tb_currency,tb_salesman_id,tb_salesman,tb_erpno,tb_unit,tb_amount,tb_cost_center_id,tb_cost_center,tb_reason_no,date_convention_txt,tb_warehouse,tb_mka_id,tb_mka_name,tb_erp_signid,tb_erp_signname,tb_mka_responsor_id,tb_mka_responsor", 'ffffff');
    }
}

/**
 * 检查明细倍数和价格条件
 * @returns {boolean}
 */
function checkPriceLimitNo() {
    var tempArr = eval(g_orderObj.toArrayString());
    for (var i = 0; i < tempArr.length; i++) {
        if (!isEmpty(tempArr[i][7]) && Number(tempArr[i][7]) > 1 && tb_price_limit_no.value != "001") {
            alert("序号 " + tempArr[i][0] + " 的明细倍数不是1, 价格条件将更改为001(手工录入)");
            tb_price_limit_no.value = "001";
            tb_price_limit.value = "产品单价 (手工录入)";
        }
    }
    return true;
}


//$-----Auto generated script block, Please do not edit or modify script below this line.-----$tb_cust_productno//