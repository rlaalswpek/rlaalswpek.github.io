<script>

      // 변수 선언
      var key1, key2, key3, strike, ball, no1, no2, no3, display;

      // 초기화 함수
      function init(){
         // key1을 0부터 9사이의 값으로 입력
         key1 = Math.round(Math.random() * 9);
         key2 = key1;
         key3 = key1;

         // key2를 key1과는 다른 값중에 0부터 9사이의 값으로 입력
         while(1){
            if(key2!=key1){
               break;
            }
            else{
               key2 = Math.round(Math.random() * 9);
            }
         }

         // key3를 key1, key2와는 다른 값중에 0부터 9사이의 값으로 입력
         while(1){
            if(key3!=key1 && key3!=key2){
               break;
            }
            else{
               key3 = Math.round(Math.random() * 9);
            }
         }

         // 입력박스 no1로 포커스
         document.getElementById("no1").focus();
      }

   </script>
[출처] 자바스크립트 숫자야구 만들기 - ①|작성자 창공