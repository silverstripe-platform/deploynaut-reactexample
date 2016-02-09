'use strict';

var form = require("../../deploynaut/js/form.jsx");

var MyComponent = React.createClass({

	getInitialState: function() {
		return {
			securityID: this.props.model.InitialSecurityID,
			username: ''
		};
	},

	onAfterSuccess: function(data) {
		this.setState({username: data.SubmittedName});
	},

	onClearUsername: function(e) {
		e.preventDefault();
		this.setState({username: ''});
	},

	render: function() {
		if (this.props.model.Errors.length>0) {
			return (
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						<div className="alert alert-danger" dangerouslySetInnerHTML={{__html:this.props.model.Errors.join('<br/>')}}/>
					</div>
				</div>
			);
		}

		if(this.state.username != '') {
			return (
				<div className="row">
					<div className="col-md-8 col-md-offset-2">
						Nice to meet you {this.state.username}!
						Would you like to try <a href="#" onClick={this.onClearUsername}>again</a>?
					</div>
				</div>
			);
		}

		return (
			<div className="row">
				<div className="col-md-8 col-md-offset-2">
					<form.Form
						ref="myform"
						url={this.props.model.FormActionURL}
						securityID={this.state.securityID}
						buttonTitle="Do something"
						buttonSubmittingTitle="Doing something..."
						afterSuccess={this.onAfterSuccess}
					>
						<div className="form-group">
							<label htmlFor="Name">Your name</label>
							<form.Input name="Name" required validationError="Please enter your name" />
							<div className="help-text">We would like to know your name</div>
						</div>
					</form.Form>
				</div>
			</div>
		);
	}
});

module.exports = MyComponent;
