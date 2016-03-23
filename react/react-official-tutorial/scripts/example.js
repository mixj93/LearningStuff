var data = [
	{id: 1, author: "Pete Hunt", text: "This is one comment"},
	{id: 2, author: "Jordan Walker", text: "This is *another* comment"}
];

var CommentBox = React.createClass({
  render: function() {
    return (
      <div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.props.data}/>
				<CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
	render: function () {
		var commentNodes = this.props.data.map(function(comment){
			return (
				<Comment author={comment.author} key={comment.id}>
					{comment.text}
				</Comment>
			);
		});
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
});

var CommentForm = React.createClass({
	render: function() {
		return (
			<form className="commentForm">
				<input type="text" placeholder="Your name" />
				<input type="text" placeholder="Say something..." />
				<input type="submit" value="Post" />
			</form>
		);
	}
});

var Comment = React.createClass({
	rawMarkup: function() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
		return {__html: rawMarkup};
	},
	render: function() {
		return (
			<div className="comment">
				<h2 className="commentAuthor">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML = {this.rawMarkup()} />
			</div>
		);
	}
});

ReactDOM.render(
  <CommentBox data={data} />,
  document.getElementById('content')
);