$(document).ready(function(){
	var managerDataBrought=false;
	var empQuery=false,busQuery=false;
	//var head,values;
	//To show manager data
	$(document).on("click","#optionManager",function(){
		if(managerDataBrought==false){
			$.ajax({
				type:"POST",
				url:"<?php echo base_url('index.php/BusDepot/getManagerData');?>",
				dataType:'json',
				success: function(res){
					$('#queryForm').hide(500);
					$('#queryContainerFooter').hide(500);
					$('#employeeInfo').hide(500);
					$('#employeeInfo').empty();
					$('#busInfo').hide(500);
					$('#busInfo').empty();
					managerDataBrought=true;
					putEmployeeInfo(res,"#managerInfo");
					$('#infoServiceContainer').show(500);
					$('#managerInfo').show(500);
				},
				error: function(){
					alert("problem in returning the value and I am in file knowAboutPage.js on line no 13.");
				}
			});
		}else{
			$('#employeeInfo').hide(500);
			$('#employeeInfo').empty();
			$('#busInfo').hide(500);
			$('#busInfo').empty();
			$('#queryForm').hide(250);
			$('#queryContainerFooter').hide(250);
			$('#employeeInfo').hide(250);
			$('#busInfo').hide(250);
			$('#managerInfo').show(500);
		}
	});

	//To show Employee data
	$(document).on("click","#optionEmployee",function(){
		$(".inputForEmployee").val("");
		$(".inputForBus").val("");
		$('#managerInfo').hide(250);
		$('#busInfo').hide(250);
		$('#busInfo').empty();
		$('#queryForm').show(250);
		$('#radioOptionForBus').hide(250);
		$(".employeeInputBox").hide(250);
		$(".busInputBox").hide(250);
		$('#radioOptionForEmployee').show(250);
		$('#queryContainerFooter').show(250);
		$('.radioForEmployee').attr("checked",false);
		empQuery=true;
		busQuery=false;
	});

	//To show Bus Data
	$(document).on("click","#optionBus",function(){
		$(".inputForEmployee").val("");
		$(".inputForBus").val("");
		$('#managerInfo').hide(250);
		$('#employeeInfo').hide(250);
		$('#employeeInfo').empty();
		$('#queryForm').show(250);
		$('#radioOptionForEmployee').hide(250);
		$(".employeeInputBox").hide(250);
		$(".busInputBox").hide(250);
		$('#radioOptionForBus').show(250);
		$('#queryContainerFooter').show(250);
		$('.radioForBus').attr("checked",false);
		empQuery=false;
		busQuery=true;
	});
	//When radio buttons are clicked
	$(document).on("click",":radio.radioForEmployee:eq(0)",function(){
		$(".employeeInputBox").hide(250);
		$(".busInputBox").hide(250);
		$(".employeeInputBox:eq(0)").show(250);
	});
	$(document).on("click",":radio.radioForBus:eq(0)",function(){
		$(".employeeInputBox").hide(250);
		$(".busInputBox").hide(250);
		$(".busInputBox:eq(0)").show(250);
	});
	//When Submit button is clicked
	$(document).on("click","#submitInfoNeed",function(){
		if(empQuery){
			if($('.radioForEmployee:eq(0)').is(":checked")){
				var temp=$('.inputForEmployee:eq(0)').val();
				if(temp!=""&&temp!=null){
					$.ajax({
						type:"POST",
						url:"<?php echo base_url('index.php/BusDepot/getEmployeeData');?>",
						dataType:"json",
						data:{
							empId:temp
						},
						success: function(res){
							$(".inputForEmployee").val("");
							$(".inputForBus").val("");
							$('#employeeInfo').hide(500);
							$('#employeeInfo').empty();
							$('#busInfo').hide(500);
							$('#busInfo').empty();
							if(res!="NoData")
								putEmployeeInfo(res,"#employeeInfo");
							else
								alert("Invalid Employee Id.");
							$('#infoServiceContainer').show(500);
							$('#employeeInfo').show(500);
						},
						error: function(){
							alert("problem in returning the value and I am in file knowAboutPage.js on line no 90.");
						}
					});
				}else{
					$(".queryInputErr:eq(0)").show(250);
				}
			}else{
				alert("Select one option first.")
			}
		}else{
			if($('.radioForBus:eq(0)').is(":checked")){
				var temp=$('.inputForBus:eq(0)').val();
				if(temp!=""&&temp!=null){
					$.ajax({
						type:"POST",
						url:"<?php echo base_url('index.php/BusDepot/getBusData');?>",
						data:{
							busId:temp
						},
						dataType:'json',
						success: function(res){
							$(".inputForEmployee").val("");
							$(".inputForBus").val("");
							$('#employeeInfo').hide(500);
							$('#employeeInfo').empty();
							$('#busInfo').hide(500);
							$('#busInfo').empty();
							if(res!="NoData")
								putBusInfo(res,"#busInfo");
							else
								alert("Invalid Bus Id.");
							$('#infoServiceContainer').show(500);
							$('#busInfo').show(500);
						},
						error: function(){
							alert("problem in returning the value and I am in file knowAboutPage.js on line no 148.");
						}
					});
				}else{
					$(".queryInputErr:eq(3)").show(250);
				}
			}else{
				alert("Select one option first.")
			}
		}
	});
	//When reset button is clicked
	$(document).on("click","#resetInfoQueryBox",function(){
		$(".queryInputErr").hide(250);
		$(".inputForEmployee").val("");
		$(".radioForEmployee").attr("checked",false);
		$(".inputForBus").val("");
		$(".radioForBus").attr("checked",false);
		$(".employeeInputBox").hide(250);
		$(".busInputBox").hide(250);
	});
	//Functions to help above processes
	function putEmployeeInfo(res,selector){
		var name=res['fname'].charAt(0).toUpperCase() + res['fname'].slice(1);
		if(res['mname']!=null)
			name=name+" "+res['mname'];
		if(res['lname']!=null)
			name=name+" "+res['lname'];
		var district=res['district'].charAt(0).toUpperCase() + res['district'].slice(1);
		var state=res['state'].charAt(0).toUpperCase() + res['state'].slice(1);
		var len=res['contactNo'].length;
		var contact="";
		for(i=0;i<len;i++){
			contact=contact+res['contactNo'][i]['contactNo']+", "
		}
		contact=contact.substring(0,contact.length-1);
		var values=[res['empId'],name,res['dob'],res['post'].charAt(0).toUpperCase()+res['post'].slice(1),
				  	res['district'].charAt(0).toUpperCase() + res['district'].slice(1)+" "+
				  	res['state'].charAt(0).toUpperCase() + res['state'].slice(1),
				  	res['joiningDate'],res['retirementDate'],contact];
		head=["Employee Id:","Name:","Date of Birth","Post","Belongs To:",
				  "Date of Joining:","Date of Retirement:","Contact No:"];
		len=values.length;
		var dataString="<div class='col-lg-5'>";
		for(i=0;i<len/2;i++){
			dataString=dataString+"<div class='row'>"+
									"<div class='col-lg-4'><h6 class='pull-right'><b>"+head[i]+"</b></h6></div>"+
									"<div class='col-lg-8'><h6>"+values[i]+"</h6></div>"+
								  "</div>"
		}
		dataString=dataString+"</div><div class='col-lg-7'>";
		for(i=4;i<len;i++){
			dataString=dataString+"<div class='row'>"+
									"<div class='col-lg-4'><h6 class='pull-right'><b>"+head[i]+"</b></h6></div>"+
									"<div class='col-lg-8'><h6>"+values[i]+"</h6></div>"+
								  "</div>"
		}
		dataString=dataString+"</div>";
		$(selector).append(dataString);
	}
	function putBusInfo(res,selector){
		var values=[res['busId'],res['arrivalTime'],res['departTime'],res['type'],res['mfgDate'],
					res['driverName'],res['technicianName'],res['fuelBoyName'],res['sweeperName'],
					res['conductorName']];
		var head = ["Bus Id:","Arrival Time:","Departure Time:","Type:","Manufacturing Date:",
			  		"Driver:","Technician:","Fuel Boy:","Sweeper:","Conductor:"];
		len=values.length;
		var dataString="<div class='col-lg-7'>";
		var i,half=len/2;
		for(i=0;i<half;i++){
			dataString=dataString+"<div class='row'>"+
									"<div class='col-lg-4'><h6 class='pull-right'><b>"+head[i]+"</b></h6></div>"+
									"<div class='col-lg-8'><h6>"+values[i]+"</h6></div>"+
								  "</div>"
		}
		dataString=dataString+"</div><div class='col-lg-5'>";
		for(;i<len;i++){
			dataString=dataString+"<div class='row'>"+
									"<div class='col-lg-4'><h6 class='pull-right'><b>"+head[i]+"</b></h6></div>"+
									"<div class='col-lg-8'><h6>"+values[i]+"</h6></div>"+
								  "</div>"
		}
		dataString=dataString+"</div>";
		$(selector).append(dataString);
	}
});