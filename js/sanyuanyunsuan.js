var Fix=React.createClass({
    getInitialState:function() {
      return {
        islink:true
      };
    },
  handelClick:function(e){
    //alert('点击了');
    this.setState({islink:!this.state.islink})
    console.log(e.target.innerHTML);

  },
  handelMouseOver:function(){
    alert('鼠标经过了');
  },
  handelMouseOut:function(){
    alert('鼠标移出');
  },
  render:function() {
    return(
      <div>
           <p>你喜欢和他做朋友么</p><b>{this.state.islink?'喜欢':'不喜欢'}</b>
            <button onClick={this.handelClick}>点我</button>
      </div>
    );


  }
});
//↑组件创建完毕

//渲染到页面上
ReactDOM.render(
  <Fix/>,
  document.getElementById('example')
)