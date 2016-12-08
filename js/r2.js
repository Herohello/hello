var Fix=React.createClass({
  //组件里面有很多事件
  handelClick:function(){
      alert('你好');
},
  handelMouseOver:function(){
    alert('再见');
  },
  handelMouseOut:function(){
    "use strict";
    alert('你走');
  },
  render:function(){
    return(
        <div>
          <h1>这是一个简单的事件移入移除测试</h1>
          <button style={{'width':'50px','height':'50px'}} onClick={this.handelClick} onMouseOut={this.handelMouseOut}
          onMouseOver={this.handelMouseOver}>测试按钮</button>
        </div>
    )
  }




});
//组件创建完毕
 ReactDOM.render(
   <Fix/>,
   document.getElementById('example')
 )