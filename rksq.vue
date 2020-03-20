<template>
    <div class="pallet">
        <van-tabs v-model="activeName" swipeable animated>
            <van-tab title="扫描作业" name="a" :style="{position:'relative'}">
                <div :style="{height:tabHeight+'px',overflow:'auto'}" class="box">
                    <van-cell-group class="top_pallet">
                        <van-row>
                            <van-col span="24">
                                <van-field
                                    clearable
                                    label="入库单扫描"
                                    v-model="sfu01"
                                    placeholder=""
                                    ref="in_sfu01"
                                    @keyup.enter="bt_sfu01"
                                    class="font12 yellow_back"
                                />
                            </van-col>                          
                        </van-row>                       
                        <van-row>
                            <van-col span="24">
                                <van-field
                                    clearable
                                    label="内码扫描框"
                                    v-model="barcode"
                                    placeholder=""
                                    ref="in_barcode"
                                    @keyup.enter="bt_barcode"
                                    class="font12 yellow_back"
                                />
                            </van-col>
                        </van-row>
                        <h2 class="van-doc-demo-block__title">内部条码信息</h2> 
                        <van-row>
                            <van-col span="12">
                                <van-field
                                    label="料号"
                                    :readonly="true"
                                    placeholder=""
                                    v-model="ima01"
                                    ref="in_ima01"
                                />
                            </van-col>
                            <van-col span="12">
                                <van-field
                                    :readonly="true"
                                    label="规格"
                                    v-model="obk03"
                                    placeholder=""                                    
                                />
                            </van-col>
                        </van-row>
                         <van-row>
                            <van-col span="12">
                                <van-field
                                    label="批号"
                                    :readonly="true"
                                    placeholder=""
                                    v-model="batch"
                                    ref="in_batch"
                                />
                            </van-col>
                            <van-col span="12">
                                <van-field
                                    :readonly="true"
                                    label="数量"
                                    v-model="cnnum"
                                    placeholder=""                                    
                                />
                            </van-col>
                        </van-row>
                        <van-row class="van-doc-demo-block__title">
                            <van-col span="20">
                                &nbsp;
                            </van-col>
                            <van-col span="4">
                                {{percent}}
                            </van-col>
                        </van-row>                                                
                    </van-cell-group>
                     <!--工单列表内容-->
                    <van-cell class="pallent_GDList">
                        <template slot="title">
                        <div class="van-row">
                            <div class="van-col van-col--9"><span>工单号</span></div>
                            <div class="van-col van-col--5"><span>料号</span></div>
                            <div class="van-col van-col--4"><span>仓库</span></div>
                            <div class="van-col van-col--4"><span>库位</span></div>                            
                        </div>
                        <div class="van-row">
                            <div class="van-col van-col--12"><span>批次</span></div>
                            <div class="van-col van-col--6"><span>数量</span></div>
                            <div class="van-col van-col--6"><span>匹配量</span></div>
                        </div>
                        </template>
                    </van-cell>

                    <van-cell class="pallent_GDList" v-for="(a,index) in PostJson" :key="index">
                        <template slot="title">
                            <van-row>
                                <van-col span="9"> <span>{{a.sfu01}}</span></van-col>
                                <van-col span="5"> <span>{{a.sfv04}}</span></van-col>
                                <van-col span="4"><span>{{a.sfv05}}</span></van-col>
                                <van-col span="4"><span>{{a.sfv06}}</span></van-col>                                
                            </van-row>
                            <van-row>
                                <van-col span="12"><span>{{a.sfv07}}</span></van-col>
                                <van-col span="6"><span>{{parseInt(a.sfv09)}}</span></van-col>
                                <van-col span="6"><span>{{a.ogb12_check==''?'':parseInt(a.ogb12_check)}}</span></van-col>
                            </van-row>
                        </template>
                    </van-cell>
                    <!--这是底空出来，为了全显示完整-->
                    <p style="margin-bottom:34px;"></p>
                </div>
            <van-button size="large" type="warning" class="bottom_button" @click="onSubmit">提交</van-button>

            </van-tab>
            <van-tab title="扫描明细" name="b">
                <ul class="pallet_smmx_title">
                   <li class="van-cell">
                    <van-row>
                        <van-col span="10">
                            <span>条码</span>
                        </van-col>
                        <van-col span="10">
                            <span>批号</span>
                        </van-col>
                        <van-col span="2">
                            <span>数量</span>
                        </van-col>
                        <van-col span="2">
                            <span></span>
                        </van-col>
                    </van-row>
                    </li>
                </ul>
                <ul class="smmx box" :style="{height:winHeight+'px',overflow:'auto'}">
                    <li v-for="(a,index) in SMMX"  class="van-cell" :key="a.barcode">
                        <van-row>
                        <van-col span="10">
                            <span>{{a.barcode}}</span>
                        </van-col>
                        <van-col span="10">
                            <span>
                            {{a.batch}}
                            </span>
                        </van-col>
                        <van-col span="2">
                            <br>
                            <span>{{parseInt(a.cnnum)}}</span>
                        </van-col>
                        <van-col span="2">
                            <br>
                            <van-button icon="cross" type="danger" size="mini" @click="Del_smmx(a,index)"/>
                        </van-col>
                    </van-row>
                    </li>
                </ul>
            </van-tab>
        </van-tabs>
        <!--返回按钮-->
        <van-button icon="arrow-left" type="default" class="topleft" @click="bt_back"></van-button>
        <!--popup弹出窗口-->
        <van-popup v-model="showPicker" position="bottom" class="pallent_popup">
            <van-row>
                <van-col span="8">出货单</van-col>
                <van-col span="6">出货日期</van-col>
                <van-col span="4">客户编号</van-col>
                <van-col span="6">客户简称</van-col>
            </van-row>
            <van-row v-for="a in columns" :key="a.oga01" @click="check_oga01(a)">
                <van-col span="8">{{a.oga01}}</van-col>
                <van-col span="6">{{a.oga02}}</van-col>
                <van-col span="4">{{a.oga03}}</van-col>
                <van-col span="6">{{a.oga032}}</van-col>
            </van-row>    
        </van-popup>
    </div>
