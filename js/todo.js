var TodoItem=React.createClass({
  getDefaultProps: function () {
    return {
      checked: false,
      text:''
    }
  },
  render: function () {
    var oClass=this.props.checked?'done-true':'done-false';
    return(
      <li className={oClass}>
        <input type="checkbox" checked={this.props.checked} onChange={this.props.change.bind(this,this.props.index)}/>
        {this.props.text}
      </li>
    )
  }
});

var TodoList = React.createClass({
  getDefaultProps:function(){
    return {
      items:[]
    }
  },
  change:function(index){
    this.props.change && this.props.change(index); //层层传递
  },
  render:function(){
    var _this = this;
    var todoItems = this.props.items.map(function(item,i){
      return <TodoItem index={i} checked={item.checked} text={item.text} change={_this.change}/>
    });
    return (
      <ul>
        {todoItems}
      </ul>
    )
  }
});

var TodoForm = React.createClass({
  getInitialState:function(){
    return {text:''}
  },
  onChange:function(e){
    this.setState({text: e.target.value});
  },
  handleSubmit:function(e){
    e.preventDefault();
    if(this.state.text.trim() === '') return //提交时内容不能为空
    this.props.add(this.state.text); //提交时执行父组件的add方法， 并将输入的内容作为参数传递过去
    this.setState({text:''});//清空输入框内容

  },
  render:function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input onChange={this.onChange} value={this.state.text} />
        <input type="submit" value="Add" />
      </form>
    )
  }
});
var TodoApp = React.createClass({
  getInitialState:function(){
    return { items:[]}
  },
  add:function(text){
    var items = this.state.items.concat({text:text,checked:false});
    this.setState({items:items});
  },
  change:function(index){
    var item = this.state.items[index];
    item.checked = !item.checked;
    this.setState({items:this.state.items});
  },
  render:function(){
    var len = this.state.items.filter(function(item){ return !item.checked }).length;
    return (
      <div>
        <h2>Todo</h2>
        <span>{len} of {this.state.items.length} remaining</span>
        <TodoList items={this.state.items} change={this.change}/>
        <TodoForm add={this.add} />
      </div>
    )
  }
});

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('example')
)
