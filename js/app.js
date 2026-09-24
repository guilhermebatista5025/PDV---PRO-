"use strict";

const STORAGE_KEY = "aguapro-pdv-v1";
const money = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });
const dateTime = new Intl.DateTimeFormat("pt-BR", { dateStyle: "short", timeStyle: "short" });
const palette = ["#e5f3ff", "#e9f8f1", "#fff2df", "#f2eaff", "#ffecef", "#e9f0ff"];

const icons = {
  cart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.6L20.5 7H6"/><circle cx="10" cy="20" r="1"/><circle cx="18" cy="20" r="1"/></svg>',
  box:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m21 8-9-5-9 5 9 5 9-5Z"/><path d="m3 8 9 5 9-5v9l-9 5-9-5V8Z"/><path d="M12 13v9"/></svg>',
  layers:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 2 9 5-9 5-9-5 9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></svg>',
  cancel:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="m9 9 6 6m0-6-6 6"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10m6 10V4m6 16v-7m5 7H2"/></svg>',
  settings:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.4 15 .1.1a1.8 1.8 0 0 1-2.5 2.5l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a1.8 1.8 0 0 1-3.6 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a1.8 1.8 0 0 1-2.5-2.5l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a1.8 1.8 0 0 1 0-3.6h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a1.8 1.8 0 0 1 2.5-2.5l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a1.8 1.8 0 0 1 3.6 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a1.8 1.8 0 0 1 2.5 2.5l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a1.8 1.8 0 0 1 0 3.6h-.2a1.8 1.8 0 0 0-1.3 3.1Z"/></svg>',
  search:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>',
  scan:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7V4h3m10 0h3v3m0 10v3h-3M7 20H4v-3M7 8v8m3-8v8m4-8v8m3-8v8"/></svg>',
  bell:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/></svg>',
  plus:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 5v14M5 12h14"/></svg>',
  keyboard:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M7 13h10"/></svg>',
  shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>',
  download:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3v12m-5-5 5 5 5-5M4 21h16"/></svg>',
  cash:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="12" cy="12" r="2.5"/><path d="M7 9h.01M17 15h.01"/></svg>',
  card:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18M7 15h3"/></svg>',
  pix:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m7 7 5-5 5 5-5 5-5-5Zm0 10 5-5 5 5-5 5-5-5Z"/><path d="m2 12 5-5 5 5-5 5-5-5Zm10 0 5-5 5 5-5 5-5-5Z"/></svg>',
  receipt:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>',
  trend:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>',
  warning:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10.3 3.7 2.2 18a2 2 0 0 0 1.7 3h16.2a2 2 0 0 0 1.7-3L13.7 3.7a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4m0 4h.01"/></svg>',
  tag:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20 13 13 20l-9-9V4h7l9 9Z"/><circle cx="8.5" cy="8.5" r="1"/></svg>'
  ,water:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 3S5 10.2 5 15a7 7 0 0 0 14 0c0-4.8-7-12-7-12Z"/><path d="M9 16.5a3.5 3.5 0 0 0 3 2"/></svg>'
  ,bottle:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M10 3h4v3l1.5 2.5A4 4 0 0 1 16 10.6V20a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-9.4a4 4 0 0 1 .5-2.1L10 6V3Z"/><path d="M9 8h6M8 13h8"/></svg>'
  ,drink:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 4h12l-1 17H7L6 4Z"/><path d="M8 8h8M10 2h4M14 4l3-2"/></svg>'
  ,juice:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 7h12l-1 14H7L6 7ZM8 3h8l1 4H7l1-4Z"/><path d="m14 3 3-2"/></svg>'
  ,pump:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 20h12M9 20V8h6v12M12 8V4h6v4M18 4l2-2M8 12h8"/></svg>'
  ,support:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20h16M6 20V8h12v12M4 8h16M8 4h8v4H8zM9 12h2m2 0h2m-6 4h2m2 0h2"/></svg>'
  ,package:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="m12 3 9 5-9 5-9-5 9-5Z"/><path d="m3 8v9l9 5 9-5V8M12 13v9"/></svg>'
  ,chartReport:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10m6 10V4m6 16v-7m5 7H2"/></svg>'
  ,calendar:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 9h18"/></svg>'
};

const nowIso = () => new Date().toISOString();
const dayOffset = n => { const d = new Date(); d.setDate(d.getDate() + n); d.setHours(10 + (n % 7), 20, 0, 0); return d.toISOString(); };
const uid = prefix => `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2,7)}`;

function seedState() {
  const categories = [
    {id:"cat_water",name:"Galões de água",active:true},{id:"cat_bottle",name:"Água em garrafa",active:true},
    {id:"cat_drink",name:"Bebidas",active:true},{id:"cat_access",name:"Acessórios",active:true}
  ];
  const suppliers = [{id:"sup_1",name:"Fonte Cristalina",phone:"(11) 99800-1200"},{id:"sup_2",name:"Distribuidora Central",phone:"(11) 3456-7890"}];
  const products = [
    {id:"p1",code:"78910001",name:"Galão Água Mineral 20L",categoryId:"cat_water",supplierId:"sup_1",cost:8.5,price:18,stock:38,minStock:12,icon:"water",color:0,promo:0,active:true},
    {id:"p2",code:"78910002",name:"Galão Água Mineral 10L",categoryId:"cat_water",supplierId:"sup_1",cost:5.2,price:12,stock:6,minStock:10,icon:"water",color:1,promo:10,active:true},
    {id:"p3",code:"78910003",name:"Água Mineral 1,5L",categoryId:"cat_bottle",supplierId:"sup_1",cost:2.2,price:4.5,stock:72,minStock:20,icon:"bottle",color:2,promo:0,active:true},
    {id:"p4",code:"78910004",name:"Água Mineral 500ml",categoryId:"cat_bottle",supplierId:"sup_1",cost:1.1,price:2.5,stock:96,minStock:30,icon:"bottle",color:0,promo:0,active:true},
    {id:"p5",code:"78910005",name:"Refrigerante Cola 2L",categoryId:"cat_drink",supplierId:"sup_2",cost:6.9,price:11.9,stock:18,minStock:10,icon:"drink",color:4,promo:5,active:true},
    {id:"p6",code:"78910006",name:"Suco de Laranja 1L",categoryId:"cat_drink",supplierId:"sup_2",cost:5.4,price:9.5,stock:4,minStock:8,icon:"juice",color:2,promo:0,active:true},
    {id:"p7",code:"78910007",name:"Bomba Manual para Galão",categoryId:"cat_access",supplierId:"sup_2",cost:12,price:24.9,stock:14,minStock:5,icon:"pump",color:5,promo:0,active:true},
    {id:"p8",code:"78910008",name:"Suporte para Galão",categoryId:"cat_access",supplierId:"sup_2",cost:18,price:34.9,stock:9,minStock:4,icon:"support",color:3,promo:0,active:true}
  ];
  const sample = [
    ["p1",2,"Dinheiro",0],["p4",8,"Pix",-1],["p2",2,"Cartão",-2],["p5",3,"Pix",-5],
    ["p3",12,"Cartão",-11],["p1",3,"Dinheiro",-20],["p7",1,"Pix",-32],["p4",20,"Cartão",-65],
    ["p2",4,"Pix",-120],["p1",5,"Cartão",-220]
  ];
  const sales = sample.map((s,i) => {
    const p=products.find(x=>x.id===s[0]), unit=p.price*(1-p.promo/100), total=unit*s[1];
    return {id:`sale_${i+1}`,number:1000+i,date:dayOffset(s[3]),status:"completed",payment:s[2],subtotal:p.price*s[1],discount:p.price*s[1]-total,total,cost:p.cost*s[1],items:[{productId:p.id,name:p.name,qty:s[1],price:p.price,cost:p.cost,promo:p.promo}],operator:"Marcos Silva"};
  });
  const sellers = [{id:"seller_marcos",name:"Marcos Silva",phone:"",active:true},{id:"seller_glaucia",name:"Glaucia",phone:"",active:true}];
  return {categories,suppliers,products,sales,cancellations:[],cashSessions:[],stockMovements:[],cart:[],sellers,settings:{nextSale:1010,storeName:"ÁguaPro Distribuidora",defaultSellerId:"seller_marcos",defaultDiscount:0,autoFocus:true,confirmSale:false}};
}

