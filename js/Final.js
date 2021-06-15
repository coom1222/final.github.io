/**
 자바 스크립트 파일
 **/


var current = 0;   // 이미지 위치를 나타내는 변수
showSlides();      // 기본 첫 이미지를 보여 줌

function showSlides() {
  var slides = document.querySelectorAll("#slides > img");
  for(let i = 0; i < slides.length; i++){
    slides[i].style.display = "none";  //모든 이미지 감춤
  }
  current++;
  if(current > slides.length)
    current = 1;
  slides[current - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

