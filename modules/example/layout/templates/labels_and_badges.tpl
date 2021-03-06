{include:'{$CORE_PATH}/layout/templates/head.tpl'}
{include:'{$CORE_PATH}/layout/templates/nav.tpl'}

<div id="contentWrap">
	<div id="content">
		<header id="header" role="banner">
			<div class="container bar">
				<div class="title">
					<a id="toggleMenu" class="visible-phone iconLink" href="#">{$lblMenu|uppercase}</a>
					<h2>Labels and badges</h2>
				</div>
			</div>
		</header>

      	{include:'{$CORE_PATH}/layout/templates/notifications.tpl'}

		<section id="main" role="main">
			<div class="container">
				<h3>Labels</h3>
				<table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th>Labels</th>
						<th>Markup</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							<span class="label">Default</span>
						</td>
						<td>
							<code>&lt;span class="label"&gt;Default&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							<span class="label label-success">Success</span>
						</td>
						<td>
							<code>&lt;span class="label label-success"&gt;Success&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							<span class="label label-warning">Warning</span>
						</td>
						<td>
							<code>&lt;span class="label label-warning"&gt;Warning&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							<span class="label label-important">Important</span>
						</td>
						<td>
							<code>&lt;span class="label label-important"&gt;Important&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							<span class="label label-info">Info</span>
						</td>
						<td>
							<code>&lt;span class="label label-info"&gt;Info&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							<span class="label label-inverse">Inverse</span>
						</td>
						<td>
							<code>&lt;span class="label label-inverse"&gt;Inverse&lt;/span&gt;</code>
						</td>
					</tr>
					</tbody>
				</table>

				<h3>Badges</h3>
				<table class="table table-bordered table-striped">
					<thead>
					<tr>
						<th>Name</th>
						<th>Example</th>
						<th>Markup</th>
					</tr>
					</thead>
					<tbody>
					<tr>
						<td>
							Default
						</td>
						<td>
							<span class="badge">1</span>
						</td>
						<td>
							<code>&lt;span class="badge"&gt;1&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							Success
						</td>
						<td>
							<span class="badge badge-success">2</span>
						</td>
						<td>
							<code>&lt;span class="badge badge-success"&gt;2&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							Warning
						</td>
						<td>
							<span class="badge badge-warning">4</span>
						</td>
						<td>
							<code>&lt;span class="badge badge-warning"&gt;4&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							Important
						</td>
						<td>
							<span class="badge badge-important">6</span>
						</td>
						<td>
							<code>&lt;span class="badge badge-important"&gt;6&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							Info
						</td>
						<td>
							<span class="badge badge-info">8</span>
						</td>
						<td>
							<code>&lt;span class="badge badge-info"&gt;8&lt;/span&gt;</code>
						</td>
					</tr>
					<tr>
						<td>
							Inverse
						</td>
						<td>
							<span class="badge badge-inverse">10</span>
						</td>
						<td>
							<code>&lt;span class="badge badge-inverse"&gt;10&lt;/span&gt;</code>
						</td>
					</tr>
					</tbody>
				</table>

				<h3>Easily collapsible</h3>
				<p>For easy implementation, labels and badges will simply collapse (via CSS's <code>:empty</code> selector) when no content exists within.</p>
			</div>
		</section>
	</div>
</div>

{include:'{$CORE_PATH}/layout/templates/footer.tpl'}
</body>
</html>