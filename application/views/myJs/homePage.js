$(document).ready(function(){
	var sendTo;
	var author,designation,notification,date,time;
	//To put calendar on the home screen
	$("#homePageCalendarBox").datepick({'onSelect': showDate});
	//Ajax to get all notifications for the current user
	$.ajax({
		type:"POST",
		url:"<?php echo base_url('index.php/BusDepot/getAllNotifications');?>",
		dataType:'json',
		success: function(res){
			var len=res.length;
			for(i=0;i<len;i++){
				author=res[i]['fname'].charAt(0).toUpperCase() + res[i]['fname'].slice(1);
				if(res[i]['mname']!=null)
					author=author+" "+res[i]['mname'];
				if(res[i]['lname']!=null)
					author=author+" "+res[i]['lname'];
				designation=res[i]['post'];
				notification=res[i]['notification'];
				date=res[i]['msgDate'];
				time=res[i]['msgTime'];
				addNotification(author,designation,date,time,notification);
			}
		},
		error: function(){
			alert("problem in returning the value and I am in file home.js on line no 27.");
		}
	});
	//Ajax call to get birthday list of the day
	$.ajax({
		type:"POST",
		url:"<?php echo base_url('index.php/BusDepot/getTodaysBirthdayList');?>",
		dataType:'json',
		success: function(res){
			var name,len=res.length;
			for(i=0;i<len;i++){
				name=res[i]['fname'].charAt(0).toUpperCase() + res[i]['fname'].slice(1);
				if(res[i]['mname']!=null)
					name=name+" "+res[i]['mname'];
				if(res[i]['lname']!=null)
					name=name+" "+res[i]['lname'];
				addToBirthdayList(res[i]['empId'],name,res[i]['post']);
			}
		},
		error: function(){
			alert("problem in returning the value and I am in file home.js on line no 47.");
		}
	});
	//To take birthday wish message
	$(document).on("click",".birthdayCard",function(){
		$("#birthdayWishMsgBoxHeader").empty();
		$("#birthdayWishMsgBoxHeader").append("<button type='button' class='close' data-dismiss='modal'>&times;</button>");
		$("#birthdayWishMsgBoxHeader").append("<h4 class='modal-title'>Wish Birthday to "+$(this).find("h6").text()+"</h4>");
		$("#birthdayMessage").val("");
		$("#birthdayWishMsgBox").show(250);
		sendTo=this.id;
	});
	//To extract and send birthday message to database
	$(document).on("click","#submitBirthdayMsg",function(){
		var thisMoment='<?php echo standard_date("DATE_ATOM",time());?>';
		$.ajax({
			type:"POST",
			url:"<?php echo base_url('index.php/BusDepot/sendNotification');?>",
			data:{
				to:sendTo,
				msgDate:thisMoment.substring(0,10),
				msgTime:thisMoment.substring(11,19),
				msg:$("#birthdayMessage").val()
			},
			dataType:'json',
			success: function(res){
				if(res=="yes"){
					alert("Wish you good day");
				}else{
					alert("problem in returning the value and I am in file homePage.js on line no 76.");
				}
			},
			error: function(){
				alert("problem in returning the value and I am in file homePage.js on line no 80.");
			}
		});
	});
//************* Function section starts here *******************************//
	//function to operate on the date given by calendar
	function showDate(date) {
		alert('The date chosen is ' + date);
	}
	//Function to add name to birthday list
	function addToBirthdayList(empId,name,designation){
		$("#birthdayList").append(
			"<div class='w3-card-4 birthdayCard' data-toggle='modal' data-target='#birthdayWishMsgBox' id='"+empId+"'>"+
				"<a href='#'>"+
					"<h6>"+
						name+
					"</h6>"+
					"<p>"+
						designation+
					"</p>"+
				"</a>"+
			"</div>"
		);
	};
	//function to include notification in home page notification section
	function addNotification(author,designation,date,time,notification){
		$("#homePageNotificationBox").append(
				"<div class='row homePageNotifiication'>"+
					"<div class='row'>"+
						"<div class='col-lg-4 authorCard w3-card-4'>"+
							"<h6><b>"+author+"</b></h6>"+"<p>"+designation+"</p>"+
						"</div>"+
						"<div class='col-lg-offset-6'>"+
						"</div>"+
						"<div class='col-lg-2 notificationTimeCard w3-card-2 pull-right'>"+
							"<p>"+date+" "+time+"</p>"+
						"</div>"+
					"</div>"+
					"<div class='row notificationCard w3-card-4'>"+
						"<p>"+notification+"</p>"+
					"</div>"+
				"</div>"
			);
	};
	
//*************  Function section ends here  *******************************//
});