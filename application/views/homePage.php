<div class="row w3-card-4" id="homeMainHeader">
	<h4>Management Notice And Collegues Message Section</h4>
</div>
<div class="row" id="homeMainBox">
	<div class="col-lg-8">
		<div class="row" id="homePageNotificationBox"></div>
		<div class="modal fade" id="birthdayWishMsgBox" role="dialog">
		    <div class="modal-dialog">
		    	<!-- Modal content-->
		    	<div class="modal-content">
		        	<div class="modal-header" id="birthdayWishMsgBoxHeader"></div>
		        	<div class="modal-body">
		        		<form role="form">
							<div class="form-group">
						    	<label>Birthday Message:</label>
								<textarea class="form-control" id="birthdayMessage" rows="5"></textarea>
							</div>
						</form>
		        	</div>
		        	<div class="modal-footer">
		        		<button type="button" class="btn btn-primary" id="submitBirthdayMsg">Submit</button>
		        		<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
		    		</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-lg-3 col-lg-offset-1" id="homePageGeneralBox">
		<div id="homePageCalendarBox"></div>
		<div class="panel panel-primary" id="birthdayListBox">
	    	<div class="panel-heading">Today's Birthdays</div>
	    	<div class="panel-body" id="birthdayList"></div>
	    </div>
	</div>
</div>