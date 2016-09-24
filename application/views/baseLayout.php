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
			include "w3css/w3full.css";
			include "datepicker/css/jquery.datepick.css";
			include "myCss/baseLayout.css";
			include "myCss/homePage.css";
			include "myCss/sendMsgPage.css";
			include "myCss/complaintPage.css";
			include "myCss/knowAboutPage.css";
		?>
	</style>
	<script type="text/javascript">
		<?php
			include 'js/jquery.min.js';
			include 'js/bootstrap.min.js';
			include "datepicker/js/jquery.plugin.js";
			include "datepicker/js/jquery.datepick.js";
			include 'myJs/baseLayout.js';
			include 'myJs/homePage.js';
			include 'myJs/sendMsgPage.js';
			include 'myJs/complaintPage.js';
			include 'myJs/knowAboutPage.js';
		?>
	</script>
</head>
<body>
	<div class="row" id="mainContainer">
		<div class="row" id="headStrip">
			<div class="col-lg-2" ><h2>BDMS</h2></div>
			<div class="col-lg-9">
				<h5 class="pull-right">
					<a href="#" id="userNameLabel">
						<?php 
							echo "Hello ";
							echo $this->session->userdata('userid');
						?>
					</a>
				</h5>
			</div>
			<div class="col-lg-1" id="logoutLabelBox">
				<h6><a href=<?php echo base_url("index.php/BusDepot/logout");?> id="logoutLabel">Logout</a></h6>
			</div>
		</div>
		<div class="row" id="subContainer">
			<div class="col-lg-2" id="mainSidebar">
				<div id="sidebarMenu">
					<a href="#" id="toHomePage"><li class="w3-card-16"><i class="fa fa-home"></i>Home</li></a>
					<a href="#" id="empType"><li class="w3-card-16">Employee</li></a>
					<div id="empTypeSubMenu" style="display: none;">
						<a href="#"><li class="w3-card-16">Manager</li></a>
						<a href="#"><li class="w3-card-16">Driver</li></a>
						<a href="#"><li class="w3-card-16">Conductor</li></a>
						<a href="#"><li class="w3-card-16">Technician</li></a>
						<a href="#"><li class="w3-card-16">Sweeper</li></a>
						<a href="#"><li class="w3-card-16">Fuel boy</li></a>
					</div>
					<a href="#" id="serviceType"><li class="w3-card-16">Services</li></a>
					<div id="serviceTypeSubMenu" style="display: none;">
						<a href="#" id="toSendMsgPage"><li class="w3-card-16">Send Message</li></a>
						<a href="#" id="toComplaintPage"><li class="w3-card-16">Complaint</li></a>
						<a href="#" id="toKnowAboutPage"><li class="w3-card-16">Know about</li></a>
					</div>
					<a href="#"><li class="w3-card-16">Gallary</li></a>
					<a href="#"><li class="w3-card-16">Contact Us</li></a>
					<a href="#"><li class="w3-card-16">About Us</li></a>
				</div>
			</div>
			<div class="col-lg-10" id="mainPane">
<!--**************    Here Starts the Home Page      ****************************************-->
				<div class="row" id="homePage">
					<?php include 'homePage.php';?>
				</div>
<!--**************    Here ends the Home Page      **********************************************************-->

<!--**************    Here Starts the Send Message service Page      ****************************************-->
				<div id="sendMsgPage" style="display: none;">
					<?php include 'sendMsgPage.php';?>
				</div>
<!--**************    Here ends the Send Message service Page   *********************************************-->

<!--**************    Here Starts the complaint service Page      *******************************************-->
				<div id="complaintPage" style="display: none;">
					<?php include 'complaintPage.php';?>
				</div>
<!--**************    Here ends the complaint Page      *****************************************************-->

<!--**************    Here Starts the Know about service Page      ******************************************-->
				<div id="knowAboutPage" style="display: none;">
					<?php include 'knowAboutPage.php';?>
				</div>
<!--**************    Here ends the Know about service Page      ********************************************-->
			</div>
		</div>
	</div>
</body>
</html>