let state;
try { state = JSON.parse(localStorage.getItem(STORAGE_KEY)) || seedState(); } catch { state = seedState(); }
state.cart = [];
state.sellers = Array.isArray(state.sellers) && state.sellers.length ? state.sellers : [{id:"seller_marcos",name:"Marcos Silva",phone:"",active:true}];
state.settings = {...{nextSale:1010,storeName:"ÁguaPro Distribuidora",defaultSellerId:state.sellers[0].id,defaultDiscount:0,autoFocus:true,confirmSale:false},...(state.settings||{})};
if(!state.sellers.some(s=>s.id===state.settings.defaultSellerId&&s.active!==false)) state.settings.defaultSellerId=state.sellers.find(s=>s.active!==false)?.id||state.sellers[0].id;
let saleCategory = "";
let productTab = "products";
let reportPeriod = "day";
let selectedPayment = "Dinheiro";
let paymentDetails = {brand:"Visa", type:"Crédito", installments:1};

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const categoryName = id => state.categories.find(c=>c.id===id)?.name || "Sem categoria";
const supplierName = id => state.suppliers.find(s=>s.id===id)?.name || "—";
const currentCash = () => state.cashSessions.find(s=>s.status === "open");
const effectivePrice = p => p.price * (1 - (Number(p.promo)||0)/100);
const save = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
const esc = v => String(v ?? "").replace(/[&<>"]/g, c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const localDate = iso => dateTime.format(new Date(iso));

function renderIcons(root=document){ $$('[data-icon]',root).forEach(el=>{ el.innerHTML=icons[el.dataset.icon]||""; }); }
function toast(message,type="success") { const el=document.createElement("div"); el.className=`toast ${type}`; el.innerHTML=`<i></i><span>${esc(message)}</span>`; $("#toastStack").append(el); setTimeout(()=>el.remove(),3200); }

function openModal(content, wide=false){ const modal=$("#modal"); modal.className=`modal${wide?" wide":""}`; modal.innerHTML=content; $("#modalBackdrop").classList.add("show"); $("#modalBackdrop").setAttribute("aria-hidden","false"); renderIcons(modal); }
function closeModal(){ $("#modalBackdrop").classList.remove("show"); $("#modalBackdrop").setAttribute("aria-hidden","true"); }

function renderAll(){ renderCash(); renderSale(); renderProducts(); renderStock(); renderCancellations(); renderReports(); renderSettings(); renderIcons(); }

function navigate(page){
  $$(".page").forEach(p=>p.classList.toggle("active",p.id===`page-${page}`));
  $$(".nav-item").forEach(n=>n.classList.toggle("active",n.dataset.page===page));
  const meta={vendas:["Nova venda","Selecione os produtos e finalize o atendimento"],produtos:["Produtos","Gerencie catálogo, preços e categorias"],estoque:["Controle de estoque","Acompanhe saldos e movimentações"],cancelamentos:["Cancelamentos","Estorne vendas sem perder o histórico"],relatorios:["Relatórios","Indicadores financeiros e desempenho"],configuracoes:["Configurações","Personalize a operação e acompanhe sua equipe"]}[page];
  $("#pageTitle").textContent=meta[0]; $("#pageSubtitle").textContent=meta[1]; $("#sidebar").classList.remove("show");
}

function renderCash(){
  const cash=currentCash(), pill=$("#cashPill"); pill.classList.toggle("open",!!cash);
  pill.querySelector("strong").textContent=cash?`Aberto · ${money.format(cash.openingAmount)}`:"Fechado";
}

function productIconKey(p){
  if(p.icon&&icons[p.icon])return p.icon;
  const name=(p.name||"").toLowerCase();
  if(name.includes("bomba"))return "pump";
  if(name.includes("suporte"))return "support";
  if(name.includes("suco"))return "juice";
  if(name.includes("refrigerante"))return "drink";
  if(name.includes("água")&&name.includes("galão"))return "water";
  if(name.includes("água"))return "bottle";
  return "package";
}
function productVisual(p){ return p.image ? "<img class=\"product-image\" src=\""+esc(p.image)+"\" alt=\""+esc(p.name)+"\">" : "<span class=\"product-icon\">"+(icons[productIconKey(p)]||icons.package)+"</span>"; }
function productColor(p){ return `color-${(p.color||0)%palette.length}`; }

function renderSale(){
  const cats=[{id:"",name:"Todos"},...state.categories.filter(c=>c.active)];
  $("#saleCategories").innerHTML=cats.map(c=>`<button class="${saleCategory===c.id?"active":""}" data-category="${c.id}">${esc(c.name)}</button>`).join("");
  const term=$("#saleSearch")?.value.toLowerCase()||"";
  const products=state.products.filter(p=>p.active&&(!saleCategory||p.categoryId===saleCategory)&&(!term||p.name.toLowerCase().includes(term)||p.code.includes(term)));
  $("#productGrid").innerHTML=products.length?products.map(p=>`<button class="product-card" data-product="${p.id}" ${p.stock<=0?"disabled":""}>
    <div class="product-art ${productColor(p)}">${productVisual(p)}${p.promo?`<small>-${p.promo}%</small>`:""}</div>
    <h3>${esc(p.name)}</h3><div class="product-meta"><div class="product-price">${p.promo?`<del>${money.format(p.price)}</del>`:""}<strong>${money.format(effectivePrice(p))}</strong></div><span class="stock-label ${p.stock<=p.minStock?"low":""}">${p.stock} un.</span></div></button>`).join(""):`<div class="empty-state"><strong>Nenhum produto encontrado</strong><p>Altere a busca ou o filtro de categoria.</p></div>`;
  renderCart();
}

function renderCart(){
  const wrap=$("#cartItems");
  if(!state.cart.length) wrap.innerHTML=`<div class="empty-state"><div class="empty-icon">${icons.cart}</div><strong>Seu carrinho está vazio</strong><p>Clique em um produto para<br>adicioná-lo à venda.</p></div>`;
  else wrap.innerHTML=state.cart.map(item=>{const p=state.products.find(x=>x.id===item.productId);return `<div class="cart-item"><div><h4>${esc(p.name)}</h4><small>${money.format(effectivePrice(p))} por unidade ${p.promo?`· ${p.promo}% off`:""}</small><div class="cart-control"><button data-cart="minus" data-id="${p.id}">−</button><span>${item.qty}</span><button data-cart="plus" data-id="${p.id}">+</button><button class="remove" data-cart="remove" data-id="${p.id}">remover</button></div></div><div class="cart-item-price">${money.format(effectivePrice(p)*item.qty)}</div></div>`}).join("");
  const subtotal=state.cart.reduce((a,i)=>{const p=state.products.find(x=>x.id===i.productId);return a+p.price*i.qty},0);
  const promoDiscount=state.cart.reduce((a,i)=>{const p=state.products.find(x=>x.id===i.productId);return a+(p.price-effectivePrice(p))*i.qty},0);
  const manual=Math.max(0,Number($("#manualDiscount").value)||0), discount=Math.min(subtotal,promoDiscount+manual), total=Math.max(0,subtotal-discount);
  $("#subtotal").textContent=money.format(subtotal); $("#discountTotal").textContent=`- ${money.format(discount)}`; $("#grandTotal").textContent=money.format(total);
  $("#saleNumber").textContent=`Atendimento #${String(state.settings.nextSale).padStart(4,"0")}`;
}

function addToCart(id){ const p=state.products.find(x=>x.id===id), item=state.cart.find(i=>i.productId===id); if(!p||p.stock<=0)return; if(item&&item.qty>=p.stock){toast("Quantidade maior que o estoque disponível.","error");return;} item?item.qty++:state.cart.push({productId:id,qty:1}); renderCart(); }

function showCheckout(){
  if(!state.cart.length){toast("Adicione pelo menos um produto.","error");return}
  if(!currentCash()){showCashModal();return}
  if(Number($("#manualDiscount")?.value||0)===0&&Number(state.settings.defaultDiscount||0)>0){$("#manualDiscount").value=Number(state.settings.defaultDiscount).toFixed(2);renderCart();}
  const totals=getCartTotals(); selectedPayment="Dinheiro"; paymentDetails={brand:"Visa",type:"Crédito",installments:1};
  const fmtMoney = n => money.format(Number(n||0));
  const fmtNum = n => Number(n||0).toFixed(2);

  openModal(`<div class="checkout-modern-wrap">
    <div class="modal-head checkout-modal-head">
      <div class="modal-title-group">
        <h2>Finalização da venda</h2>
        <p>Conferência dos valores e formas de pagamento</p>
      </div>
      <button class="modal-close" title="Fechar">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="modal-body checkout-modal-body">
      <!-- Top 4 Summary Cards -->
      <div class="checkout-kpi-grid">
        <div class="checkout-kpi-card card-subtotal">
          <div class="kpi-icon-box icon-blue">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"/><path d="M9 8h6M9 12h6M9 16h3"/></svg>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Sub-total</span>
            <strong class="kpi-value" id="summarySubtotal">${fmtMoney(totals.subtotal)}</strong>
          </div>
        </div>

        <div class="checkout-kpi-card card-charges">
          <div class="kpi-icon-box icon-blue">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Encargos</span>
            <input class="kpi-input" id="chargeAmount" type="number" min="0" step="0.01" value="0.00">
          </div>
        </div>

        <div class="checkout-kpi-card card-discount">
          <div class="kpi-icon-box icon-yellow">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Descontos (%)</span>
            <input class="kpi-input discount-input" id="checkoutDiscount" type="number" min="0" step="0.01" value="${totals.discount.toFixed(2)}">
          </div>
        </div>

        <div class="checkout-kpi-card card-total">
          <div class="kpi-icon-box icon-blue-accent">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <div class="kpi-info">
            <span class="kpi-label">Valor total</span>
            <strong class="kpi-value total-val" id="summaryGrandTotal">${fmtMoney(totals.total)}</strong>
          </div>
        </div>
      </div>

      <!-- Vendedor & Cliente Context Row -->
      <div class="checkout-context-row">
        <div class="context-pill">
          <div class="context-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </div>
          <span class="context-title">Vendedor</span>
          <select class="context-select" id="checkoutSeller">
            \${state.sellers.filter(s=>s.active!==false).map(s=>\`<option value="\${esc(s.id)}" \${s.id===state.settings.defaultSellerId?"selected":""}>\${esc(s.name)}</option>\`).join("")}
          </select>
        </div>

        <div class="context-pill">
          <div class="context-icon">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <span class="context-title">Cliente</span>
          <select class="context-select" id="checkoutClient">
            <option value="Venda ao consumidor">Venda ao consumidor</option>
            <option value="Cliente Cadastrado">Cliente Cadastrado</option>
          </select>
        </div>
      </div>

      <!-- Main 2-Column Cards -->
      <div class="checkout-main-grid">
        <!-- Left Panel: Formas de Pagamento -->
        <div class="checkout-card payment-methods-card">
          <div class="card-title-group">
            <h3>Formas de pagamento</h3>
            <p>Selecione a forma usada pelo cliente</p>
          </div>

          <div class="payment-method-rows">
            <div class="method-row active" data-pay="Dinheiro">
              <div class="method-pill">
                <svg class="method-icon icon-cash" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                <span class="method-name">Dinheiro</span>
                <span class="shortcut-tag">F6</span>
              </div>
              <input class="method-amount-input" id="cashAmount" type="number" min="0" step="0.01" value="${totals.total.toFixed(2)}">
            </div>

            <div class="method-row" data-pay="card">
              <div class="method-pill">
                <svg class="method-icon icon-card" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <span class="method-name">Cartao</span>
                <span class="shortcut-tag">F7</span>
              </div>
              <input class="method-amount-input" id="cardAmount" type="number" min="0" step="0.01" value="0.00">
            </div>

            <div class="method-row" data-pay="term">
              <div class="method-pill">
                <svg class="method-icon icon-term" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                <span class="method-name">A Prazo</span>
                <span class="shortcut-tag">F9</span>
              </div>
              <input class="method-amount-input" id="termAmount" type="number" min="0" step="0.01" value="0.00">
            </div>
          </div>

          <!-- Extra details modal for Card -->
          <div class="card-payment-modal" id="cardPaymentModal" hidden>
            <div class="card-payment-head">
              <div><h3>Configurar pagamento no cartão</h3><p>Selecione os dados da transação</p></div>
              <button type="button" class="card-payment-close" id="closeCardPayment">×</button>
            </div>
            <div class="card-payment-content">
              <div class="card-brand-grid">
                <button type="button" class="card-brand-option active" data-card-brand="Visa">VISA</button>
                <button type="button" class="card-brand-option" data-card-brand="Mastercard">Mastercard</button>
                <button type="button" class="card-brand-option" data-card-brand="Elo">Elo</button>
                <button type="button" class="card-brand-option" data-card-brand="American Express">Amex</button>
              </div>
              <div class="form-grid">
                <div class="field"><label>MODALIDADE</label><select id="modalCardType"><option>Crédito</option><option>Débito</option></select></div>
                <div class="field"><label>PARCELAS</label><select id="modalCardInstallments"><option value="1">À vista</option><option value="2">2x sem juros</option><option value="3">3x sem juros</option><option value="4">4x</option><option value="6">6x</option><option value="12">12x</option></select></div>
                <div class="field full"><label>NSU / AUTORIZAÇÃO <span class="optional-label">opcional</span></label><input id="modalCardAuthorization" placeholder="Digite o número da autorização"></div>
              </div>
            </div>
            <div class="card-payment-footer">
              <button type="button" class="btn secondary" id="cancelCardPayment">Voltar</button>
              <button type="button" class="btn primary" id="saveCardPayment">Usar este cartão</button>
            </div>
          </div>

          <div class="received-section" id="receivedField">
            <label class="section-micro-label">VALOR RECEBIDO</label>
            <input class="received-input" id="receivedAmount" type="number" min="${totals.total}" step="0.01" value="${totals.total.toFixed(2)}">
            <span class="change-text" id="changeHint">Troco: R$ 0,00</span>
          </div>

          <div class="received-sum-row">
            <span>Soma recebida</span>
            <strong id="paymentSum">${fmtMoney(totals.total)}</strong>
          </div>
        </div>

        <!-- Right Panel: Desdobramento das formas de pagamento -->
        <div class="checkout-card breakdown-card">
          <div class="card-title-group">
            <h3>Desdobramento das formas de pagamento</h3>
            <p>Confira como o total será registrado</p>
          </div>

          <div class="breakdown-pills-list">
            <div class="breakdown-item item-green">
              <div class="item-left">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
                <span>Dinheiro</span>
              </div>
              <input class="item-val-input" id="breakdownCash" type="text" value="${fmtMoney(totals.total)}" readonly>
            </div>

            <div class="breakdown-item item-blue">
              <div class="item-left">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
                <span>Cartao</span>
              </div>
              <input class="item-val-input" id="breakdownCard" type="text" value="R$ 0,00" readonly>
            </div>

            <div class="breakdown-item item-yellow">
              <div class="item-left">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                <span>Cheque</span>
              </div>
              <input class="item-val-input" id="breakdownCheque" type="text" value="R$ 0,00" readonly>
            </div>

            <div class="breakdown-item item-purple">
              <div class="item-left">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg>
                <span>Prazo</span>
              </div>
              <input class="item-val-input" id="breakdownTerm" type="text" value="R$ 0,00" readonly>
            </div>
          </div>

          <div class="breakdown-bottom-section">
            <div class="total-paid-row">
              <span>Total pago</span>
              <strong id="breakdownTotal">${fmtMoney(totals.total)}</strong>
            </div>

            <label class="print-summary-check">
              <input type="checkbox" id="shortPrintCheck">
              <span>Imprimir comprovante resumido</span>
              <span class="f12-badge">F12</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Bottom Observation Box -->
      <div class="checkout-observation-wrap">
        <label class="section-micro-label" for="saleObservation">OBSERVAÇÃO</label>
        <textarea id="saleObservation" class="modern-obs-input" rows="1" placeholder="Alguma observação para esta venda?"></textarea>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="modal-footer checkout-modal-footer">
      <button class="footer-btn btn-secondary modal-close-btn">
        <span>Cancelar</span> <span class="btn-key">F2</span>
      </button>
      <button class="footer-btn btn-secondary modal-close-btn">
        <span>Retornar</span> <span class="btn-key">Esc</span>
      </button>
      <button class="footer-btn btn-primary" id="confirmSale">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Confirmar</span> <span class="btn-key">F1</span>
      </button>
    </div>
  </div>`, true);

  $("#modal").classList.add("checkout-modal");
  let selectedBrand="Visa";
  const openCardPayment=()=>{$("#cardPaymentModal").hidden=false;$("#modalCardType").focus();};
  const closeCardPayment=()=>$("#cardPaymentModal").hidden=true;
  $$("[data-card-brand]",$("#modal")).forEach(option=>option.onclick=()=>{selectedBrand=option.dataset.cardBrand;$$('[data-card-brand]',$('#modal')).forEach(item=>item.classList.toggle('active',item===option));});
  $("#closeCardPayment").onclick=closeCardPayment;$("#cancelCardPayment").onclick=closeCardPayment;
  $("#saveCardPayment").onclick=()=>{paymentDetails={brand:selectedBrand,type:$("#modalCardType").value,installments:Number($("#modalCardInstallments").value),authorization:$("#modalCardAuthorization").value};selectedPayment="card";closeCardPayment();toast(`Cartão ${selectedBrand} configurado.`);};

  $$("[data-pay]",$("#modal")).forEach(b=>b.onclick=()=>{
    selectedPayment=b.dataset.pay;
    $$("[data-pay]",$("#modal")).forEach(x=>x.classList.toggle("active",x===b));
  });

  const cardRow=$('[data-pay="card"]',$('#modal'));
  if(cardRow){
    cardRow.tabIndex=0;
    cardRow.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();selectedPayment='card';cardRow.classList.add('active');openCardPayment();}});
  }

  const cashAmount=$("#cashAmount"),cardAmount=$("#cardAmount"),termAmount=$("#termAmount");
  const syncPaymentSplit=()=>{
    const cash=Math.max(0,Number(cashAmount.value)||0);
    const card=Math.max(0,Number(cardAmount.value)||0);
    const term=Math.max(0,Number(termAmount.value)||0);
    const sum=cash+card+term;
    $("#breakdownCash").value=fmtMoney(cash);
    $("#breakdownCard").value=fmtMoney(card);
    $("#breakdownTerm").value=fmtMoney(term);
    $("#breakdownTotal").textContent=fmtMoney(sum);
    $("#paymentSum").textContent=fmtMoney(sum);
  };

  cashAmount.oninput=syncPaymentSplit;
  cardAmount.oninput=syncPaymentSplit;
  termAmount.oninput=syncPaymentSplit;
  syncPaymentSplit();

  cashAmount.onkeydown=event=>{
    if(event.key!=='Enter')return;
    event.preventDefault();
    const cash=Math.max(0,Number(cashAmount.value)||0),remaining=Math.max(0,totals.total-cash);
    cardAmount.value=remaining.toFixed(2);
    syncPaymentSplit();
    if(remaining>0){
      selectedPayment='card';
      if(cardRow) cardRow.classList.add('active');
      openCardPayment();
    } else {
      $("#confirmSale").focus();
    }
  };

  cardAmount.onkeydown=event=>{
    if(event.key==='Enter'){
      event.preventDefault();
      selectedPayment='card';
      if(cardRow) cardRow.classList.add('active');
      openCardPayment();
    }
  };

  if($("#receivedAmount")){
    $("#receivedAmount").oninput=e=>{
      const val=Math.max(0,Number(e.target.value)||0);
      $("#changeHint").textContent=`Troco: ${fmtMoney(Math.max(0,val-totals.total))}`;
    };
  }

  $("#confirmSale").onclick=completeSale;
}

