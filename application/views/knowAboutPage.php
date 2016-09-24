<div class="row w3-card-4" id="knowAboutPageMainHeader">
	<h4>Information Section</h4>
</div>
<!--**************    Query Section starts here  ************************-->
<div class="panel panel-info w3-card-16" id="queryContainer"> 
	<div class="panel-heading"><h4 class="col-lg-offset-5">Information Need</h4></div>
	<div class="panel-body form-group">
		<div class="dropdown col-lg-offset-5">
			<button class="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown">
				Want to know about
				<span class="caret"></span>
			</button>
			<ul class="dropdown-menu">
				<li id="optionManager"><a href="#">Manager</a></li>
				<li id="optionEmployee"><a href="#">Employee</a></li>
				<li id="optionBus"><a href="#">Bus</a></li>
			</ul>
		</div>
		<div id="queryForm" style="display: none;">
			<?php include 'queryForm.php';?>
		</div>
	</div>
	<div class="panel-footer" id='queryContainerFooter' style="display: none;">
		<button type="button" class="btn btn-primary col-lg-offset-8 col-xs-2" id="submitInfoNeed">
			Submit
		</button>
		<button type="reset" class="btn btn-default" id="resetInfoQueryBox" style="margin-left: 10px;">
			Reset
		</button>
	</div>
</div>
<!--**************    Query Section ends here  ************************-->

<!--**************    Information Section starts here (output of query)  ************************-->
<div class="panel panel-success w3-card-16" id="infoServiceContainer" style="display: none;"> 
	<div class="panel-heading"><h4 class="col-lg-offset-4">Your's Required Information</h4></div>
	<div class="panel-body form-group">
		<div class="row w3-card-1" id="managerInfo" style="display: none;"></div>
		<div id="employeeInfo" style="display: none;"></div>
		<div id="busInfo" style="display: none;"></div>
	</div>
</div>
<!--**************    Information Section ends here (output of query)  ************************-->