</template>

<script>
import Common from "@/common/commonfun.js";
import 'vant/lib/icon/local.css';
import {Button,Field,Row, Col,Cell,CellGroup,Tab, Tabs,Picker,Popup,Dialog,Sticky,Notify} from 'vant';

export default {
    components: {
    [Notify.name]: Notify,
    [Sticky.name]: Sticky,
    [Popup.name]: Popup,
    [Picker.name]: Picker,
    [Tab.name]: Tab,
    [Tabs.name]: Tabs,
    [CellGroup.name]: CellGroup,
    [Cell.name]: Cell,
    [Row.name]: Row,
    [Col.name]: Col,
    [Field.name]: Field,
    [Button.name]: Button,
  },

   data() {
    return {
        activeName: 'a',showPicker:false,columns:[],
        type_caption:'B：JMSQ',type:'1',sfu01:'',sfu02:'',sfv03:'',sfv11:'',
        sfv04:'',ima15:'',ima02:'',sfv05:'',sfv06:'',serialnom:'',
        sfv07:'',sfv09:0,sfvud04:0,ima01:'',obk03:'',
        partnm:'',quantity:'',boxes:'',partns:'',serialnos:'',barcode:'',batch:'',cnnum:0,
        SMMX: [],PostJson:[],xjson:{},readycount:0,sumtcount:0,
        winHeight:window.innerHeight-78,
        tabHeight:window.innerHeight-44
    }
   },
     
    created(){
        //获取出货清单列表
        let jsonList=Common.Get_Info_AjAx('GetBarCxmt610xb',{});
        //let jsonList=Common.Get_Info_AjAx('GetCsft620jmsq',{'sfu01':'63A1-20032445'});
        let a = Promise.resolve(jsonList);
        a.then((result)=>{ 
            if(result.code=='0'){
                this.columns=result.list;
            }else{
                Notify(result.description);
            }            
        })
    },

    mounted(){
      //设置APP抬头
      if(window.hasOwnProperty('WebViewJavascriptBridge')){
          window.WebViewJavascriptBridge.callHandler(
              'JSSetTitle'
              ,{"param": "入库申请"}
          );
      }        
    },

    computed: {
        percent:function(){
            if(this.sumtcount==0){
                return '';
            }else{
                return this.quantity+'/'+this.sumtcount;
            }            
        }
    },

     methods: {
         SelctClick:function(){
            this.showPicker=true;
            //window.console.log(this.oga01);
         },

         onSubmit() {
            //Toast('提示：超过本工单最大量，请另添加工单！');
             //先判断有没有数据
            if(this.SMMX.length==0){
                Notify('请先添加扫描内码数据！');
                return false;
            }
            //判断每条数量和匹配量一致
            for(var m=0;m<this.PostJson.length;m++){
                if(parseInt(this.PostJson[m].ogb12)!=parseInt(this.PostJson[m].ogb12_check)){
                    Notify('请核对有数量和匹配量不一致记录！');
                    return false;
                }
            }
            let jsonarr=[];
            for(var i=0;i<this.SMMX.length;i++){
                let tjson={};
                tjson.type='B';       //#类型
                tjson.oga01=this.SMMX[i].oga01;  // #出货单号
                tjson.partnm=this.SMMX[i].partnm;  //#托盘客户产品编号
                tjson.quantity=this.SMMX[i].quantity;   //#托盘标签总数量 
                tjson.serialnom=this.SMMX[i].serialnom;   // #托标签条码
                tjson.barcode=this.SMMX[i].barcode;   //#内部条码
                jsonarr.push(tjson);
            }

            Dialog.confirm({
                title: '提示信息',
                message: '请确认要提交数据？'
            }).then(() => {   
                let jsonList=Common.Post_Info_AjAx('CreateBarCxmt6201xb',jsonarr);
                let a = Promise.resolve(jsonList);
                a.then((result)=>{
                    if(result.code=='0'){                        
                        //返回成功信息
                        Notify({message:"提交成功:"+result.list[0].oga01,duration: 3000,background:'#1989fa'});
                        //清空所有
                        this.oga01='';this.partnm='';this.quantity='';this.serialnom='';
                        this.barcode='';this.serialnos='';this.sumtcount=0;
                        this.SMMX=[];this.PostJson=[];this.xjson={};
                    }else{
                        Notify(result.description)
                    }
                })
            }).catch(() => {
                
            });
         },

        //返回主页事件
        bt_back:function(){
            Dialog.confirm({
                title: '提示信息',
                message: '请确认退出扫描作业？'
            }).then(() => {
                window.location.href='/index#/home?num=0';
            }).catch(() => {
                
            });
        },

        //删除事件
        Del_smmx:function(key,index){
            //window.console.log(index);
            Dialog.confirm({
                title: '提示信息',
                message: '请确认要删除该记录？'
            }).then(() => {
                let temp=key.cnnum;
                for(var i=this.PostJson.length-1;i>=0;i--){
                    //料号和批号相同、并且数量大于匹配量时
                    if(key.ima01==this.PostJson[i].ima01 && key.batch==this.PostJson[i].batch 
                    && (!isNaN(this.PostJson[i].ogb12_check)) && this.PostJson[i].ogb12_check!=''){
                        //window.console.log(this.PostJson[i].ogb12_check);
                        if(parseInt(this.PostJson[i].ogb12_check)>=parseInt(temp)){
                            this.PostJson[i].ogb12_check=parseInt(this.PostJson[i].ogb12_check)-parseInt(temp);
                            break;
                        }else{                        
                            temp=parseInt(temp)-parseInt(this.PostJson[i].ogb12_check);
                            this.PostJson[i].ogb12_check='';
                        }
                    }
                }
                
                this.SMMX.splice(index,1);//删除json第index个元素
                if(this.serialnom==key.serialnom){
                    this.sumtcount=this.sumtcount-key.cnnum;//删除内码上显示的数据，在已经扫描客户托盘显示 
                }
                
                Notify({message:'删除成功！',duration: 3000,background:'#1989fa'});
            })
            .catch((error)=>{
                window.console.log(error);
            });
        },

        //重新记录删除后托盘数量/已扫描量, key要托盘条码, 暂时不使用
        reGetCount:function(key){
            //如果删除托盘条码与当前的托盘条码不一致时，不用处理
            if(key!=this.serialnom){
                return false;
            }
            let check=true;let sumtcount=0;
            //删除后列表
            for(var m=0;m<this.SMMX.length;m++){
                if(this.SMMX[m].serialnom==this.key){
                    if(check){
                        this.quantity=this.SMMX[m].quantity;
                        check=false;
                    }
                    sumtcount+=key.cnnum;
                }
            }
            if(!check){
                this.sumtcount=sumtcount;
            }
        },

        //入库单号扫描事件
        bt_sfu01:function(){
            //window.console.log(key);
            this.PostJson=[];
            this.showPicker=false;

            //获取入库单明细
            let jsonList=Common.Get_Info_AjAx('GetCsft620jmsq',{'sfu01':this.sfu01});
            let a = Promise.resolve(jsonList);
            a.then((result)=>{ 
                if(result.code=='0'){
                    for(var i=0;i<result.list.length;i++){
                        var tjson=result.list[i];
                        tjson.ogb12_check='';
                        this.PostJson.push(tjson);
                    }
                    this.$nextTick(() => {
                        this.$refs.in_barcode.focus();
                    })
                }else{
                    Notify(result.description);
                }            
            })   
        },

        //内码扫描
        bt_barcode:function(){
            //先判断前面项有扫描
            if(this.sfu01==''){
                Notify('请优先扫描入库单信息！');
                return false;
            }
            //判断是否已经扫描过
            for(var m=0;m<this.SMMX.length;m++){
                if(this.SMMX[m].barcode==this.barcode){
                    Notify('已经有扫描过该记录！');
                    return false;
                }
            }
            
            //调用后台接口
            let jsonList=Common.Get_Info_AjAx('GetAimt302',
            {'sfu01':this.sfu01}
            );
            let a = Promise.resolve(jsonList);
            a.then((result)=>{ 
                if(result.code=='0'){    
                    if(result.list[0].match=='Y'){
                       this.ima01=result.list[0].ima01//料号
                       this.obk03=result.list[0].obk03//数量
                       this.batch=result.list[0].batch//批号
                       this.cnnum=result.list[0].cnnum//数量

                       //正常后再添加明细
                        let _self=this;
                        let temp=this.$options.methods.Add_Check(_self,1);
                       
                        window.console.log(temp);
                        if(temp==0){                           
                            //let arr=this.serialnos.split('|');
                            let arr=this.barcode.split('%');
                            //this.sn=isNaN(arr[5])?0:(parseInt(arr[5])); //#箱客户产品数量_累加
                            this.$options.methods.Add_smmx(_self);  
                             window.console.log(_self);                           
                            this.sumtcount=isNaN(arr[3])?this.sumtcount:(this.sumtcount+parseInt(arr[3]));
                            //清空
                            this.barcode='';
                            //如果已扫描累加数量等于托盘数量
                            if(this.sumtcount==this.quantity){
                                this.serialnom='';
                                this.partnm='';
                                this.quantity=0;
                                this.sumtcount=0;
                                //this.sn=0;
                                this.$nextTick(() => {
                                    this.$refs.in_serialnom.focus();
                                })
                            }                                        
                        }
                    }
                }   
            })             
        },

        //扫描内码得到的数据，添加到扫描明细、添加到匹配量去
        Add_smmx:function(_self){
            //添加要提交元素到扫描明细里面
            let json={};
            json.type='B';       //#类型
            json.oga01=_self.oga01;  // #出货单号
            json.partnm=_self.partnm;  //#托盘客户产品编号
            json.quantity=_self.quantity;   //#托盘标签总数量 
            json.serialnom=_self.serialnom;   // #托标签条码
            //json.boxes=_self.boxes;     //#卡板号  
            //json.partns=_self.partns;    //#箱客户产品编号
            //json.serialnos=_self.serialnos;   //#箱标签条码
            json.barcode=_self.barcode;   //#内部条码

            json.ima01=_self.ima01//料号
            json.batch=_self.batch//批号
            json.cnnum=_self.cnnum//数量
            //json.sn=_self.sn//#箱客户产品数量

            _self.SMMX.push(json);
            let _that=_self;
            _self.$options.methods.Add_Check(_that,2);
            
            Notify({message:'扫描内码成功！',duration: 3000,background:'#1989fa'});
            _self.barcode='';
            _self.serialnos='';          
        },

        //添加前确认能添加?有可能扫描有剩下的数量
        //当key为1时，则是判断是否有剩下；当key=2时，则把值赋给变量
        Add_Check:function(_self,key){
            let temp=JSON.parse(JSON.stringify(_self.cnnum));
            let temp_arr=null;
            if(key==1){                
                temp_arr=JSON.parse(JSON.stringify(_self.PostJson));
            }else{
                temp_arr=_self.PostJson;
            }            
            for(var i=0;i<temp_arr.length;i++){
                //料号和批号相同、并且数量大于匹配量时
                if(_self.ima01==temp_arr[i].ima01 && _self.batch==temp_arr[i].batch 
                && (parseInt(temp_arr[i].ogb12)>parseInt(temp_arr[i].ogb12_check) || temp_arr[i].ogb12_check=='')){
                    //当匹配量为空时
                    if(temp_arr[i].ogb12_check==''){
                        //新加量>数量时
                        if(parseInt(temp)>parseInt(temp_arr[i].ogb12)){
                            temp_arr[i].ogb12_check=temp_arr[i].ogb12;
                            temp=parseInt(temp)-parseInt(temp_arr[i].ogb12);
                        }else{
                            temp_arr[i].ogb12_check=temp;
                            temp=0;
                            break;
                        }                        
                    }else if(parseInt(temp_arr[i].ogb12)-parseInt(temp_arr[i].ogb12_check)>=parseInt(temp)){
                            //数量-匹配量>=新加量
                            temp_arr[i].ogb12_check=parseInt(temp_arr[i].ogb12_check)+parseInt(temp);
                            temp=0;
                            break;
                    }else{
                            //新加量>数量-匹配量,temp最后等于差量差                           
                            temp=parseInt(temp)-(parseInt(temp_arr[i].ogb12)-parseInt(temp_arr[i].ogb12_check));
                             temp_arr[i].ogb12_check=temp_arr[i].ogb12;
                            //window.console.log(temp);
                    }
                }
            }
            temp_arr=null;
            return parseInt(temp);
        },

        //托盘条码清空时触发
        in_serialnom_clear:function(){
            this.boxes='';
            this.quantity='';
            this.partnm='';
        },

        //通用扫描后跳转到下一input 
        bt_click:function(key){
            if(key=='serialnom'){
                //扫描托盘条码时
                if(this.oga01==''){
                    Notify('请先选择出货单!');
                    return false;
                }
                //判断是否已经扫描过
                for(var m=0;m<this.SMMX.length;m++){
                    if(this.SMMX[m].serialnom==this.serialnom){
                        Notify(this.serialnom+'已经有扫描过！');
                        return false;
                    }
                } 
                let arr=this.serialnom.split('|');
                //this.boxes=arr[0].substring(arr[0].length-3,arr[0].length);//#卡板号 
                this.partnm=arr[3]; //#托盘客户产品编号
                this.quantity=arr[4]; //#托盘标签总数量 
                //this.serialnom=(this.serialnom==''?'':this.serialnom.substring(1,this.serialnom.length));
                this.$nextTick(() => {
                    this.$refs.in_barcode.focus();
                })  
            }else if(key=='partns'){
                this.partns=(this.partns==''?'':this.partns.substring(1,this.partns.length));
                this.$nextTick(() => {
                    this.$refs.in_barcode.focus();
                })  
            }
        }

     }
}
</script>