function getCartTotals(){
  const subtotal=state.cart.reduce((a,i)=>a+state.products.find(p=>p.id===i.productId).price*i.qty,0);
  const promo=state.cart.reduce((a,i)=>{const p=state.products.find(x=>x.id===i.productId);return a+(p.price-effectivePrice(p))*i.qty},0);
  const manual=Math.max(0,Number($("#manualDiscount").value)||0), discount=Math.min(subtotal,promo+manual);
  return {subtotal,discount,total:subtotal-discount};
}

function completeSale(){
  const totals=getCartTotals();
  if(state.settings.confirmSale&&!window.confirm("Confirmar esta venda?"))return;
  const cashPaid=Math.max(0,Number($("#cashAmount")?.value)||0),cardPaid=Math.max(0,Number($("#cardAmount")?.value)||0),termPaid=Math.max(0,Number($("#termAmount")?.value)||0),paidTotal=cashPaid+cardPaid+termPaid;
  if(paidTotal+0.005<totals.total){toast(`Ainda faltam ${money.format(totals.total-paidTotal)} para completar o pagamento.`,"error");return}
  if(selectedPayment==="Dinheiro"&&Number($("#receivedAmount").value)<totals.total){toast("O valor recebido é menor que o total.","error");return}
  for(const item of state.cart){const p=state.products.find(x=>x.id===item.productId);if(p.stock<item.qty){toast(`Estoque insuficiente para ${p.name}.`,"error");return}}
  const items=state.cart.map(i=>{const p=state.products.find(x=>x.id===i.productId);return {productId:p.id,name:p.name,qty:i.qty,price:p.price,cost:p.cost,promo:p.promo||0}});
  if(cardPaid>0&&cashPaid>0) selectedPayment="mixed";
  else if(cardPaid>0) selectedPayment="Cartão";
  else if(termPaid>0) selectedPayment="Prazo";
  const paymentLabel=selectedPayment==="mixed"?`Misto · Dinheiro + Cartão${$("#cardBrand")?.value?` · ${$("#cardBrand").value}`:""}`:selectedPayment;
  const cardLabel=cardPaid>0?`Cartão · ${$("#cardBrand")?.value||paymentDetails.brand} · ${$("#cardType")?.value||paymentDetails.type}${$("#cardInstallments")?.value>1?` · ${$("#cardInstallments").value}x`:""}`:paymentLabel;
  const sale={id:uid("sale"),number:state.settings.nextSale++,date:nowIso(),status:"completed",payment:cashPaid>0&&cardPaid>0?`${paymentLabel} · ${$("#cardType")?.value||"Crédito"}`:cardLabel,paymentMethod:selectedPayment,paymentBrand:cardPaid>0?$("#cardBrand")?.value:null,paymentType:cardPaid>0?$("#cardType")?.value:null,installments:cardPaid>0?Number($("#cardInstallments")?.value||1):1,paymentBreakdown:{cash:cashPaid,card:cardPaid,term:termPaid},subtotal:totals.subtotal,discount:totals.discount,total:totals.total,cost:items.reduce((a,i)=>a+i.cost*i.qty,0),items,operator:$("#checkoutSeller")?.selectedOptions[0]?.text||"Operador do Caixa",sellerId:$("#checkoutSeller")?.value||null,observation:$("#saleObservation")?.value||""};
  items.forEach(i=>{const p=state.products.find(x=>x.id===i.productId);p.stock-=i.qty;state.stockMovements.unshift({id:uid("mov"),date:sale.date,productId:p.id,type:"out",qty:-i.qty,reason:`Venda #${sale.number}`,operator:"Marcos Silva"})});
  state.sales.unshift(sale); state.cart=[]; $("#manualDiscount").value="0"; save(); closeModal(); renderAll(); toast(`Venda #${sale.number} concluída com sucesso.`);
}

