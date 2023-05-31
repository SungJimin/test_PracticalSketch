// header
document.addEventListener('scroll', function () {
    let scroll = document.documentElement.scrollTop;
    let headerWrap = document.getElementById("headerWrap");
    let headerHeight = headerWrap.clientHeight;

    if (scroll > headerHeight) {
      headerWrap.classList.add("fixed");
    } else {
      headerWrap.classList.remove("fixed");
    }
  })