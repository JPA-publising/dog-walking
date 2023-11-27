/*추가 하기 버튼 유뮤 코드*/ 
let petlist=$('.pet-detail-area');
let list=petlist.length;
console.log(list);
if(list >= 4){
    $('.addbtn').css('display','none');
}else{
    $('.addbtn').css('display','block');
}



/* 날짜 및 나이 계산 코드*/

let petdetailarea =$('.pet-detail-area');
console.log(petdetailarea.length);
for(let i =0; i<petdetailarea.length; i++){
    // i번째 기입된 날짜를 불러와서 저장
    let pet = $('.pet-brith',petdetailarea[i]);

// 날짜 자동으로 계사해주는 쿼리 
let petdateText = pet.text().trim(); // trim()은 문자열 양 끝의 공백을 제거합니다.

// 정규식을 사용하여 'YYYY-MM-DD' 형식의 날짜를 추출
let petDateMatch = petdateText.match(/\d{4}-\d{2}-\d{2}/);


// petDateMatch가 유효한지 확인 후 moment 객체로 변환
if (petDateMatch) {
    let petbrith = moment(petDateMatch[0]);

    // 현재 날짜 객체
    let currentDate = moment();

    let yearsDifference = currentDate.diff(petbrith, 'years');
    let monthsDifference = currentDate.diff(petbrith, 'months') % 12;


    // 날짜 차이 계산
    let ageDifference;

    if (yearsDifference === 0) {
        ageDifference = '(' +`${monthsDifference}개월`+')';

   
    } else {
        ageDifference = '(' +`${yearsDifference}년 ${monthsDifference}개월`+')';
      
    }
    $('.pet-age', petdetailarea[i]).text(ageDifference);
    console.log(ageDifference);    
} else {
    console.log('날짜 형식이 유효하지 않습니다.');
}

}

// 수정하기 위해서 칸을 클릭시 쿼리스크링으로 같이 이동하는 스크립트
$('.pet-detail-area').on('click',function(){

    window.location.href='?'


})
// $(document).ready(function () {
//     // 각 li 요소에 대한 클릭 이벤트 핸들러 등록
//     $(".pet-detail-area").click(function () {
//         // 클릭된 li 요소의 data-pet-id 속성 값을 가져오기
//         var petId = $(this).data("pet-id");

//         // 페이지 이동을 위한 URL 생성 (예: 페이지명은 'petDetailPage.html')
//         var nextPageUrl = "petDetailPage.html?petId=" + petId;

//         // 생성된 URL로 페이지 이동
//         window.location.href = nextPageUrl;
//     });
// });