function showCashModal(){
  const cash=currentCash();
  if(!cash) openModal(`<div class="modal-head"><div><h2>Abrir caixa</h2><p>Informe o fundo de troco para iniciar as vendas</p></div><button class="modal-close">×</button></div><div class="modal-body"><div class="alert warning">O caixa precisa estar aberto antes de finalizar uma venda.</div><div class="field"><label>VALOR INICIAL</label><input id="openingAmount" type="number" min="0" step="0.01" value="100.00"></div></div><div class="modal-footer"><button class="btn secondary modal-close-btn">Cancelar</button><button class="btn primary" id="openCashBtn">Abrir caixa</button></div>`);
  else {
    const cashSales=state.sales.filter(s=>s.status==="completed"&&new Date(s.date)>=new Date(cash.openedAt)); const expected=cash.openingAmount+cashSales.reduce((a,s)=>a+(s.paymentBreakdown?.cash??(s.payment==="Dinheiro"?s.total:0)),0);
    openModal(`<div class="modal-head"><div><h2>Caixa aberto</h2><p>Aberto em ${localDate(cash.openedAt)}</p></div><button class="modal-close">×</button></div><div class="modal-body"><div class="checkout-summary"><div><span>Fundo inicial</span><b>${money.format(cash.openingAmount)}</b></div><div><span>Vendas no período</span><b>${cashSales.length}</b></div><div class="pay-total"><strong>Dinheiro esperado</strong><strong>${money.format(expected)}</strong></div></div><div class="field"><label>VALOR CONTADO NO CAIXA</label><input id="countedAmount" type="number" min="0" step="0.01" value="${expected.toFixed(2)}"></div></div><div class="modal-footer"><button class="btn secondary modal-close-btn">Voltar</button><button class="btn danger" id="closeCashBtn">Fechar caixa</button></div>`);
    $("#closeCashBtn").onclick=()=>{cash.status="closed";cash.closedAt=nowIso();cash.expectedAmount=expected;cash.countedAmount=Number($("#countedAmount").value)||0;save();closeModal();renderCash();toast("Caixa fechado e registrado.");};
  }
  if($("#openCashBtn")) $("#openCashBtn").onclick=()=>{const amount=Math.max(0,Number($("#openingAmount").value)||0);state.cashSessions.unshift({id:uid("cash"),openedAt:nowIso(),openingAmount:amount,status:"open",operator:"Marcos Silva"});save();closeModal();renderCash();toast("Caixa aberto. Boas vendas!");};
}

function renderProducts(){
  const filter=$("#productCategoryFilter"); if(filter){const val=filter.value;filter.innerHTML=`<option value="">Todas as categorias</option>`+state.categories.map(c=>`<option value="${c.id}">${esc(c.name)}</option>`).join("");filter.value=val;}
  const head=$("#productTableHead"), body=$("#productTableBody"); if(!head)return;
  if(productTab==="products"){
    head.innerHTML="<tr><th>Produto</th><th>Categoria</th><th>Fornecedor</th><th>Custo</th><th>Preço</th><th>Margem</th><th>Promoção</th><th></th></tr>";
    const term=$("#productSearch").value.toLowerCase(),cat=filter.value;
    const list=state.products.filter(p=>(!term||p.name.toLowerCase().includes(term)||p.code.includes(term))&&(!cat||p.categoryId===cat));
    body.innerHTML=list.map(p=>`<tr><td><div class="product-cell"><span class="mini-art ${productColor(p)}">${productVisual(p)}</span><div><strong>${esc(p.name)}</strong><span>Cód. ${esc(p.code)}</span></div></div></td><td>${esc(categoryName(p.categoryId))}</td><td>${esc(supplierName(p.supplierId))}</td><td>${money.format(p.cost)}</td><td><b>${money.format(p.price)}</b></td><td class="${p.price>p.cost?"positive":"negative"}">${p.price?(((p.price-p.cost)/p.price)*100).toFixed(1):0}%</td><td>${p.promo?`<span class="status warning">${p.promo}% OFF</span>`:"—"}</td><td><button class="action-btn" data-edit-product="${p.id}">Editar</button></td></tr>`).join("");
  } else if(productTab==="categories"){
    head.innerHTML="<tr><th>Categoria</th><th>Produtos</th><th>Status</th><th></th></tr>";
    body.innerHTML=state.categories.map(c=>`<tr><td><b>${esc(c.name)}</b></td><td>${state.products.filter(p=>p.categoryId===c.id).length} produtos</td><td><span class="status ${c.active?"ok":"cancelled"}">${c.active?"Ativa":"Inativa"}</span></td><td><button class="action-btn" data-edit-category="${c.id}">Editar</button></td></tr>`).join("");
  } else {
    head.innerHTML="<tr><th>Fornecedor</th><th>Telefone</th><th>Produtos</th><th></th></tr>";
    body.innerHTML=state.suppliers.map(s=>`<tr><td><b>${esc(s.name)}</b></td><td>${esc(s.phone||"—")}</td><td>${state.products.filter(p=>p.supplierId===s.id).length} produtos</td><td><button class="action-btn" data-edit-supplier="${s.id}">Editar</button></td></tr>`).join("");
  }
  $("#addProductBtn").innerHTML=`${icons.plus}${productTab==="products"?"Novo produto":productTab==="categories"?"Nova categoria":"Novo fornecedor"}`;
}

function showProductForm(id){
  const p=id?state.products.find(x=>x.id===id):null;
  let uploadedImage=p?.image||"";
  openModal(`<form id="productForm"><div class="modal-head"><div><h2>${p?"Editar":"Novo"} produto</h2><p>Informações comerciais e de estoque</p></div><button type="button" class="modal-close">×</button></div><div class="modal-body"><div class="form-grid">
    <div class="field full"><label>NOME DO PRODUTO</label><input name="name" required value="${esc(p?.name||"")}" placeholder="Ex.: Galão Água 20L"></div>
    <div class="field"><label>CÓDIGO / EAN</label><input name="code" required value="${esc(p?.code||"")}"></div><div class="field"><label>CATEGORIA</label><select name="categoryId" required>${state.categories.map(c=>`<option value="${c.id}" ${p?.categoryId===c.id?"selected":""}>${esc(c.name)}</option>`)}</select></div>
    <div class="field"><label>FORNECEDOR</label><select name="supplierId"><option value="">Nenhum</option>${state.suppliers.map(s=>`<option value="${s.id}" ${p?.supplierId===s.id?"selected":""}>${esc(s.name)}</option>`)}</select></div><div class="field"><label>ÍCONE DO PRODUTO</label><select name="icon"><option value="water" ${productIconKey(p||{})==="water"?"selected":""}>Água</option><option value="bottle" ${productIconKey(p||{})==="bottle"?"selected":""}>Garrafa</option><option value="drink" ${productIconKey(p||{})==="drink"?"selected":""}>Bebida</option><option value="juice" ${productIconKey(p||{})==="juice"?"selected":""}>Suco</option><option value="pump" ${productIconKey(p||{})==="pump"?"selected":""}>Bomba</option><option value="support" ${productIconKey(p||{})==="support"?"selected":""}>Suporte</option><option value="package" ${productIconKey(p||{})==="package"?"selected":""}>Produto</option></select><span class="form-hint">Ícone SVG usado quando não houver foto.</span></div>
    <div class="field full"><label>FOTO DO PRODUTO</label><input id="productImage" name="image" type="file" accept="image/png,image/jpeg,image/webp"><div id="imagePreview" class="upload-preview ${uploadedImage?"has-image":""}">${uploadedImage?`<img src="${esc(uploadedImage)}" alt="Prévia do produto">`:`<span>Escolha uma imagem para identificar este produto no caixa</span>`}</div><span class="form-hint">PNG, JPG ou WEBP. A imagem aparece nos cards de venda e tabelas.</span></div>
    <div class="field"><label>CUSTO DO FORNECEDOR</label><input name="cost" type="number" min="0" step="0.01" required value="${p?.cost??0}"></div><div class="field"><label>PREÇO DE VENDA</label><input name="price" type="number" min="0" step="0.01" required value="${p?.price??0}"></div>
    <div class="field"><label>ESTOQUE ATUAL</label><input name="stock" type="number" min="0" step="1" required value="${p?.stock??0}" ${p?"readonly":""}></div><div class="field"><label>ESTOQUE MÍNIMO</label><input name="minStock" type="number" min="0" step="1" required value="${p?.minStock??5}"></div>
    <div class="field full"><label>PROMOÇÃO (%)</label><input name="promo" type="number" min="0" max="100" step="1" value="${p?.promo??0}"><span class="form-hint">O desconto será aplicado automaticamente na venda.</span></div>
  </div></div><div class="modal-footer"><button type="button" class="btn secondary modal-close-btn">Cancelar</button><button class="btn primary" type="submit">Salvar produto</button></div></form>`,true);
  $("#productImage").onchange=e=>{const file=e.target.files?.[0];if(!file)return;if(!file.type.startsWith("image/")){toast("Escolha um arquivo de imagem.","error");e.target.value="";return}if(file.size>2_000_000){toast("A imagem deve ter no máximo 2 MB.","error");e.target.value="";return}const reader=new FileReader();reader.onload=()=>{uploadedImage=reader.result;$("#imagePreview").classList.add("has-image");$("#imagePreview").innerHTML=`<img src="${esc(uploadedImage)}" alt="Prévia do produto">`};reader.readAsDataURL(file)};
  $("#productForm").onsubmit=e=>{e.preventDefault();const f=new FormData(e.target), data=Object.fromEntries(f);["cost","price","stock","minStock","promo"].forEach(k=>data[k]=Number(data[k]));delete data.image;data.image=uploadedImage;data.active=true;data.color=p?.color??Math.floor(Math.random()*palette.length);if(p)Object.assign(p,data);else state.products.push({id:uid("prod"),...data});save();closeModal();renderAll();toast(`Produto ${p?"atualizado":"cadastrado"}.`);};
}

