(window.webpackJsonp=window.webpackJsonp||[]).push([[12,8,9,10,38,39],{160:function(e,i,s){"use strict";s.d(i,"a",(function(){return t})),s.d(i,"b",(function(){return r}));var t=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"prices",class:{"prices--literal":e.isLiteral,"prices--big":e.isBig}},[e.comparePrice?s("span",{staticClass:"prices__compare"},[e.isLiteral?[s("small",[e._v(" "+e._s(e.i19from)+" ")]),s("s",[e._v(e._s(e.formatMoney(e.comparePrice)))]),s("small",[e._v(" "+e._s(e.i19to)+" ")])]:s("s",[e._v(e._s(e.formatMoney(e.comparePrice)))])],2):e._e(),s("strong",{staticClass:"prices__value"},[e.hasVariedPrices?s("small",[e._v(" "+e._s(e.i19asOf)+" ")]):e._e(),e._v(" "+e._s(e.formatMoney(e.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[e.earnPointsFactor>0&&!(e.pointsMinPrice>e.price)?s("div",{key:"points",staticClass:"prices__points"},[s("i",{staticClass:"i-check-circle"}),e._v(" "+e._s(e.i19youEarn)+" "),s("span",[e._v(" +"+e._s((e.earnPointsFactor*e.price).toFixed(1))+" ")]),s("em",[e._v(e._s(e.pointsProgramName))])]):e._e(),e.installmentsNumber>1&&e.installmentValue?s("div",{key:"installments",staticClass:"prices__installments"},[e.isLiteral?s("small",[e._v(" "+e._s(e.i19upTo)+" ")]):e._e(),e._v(" "+e._s(e.installmentsNumber)+"x "),e.isLiteral?s("small",[e._v(" "+e._s(e.i19of)+" ")]):e._e(),s("span",[e._v(" "+e._s(e.formatMoney(e.installmentValue))+" ")]),!e.monthlyInterest&&e.isLiteral?s("small",[e._v(" "+e._s(e.i19interestFree)+" ")]):e._e()]):e._e(),s("div",{key:"discount-subscription",staticClass:"prices__discount prices__discount--subscription",staticStyle:{color:"var(--success)"}},[s("span",[e._v(" "+e._s(e.formatMoney(.75*e.price))+" ")]),s("small",[e._v(" para assinantes ")])]),"number"==typeof e.priceWithDiscount&&e.priceWithDiscount<e.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof e.discountLabel&&e.discountLabel?[s("span",[e._v(" "+e._s(e.formatMoney(e.priceWithDiscount))+" ")]),s("small",{staticClass:"prices__discount-label"},[e._v(" "+e._s(e.discountLabel)+" ")])]:[s("small",[e._v(" "+e._s(e.i19asOf)+" ")]),s("span",[e._v(" "+e._s(e.formatMoney(e.priceWithDiscount))+" ")])]],2):e._e()])],1)},r=[]},229:function(e,i,s){"use strict";var t=s(22),r=s(30),n=s(67),a={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0}},computed:{deadlineStr(){const e=this.shippingLine,i=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let s=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(s+=e.delivery_time.days),s+=this.productionDeadline,s>1?`${Object(r.a)(t.le)} ${s} `+Object(r.a)(i?t.se:t.fb).toLowerCase():Object(r.a)(1===s?t.ke:e.pick_up?t.Wc:t.hd)},freightValueStr(){const{shippingLine:e}=this,i="number"==typeof e.total_price?e.total_price:e.price;return i?Object(n.a)(i):Object(r.a)(e.pick_up?t.Ab:t.Bb)}}},o=(s(239),s(40)),l=Object(o.a)(a,(function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"shipping-line"},[s("strong",{staticClass:"mr-2"},[e._v(" "+e._s(e.deadlineStr)+" ")]),s("span",{staticClass:"mr-2"},[e._v(" "+e._s(e.freightValueStr)+" ")]),e.shippingLine.delivery_instructions?s("small",[e._v(" "+e._s(e.shippingLine.delivery_instructions)+" ")]):e._e()])}),[],!1,null,null,null);i.a=l.exports},230:function(e,i,s){var t=s(240);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,s(158).default)("3c5ae6b6",t,!0,{})},239:function(e,i,s){"use strict";s(230)},240:function(e,i,s){(i=s(157)(!0)).push([e.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,oBAAoB,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,eAAe",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}"]}]),e.exports=i},286:function(e,i,s){var t=s(350);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,s(158).default)("46663d95",t,!0,{})},349:function(e,i,s){"use strict";s(286)},350:function(e,i,s){(i=s(157)(!0)).push([e.i,".order{min-height:300px}","",{version:3,sources:["EcOrder.scss"],names:[],mappings:"AAAA,OAAO,gBAAgB",file:"EcOrder.scss",sourcesContent:[".order{min-height:300px}"]}]),e.exports=i},368:function(e,i,s){"use strict";s.r(i);var t=s(101),r=s(1),n=s(26),a={name:"EcOrder",components:{EcOrderInfo:s(260).a},props:{order:{type:Object,required:!0},skipDataLoad:{type:Boolean},accountOrdersUrl:{type:String,default:"/app/#/account/orders"},ecomPassport:{type:Object,default:()=>n.a}},data(){return{isReady:this.skipDataLoad,orderBody:{_id:"",...this.order}}},computed:{localOrder:{get(){return this.orderBody},set(e){this.orderBody=e,this.$emit("update:order",e)}}},methods:{fetchOrder(){const e=`/orders/${this.orderBody._id}.json`;(this.ecomPassport.checkLogin()?this.ecomPassport.requestApi(e):Object(r.g)({url:e})).then((e=>{let{data:i}=e;this.localOrder=i,this.isReady=!0}))}},watch:{"order._id"(e){e&&e!==this.orderBody._id&&(this.orderBody=this.order)},"orderBody._id"(e){e&&!this.skipDataLoad&&this.fetchOrder()}},created(){this.skipDataLoad||(this.order._id?this.fetchOrder():this.order.number&&this.ecomPassport.fetchOrdersList().then((e=>{this.localOrder=e.find((e=>{let{number:i}=e;return i===this.order.number}))||{}})))}},o=(s(349),s(40)),l={name:"order",components:{EcOrder:Object(o.a)(a,(function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("article",{staticClass:"order"},[s("transition-group",{attrs:{"enter-active-class":"animated fadeIn slow"}},[e.isReady?s("ec-order-info",{key:"info",attrs:{order:e.localOrder,"skip-first-data-load":""},on:{"update:order":function(i){e.localOrder=i}}}):s("div",{key:"loading"},[s("div",{staticClass:"spinner-border",attrs:{role:"status"}},[s("span",{staticClass:"sr-only"},[e._v("Loading...")])])])],1)],1)}),[],!1,null,null,null).exports},computed:{...Object(t.c)(["orders"]),number(){const e=this.$route.params.number;return/^[0-9]+$/.test(e)&&parseInt(e,10)},order(){const e=this.orders.find((e=>{let{_id:i,number:s}=e;return this.number===s||this.$route.params.number===i}));if(!e){const{number:e}=this;return e?{_id:this.$route.params.id,number:e}:{_id:this.$route.params.number}}return e}}},c=Object(o.a)(l,(function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{attrs:{id:"order"}},[s("ec-order",{attrs:{order:e.order}})],1)}),[],!1,null,null,null);i.default=c.exports}}]);