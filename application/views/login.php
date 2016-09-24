<?php 
	defined('BASEPATH') OR exit('No direct script access allowed');
?>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>BDMS</title>
	<style type="text/css">
		<?php
			include "css/bootstrap.min.css";
			include "myCss/login.css";
			include "w3css/w3full.css";
		?>
	</style>
	<script type="text/javascript">
		<?php
			include 'js/jquery.min.js';
			include 'js/bootstrap.min.js';
		?>
	</script>
</head>
<body>
	<div class="row" id="mainContainer">
		<div class="row w3-card-12" id="loginPane">
			<div id="loginHead"><b><h3>Login</h3></b></div>
			<div><hr style="height:1px; background-color: #ffffff;"></div>
			<div id="loginForm">
				<?php echo form_open("BusDepot/loginFormValidation"); ?>
					<form role="form">
						<div class="form-group">
							<div class="formError col-lg-offset-5" id="userIdErr">
								<?php echo form_error('userid'); ?>
							</div>
							<div class="row" id="uidBox">
								<div class="col-lg-4 text-right" id="labelUid">
									<label>User Id:</label>
								</div>
								<div class="col-lg-8">
									<?php
										$temp=array(
												"name"=>"userid",
												"class"=>"form-control",
												"id"=>"userid",
												"placeholder"=>"User Id"
											);
									?>
									<?php echo form_input($temp,set_value('userid')); ?>
								</div>
							</div>

							<div class="formError col-lg-offset-5" id="passwordErr">
								<?php echo form_error('password'); ?>
							</div>
							<div class="row" id="passBox">
								<div class="col-lg-4 text-right" id="labelPass">
									<label>Password:</label>
								</div>
								<div class="col-lg-8">
									<?php
										$temp=array(
												"name"=>"password",
												"class"=>"form-control",
												"id"=>"password",
												"placeholder"=>"Password"
											);
									?>
									<?php echo form_password($temp,set_value('password')); ?>
								</div>
							</div>

							<div class="row" id="submitBox">
								<div class='col-lg-4'></div>
								<div class='col-lg-2'>
									<?php
										$temp=array(
													'type'=>'submit',
													'class'=>'btn btn-primary',
													'value'=>'Submit'
													);
										echo form_submit($temp);
									?>
								</div>
								<div class='col-lg-2'>
									<?php
										$temp=array(
													'type'=>'reset',
													'class'=>'btn btn-default',
													'value'=>'Reset'
													);
										echo form_reset($temp);
									?>
								</div>
								<div class='col-lg-4'></div>
							</div>
						</div>
					</form>
				<?php echo form_close(); ?>
			</div>
		</div>
	</div>
</body>
</html>