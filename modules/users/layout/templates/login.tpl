{include:'{$CORE_PATH}/layout/templates/head.tpl'}
{include:'{$CORE_PATH}/layout/templates/header.tpl'}

	<div class="container-fluid">
		<section id="users" class="login row-fluid">
			<div class="span12">
				<header class="header">
					<h2>{$msgUsersLogin}</h2>
				</header>

				{form:login}
					{option:report}<div class="alert alert-info">{$report}</div>{/option:report}
					{option:error}<div class="alert alert-error">{$errAuthenticationError}</div>{/option:error}

					<fieldset class="form-horizontal">
						<div class="control-group{option:txtLoginError} error{/option:txtLoginError}">
							<label class="control-label" for="login">{$lblLogin|ucfirst}<abbr title="{$msgRequired}">*</abbr></label>
							<div class="controls">
								{$txtLogin} {$txtLoginError}
							</div>
						</div>

						<div class="control-group{option:txtPasswordError} error{/option:txtPasswordError}">
							<label class="control-label" for="password">{$lblPassword|ucfirst}<abbr title="{$msgRequired}">*</abbr></label>
							<div class="controls">
								{$txtPassword} {$txtPasswordError}
							</div>
						</div>

						<div class="control-group">
							<div class="controls">
								<button type="submit" class="btn btn-primary">{$lblSignIn|ucfirst}</button>
							</div>
						</div>
					</fieldset>
				{/form:login}
			</div>
		</section>

		{include:'{$CORE_PATH}/layout/templates/footer.tpl'}
	</div>
</body>
</html>