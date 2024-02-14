const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-menu-line" : "ri-close-line");
  if (isOpen) {
    navLinks.classList.add("close");
    navLinks.addEventListener(
      "animationend",
      (e) => {
        navLinks.classList.remove("open");
        navLinks.classList.remove("close");
      },
      { once: true }
    );
  } else {
    navLinks.classList.add("open");
  }
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__container .scroll__btn", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__container .header__socials", {
  ...scrollRevealOption,
  origin: "left",
  delay: 1500,
});

ScrollReveal().reveal(".about__image-1, .about__image-3", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".about__image-2", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about__content p", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about__content .about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// popup
function myFunction() {
  alert(
    "Performans çerezleri, ziyaretçilerin web sitesine ilişkin kullanım bilgilerini ve tercihlerini ANONİM olarak toplayan ve bu sayede web sitesinin performansının geliştirilmesine olanak sağlayan çerezlerdir."
  );
}

function myFunction2() {
  alert(
    "Bizimle paylaştığınız kişisel verileriniz sadece analiz yapmak suretiyle; sunduğumuz hizmetlerin gerekliliklerini en iyi şekilde yerine getirebilmek, bu hizmetlere sizin tarafınızdan ulaşılabilmesini ve maksimum düzeyde faydalanılabilmesini sağlamak, hizmetlerimizi, ihtiyaçlarınız doğrultusunda geliştirebilmek ve sizleri daha geniş kapsamlı hizmet sağlayıcıları ile yasal çerçeveler içerisinde buluşturabilmek ve kanundan doğan zorunlulukların (kişisel verilerin talep halinde adli ve idari makamlarla paylaşılması) yerine getirilebilmesi amacıyla, sözleşme ve hizmet süresince, amacına uygun ve ölçülü bir şekilde işlenecek ve güncellenecektir."
  );
}

function myFunction3() {
  alert(
    "Sevgili ziyaretçimiz, lütfen https://site.com web sitemizi ziyaret etmeden önce işbu kullanım koşulları sözleşmesini dikkatlice okuyunuz. Siteye erişiminiz tamamen bu sözleşmeyi kabulünüze ve bu sözleşme ile belirlenen şartlara uymanıza bağlıdır. Şayet bu sözleşmede yazan herhangi bir koşulu kabul etmiyorsanız, lütfen siteye erişiminizi sonlandırınız. Siteye erişiminizi sürdürdüğünüz takdirde, koşulsuz ve kısıtlamasız olarak, işbu sözleşme metninin tamamını kabul ettiğinizin, tarafımızca varsayılacağını lütfen unutmayınız. https://site.com web sitesi Şirket Adı tarafından yönetilmekte olup, bundan sonra SİTE olarak anılacaktır. İşbu siteye ilişkin Kullanım Koşulları, yayınlanmakla yürürlüğe girer. Değişiklik yapma hakkı, tek taraflı olarak SİTE'ye aittir ve SİTE üzerinden güncel olarak paylaşılacak olan bu değişiklikleri, tüm kullanıcılarımız baştan kabul etmiş sayılır."
  );
}

function myFunction4() {
  alert(
    "SİTE'de yayınlanan tüm metin, kod, grafikler, logolar, resimler, ses dosyaları ve kullanılan yazılımın sahibi (bundan böyle ve daha sonra içerik olarak anılacaktır) Şirket Adı olup, tüm hakları saklıdır. Yazılı izin olmaksızın site içeriğinin çoğaltılması veya kopyalanması kesinlikle yasaktır."
  );
}