function showSimpleForm(type,id){
  const isCat=type==="category", list=isCat?state.categories:state.suppliers, item=id?list.find(x=>x.id===id):null, label=isCat?"categoria":"fornecedor";
  openModal(`<form id="simpleForm"><div class="modal-head"><div><h2>${item?"Editar":"Novo"} ${label}</h2><p>Organize melhor o seu catálogo</p></div><button type="button" class="modal-close">×</button></div><div class="modal-body"><div class="form-grid"><div class="field full"><label>NOME</label><input name="name" required value="${esc(item?.name||"")}"></div>${isCat?`<div class="field full"><label>STATUS</label><select name="active"><option value="true" ${item?.active!==false?"selected":""}>Ativa</option><option value="false" ${item?.active===false?"selected":""}>Inativa</option></select></div>`:`<div class="field full"><label>TELEFONE</label><input name="phone" value="${esc(item?.phone||"")}" placeholder="(00) 00000-0000"></div>`}</div></div><div class="modal-footer"><button type="button" class="btn secondary modal-close-btn">Cancelar</button><button class="btn primary">Salvar</button></div></form>`);
  $("#simpleForm").onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));if(isCat)data.active=data.active==="true";if(item)Object.assign(item,data);else list.push({id:uid(isCat?"cat":"sup"),...data});save();closeModal();renderAll();toast(`${isCat?"Categoria":"Fornecedor"} salvo.`)};
}

function renderStock(){
  const total=state.products.reduce((a,p)=>a+p.stock,0), low=state.products.filter(p=>p.stock<=p.minStock).length, value=state.products.reduce((a,p)=>a+p.stock*p.cost,0), out=state.products.filter(p=>p.stock===0).length;
  $("#stockKpis").innerHTML=kpi("box","blue","Itens em estoque",total)+kpi("warning","orange","Estoque baixo",low)+kpi("cash","green","Valor em estoque",money.format(value))+kpi("cancel","red","Produtos zerados",out);
  $("#stockBadge").textContent=low; $("#stockBadge").style.display=low?"block":"none";
  const term=$("#stockSearch").value.toLowerCase(),status=$("#stockStatusFilter").value;
  const list=state.products.filter(p=>(!term||p.name.toLowerCase().includes(term))&&(!status||(status==="low"?p.stock<=p.minStock:p.stock>p.minStock)));
  $("#stockTableBody").innerHTML=list.map(p=>{const last=state.stockMovements.find(m=>m.productId===p.id);return `<tr><td><div class="product-cell"><span class="mini-art ${productColor(p)}">${productVisual(p)}</span><div><strong>${esc(p.name)}</strong><span>${esc(p.code)}</span></div></div></td><td>${esc(categoryName(p.categoryId))}</td><td><b>${p.stock} un.</b></td><td>${p.minStock} un.</td><td><span class="status ${p.stock<=p.minStock?"low":"ok"}">${p.stock===0?"Sem estoque":p.stock<=p.minStock?"Estoque baixo":"Normal"}</span></td><td>${last?localDate(last.date):"—"}</td><td><button class="action-btn" data-stock-product="${p.id}">Movimentar</button></td></tr>`}).join("");
  $("#movementTableBody").innerHTML=state.stockMovements.slice(0,10).map(m=>{const p=state.products.find(x=>x.id===m.productId);return `<tr><td>${localDate(m.date)}</td><td><b>${esc(p?.name||"Produto removido")}</b></td><td><span class="status ${m.qty>0?"ok":"warning"}">${m.qty>0?"Entrada":"Saída"}</span></td><td class="${m.qty>0?"positive":"negative"}">${m.qty>0?"+":""}${m.qty} un.</td><td>${esc(m.reason)}</td><td>${esc(m.operator)}</td></tr>`}).join("")||`<tr><td colspan="6" class="muted">Nenhuma movimentação registrada nesta instalação.</td></tr>`;
}
function kpi(icon,color,label,value){return `<div class="kpi-card"><div class="kpi-icon ${color}">${icons[icon]}</div><div><span>${label}</span><strong>${value}</strong></div></div>`}

const sellerSales=(sellerId,period="all")=>state.sales.filter(s=>s.status==="completed"&&(s.sellerId===sellerId||(!s.sellerId&&s.operator===state.sellers.find(x=>x.id===sellerId)?.name))&&inPeriod(s.date,period));
function renderSettings(){
  const body=$("#sellerTableBody"),defaultSelect=$("#settingDefaultSeller"); if(!body||!defaultSelect)return;
  const activeSellers=state.sellers.filter(s=>s.active!==false);
  defaultSelect.innerHTML=activeSellers.map(s=>"<option value=\""+esc(s.id)+"\">"+esc(s.name)+"</option>").join(""); defaultSelect.value=state.settings.defaultSellerId;
  $("#settingStoreName").value=state.settings.storeName||""; $("#settingDefaultDiscount").value=Number(state.settings.defaultDiscount||0); $("#settingAutoFocus").checked=state.settings.autoFocus!==false; $("#settingConfirmSale").checked=state.settings.confirmSale===true;
  body.innerHTML=state.sellers.map(s=>{const sales=sellerSales(s.id,"all"),revenue=sales.reduce((sum,sale)=>sum+sale.total,0);return "<tr><td><div class=\"seller-name\"><span class=\"avatar\">"+esc(s.name.split(/\s+/).map(n=>n[0]).slice(0,2).join("").toUpperCase())+"</span><strong>"+esc(s.name)+"</strong></div></td><td>"+esc(s.phone||"—")+"</td><td>"+sales.length+"</td><td><b>"+money.format(revenue)+"</b></td><td><span class=\"status "+(s.active===false?"cancelled":"ok")+"\">"+(s.active===false?"Inativo":"Ativo")+"</span></td><td><button class=\"action-btn\" data-edit-seller=\""+s.id+"\">Editar</button></td></tr>";}).join("")||"<tr><td colspan=\"6\" class=\"muted\">Cadastre o primeiro vendedor.</td></tr>";
  const period=$("#sellerRankingPeriod")?.value||"all",ranking=state.sellers.map(s=>({seller:s,sales:sellerSales(s.id,period)})).map(x=>({...x,revenue:x.sales.reduce((sum,s)=>sum+s.total,0)})).filter(x=>x.sales.length).sort((a,b)=>b.revenue-a.revenue);
  $("#sellerRanking").innerHTML=ranking.map((x,i)=>"<div class=\"seller-rank-row\"><span class=\"rank-number\">"+(i+1)+"</span><div class=\"seller-rank-main\"><strong>"+esc(x.seller.name)+"</strong><small>"+x.sales.length+" venda"+(x.sales.length===1?"":"s")+" no período</small></div><b>"+money.format(x.revenue)+"</b></div>").join("")||"<div class=\"empty-state\"><p>Nenhuma venda registrada neste período.</p></div>";
}
function showSellerForm(id){
  const seller=id?state.sellers.find(s=>s.id===id):null;
  openModal("<form id=\"sellerForm\"><div class=\"modal-head\"><div><h2>"+(seller?"Editar":"Novo")+" vendedor</h2><p>Defina quem poderá ser associado às vendas.</p></div><button type=\"button\" class=\"modal-close\">×</button></div><div class=\"modal-body\"><div class=\"form-grid\"><div class=\"field full\"><label>NOME DO VENDEDOR</label><input name=\"name\" required value=\""+esc(seller?.name||"")+"\" placeholder=\"Ex.: Ana Souza\"></div><div class=\"field full\"><label>TELEFONE (OPCIONAL)</label><input name=\"phone\" value=\""+esc(seller?.phone||"")+"\" placeholder=\"(00) 00000-0000\"></div><label class=\"setting-toggle full\"><input name=\"active\" type=\"checkbox\" "+(seller?.active!==false?"checked":"")+"><span><strong>Vendedor ativo</strong><small>Vendedores inativos não aparecem na finalização.</small></span></label></div></div><div class=\"modal-footer\"><button type=\"button\" class=\"btn secondary modal-close-btn\">Cancelar</button><button class=\"btn primary\">Salvar vendedor</button></div></form>");
  $("#sellerForm").onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target));data.active=e.target.active.checked;if(seller)Object.assign(seller,{name:data.name.trim(),phone:data.phone.trim(),active:data.active});else state.sellers.push({id:uid("seller"),name:data.name.trim(),phone:data.phone.trim(),active:data.active});if(!state.sellers.some(s=>s.id===state.settings.defaultSellerId&&s.active!==false))state.settings.defaultSellerId=state.sellers.find(s=>s.active!==false)?.id||state.sellers[0].id;save();closeModal();renderAll();toast("Vendedor salvo.");};
}
function saveSettings(){state.settings.storeName=$("#settingStoreName").value.trim()||"ÁguaPro Distribuidora";state.settings.defaultSellerId=$("#settingDefaultSeller").value||state.sellers[0]?.id;state.settings.defaultDiscount=Math.max(0,Number($("#settingDefaultDiscount").value)||0);state.settings.autoFocus=$("#settingAutoFocus").checked;state.settings.confirmSale=$("#settingConfirmSale").checked;save();toast("Configurações atualizadas.");}
function showStockForm(productId=""){
  openModal(`<form id="stockForm"><div class="modal-head"><div><h2>Nova movimentação</h2><p>Registre entradas, saídas ou ajustes</p></div><button type="button" class="modal-close">×</button></div><div class="modal-body"><div class="form-grid"><div class="field full"><label>PRODUTO</label><select name="productId" required>${state.products.map(p=>`<option value="${p.id}" ${p.id===productId?"selected":""}>${esc(p.name)} · saldo ${p.stock}</option>`)}</select></div><div class="field"><label>TIPO</label><select name="type"><option value="in">Entrada</option><option value="out">Saída</option><option value="adjust">Ajuste de saldo</option></select></div><div class="field"><label>QUANTIDADE</label><input name="qty" type="number" min="0" step="1" required value="1"></div><div class="field full"><label>MOTIVO</label><input name="reason" required placeholder="Ex.: Compra do fornecedor, avaria, inventário"></div></div></div><div class="modal-footer"><button type="button" class="btn secondary modal-close-btn">Cancelar</button><button class="btn primary">Registrar movimentação</button></div></form>`);
  $("#stockForm").onsubmit=e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target)),p=state.products.find(x=>x.id===data.productId),qty=Number(data.qty);let delta=data.type==="in"?qty:data.type==="out"?-qty:qty-p.stock;if(p.stock+delta<0){toast("A saída é maior que o saldo disponível.","error");return}p.stock+=delta;state.stockMovements.unshift({id:uid("mov"),date:nowIso(),productId:p.id,type:data.type,qty:delta,reason:data.reason,operator:"Marcos Silva"});save();closeModal();renderAll();toast("Movimentação registrada.")};
}

