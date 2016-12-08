var Fix=React.createClass({
    render:function(){
      return(
        <div>
          user: <input type="text" name="user" value="UpdataNO"/><br/>
          name: <input type="text" name="username" defaultValue="updateOK"/>
        </div>
      );
  }
});
        ReactDOM.render(
            <Fix/>,
          document.getElementById('example')
          )
