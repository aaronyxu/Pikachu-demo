!function(){
    var duration = 50
    function writeCode(prefix, code, fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        id = setTimeout(function fn2(){
            n+=1
            container.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
            styleTag.innerHTML = code.substring(0,n)
            container.scrollTop = container.scrollHeight
            if(n < code.length){
                id = setTimeout(fn2, duration)
            }else{
                fn && fn.call()
            }
        },duration)
    }

    let code = `
/*
 * 首先我们准备皮卡丘的皮
 *
 */
.preview{
    height:100%;
    border:1px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    background: #FDE360;
}
.wrapper{
    width:100%;
    height:165px;
    position:relative;
}
/*
 * 然后我们构造皮卡丘的鼻子
 *
 */
.nose{
    width: 0px;
    height: 0px;
    position:absolute;
    left:50%;
    top:28px;
    margin-left:-12px;
    border-style: solid;
    border-radius: 11px;
    border-color: black transparent transparent transparent;
    border-width: 11px 12px;
}
/*
 * 接下来我们画皮卡丘的眼睛
 *
 */
.eye{
    height:49px;
    width:49px;
    background: #2E2E2E;
    position:absolute;
    border-radius: 50%;
    border: 2px solid #000000;
}
/*
 * 构造瞳孔
 *
 */
.eye::before{
    content:'';
    display:block;
    width:26px;
    height:26px;
    background: white;
    position: absolute;
    border-radius:50%;
    left: 6px;
    top: -1px;
    border: 2px solid #000000;
}
/*
 * 一个眼睛移到左边
 *
 */
.left.eye{
    right:50%;
    margin-right: 90px;
}
/*
 * 一个眼睛移到右边
 *
 */
.right.eye{
    left:50%;
    margin-left: 90px;
}
/*
 * 然后画皮卡丘的‘腮红’
 *
 */
.face{
    height:68px;
    width:68px;
    background: #FC0D1C;
    border: 2px solid black;
    border-radius: 50%;
    position:absolute;
    top:85px;
}
/*
 * 左边的‘腮红’
 *
 */
.face.left{
    right:50%;
    margin-right: 116px;
}
/*
 * 右边的‘腮红’
 *
 */
.face.right{
    left:50%;
    margin-left:116px;
}
/*
 * 皮卡丘的上嘴唇
 *
 */
.upperLip{
    height: 25px;
    width: 80px;
    border: 2px solid black;
    border-top:none;
    position: absolute;
    background: #FDE360
}
.upperLip.left{
    border-bottom-left-radius: 40px 25px;
    border-right:none;
    right: 50%;
    top: 52px;
    transform: rotate(-23deg);
}
.upperLip.right{
    border-bottom-right-radius: 40px 25px;
    border-left:none;
    left: 50%;
    top: 53px;
    transform: rotate(23deg);
}
/*
 * 皮卡丘的下嘴唇
 *
 */
.lowerLip-wrapper{
    bottom: -38px;
    position: absolute;
    left: 50%;
    margin-left: -151px;
    height: 140px;
    width:302px;
    overflow:hidden;
}
/*
 * 最后，皮卡丘的舌头
 *
 */
.lowerLip{
    width:300px;
    height:3900px;
    background: #990513;
    border-radius: 200px/2000px;
    border:2px solid black;
    position: absolute;
    bottom:0;
    overflow:hidden;

}
.lowerLip::after{
    content:'';
    position: absolute;
    bottom:-17px;
    width:130px;
    height: 130px;
    background: #FC4A62;
    left:50%;
    margin-left:-65px;
    border-radius: 65px;
}
/*
 * 大功告成！
 *
 */`

    writeCode('', code)

    $('.actions').on('click', 'button', function(e){
        let $button = $(e.currentTarget)
        let speed = $button.attr('data-speed')
        $button.addClass('active').siblings('.active').removeClass('active')
        switch(speed){
            case 'slow':
                duration = 100
                break
            case 'normal':
                duration = 50
                break
            case 'fast':
                duration = 10
                break
        }
    })
}.call()