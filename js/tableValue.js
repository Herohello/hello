var Fix=React.createClass({
    getInitialState:function(){
      return{
        val:''
      }
    },
  handleChange:function(e){
    this.setState({
      val:e.target.value
    })
  },
  render:function(){
    return(
      <div>
        user: <input type="text" name="user" value={this.state.val} onChange={this.handleChange}/>
        <br/>
        name: <input type="text" name="username" defaultValue="updateOK"/>
      </div>
    );
  }

});
ReactDOM.render(
  <Fix/>,
  document.getElementById('example')
)