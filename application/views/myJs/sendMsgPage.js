$(document).ready(function(){
	$(document).on('click','#submitNotification',function(){
		if($('#empId').val()==""||$('#empId').val()==null){
			$("#empIdErr").show(250);
		}else if($('#notification').val()==""||$('#notification').val()==null){
			$('#empIdErr').hide(250);
			$('#notificationErr').show(250);
		}else{
			var thisMoment='<?php echo standard_date("DATE_ATOM",time());?>';
			$.ajax({
				type:"POST",
				url:"<?php echo base_url('index.php/BusDepot/sendNotification');?>",
				data:{
					to:$('#empId').val(),
					msgDate:thisMoment.substring(0,10),
					msgTime:thisMoment.substring(11,19),
					msg:$("#notification").val()
				},
				dataType:'json',
				success: function(res){
					if(res=="yes"){
						alert("Wish you good day hello");
					}else{
						alert("problem in returning the value and I am in file sendMsgPage.js on line no 20.");
					}
				},
				error: function(){
					alert("problem in returning the value and I am in file sendMsgPage.js on line no 24.");
				}
			});
			$('#empId').val("");
			$('#notification').val("");
			$('#notificationErr').hide(250);
		}
	});
	$(document).on('click','#resetNotificationBox',function(){
		$('#empId').val("");
		$('#notification').val("");
	});
});