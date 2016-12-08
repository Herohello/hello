var Fix=React.createClass({
    getInitialState:function(){
      return {
        user:''
      }
    },
  handleChange: function (e) {
    this.setState({
      user:e.target.value.toUpperCase()
    })
  },
  render:function () {
    return (
      <div>
        验证码：<input type="text" name="user" value={this.state.user} onChange={this.handleChange}/>1f5Q
      </div>
    );
  }
});
ReactDOM.render(
  <Fix/>,
  document.getElementById('example')
)