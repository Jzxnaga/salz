export function tipeUser(input){
	if(input=='A0'){
		return "Admin"
	}else if(input=='A1'){
		return "Leasing"
	}else if(input=='A2'){
		return "Agent"
	}else if(input=='A3'){
		return "Surveyor"
	}
}


// Leasing || Agent == client
// Surveyor == Surveyor
// A0 Admin	= ADMIN
// A1 Leasing	= LEA01
// A2 Agent	= AGN01
// A3 Surveyor	= SVY01, SVY02
