<div class="content page-header">
	<div class="row">
		<div class="col-md-12">
			<% include Breadcrumb %>
			<% include DeploymentTabs %>
		</div>
	</div>
</div>

<div class="content">

	<% include EnvironmentActions_Before %>

	<%--
		Sets up the target container for the react component and it's model
		here. See `deploynaut-reactexample/js/platform.jsx` that actually
		renders.
	 --%>
	$getReactComponent(ReactExample)
</div>
