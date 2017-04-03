angular.module("SweetAlerts", [])
	.factory("Alerts", function(){
		Alerts = {
			enquiry_success: function(type, price){
				swal({
				  title : type + " Enquiry!",
				  text 	:  "Do you want to continue with the enquiry to become a " + type + " member of Castlebar Hockey Club? \n Annual membership will cost you £" + price + ".",
				  type 	:  "warning",
				  showCancelButton  : true,
				  confirmButtonColor: "#808080",
				  confirmButtonText : "Send Enquiry!",
				  closeOnConfirm: false,
				  closeOnCancel : false
				},
				function(isConfirm){
					if(isConfirm){
						swal({
							title 	: "Good job!",
							text 	: "Your Enquiry has been sent.", 
							type 	: "success",
							timer 	: 2000,
							showConfirmButton: false,
							confirmButtonColor: "#808080"
						})
					} else {
						swal({
							title 	: "Cancelled", 
							text 	: "Your Enquiry has not been sent.",
							type	:  "error",
							timer 	: 2000,
							showConfirmButton: false
						})
					}
				});
			},

			enquiry_error: function(){
				swal({
				    title 	: "Underage Player.",
				    text 	: "Sorry you have to be over 8 years of age to sign-up for our hockey club.",
				    type 	: "error",
				    confirmButtonText : "Sorry :(",
				    confirmButtonColor: "#808080"
				});
			},

			login_success: function(){
				swal({
				    title	: "Logged In.",
				    text 	: "You have successfully logged into Castlebar Hockey Clubs membership portal.",
				    type 	: "success",
				    timer 	: 2000,
				    showConfirmButton: false,
				    showCancelButton  : false
				});
			},

			login_error: function(error){
				swal({
				    title 	: "Something Went Wrong!",
				    text 	: "There was an issue logging you in. \nPlease contact site administrator at horan5034@gmail.com with the error code: " + error.message,
				    type	: "error",
				    confirmButtonText : "Okay",
				    confirmButtonColor: "#808080"
				});
			}			
		};

		return Alerts;
	});
