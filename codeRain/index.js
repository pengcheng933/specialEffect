// 获取canvas
const cvs = document.getElementById('bg');
// 获取窗口尺寸
const width = window.innerWidth;
const height = window.innerHeight;
// 设置canvas尺寸为窗口尺寸
cvs.width = width;
cvs.height = height;
// 获取绘制上下文
const ctx = cvs.getContext('2d');
// 列宽
const columnWidth = 20;
// 列数
const columnCount = Math.floor(window.innerWidth / columnWidth)
// 记录每列写到了第几个文字
const columnNextIndexes = new Array(columnCount);
columnNextIndexes.fill(1);
// 绘画函数
function draw(){
    // 半透明效果
    ctx.fillStyle = 'rgba(244,244,244,0.1)';
    ctx.fillRect(0,0,width,height);
    // 填空颜色
    ctx.fillStyle=getRandomColor();
    // 字体大小
    const fz = 20;
    ctx.font = `${fz}px "Roboto Mono"`;
    for(let i =0 ;i<columnCount;i++){
        const x = columnWidth*i;
        const y = columnNextIndexes[i]*fz;
        // 绘制
        ctx.fillText(getRandomChar(),x,y);
        if(y>height && Math.random()>0.99){
            columnNextIndexes[i]=0;
        }else {
            columnNextIndexes[i]++;
        }
    }

}
// 获取随机颜色
function getRandomColor(){
    const fontColors = [
        '#33B5E5',
        '#0099CC',
        '#AA66CC',
        '#9933CC',
        '#99CC00',
        '#669900',
        '#FFBB33',
        '#FF4444',
        '#CC0000'
    ]
    return fontColors[Math.floor(Math.random()*fontColors.length)]
}
// 获取随机数字
function getRandomChar(){
    const str='hello world';
    return str[Math.floor(Math.random()*str.length)]
}
draw();
setInterval(draw,40)
