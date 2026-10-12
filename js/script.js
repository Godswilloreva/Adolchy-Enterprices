
document.addEventListener("DOMContentLoaded",()=>{
  setupProductButtons();

  const form = document.querySelector("#contact-form");
  if(form){
    form.addEventListener("submit",(e)=>{
      e.preventDefault();
      const status = document.querySelector("#form-status");
      status.textContent = "Thank you. Your message has been prepared successfully.";
      form.reset();
    });
  }

  const menuLinks = document.querySelectorAll('a[href^="#"]');
  menuLinks.forEach(a=>a.addEventListener("click",()=>{}));
});
