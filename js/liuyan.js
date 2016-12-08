var Fix = React.createClass({
  getInitialState: function () {
    return {
      text: '',//表示大文本域的内容
      uploaded: false//表示是否上传图片，默认否
    }
  },
  //计算剩余字数的方法
  fontCount:function () {
    //总数150字
    //要考虑text的长度和是否已经上传图片了
    if (this.state.uploaded) {
      return 150 - 25 - this.state.text.length;
    } else {
      return 150 - this.state.text.length;
    }
  },
  handleChange:function (e) {
    this.setState({
      text: e.target.value
    })
  },
  handleUpload: function () {
    this.setState({
      uploaded: !this.state.uploaded
    });
  },
  render: function () {
    return (
     <div>
        <div className="well">
          <textarea className="form-control" rows="10" onChange={this.handleChange}>{this.props.text}</textarea>
          <span>{this.fontCount()}</span>
          <button className="btn btn-default btn-primary pull-right" disabled={this.state.text.length==0&&!this.state.uploaded}>OK
          </button>
          <button className="btn btn-default pull-right" onClick={this.handleUpload}>{this.state.uploaded ? "√ upload_OK" : "Add Pic"}</button>
        </div>
      </div>
    );
  }


});
ReactDOM.render(
  <Fix />,
  document.getElementById('example')
)
