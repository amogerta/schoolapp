window.addEventListener("resize", function() {
    var width = window.innerWidth; // 현재 브라우저의 가로 크기

    // 이미지 크기와 글씨 크기 요소를 선택합니다.
    var content = document.getElementById("2199");

    if (width <= 768) { // 모바일 화면 크기
        // 모바일 화면에서 글씨 크기와 이미지 크기 변경
        2199.style.width = "100%";
    } else { // 데스크탑 화면 크기
        2199.style.width = "500px"; // 데스크탑 화면에서 이미지 크기
    }
});

// 페이지가 처음 로드될 때 한 번 실행
window.dispatchEvent(new Event("resize"));