function renderCancellations(){
  const term=$("#cancelSearch").value.toLowerCase(),status=$("#cancelStatusFilter").value;
  const list=state.sales.filter(s=>(!term||String(s.number).includes(term)||s.payment.toLowerCase().includes(term))&&(!status||s.status===status));
  $("#cancelTableBody").innerHTML=list.map(s=>`<tr><td><b>#${s.number}</b></td><td>${localDate(s.date)}</td><td>${s.items.reduce((a,i)=>a+i.qty,0)} itens</td><td>${s.payment}</td><td><b>${money.format(s.total)}</b></td><td><span class="status ${s.status}">${s.status==="completed"?"Concluída":"Cancelada"}</span></td><td>${s.status==="completed"?`<button class="action-btn danger" data-cancel-sale="${s.id}">Cancelar venda</button>`:`<button class="action-btn" data-view-cancel="${s.id}">Ver motivo</button>`}</td></tr>`).join("")||`<tr><td colspan="7" class="muted">Nenhuma venda encontrada.</td></tr>`;
}

function showCancelSale(id){
  const sale=state.sales.find(s=>s.id===id); if(!sale)return;
  openModal(`<form id="cancelForm"><div class="modal-head"><div><h2>Cancelar venda #${sale.number}</h2><p>${localDate(sale.date)} · ${sale.payment}</p></div><button type="button" class="modal-close">×</button></div><div class="modal-body"><div class="alert danger">Esta ação estorna ${money.format(sale.total)} e devolve os itens ao estoque. O registro continuará nos relatórios.</div><div class="field"><label>MOTIVO DO CANCELAMENTO</label><textarea name="reason" required minlength="5" placeholder="Descreva por que esta venda está sendo cancelada..."></textarea></div></div><div class="modal-footer"><button type="button" class="btn secondary modal-close-btn">Voltar</button><button class="btn danger">Confirmar cancelamento</button></div></form>`);
  $("#cancelForm").onsubmit=e=>{e.preventDefault();if(sale.status!=="completed")return;const reason=new FormData(e.target).get("reason"),date=nowIso();sale.status="cancelled";sale.cancelledAt=date;sale.cancelReason=reason;sale.cancelledBy="Marcos Silva";sale.items.forEach(i=>{const p=state.products.find(x=>x.id===i.productId);if(p){p.stock+=i.qty;state.stockMovements.unshift({id:uid("mov"),date,productId:p.id,type:"reversal",qty:i.qty,reason:`Estorno da venda #${sale.number}`,operator:"Marcos Silva"})}});state.cancellations.unshift({id:uid("cancel"),saleId:sale.id,date,reason,operator:"Marcos Silva"});save();closeModal();renderAll();toast(`Venda #${sale.number} cancelada e estoque estornado.`)};
}

function viewCancellation(id){ const s=state.sales.find(x=>x.id===id);openModal(`<div class="modal-head"><div><h2>Cancelamento da venda #${s.number}</h2><p>Registro permanente de auditoria</p></div><button class="modal-close">×</button></div><div class="modal-body"><div class="checkout-summary"><div><span>Cancelada em</span><b>${localDate(s.cancelledAt)}</b></div><div><span>Responsável</span><b>${esc(s.cancelledBy)}</b></div><div><span>Valor estornado</span><b>${money.format(s.total)}</b></div></div><div class="field"><label>MOTIVO REGISTRADO</label><p class="modal-reason">${esc(s.cancelReason)}</p></div></div><div class="modal-footer"><button class="btn secondary modal-close-btn">Fechar</button></div>`); }

function inPeriod(iso,period){
  const d=new Date(iso),now=new Date();
  if(period==="all")return true;
  if(period==="day")return d.toDateString()===now.toDateString();
  if(period==="week"){
    const start=new Date(now);
    const dayOfWeek=(start.getDay()+6)%7;
    start.setDate(start.getDate()-dayOfWeek);
    start.setHours(0,0,0,0);
    const end=new Date(start);
    end.setDate(end.getDate()+7);
    return d>=start&&d<end;
  }
  if(period==="month")return d.getMonth()===now.getMonth()&&d.getFullYear()===now.getFullYear();
  return d.getFullYear()===now.getFullYear();
}

function reportSales(){return state.sales.filter(s=>inPeriod(s.date,reportPeriod));}

let chartBuckets=[];

function renderReports(){
  const list=reportSales(),valid=list.filter(s=>s.status==="completed"),revenue=valid.reduce((a,s)=>a+s.total,0),cost=valid.reduce((a,s)=>a+s.cost,0),profit=revenue-cost,avg=valid.length?revenue/valid.length:0;
  $("#reportKpis").innerHTML=kpi("cash","blue","Faturamento",money.format(revenue))+kpi("trend","green","Lucro bruto estimado",money.format(profit))+kpi("cart","orange","Vendas concluídas",valid.length)+kpi("tag","blue","Ticket médio",money.format(avg));
  $("#reportTableBody").innerHTML=list.map(s=>`<tr><td><b>#${s.number}</b></td><td>${localDate(s.date)}</td><td>${s.items.reduce((a,i)=>a+i.qty,0)}</td><td>${s.payment}</td><td>${money.format(s.total)}</td><td>${money.format(s.cost)}</td><td class="${s.status==="completed"?"positive":"muted"}">${s.status==="completed"?money.format(s.total-s.cost):"—"}</td><td><span class="status ${s.status}">${s.status==="completed"?"Concluída":"Cancelada"}</span></td></tr>`).join("")||`<tr><td colspan="8" class="muted">Nenhuma venda no período selecionado.</td></tr>`;
  const counts={};valid.flatMap(s=>s.items).forEach(i=>counts[i.name]=(counts[i.name]||0)+i.qty);const ranking=Object.entries(counts).sort((a,b)=>b[1]-a[1]).slice(0,5);
  $("#productRanking").innerHTML=ranking.map(([name,qty],i)=>`<div class="rank-item"><span class="rank-number">${i+1}</span><div><strong>${esc(name)}</strong><small>${qty} unidades vendidas</small></div><b>${qty}</b></div>`).join("")||`<div class="empty-state"><p>Sem vendas neste período.</p></div>`;
  renderChart(valid);
}

function renderChart(sales){
  const allSalesInPeriod=reportSales();
  chartBuckets=[];
  const now=new Date();

  if(reportPeriod==="day"){
    const hours=[
      {label:"08h",startH:8,endH:10,title:"Hoje · 08h às 10h"},
      {label:"10h",startH:10,endH:12,title:"Hoje · 10h às 12h"},
      {label:"12h",startH:12,endH:14,title:"Hoje · 12h às 14h"},
      {label:"14h",startH:14,endH:16,title:"Hoje · 14h às 16h"},
      {label:"16h",startH:16,endH:18,title:"Hoje · 16h às 18h"},
      {label:"18h",startH:18,endH:20,title:"Hoje · 18h às 20h"},
      {label:"20h",startH:20,endH:24,title:"Hoje · 20h às 23h59"}
    ];
    chartBuckets=hours.map((h,i)=>{
      const match=allSalesInPeriod.filter(s=>{
        const d=new Date(s.date);
        const hour=d.getHours();
        return hour>=h.startH&&(i===hours.length-1?hour<=23:hour<h.endH);
      });
      const valid=match.filter(s=>s.status==="completed");
      const total=valid.reduce((a,s)=>a+s.total,0);
      return {id:`day_${i}`,label:h.label,fullTitle:h.title,sales:valid,allSales:match,total};
    });
  } else if(reportPeriod==="week"){
    const weekdays=["Seg","Ter","Qua","Qui","Sex","Sáb","Dom"];
    const fullWeekdays=["Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sábado","Domingo"];
    const start=new Date(now);
    const dayOfWeek=(start.getDay()+6)%7;
    start.setDate(start.getDate()-dayOfWeek);
    start.setHours(0,0,0,0);
    chartBuckets=weekdays.map((label,i)=>{
      const targetDate=new Date(start);
      targetDate.setDate(targetDate.getDate()+i);
      const match=allSalesInPeriod.filter(s=>new Date(s.date).toDateString()===targetDate.toDateString());
      const valid=match.filter(s=>s.status==="completed");
      const total=valid.reduce((a,s)=>a+s.total,0);
      const formattedDate=targetDate.toLocaleDateString("pt-BR",{day:"2-digit",month:"2-digit"});
      return {id:`week_${i}`,label,fullTitle:`${fullWeekdays[i]} (${formattedDate})`,sales:valid,allSales:match,total};
    });
  } else if(reportPeriod==="year"){
    const months=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
    const fullMonths=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    chartBuckets=months.map((label,i)=>{
      const match=allSalesInPeriod.filter(s=>new Date(s.date).getMonth()===i);
      const valid=match.filter(s=>s.status==="completed");
      const total=valid.reduce((a,s)=>a+s.total,0);
      return {id:`month_${i}`,label,fullTitle:`${fullMonths[i]} de ${now.getFullYear()}`,sales:valid,allSales:match,total};
    });
  } else {
    const daysInMonth=new Date(now.getFullYear(),now.getMonth()+1,0).getDate();
    const intervals=[
      {label:"01-05",from:1,to:5,title:`01 a 05 de ${now.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`},
      {label:"06-10",from:6,to:10,title:`06 a 10 de ${now.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`},
      {label:"11-15",from:11,to:15,title:`11 a 15 de ${now.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`},
      {label:"16-20",from:16,to:20,title:`16 a 20 de ${now.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`},
      {label:"21-25",from:21,to:25,title:`21 a 25 de ${now.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`},
      {label:"26-31",from:26,to:31,title:`26 a ${daysInMonth} de ${now.toLocaleDateString('pt-BR',{month:'long',year:'numeric'})}`}
    ];
    chartBuckets=intervals.map((it,i)=>{
      const match=allSalesInPeriod.filter(s=>{
        const d=new Date(s.date).getDate();
        return d>=it.from&&d<=it.to;
      });
      const valid=match.filter(s=>s.status==="completed");
      const total=valid.reduce((a,s)=>a+s.total,0);
      return {id:`interval_${i}`,label:it.label,fullTitle:it.title,sales:valid,allSales:match,total};
    });
  }

  const max=Math.max(...chartBuckets.map(b=>b.total),1);
  const chartEl=$("#salesChart");
  if(!chartEl)return;

  chartEl.innerHTML=chartBuckets.map((bucket,i)=>`
    <div class="bar-column clickable-bar" data-bucket-idx="${i}" title="Clique para ver o relatório de ${bucket.fullTitle}">
      <div class="bar" data-height="${Math.max(3,(bucket.total/max)*100)}">
        <span class="bar-tooltip"><b>${money.format(bucket.total)}</b><br><small>🔍 Clique para detalhar</small></span>
      </div>
      <span class="bar-label">${bucket.label}</span>
    </div>
  `).join("");

  $$(".bar",chartEl).forEach(bar=>bar.style.setProperty("--bar-height",`${bar.dataset.height}%`));
  $$(".bar-column",chartEl).forEach(col=>{
    col.onclick=()=>{
      const idx=Number(col.dataset.bucketIdx);
      if(chartBuckets[idx]) showPeriodDetailModal(chartBuckets[idx]);
    };
  });
}

