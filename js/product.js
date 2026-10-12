
const PRODUCTS = {
  topbond: {
    name: "TOP BOND",
    image: "images/top-bond.png",
    description: "General purpose white glue. Select a size to view its exact price.",
    options: [
      ["100g","₦500"],["250g","₦1000"],["500g","₦3000"],["1kg","₦4200"],
      ["2kg","₦9,500"],["5kg","₦15,000"],["10kg","₦27,000"],["20kg","₦56,000"]
    ]
  },
  visa: {
    name: "VISA PERFECT BOND",
    image: "images/visa-perfect-bond.png",
    description: "VISA Perfect Bond range, with each size displayed separately.",
    options: [
      ["100g","₦450"],["250g","₦900"],["500g","₦2,800"],["1kg","₦3,900"],
      ["2kg","₦9,000"],["5kg","₦12,000"],["10kg","₦25,000"],["20kg","₦49,000"]
    ]
  },
  screws: {
    name: "SCREW NAILS",
    image: "images/drywall-screws.png",
    description: "Drywall screws/nails in black and white, with 500pcs per listed size.",
    options: [
      ["1-1/4\" — Black","500pcs","₦1000"],["1-1/2\" — Black","500pcs","₦1100"],["5/8\" — Black","500pcs","₦1150"],
      ["1\" — Black","500pcs","₦1200"],["2\" — Black","500pcs","₦1500"],["3/4\" — Black","500pcs","₦1300"],
      ["1-1/4\" — White","500pcs","₦1100"],["1-1/2\" — White","500pcs","₦1100"],["5/8\" — White","500pcs","₦1200"],
      ["1\" — White","500pcs","₦1250"],["2\" — White","500pcs","₦1600"],["3/4\" — White","500pcs","₦1300"]
    ]
  },
  vitrac: {
    name: "VITRAC GUM",
    image: "images/vitrac-gum.png",
    description: "VITRAC adhesive range.",
    options: [ ["500g","₦2500"],["1Kg","₦4500"],["3kg","₦11,000"],["15kg","₦53,900"],]
  },
  edge: {
    name: "EDGE TAPE",
    image: "images/edge-tape.png",
    description: "Colour/finish range. The handwritten price note states ₦18,500 except Gold at ₦25,000 and Silver at ₦27,000.",
    options: [
      ["Gold","₦25,000"],["Silver","₦27,000"],["Blue","₦18,500"],["Green","₦18,500"],
      ["Pink","₦18,500"],["Black","₦18,500"],["White","₦18,500"],["Brown","₦18,500"],
      ["Marble White","₦18,500"],["Orange","₦18,500"],["Dark Wood","₦18,500"],["Light Wood","₦18,500"],
      ["Ash Gray","₦18,500"],["Burgundy","₦18,500"],["Wood Grain Orange","₦18,500"],
      ["Stone Gray","₦18,500"],["Beige","₦18,500"],["Light Brown","₦18,500"],
      ["Navy Blue","18,500"],["Cream","₦18,500"]
    ]
  },
  runners: {
    name: "ROSSY-JOY DRAWER RUNNERS",
    image: "images/rossy-joy.png",
    description: "Six sizes, each available in black and white/silver.",
    options: [
      ["10\" — Black","₦1,100"],["12\" — Black","₦1,200"],["14\" — Black","₦1,500"],["16\" — Black","₦,1800"],["18\" — Black","₦5,000"],["20\" — Black","₦8,000"],
      ["10\" — White","₦1,200"],["12\" — White","₦1,500"],["14\" — White","₦2,200"],["16\" — White","₦2,500"],["18\" — White","₦5,500"],["20\" — White","₦9,000"]
    ]
  },
  multibond: {
    name: "SUPER MULTI BOND",
    image: "images/multi-bond.png",
    description: "Finalized sizes are 5kg, 10kg and 20kg; all three are bucket form.",
    options: [["100g","₦400"],["250g","₦800"],["500g","₦2,500"],["1kg","₦3,500"],
      ["2kg","₦9,000"],["5kg","₦15,000"],["10kg","₦29,000"],["20kg","₦52,000"]]
  },
  lumax: {
    name: "LUMAX BOND",
    image: "images/lumax-bond.png",
    description: "Separate LUMAX BOND section.",
    options: [["1kg","₦5,000"],["3kg","₦12,000"],["15kg","₦54,000"]]
  },
  isostik: {
    name: "ISOSTIK",
    image: "images/isostik.png",
    description: "Separate ISOSTIK section.",
    options: [["1kg","₦5,000"]]
  }
};

function moneyOrPending(price){
  return price ? price : "Price not entered";
}

function renderProductDetail(key){
  const p = PRODUCTS[key];
  if(!p) return;
  const title = document.querySelector("#detail-title");
  const desc = document.querySelector("#detail-description");
  const image = document.querySelector("#detail-image");
  const grid = document.querySelector("#option-grid");
  const panel = document.querySelector("#detail-panel");
  const selected = document.querySelector("#selected-detail");
  title.textContent = p.name;
  desc.textContent = p.description;
  image.src = p.image;
  grid.innerHTML = "";
  selected.classList.remove("show");
  selected.innerHTML = "";
  p.options.forEach((opt, index)=>{
    const card = document.createElement("button");
    card.className = "option-card";
    card.type = "button";
    card.innerHTML = `<h4>${opt[0]}</h4><div class="price">${moneyOrPending(opt[1])}</div>${opt[2]?`<small>${opt[2]}</small>`:""}`;
    card.addEventListener("click",()=>{
      document.querySelectorAll(".option-card").forEach(x=>x.classList.remove("active"));
      card.classList.add("active");
      selected.classList.add("show");
      selected.innerHTML = `<h3>${p.name} — ${opt[0]}</h3>
        <p><strong>Size/variant:</strong> ${opt[0]}</p>
        <p class="price"><strong>Price:</strong> ${moneyOrPending(opt[1])}</p>
        ${opt[2]?`<p><strong>Pack:</strong> ${opt[2]}</p>`:""}
        <p style="color:#64706a;margin-top:8px">Product image shown above is the finalized catalogue image for this range.</p>`;
      selected.scrollIntoView({behavior:"smooth",block:"nearest"});
    });
    grid.appendChild(card);
  });
  panel.classList.remove("hidden");
  panel.scrollIntoView({behavior:"smooth",block:"start"});
}

function setupProductButtons(){
  document.querySelectorAll("[data-product]").forEach(btn=>{
    btn.addEventListener("click",()=>renderProductDetail(btn.dataset.product));
  });
}
 