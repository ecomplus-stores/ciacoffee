(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,9,10,38,39],{160:function(e,i,s){"use strict";s.d(i,"a",(function(){return t})),s.d(i,"b",(function(){return r}));var t=function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"prices",class:{"prices--literal":e.isLiteral,"prices--big":e.isBig}},[e.comparePrice?s("span",{staticClass:"prices__compare"},[e.isLiteral?[s("small",[e._v(" "+e._s(e.i19from)+" ")]),s("s",[e._v(e._s(e.formatMoney(e.comparePrice)))]),s("small",[e._v(" "+e._s(e.i19to)+" ")])]:s("s",[e._v(e._s(e.formatMoney(e.comparePrice)))])],2):e._e(),s("strong",{staticClass:"prices__value"},[e.hasVariedPrices?s("small",[e._v(" "+e._s(e.i19asOf)+" ")]):e._e(),e._v(" "+e._s(e.formatMoney(e.price))+" ")]),s("transition-group",{attrs:{"enter-active-class":"animated slideInDown"}},[e.earnPointsFactor>0&&!(e.pointsMinPrice>e.price)?s("div",{key:"points",staticClass:"prices__points"},[s("i",{staticClass:"i-check-circle"}),e._v(" "+e._s(e.i19youEarn)+" "),s("span",[e._v(" +"+e._s((e.earnPointsFactor*e.price).toFixed(1))+" ")]),s("em",[e._v(e._s(e.pointsProgramName))])]):e._e(),e.installmentsNumber>1&&e.installmentValue?s("div",{key:"installments",staticClass:"prices__installments"},[e.isLiteral?s("small",[e._v(" "+e._s(e.i19upTo)+" ")]):e._e(),e._v(" "+e._s(e.installmentsNumber)+"x "),e.isLiteral?s("small",[e._v(" "+e._s(e.i19of)+" ")]):e._e(),s("span",[e._v(" "+e._s(e.formatMoney(e.installmentValue))+" ")]),!e.monthlyInterest&&e.isLiteral?s("small",[e._v(" "+e._s(e.i19interestFree)+" ")]):e._e()]):e._e(),s("div",{key:"discount-subscription",staticClass:"prices__discount prices__discount--subscription",staticStyle:{color:"var(--success)"}},[s("span",[e._v(" "+e._s(e.formatMoney(.75*e.price))+" ")]),s("small",[e._v(" para assinantes ")])]),"number"==typeof e.priceWithDiscount&&e.priceWithDiscount<e.price?s("div",{key:"discount",staticClass:"prices__discount"},["string"==typeof e.discountLabel&&e.discountLabel?[s("span",[e._v(" "+e._s(e.formatMoney(e.priceWithDiscount))+" ")]),s("small",{staticClass:"prices__discount-label"},[e._v(" "+e._s(e.discountLabel)+" ")])]:[s("small",[e._v(" "+e._s(e.i19asOf)+" ")]),s("span",[e._v(" "+e._s(e.formatMoney(e.priceWithDiscount))+" ")])]],2):e._e()])],1)},r=[]},229:function(e,i,s){"use strict";var t=s(22),r=s(30),n=s(67),a={name:"ShippingLine",props:{shippingLine:{type:Object,required:!0},productionDeadline:{type:Number,default:0}},computed:{deadlineStr(){const e=this.shippingLine,i=e.posting_deadline&&e.posting_deadline.working_days||e.delivery_time&&e.delivery_time.working_days;let s=e.posting_deadline?e.posting_deadline.days:0;return e.delivery_time&&(s+=e.delivery_time.days),s+=this.productionDeadline,s>1?`${Object(r.a)(t.le)} ${s} `+Object(r.a)(i?t.se:t.fb).toLowerCase():Object(r.a)(1===s?t.ke:e.pick_up?t.Wc:t.hd)},freightValueStr(){const{shippingLine:e}=this,i="number"==typeof e.total_price?e.total_price:e.price;return i?Object(n.a)(i):Object(r.a)(e.pick_up?t.Ab:t.Bb)}}},o=(s(239),s(40)),c=Object(o.a)(a,(function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{staticClass:"shipping-line"},[s("strong",{staticClass:"mr-2"},[e._v(" "+e._s(e.deadlineStr)+" ")]),s("span",{staticClass:"mr-2"},[e._v(" "+e._s(e.freightValueStr)+" ")]),e.shippingLine.delivery_instructions?s("small",[e._v(" "+e._s(e.shippingLine.delivery_instructions)+" ")]):e._e()])}),[],!1,null,null,null);i.a=c.exports},230:function(e,i,s){var t=s(240);t.__esModule&&(t=t.default),"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);(0,s(158).default)("3c5ae6b6",t,!0,{})},239:function(e,i,s){"use strict";s(230)},240:function(e,i,s){(i=s(157)(!0)).push([e.i,".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}","",{version:3,sources:["ShippingLine.scss"],names:[],mappings:"AAAA,sBAAsB,oBAAoB,CAAC,eAAe,CAAC,oBAAoB,oBAAoB,CAAC,qBAAqB,oBAAoB,CAAC,2BAA2B,CAAC,uBAAuB,CAAC,aAAa,CAAC,mBAAmB,CAAC,iCAAiC,CAAC,eAAe",file:"ShippingLine.scss",sourcesContent:[".shipping-line>strong{display:inline-block;min-width:120px}.shipping-line>span{display:inline-block}.shipping-line>small{-webkit-line-clamp:2;-webkit-box-orient:vertical;color:var(--text-muted);display:block;display:-webkit-box;line-height:var(--line-height-sm);overflow:hidden}"]}]),e.exports=i},374:function(e,i,s){"use strict";s.r(i);s(4);var t=s(101),r=s(7),n=s(26),a=s(156),o={name:"confirmation",components:{EcOrderInfo:s(260).a},data:()=>({canUpsertCart:!0}),computed:{...Object(t.c)(["orders","customer"]),orderId(){return this.$route.params.id},order:{get(){return this.orders.find((e=>{let{_id:i}=e;return i===this.orderId}))||{_id:this.orderId}},set(e){if(e&&e._id===this.orderId){const i=this.orders.concat(),s=i.find((i=>{let{_id:s}=i;return s===e._id}));s?Object.assign(s,e):i.push(e),this.setOrders(i),this.$route.params.json||this.$router.push({params:{json:encodeURIComponent(JSON.stringify(e))}})}}}},methods:{...Object(t.d)(["addOrder","setOrders","resetCart"]),...Object(t.b)(["saveCustomer"]),handleUpsertCart(){if(this.canUpsertCart){this.canUpsertCart=!1;const{status:e}=this.order;e&&"cancelled"!==e&&(r.a.data.completed=!0,this.orderId&&(r.a.data.orders||(r.a.data.orders=[]),r.a.data.orders.push(this.orderId)),Object(a.c)().then(this.resetCart))}}},created(){const{customer:e}=this;n.a.checkAuthorization()||e.main_email&&e.doc_number&&n.a.fetchLogin(e.main_email,e.doc_number).then((()=>{this.saveCustomer({ecomPassport:n.a}),this.handleUpsertCart()}))},mounted(){n.a.checkAuthorization()&&this.handleUpsertCart()}},c=s(40),l=Object(c.a)(o,(function(){var e=this,i=e.$createElement,s=e._self._c||i;return s("div",{attrs:{id:"confirmation"}},[s("ec-order-info",{attrs:{order:e.order,isNew:!0},on:{"update:order":function(i){e.order=i}}})],1)}),[],!1,null,null,null);i.default=l.exports}}]);