var Fir = React.createClass({
  render:function(){
    return (
      <div id="list">
        <ul>
          <li style={{'clear':'both'}}>
            <div style={{'float':'left'}}>
              <img src={this.props.scc} style={{'width':'100px'}} />
            </div>
            <div style={{'float':'left','marginLeft':'10px'}}>
              <p style={ {'color':'red','fontSize':'50px'}}>Name: {this.props.user}</p>
              <p>
                <span>AGE：{this.props.age}</span>
              </p>
            </div>
            <div className="content" ><a href={this.props.url}>个人详情</a></div>
          </li>
        </ul>
        <div style={{'clear':'both'}}></div>
        <form action="" method="" style={{'marginTop':'10px','marginLeft':'15px'}}>
          <textarea cols="50" rows="10"></textarea>
        </form>
      </div>
    );
  }
});

//con.style.border="1px solid red";
var obj = {
  user : '夺命雷公狗',
  age : '16',
  scc : './images/jj.png',
  url : 'http://www.showtp.com'
}

ReactDOM.render(
  <Fir {...obj} />,
  document.getElementById('example')
);