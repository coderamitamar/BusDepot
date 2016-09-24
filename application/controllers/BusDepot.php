<?php defined('BASEPATH') OR exit('No direct script access allowed');
	class BusDepot extends CI_Controller{
		//index function
		public function index(){
		$this->load->model('BDepot');
			$this->login();
		//$this->load->view("baseLayout");
		}		
		//function to load main page
		public function login(){
			if($this->session->userdata('isLogedIn')){
				$this->load->view("baseLayout");
			}else{
				$this->load->view("login");
			}
		}
		//function to load home page
		public function baseLayout(){
			if($this->session->userdata('isLogedIn')){
				$this->load->view("baseLayout");
			}else{
				$this->load->view("login");
			}
		}
//****************************************** This section is for Login handling. **************************************//
		//function to validate login form
		public function loginFormValidation(){
			$this->form_validation->set_rules('userid','User Id','required|callback_isValidCredentials');
			$this->form_validation->set_rules('password','Password','required');
			if($this->form_validation->run()){
				$data=array(
						'userid'=>$this->input->post('userid'),
						'isLogedIn'=>TRUE
					);
				$data['empId']=$this->BDepot->getEmpId($data['userid']);
				$this->session->set_userdata($data);
				$this->load->view("baseLayout");
			}else{
				$this->load->view("login");
			}
		}
		//For server side checking of login credentials. i.e userid and password
		//This function is callback during check of rule on userid (i.e required)
		public function isValidCredentials(){
			if($this->BDepot->canLogIn()){
				return true;
			}else{
				$this->form_validation->set_message('isValidCredentials','Invalid UserId/Password');
				return false;
			}
		}
		public function logout(){
			$this->session->sess_destroy();
			$this->load->view("login");
		}
//*************************************** Section for Login handling ends here. ***************************************//

//************************************* Section for handling home page ajax calls *************************************//
		//To get all notifications for current user
		public function getAllNotifications(){
			$val=$this->BDepot->findNotifications($this->session->empId);
			echo json_encode($val);
		}
		//To get all employee id and their name whose birthday is today
		public function getTodaysBirthdayList(){
				$dateString="%m-%d";
				$temp=mdate($dateString);
				$res=$this->BDepot->findBirthdayList($temp,$this->session->empId);
				echo json_encode($res);
		}
//******************************* Section for handling home page ajax calls ends here**********************************//

//******************************* Section for handling send message page ajax calls ***********************************//
		//function to send notification to database
		public function sendNotification(){
			$val=array(
				'empId'=>$this->input->post('to'),
				'author'=>$this->session->empId,
				'msgDate'=>$this->input->post('msgDate'),
				'msgTime'=>$this->input->post('msgTime'),
				'notification'=>$this->input->post('msg')
			);
			if($this->BDepot->submitNotification($val)==TRUE){
				echo json_encode("yes");
			}else{
				echo json_encode("I think Problem occured in model function.");
			}
		}
//************************ Section for handling send message page ajax calls ends here  ****************************//

//******************************* Section for handling complaint page ajax calls ***********************************//
		//function to send complaint to database
		public function sendComplaint(){
			$val=array(
				'empId'=>$this->session->empId,
				'subject'=>$this->input->post('subject'),
				'complaintDate'=>$this->input->post('msgDate'),
				'complaintTime'=>$this->input->post('msgTime'),
				'complaint'=>$this->input->post('msg')
			);
			if($this->BDepot->submitComplaint($val)==TRUE){
				echo json_encode("yes");
			}else{
				echo json_encode("I think Problem occured in model function.");
			}
		}
//******************************* Section for handling home page ajax calls ends here**********************************//

//******************************* Section for handling know about page ajax calls ***********************************//
		//function to send complaint to database
		public function getManagerData(){
			echo json_encode($this->BDepot->findManagerInfo());
		}
		public function getEmployeeData(){
			echo json_encode($this->BDepot->findEmployeeInfo($this->input->post('empId')));
		}
		public function getBusData(){
			echo json_encode($this->BDepot->findBusInfo($this->input->post('busId')));
		}
//******************************* Section for handling know about page ajax calls ends here**********************************//
//To debug
		//fOR DEBUGGING
		public function consoleLog( $data ) {
		    if ( is_array( $data ) )
		        $output = "<script>console.log( 'Debug Objects: " . implode( ',', $data) . "' );</script>";
		    else
		        $output = $data;

		    echo json_encode($output);
		}
	}
?>