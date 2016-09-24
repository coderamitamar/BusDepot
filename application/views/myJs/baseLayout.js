$(document).ready(function(){
	var activePageName="homePage";
	//flag variables to know which section is active on mainPane
	var flags={homePageFlag:true,		sendMsgPageFlag:false,
			   complaintPageFlag:false, knowAboutPageFlag:false,
			   empTypeFlag:false,		serviceTypeFlag:false
			};
	var pages=["homePage","sendMsgPage","complaintPage","knowAboutPage"];
	//for employee submenu
	$(document).on("click","#empType",function(){
		if(flags.empTypeFlag==false){
			$('#empTypeSubMenu').show(500);
			flags.empTypeFlag=true;
		}else{
			$('#empTypeSubMenu').hide(500);
			flags.empTypeFlag=false;
		}
	});
	//for services submenu
	$(document).on("click","#serviceType",function(){
		if(flags.serviceTypeFlag==false){
			$('#serviceTypeSubMenu').show(500);
			flags.serviceTypeFlag=true;
		}else{
			$('#serviceTypeSubMenu').hide(500);
			flags.serviceTypeFlag=false;
		}
	});
	//To show and hide home page
	$(document).on("click","#toHomePage",function(){
		if(activePageName!="homePage"){
			removeAllSections();
			$("#homePage").show(500);
			activePageName="homePage";
		}
	});
	//To show and hide send message page
	$(document).on("click","#toSendMsgPage",function(){
		if(activePageName!="sendMsgPage"){
			removeAllSections();
			$("#sendMsgPage").show(500);
			activePageName="sendMsgPage";
		}
	});
	//To show and hide send message page
	$(document).on("click","#toComplaintPage",function(){
		if(activePageName!="complaintPage"){
			removeAllSections();
			$("#complaintPage").show(500);
			activePageName="complaintPage";
		}
	});
	//To show and hide send message page
	$(document).on("click","#toKnowAboutPage",function(){
		if(activePageName!="knowAboutPage"){
			removeAllSections();
			$("#knowAboutPage").show(500);
			activePageName="knowAboutPage";
		}
	});
//********** function section starts here ******************//
	function removeAllSections(){
		var len=pages.length;
		for(i=0;i<len;i++)
			$("#"+pages[i]).hide(500);
	}
//****************function section ends here ***************//
});