function showPeriodDetailModal(bucket){
  const valid=bucket.sales||[];
  const allSales=bucket.allSales||[];
  const gross=valid.reduce((a,s)=>a+(s.subtotal||s.total),0);
  const discounts=valid.reduce((a,s)=>a+(s.discount||0),0);
  const net=valid.reduce((a,s)=>a+s.total,0);
  const cost=valid.reduce((a,s)=>a+(s.cost||0),0);
  const profit=net-cost;
  const margin=net>0?((profit/net)*100).toFixed(1):"0.0";
  const avgTicket=valid.length?net/valid.length:0;
  const cancelledCount=allSales.filter(s=>s.status==="cancelled").length;

  const productStats={};
  valid.flatMap(s=>s.items).forEach(item=>{
    if(!productStats[item.name]){
      const p=state.products.find(x=>x.id===item.productId||x.name===item.name);
      productStats[item.name]={
        id:item.productId,
        name:item.name,
        qty:0,
        revenue:0,
        cost:0,
        currentStock:p?p.stock:0,
        minStock:p?p.minStock:5,
        emoji:p?.emoji||"📦"
      };
    }
    productStats[item.name].qty+=item.qty;
    productStats[item.name].revenue+=item.price*item.qty;
    productStats[item.name].cost+=(item.cost||0)*item.qty;
  });

  const productList=Object.values(productStats).sort((a,b)=>b.qty-a.qty);
  const maxProductQty=productList.length?Math.max(...productList.map(p=>p.qty)):1;
  const totalItemsSold=productList.reduce((a,p)=>a+p.qty,0);

  const payments={Dinheiro:0,Cartão:0,Pix:0,Prazo:0};
  valid.forEach(s=>{
    if(s.paymentBreakdown){
      payments.Dinheiro+=(s.paymentBreakdown.cash||0);
      payments.Cartão+=(s.paymentBreakdown.card||0);
      payments.Prazo+=(s.paymentBreakdown.term||0);
    } else {
      const pKey=s.payment?.includes("Dinheiro")?"Dinheiro":s.payment?.includes("Cart")?"Cartão":s.payment?.includes("Pix")?"Pix":"Prazo";
      payments[pKey]=(payments[pKey]||0)+s.total;
    }
  });

  openModal(`<div class="period-detail-modal">
    <div class="modal-head period-modal-head">
      <div class="modal-title-group">
        <div class="period-title-badge">
          <span class="period-badge-icon">📊</span>
          <h2>Detalhamento do Período</h2>
        </div>
        <p class="period-subtitle"><span class="period-clock">📅</span> <strong>${esc(bucket.fullTitle)}</strong> · ${valid.length} ${valid.length===1?"venda concluída":"vendas concluídas"}${cancelledCount?` · <span class="cancelled-tag">${cancelledCount} cancelamento(s)</span>`:""}</p>
      </div>
      <button class="modal-close" title="Fechar">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18M6 6l12 12"/></svg>
      </button>
    </div>

    <div class="modal-body period-modal-body">
      <!-- 5 KPI Cards -->
      <div class="period-kpi-grid">
        <div class="period-kpi-card card-gross">
          <div class="p-kpi-icon icon-blue-subtle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M6 12h.01M18 12h.01"/></svg>
          </div>
          <div class="p-kpi-info">
            <span class="p-kpi-label">Valor Bruto</span>
            <strong class="p-kpi-value">${money.format(gross)}</strong>
          </div>
        </div>

        <div class="period-kpi-card card-discount">
          <div class="p-kpi-icon icon-yellow-subtle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m20.59 13.41-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
          </div>
          <div class="p-kpi-info">
            <span class="p-kpi-label">Descontos Concedidos</span>
            <strong class="p-kpi-value text-orange">${money.format(discounts)}</strong>
          </div>
        </div>

        <div class="period-kpi-card card-net">
          <div class="p-kpi-icon icon-blue-solid">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          </div>
          <div class="p-kpi-info">
            <span class="p-kpi-label">Faturamento Líquido</span>
            <strong class="p-kpi-value text-blue">${money.format(net)}</strong>
          </div>
        </div>

        <div class="period-kpi-card card-profit">
          <div class="p-kpi-icon icon-green-subtle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 17 6-6 4 4 8-9"/><path d="M15 6h6v6"/></svg>
          </div>
          <div class="p-kpi-info">
            <span class="p-kpi-label">Lucro Estimado</span>
            <strong class="p-kpi-value text-green">${money.format(profit)} <small class="margin-pill">${margin}%</small></strong>
          </div>
        </div>

        <div class="period-kpi-card card-ticket">
          <div class="p-kpi-icon icon-purple-subtle">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </div>
          <div class="p-kpi-info">
            <span class="p-kpi-label">Ticket Médio</span>
            <strong class="p-kpi-value">${money.format(avgTicket)}</strong>
          </div>
        </div>
      </div>

      <!-- 2-Column Detail: Products & Payment/Stock -->
      <div class="period-details-grid">
        <!-- Products Ranking Card -->
        <div class="period-card products-detail-card">
          <div class="period-card-head">
            <div>
              <h3>Produtos Mais Vendidos</h3>
              <p>Desempenho e impacto no estoque</p>
            </div>
            <span class="badge-pill">${totalItemsSold} itens vendidos</span>
          </div>

          <div class="period-product-list">
            ${productList.length?productList.map((p,idx)=>`
              <div class="period-product-row">
                <span class="product-rank-badge rank-${idx+1}">${idx+1}</span>
                <span class="product-emoji">${esc(p.emoji)}</span>
                <div class="product-info-col">
                  <div class="product-info-top">
                    <strong>${esc(p.name)}</strong>
                    <b>${money.format(p.revenue)}</b>
                  </div>
                  <div class="product-bar-wrap">
                    <div class="product-progress-bar" style="width:${Math.max(6,(p.qty/maxProductQty)*100)}%"></div>
                  </div>
                  <div class="product-info-bottom">
                    <span>${p.qty} un. vendidas</span>
                    <span class="stock-status-chip ${p.currentStock<=p.minStock?(p.currentStock<=0?'out':'low'):'ok'}">
                      Estoque atual: <b>${p.currentStock} un.</b>
                    </span>
                  </div>
                </div>
              </div>
            `).join(""):`<div class="empty-detail-state"><p>Nenhum produto vendido neste intervalo de tempo.</p></div>`}
          </div>
        </div>

        <!-- Right Card: Payment Breakdown & Operations -->
        <div class="period-card payment-detail-card">
          <div class="period-card-head">
            <div>
              <h3>Formas de Pagamento</h3>
              <p>Valores recebidos por método</p>
            </div>
          </div>

          <div class="period-payments-list">
            <div class="pay-method-stat green">
              <div class="pay-stat-top">
                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="12" x="2" y="6" rx="2"/><circle cx="12" cy="12" r="2"/></svg> Dinheiro</span>
                <strong>${money.format(payments.Dinheiro)}</strong>
              </div>
              <div class="pay-progress-track"><div class="pay-progress-fill fill-green" style="width:${net>0?((payments.Dinheiro/net)*100):0}%"></div></div>
            </div>

            <div class="pay-method-stat blue">
              <div class="pay-stat-top">
                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg> Cartão</span>
                <strong>${money.format(payments.Cartão)}</strong>
              </div>
              <div class="pay-progress-track"><div class="pay-progress-fill fill-blue" style="width:${net>0?((payments.Cartão/net)*100):0}%"></div></div>
            </div>

            <div class="pay-method-stat purple">
              <div class="pay-stat-top">
                <span><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/></svg> A Prazo / Fiado</span>
                <strong>${money.format(payments.Prazo)}</strong>
              </div>
              <div class="pay-progress-track"><div class="pay-progress-fill fill-purple" style="width:${net>0?((payments.Prazo/net)*100):0}%"></div></div>
            </div>
          </div>

          <div class="period-operational-summary">
            <div class="op-stat">
              <span>Custo dos produtos</span>
              <b>${money.format(cost)}</b>
            </div>
            <div class="op-stat">
              <span>Margem operacional</span>
              <b class="text-green">${margin}%</b>
            </div>
            <div class="op-stat">
              <span>Cancelamentos</span>
              <b class="${cancelledCount?'text-red':'muted'}">${cancelledCount}</b>
            </div>
          </div>
        </div>
      </div>

      <!-- Sales Table for this period -->
      <div class="period-table-card">
        <div class="period-card-head">
          <div>
            <h3>Vendas Realizadas no Intervalo</h3>
            <p>Lista individual de atendimentos</p>
          </div>
        </div>
        <div class="period-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Venda</th>
                <th>Horário</th>
                <th>Itens</th>
                <th>Forma de Pagamento</th>
                <th>Desconto</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${allSales.length?allSales.map(s=>`
                <tr>
                  <td><b>#${s.number}</b></td>
                  <td>${localDate(s.date)}</td>
                  <td>${s.items.reduce((a,i)=>a+i.qty,0)} un. (${s.items.map(i=>`${i.qty}x ${esc(i.name)}`).join(", ")})</td>
                  <td><span class="pay-pill-tag">${esc(s.payment)}</span></td>
                  <td>${s.discount?`<span class="text-orange">-${money.format(s.discount)}</span>`:"R$ 0,00"}</td>
                  <td><strong class="text-blue">${money.format(s.total)}</strong></td>
                  <td><span class="status ${s.status}">${s.status==="completed"?"Concluída":"Cancelada"}</span></td>
                </tr>
              `).join(""):`<tr><td colspan="7" class="muted text-center" style="padding:24px;">Nenhuma transação registrada neste horário/período.</td></tr>`}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="modal-footer period-modal-footer">
      <button class="btn secondary modal-close-btn">
        <span>Fechar</span> <small>Esc</small>
      </button>
    </div>
  </div>`, true);
  const grossCard=$("#modal .card-gross"),netCard=$("#modal .card-net");
  if(grossCard){grossCard.classList.add("period-kpi-clickable");grossCard.title="Clique para ver as formas de pagamento";grossCard.onclick=()=>showPeriodMetricPopup("payments",bucket);}
  if(netCard){netCard.classList.add("period-kpi-clickable");netCard.title="Clique para ver as vendas realizadas";netCard.onclick=()=>showPeriodMetricPopup("sales",bucket);}
}

