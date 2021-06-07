/**********************************文档区*****************************************/
var text1=`/*
* 大家好，我是lzk。
* 下面我来简单介绍一下我自己。
* 但是文字介绍过于单调。
* 今天，来点不一样的。
* 来做一个动态简历。
*/

*{
  transition: all 1s;
}
html{
  background: #eee;
}
#code{
  border: 1px solid #aaa;
  padding: 3%;
}

/* 这样太单调了，给代码来点颜色 */
.token.punctuation {
  color: #999;
}
.token.selector {
  color: #690;
}
.token.property {
  color: #905;
}

/* 在加上动态阴影吧 */
#code{
  animation: glow 800ms ease-out infinite alternate;
}

/* 现在正式开始 */

/* 我需要一张白纸 */
#paper {
  position: fixed;
  right: 0;
  width: 48%;
  height: 100vh;
  padding: 16px;
  background: #ccc;
}
#paper>.content{
  background: #fff;
  width: 100%;
  height: 100%;
  padding: 20px;
}

/* 于是我就可以在白纸上写字了，请看右边 */

`;

var text2=`# 自我介绍

### Lizikang ### 
![image-20210607195614124](https://gitee.com/li_zikang/lzk-image/raw/master/img/image-20210607195614124.png)
----
21岁，未来的Java软件工程师，目前在湖北理工学院学习。
有良好的文档编写和代码书写规范，能独立解决问题、百折不挠、细节控。
像极限一样唯一，如 **e^x** 求导n次还是始终如一，发展速度极快，张宇认证 ！

技能
----
* 后端开发
* 开源爱好者
* 博客系统

技术及语言
----
  - **Java**: SpringBoot、MyBatis、Spring
  - **前端**: VueJs、Semantic UI
  - **数据库**: MySQL、SQLServer、Oracle
  - **web 服务器**: Tomcat
  - **OS**: Linux、Windows
  - **Others**: Git、Maven、XMind、IDEA

学习经历
----
1. [湖北理工学院](http://www.hbpu.edu.cn/)


开源项目
----
1. [Lizikang的个人技术博客](https://github.com/lizikanglzk/lizikanglzk.github.io)
2. [一个JS写的动态简历](https://github.com/lizikanglzk/lzk_resume)

链接
----
* [技术博客](https://lizikanglzk.github.io/)
* [GitHub](https://github.com/lizikanglzk)
* [码云](https://gitee.com/li_zikang)
* [CSDN](https://blog.csdn.net/qq_43845915)

[归档文章](https://lizikanglzk.github.io/archives/)
----
1. [Unity](https://lizikanglzk.github.io/categories/Unity/)
2. [信息安全](https://lizikanglzk.github.io/categories/%E4%BF%A1%E6%81%AF%E5%AE%89%E5%85%A8/)
3. [计算机网络](https://lizikanglzk.github.io/categories/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/)
4. [夏日限定](https://lizikanglzk.github.io/categories/%E5%B0%8F%E7%8E%A9%E5%85%B7/%E5%A4%8F%E6%97%A5%E9%99%90%E5%AE%9A/)

联系我
----
* 联系QQ：**1191787635** 
* 主要涉及技术：**Java后端开发**

> Welcome!!!
`;

var text3=`
/* 由于使用的是Mmarkdown格式 */
/* 需要转换为Html */

/*
* 接下来使用一个优秀的库
* 将我们的Mmarkdown转换为Html
*/

`;
var text4=`
/*
 * 这就是我的会动的简历
 * 谢谢观看
 */
`

/**********************************执行代码区*****************************************/
writeLeft(()=>{
  qx(()=>{
      createPaper(()=>{
      writeRight(()=>{
        mdHtml(()=>{
          md(()=>{
            end()
          })
        })
      })
    })
  })
})




/**********************************函数区*****************************************/
/**********************************把text1的代码添加到左边区域和style标签中*****************************************/
function writeLeft(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let n=0;
  let intervalId1=setInterval(function(){
    code.innerHTML=Prism.highlight(text1.substring(0,n), Prism.languages.css);
    styleTag.innerHTML=text1.substring(0,n);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text1.length){
      window.clearInterval(intervalId1);
      fn();
    }
  },10)
}

/***********************************开始在右边创建一个空白纸用来写markdown******************************************/
function createPaper(fn){
  let paper=document.createElement('div');
  paper.id='paper';
  let paperPre=document.createElement('pre');
  paperPre.className='content';
  paper.appendChild(paperPre);
  document.body.appendChild(paper);
  fn();
}

/**********************************把text2的代码添加到右边区域中*****************************************/
function writeRight(fn){
  let n1=0;
  let intervalId2=setInterval(function(){
    let rightCode=document.querySelector('#paper>.content');
    rightCode.innerHTML=text2.substring(0,n1);
    rightCode.scrollTop=rightCode.scrollHeight;
    n1 += 1
    if(n1>=text2.length){
      window.clearInterval(intervalId2);
      fn();
    }
  },1)
}

/**********************************将左边倾斜*****************************************/
function qx(fn){
  let code=`#left{transform:skewY(1deg);}`;
  let pre=styleTag.innerHTML;
  styleTag.innerHTML=pre+code;
  fn();
}

/**********************************把text3的代码添加到左边区域中*****************************************/
function mdHtml(fn){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let prefix=code.innerHTML
  let n=0;
  let intervalId3=setInterval(function(){
    code.innerHTML=prefix+Prism.highlight(text3.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text3.length){
      window.clearInterval(intervalId3);
      fn();
    }
  },5)
}

/**********************************把markdown转换为html*****************************************/
function md(fn){
  let div = document.createElement('div');
  div.className = 'html markdown-body content';
  div.innerHTML = marked(text2);
  let markdownContainer = document.querySelector('#paper > .content');
  markdownContainer.replaceWith(div);
  fn();
}

/**********************************结束语*****************************************/
function end(){
  let code=document.getElementById("code")
  let styleTag=document.getElementById("styleTag")
  let pre=code.innerHTML
  let n=0;
  let intervalId4=setInterval(function(){
    code.innerHTML=pre+Prism.highlight(text4.substring(0,n), Prism.languages.css);
    code.scrollTop=code.scrollHeight;
    n += 1
    if(n>=text4.length){
      window.clearInterval(intervalId4);
    }
  },5)
}



