/*分四个组件，第一个ToDoBox*/
var ToDoBox=React.createClass({
  getInitialState: function () {
    return {data:[]};
  },
  //添加事件
  handlerAdd:function(str){
    //当前的数据给变量newData
    var newData=this.state.data;
    //在newData中压入handlerAdd传入的值
    newData.push(str);
    //更新当前数组data的状态
    this.setState({data:newData});
    //console.log(this.state.data);
    //console.log(str);
  },
  //删除事件
  handlerDelete: function (index) {
    //获取到当前的data存入变量newData中
    var newData=this.state.data;
    //数组中删除下标为index的数据
    newData.splice(index,1);
    //更新当前数组data的状态
    this.setState({data:newData});
    //console.log(newData);
  },
  //渲染出ToDoBox的内容来
  render: function () {
    return (
      <div>
        <h1>待做事项列表</h1>
        <ToDoInput handlerAdd={this.handlerAdd}/>
        <ToDoList allData={this.state.data} handlerDelete={this.handlerDelete}/>
      </div>
    )
  }

});
/*第二个ToDoInput*/
var ToDoInput=React.createClass({
  handlerClick: function () {
    //this.refs.inputArea.value就是function的str
    this.props.handlerAdd(this.refs.inputArea.value);
  },
  render: function () {
    return(
      <div>
        <input ref="inputArea"/>
          <button onClick={this.handlerClick}>Add</button>
      </div>
    )
  }

});
/*第三个ToDoList*/
var ToDoList=React.createClass({
        setUpList:function () {
          return(
            this.props.allData.map(function (content,i) {
              return <ToDoItem deleMe={this.props.handlerDelete} key={i} content={content} index={i}/>
            }.bind(this))
          )
        },
  render:function (){
        return(
          <ol>
            {this.setUpList()}
          </ol>
        )
    }
 });
/*第四个ToDoItem*/
    var ToDoItem=React.createClass({
      handlerClick:function(){
        this.props.deleMe(this.props.index);
      },
      render: function () {
        return(
          <li>
            <button onClick={this.handlerClick}>delete</button>
            <span>{this.props.content}</span>
          </li>
        )
      }
    })

  ReactDOM.render(
    <ToDoBox/>,
    document.getElementById("example")
  )


