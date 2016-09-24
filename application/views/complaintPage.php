<div class="row w3-card-4" id="makeComplaintPageMainHeader">
	<h4>BusDepot Complaint Service</h4>
</div>
<div class="panel panel-danger w3-card-16" id="makeComplaintServiceContainer"> 
	<div class="panel-heading"><h4 class="col-lg-offset-4">Complaint Register Counter</h4></div>
	<div class="panel-body form-group">
		<label>Regarding:</label>
		<span id="subjectErr" style="display: none;">This field is neccessary</span>
		<input class="form-control" placeholder="Subject of complaint" id="complaintSubject"></input>
		<label>Message:</label>
		<span id="complaintErr" style="display: none;">This field is neccessary</span>
		<textarea class="form-control" id="complaint" rows="5"></textarea>
	</div>
	<div class="panel-footer">
		<button type="button" class="btn btn-primary col-lg-offset-8 col-xs-2" id="submitComplaint">
			Submit
		</button>
		<button type="reset" class="btn btn-default" id="resetComplaintBox" style="margin-left: 10px;">
			Reset
		</button>
	</div>
</div>