function showPeriodMetricPopup(type,bucket){
  const valid=bucket.sales||[],allSales=bucket.allSales||[];
  if(type==="payments"){
    const payments={Dinheiro:0,Cartão:0,Pix:0,Prazo:0};
    valid.forEach(s=>{
      if(s.paymentBreakdown){payments.Dinheiro+=(s.paymentBreakdown.cash||0);payments.Cartão+=(s.paymentBreakdown.card||0);payments.Prazo+=(s.paymentBreakdown.term||0);}
      else {const key=s.payment?.includes("Dinheiro")?"Dinheiro":s.payment?.includes("Cart")?"Cartão":s.payment?.includes("Pix")?"Pix":"Prazo";payments[key]=(payments[key]||0)+s.total;}
    });
    const total=valid.reduce((a,s)=>a+s.total,0);
    const rows=Object.entries(payments).map(([name,value])=>"<div class=\"period-popup-pay-row\"><span>"+esc(name)+"</span><strong>"+money.format(value)+"</strong><div class=\"period-popup-track\"><i style=\"width:"+(total>0?(value/total)*100:0)+"%\"></i></div></div>").join("");
    openModal("<div class=\"period-popup\"><div class=\"period-popup-head\"><div><span class=\"period-popup-kicker\">Detalhamento de pagamentos</span><h2>Formas de pagamento</h2><p>"+esc(bucket.fullTitle)+"</p></div><button class=\"modal-close\">×</button></div><div class=\"period-popup-body\">"+rows+"</div><div class=\"period-popup-foot\"><button class=\"btn secondary\" id=\"returnPeriodBtn\">Voltar ao detalhamento</button></div></div>",true);
  } else {
    const sellerOptions="<option value=\"all\">Todos os vendedores</option>"+state.sellers.map(s=>"<option value=\""+esc(s.id)+"\">"+esc(s.name)+"</option>").join("");
    openModal("<div class=\"period-popup period-sales-popup\"><div class=\"period-popup-head\"><div><span class=\"period-popup-kicker\">Vendas realizadas no intervalo</span><h2>Faturamento líquido</h2><p>"+esc(bucket.fullTitle)+"</p></div><button class=\"modal-close\">×</button></div><div class=\"period-popup-body\"><div class=\"period-popup-filter\"><label for=\"periodSellerFilter\">Filtrar por vendedor</label><select id=\"periodSellerFilter\">"+sellerOptions+"</select></div><div class=\"period-popup-metrics\" id=\"periodPopupMetrics\"></div><div class=\"period-popup-table\"><table><thead><tr><th>Venda</th><th>Horário</th><th>Vendedor</th><th>Itens</th><th>Pagamento</th><th>Valor</th><th>Status</th></tr></thead><tbody id=\"periodPopupSalesBody\"></tbody></table></div></div><div class=\"period-popup-foot\"><button class=\"btn secondary\" id=\"returnPeriodBtn\">Voltar ao detalhamento</button></div></div>",true);
    const sellerLabel=s=>state.sellers.find(x=>x.id===s.sellerId)?.name||s.operator||"Sem vendedor";
    const renderSalesPopup=()=>{
      const sellerId=$("#periodSellerFilter").value;
      const filtered=allSales.filter(s=>sellerId==="all"||s.sellerId===sellerId||(!s.sellerId&&sellerLabel(s)===state.sellers.find(x=>x.id===sellerId)?.name));
      const completed=filtered.filter(s=>s.status==="completed");
      const invested=completed.reduce((a,s)=>a+(s.cost||0),0),gross=completed.reduce((a,s)=>a+(s.subtotal||s.total),0),netValue=completed.reduce((a,s)=>a+s.total,0);
      $("#periodPopupMetrics").innerHTML="<div class=\"period-popup-metric invested\"><span>Valor investido</span><strong>"+money.format(invested)+"</strong><small>Custo dos produtos</small></div><div class=\"period-popup-metric gross\"><span>Valor bruto recebido</span><strong>"+money.format(gross)+"</strong><small>Antes dos descontos</small></div><div class=\"period-popup-metric net\"><span>Valor líquido</span><strong>"+money.format(netValue)+"</strong><small>Após descontos</small></div>";
      $("#periodPopupSalesBody").innerHTML=filtered.map(s=>"<tr><td><b>#"+s.number+"</b></td><td>"+localDate(s.date)+"</td><td>"+esc(sellerLabel(s))+"</td><td>"+s.items.reduce((a,i)=>a+i.qty,0)+" itens</td><td><span class=\"pay-pill-tag\">"+esc(s.payment)+"</span></td><td><strong class=\"text-blue\">"+money.format(s.total)+"</strong></td><td><span class=\"status "+s.status+"\">"+(s.status==="completed"?"Concluída":"Cancelada")+"</span></td></tr>").join("")||"<tr><td colspan=\"7\" class=\"muted\">Nenhuma venda para este vendedor no período.</td></tr>";
    };
    $("#periodSellerFilter").onchange=renderSalesPopup;
    renderSalesPopup();
  }
  $("#returnPeriodBtn").onclick=()=>showPeriodDetailModal(bucket);
}

function exportReport(){
  const rows=[["Venda","Data","Status","Pagamento","Subtotal","Descontos","Faturamento","Custo","Lucro"]];reportSales().forEach(s=>rows.push([`#${s.number}`,localDate(s.date),s.status==="completed"?"Concluída":"Cancelada",s.payment,s.subtotal.toFixed(2),s.discount.toFixed(2),s.total.toFixed(2),s.cost.toFixed(2),s.status==="completed"?(s.total-s.cost).toFixed(2):"0.00"]));
  const csv="\ufeff"+rows.map(r=>r.map(v=>`"${String(v).replace(/"/g,'""')}"`).join(";")).join("\n"),blob=new Blob([csv],{type:"text/csv;charset=utf-8"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download=`relatorio-pdv-${new Date().toISOString().slice(0,10)}.csv`;a.click();URL.revokeObjectURL(a.href);toast("Relatório CSV baixado.");
}

document.addEventListener("click",e=>{
  const nav=e.target.closest("[data-page]");if(nav)navigate(nav.dataset.page);
  const cat=e.target.closest("[data-category]");if(cat){saleCategory=cat.dataset.category;renderSale()}
  const product=e.target.closest("[data-product]");if(product)addToCart(product.dataset.product);
  const cart=e.target.closest("[data-cart]");if(cart){const item=state.cart.find(i=>i.productId===cart.dataset.id),p=state.products.find(x=>x.id===cart.dataset.id);if(cart.dataset.cart==="plus"&&item.qty<p.stock)item.qty++;if(cart.dataset.cart==="minus")item.qty--;if(cart.dataset.cart==="remove"||item.qty<=0)state.cart=state.cart.filter(i=>i!==item);renderCart()}
  if(e.target.closest(".modal-close")||e.target.closest(".modal-close-btn"))closeModal();
  const editP=e.target.closest("[data-edit-product]");if(editP)showProductForm(editP.dataset.editProduct);
  const editC=e.target.closest("[data-edit-category]");if(editC)showSimpleForm("category",editC.dataset.editCategory);
  const editS=e.target.closest("[data-edit-supplier]");if(editS)showSimpleForm("supplier",editS.dataset.editSupplier);
  const editSeller=e.target.closest("[data-edit-seller]");if(editSeller)showSellerForm(editSeller.dataset.editSeller);
  const stock=e.target.closest("[data-stock-product]");if(stock)showStockForm(stock.dataset.stockProduct);
  const cancel=e.target.closest("[data-cancel-sale]");if(cancel)showCancelSale(cancel.dataset.cancelSale);
  const view=e.target.closest("[data-view-cancel]");if(view)viewCancellation(view.dataset.viewCancel);
});

$("#modalBackdrop").onclick=e=>{if(e.target===e.currentTarget)closeModal()};
$("#menuBtn").onclick=()=>$("#sidebar").classList.toggle("show");
$("#cashPill").onclick=showCashModal;
$("#saleSearch").oninput=renderSale; $("#productSearch").oninput=renderProducts; $("#productCategoryFilter").onchange=renderProducts; $("#stockSearch").oninput=renderStock; $("#stockStatusFilter").onchange=renderStock; $("#cancelSearch").oninput=renderCancellations; $("#cancelStatusFilter").onchange=renderCancellations;
$("#manualDiscount").oninput=renderCart; $("#checkoutBtn").onclick=showCheckout; $("#clearCart").onclick=()=>{state.cart=[];renderCart()};
$("#scanBtn").onclick=()=>{$("#saleSearch").focus();toast("Digite ou leia o código de barras no campo de busca.","info")};
$("#stockEntryBtn").onclick=()=>showStockForm(); $("#exportCsv").onclick=exportReport;
$("#saveSettingsBtn").onclick=saveSettings; $("#addSellerBtn").onclick=()=>showSellerForm(); $("#sellerRankingPeriod").onchange=renderSettings;
$("#addProductBtn").onclick=()=>productTab==="products"?showProductForm():showSimpleForm(productTab==="categories"?"category":"supplier");
$$('[data-tab]').forEach(b=>b.onclick=()=>{productTab=b.dataset.tab;$$('[data-tab]').forEach(x=>x.classList.toggle("active",x===b));renderProducts()});
$$('[data-period]').forEach(b=>b.onclick=()=>{reportPeriod=b.dataset.period;$$('[data-period]').forEach(x=>x.classList.toggle("active",x===b));renderReports()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();if(e.key==="F2"){e.preventDefault();navigate("vendas");$("#saleSearch").focus()}if(e.key==="F4"){e.preventDefault();showCheckout()}});

$("#todayLabel").textContent=new Intl.DateTimeFormat("pt-BR",{weekday:"short",day:"2-digit",month:"short"}).format(new Date()).replace(/^./,m=>m.toUpperCase());
renderAll();
