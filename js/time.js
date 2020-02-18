window.onload = function(){

    var i = 100;

    var out=document.getElementById('out');
    //得到id 为out  的值的对象

    var timer = setInterval(function(){

//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。

        if(i== -1){

            clearInterval(timer);//clearInterval() 方法可取消由 setInterval() 设置的 timeout。

            // document.write("Time is up");


        }else{

            //document.body.innerHTML = i
            ;
            out.innerHTML=i+"s";


            --i;

        }

    },1000);


}


