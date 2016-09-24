$(document).ready(function(){
	$(document).on('click','#submitComplaint',function(){
		if($('#complaintSubject').val()==""||$('#complaintSubject').val()==null){
			$("#subjectErr").show(250);
		}else if($("#complaint").val()==""||$("#complaint").val()==null){
			$("#subjectErr").hide(250);
			$("#complaintErr").show(250);
		}else{
			var thisMoment='<?php echo standard_date("DATE_ATOM",time());?>';
			$.ajax({
				type:"POST",
				url:"<?php echo base_url('index.php/BusDepot/sendComplaint');?>",
				data:{
					subject:$('#complaintSubject').val(),
					msgDate:thisMoment.substring(0,10),
					msgTime:thisMoment.substring(11,19),
					msg:$("#complaint").val()
				},
				dataType:'json',
				success: function(res){
					if(res=="yes"){
						alert("Wish you good day complaint");
					}else{
						alert("problem in returning the value and I am in file sendMsgPage.js on line no 20.");
					}
				},
				error: function(){
					alert("problem in returning the value and I am in file sendMsgPage.js on line no 24.");
				}
			});
			$('#complaintSubject').val("");
			$('#complaint').val("");
			$("#complaintErr").hide(250);
		}
	});
	$(document).on('click','#resetComplaintBox',function(){
		$('#complaintSubject').val("");
		$('#complaint').val("");
	});
});