<div class="row w3-card-4" id="sendMsgPageMainHeader">
	<h4>BusDepot Messenger</h4>
</div>
<div class="panel panel-primary w3-card-16" id="sendMsgServiceContainer"> 
	<div class="panel-heading"><h4 class="col-lg-offset-4">Message Posting Counter</h4></div>
	<div class="panel-body form-group">
		<label>Message To:</label>
		<span id="empIdErr" style="display: none;">This field is neccessary</span>
		<input class="form-control" placeholder="Employee Id of Employee" id="empId"></input>
		<label>Message:</label>
		<span id="notificationErr" style="display: none;">This field is neccessary</span>
		<textarea class="form-control" id="notification" rows="5"></textarea>
	</div>
	<div class="panel-footer">
		<button type="button" class="btn btn-primary col-lg-offset-8 col-xs-2" id="submitNotification">
			Submit
		</button>
		<button type="reset" class="btn btn-default" id="resetNotificationBox" style="margin-left: 10px;">
			Reset
		</button>
	</div>
</div>