
// // 演習１
// console.log("はじめてのジャバスクリプト");

// // 演習２
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");
// console.log(18/3);
// console.log(3*4);

// // 演習３
// var name="石田将太";
// console.log("自分の名前");
// console.log(name);
// var name="自分の名前";

// // 演習４
// 　var point=90;
//     if(point >= 80){
//         console.log("素晴らしい！おめでとう！")
//     }else{
//         console.log("もっと頑張りましょう！")
//     }

// // 演習５
// // 0〜4までの５パターンの乱数
// // var math=Math.floor( Math.random() *5);
// // console.log(math);
// // if(math >= 4){
// //     console.log("日本") ;   
// // }else if(math >= 3){
// //     console.log("アメリカ");
// // }else if(math >= 2){
// //     console.log("イギリス");
// // }else if(math >= 1){
// //     console.log("ブラジル");
// // }else{
// //     console.log("エジプト");
// // }

// // 1〜５までの５パターンの乱数
// var math=Math.floor( Math.random() *5 + 1);
// console.log(math);
// if(math == 5){
//     console.log("日本") ;   
// }else if(math == 4){
//     console.log("アメリカ");
// }else if(math == 3){
//     console.log("イギリス");
// }else if(math == 2){
//     console.log("ブラジル");
// }else if(math == 1){
//     console.log("エジプト");
// }

// jquery 事前準備２

$(document).ready(function(){

    // $("#test").on("click",function(){
    // $('#test').html('あああああ');
    // $('#test').css('color', '#f00');

    // setInterval(function())


    // $('#test').fadeOut(2000);
    // $('#test').fadeIn(2000);
    // ⚠️fadeInは要素が消えていないと効果がでないので注意
    var count = 0;
    // $("#hide").on("click",function(){
    //     $('#ex').fadeOut(2000);
    $("#show").on("click",function(){
    //     $('#ex').fadeIn(2000);
    
    //カウンタの初期値を設定
  

    //カウントアップする関数 countUp の定義
    // function countUp(){
        //カウンタに 1 を加算
        count++;
        //カウンタの値を HTML 内の counter に表示
        //document.getElementById("counter").innerHTML=cnt;
        // console.log(countUpValue);
        $("#test").html(count);
    }
        

});
// });

        
 