<style lang="less">
    .pallet{
        .top_pallet{
            .van-cell{
                padding:5px 0px;
                
            }
            .van-field__label{
                    width:90px;
                    padding-left:5px;
            }
            .wid30 .van-cell__title{width:30px;}
            .font12 .van-field__label,.zfont12 .van-field__control{font-size:12px;}
            .van-doc-demo-block__title {
                margin: 0;
                font-weight: 400;
                font-size: 14px;
                color: rgba(69,90,100,.6);
                padding: 5px 15px;
                background-color: #f8f8f8;
            }
        }
        .pallet_smmx_title,.smmx{
            .van-cell{padding: 5px 0px 5px 5px;font-size: 12px;display:inline-grid;}
            .van-row{width:100%}
            span{word-break: normal;width: auto;display: block;word-wrap: break-word;overflow: hidden;}
            .van-button--mini {min-width:22px;}
        }
        .pallent_popup{
            font-size:12px;
            .van-row{
                margin: 15px 3px;
            }
        }
        .topleft{position:fixed;left: 0;top: 0px;padding: 0 10px;border: 0px solid #fff;}
        .bottom_button{position: absolute;bottom: 0px;left: 0px;width: 100%;height: 34px;line-height: 34px;}
        .pallent_GDList{padding: 5px 5px;font-size:12px;}
        .box::-webkit-scrollbar {display: none;}
        .hiden{display: none;}
        .yellow_back input{background-color: #ffffcc;}
     }
</style>>