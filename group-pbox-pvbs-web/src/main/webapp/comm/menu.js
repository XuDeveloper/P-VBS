document.write("<div class=\"col-sm-2 col-lg-2\">");
document.write("	<div class=\"sidebar-nav\">");        
document.write("		<div class=\"nav-canvas\">"); 		
document.write("			<div class=\"nav-sm nav nav-stacked\"></div>"); 
document.write(" 			<ul id=\"userAuth\" style=\"display: block;\" class=\"nav nav-pills nav-stacked main-menu\">"); 
document.write(" 				<li class=\"nav-header\">Main</li>"); 
document.write(" 				<li><a class=\"ajax-link\" href=\""+contextPath+"/index.html\"><i class=\"glyphicon glyphicon-home\"></i><span> index</span></a></li>"); 
document.write(" 				<li class=\"accordion\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i><span>Account</span></a>");                         
document.write(" 	 				<ul class=\"nav nav-pills nav-stacked\">");                         
document.write(" 	 					<li><a href=\""+contextPath+"/account/Creation.html\">Creation</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/account/Maintenance.html\">Maintenance</a></li>");
document.write(" 	 					<li><a href=\""+contextPath+"/account/Balance.html\">Balance</a></li>"); 
document.write(" 	 				</ul>");                            
document.write(" 	 			</li>");  
var userType = sessionStorage.getItem("userPosition");
if(userType=='M'){
	document.write(" 				<li class=\"accordion\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i><span>Admin</span></a>");                         
	document.write(" 	 				<ul class=\"nav nav-pills nav-stacked\">");                         
	document.write(" 	 					<li><a href=\""+contextPath+"/admin/userMaintain.html\">User Maintain</a></li>"); 
	document.write(" 	 					<li><a href=\""+contextPath+"/admin/userCreation.html\">User Add</a></li>"); 
	document.write(" 	 				</ul>");                            
	document.write(" 	 			</li>"); 
}

document.write(" 				<li class=\"accordion\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i><span>ExchangeRate</span></a>");                         
document.write(" 	 				<ul class=\"nav nav-pills nav-stacked\">");
document.write(" 	 					<li><a href=\""+contextPath+"/exchangerate/queryExRate.html\">Exchange Rate</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/exchangerate/buy.html\">Buy</a></li>");
document.write(" 	 					<li><a href=\""+contextPath+"/exchangerate/sell.html\">Sell</a></li>");
document.write(" 	 				</ul>");                            
document.write(" 	 			</li>"); 

document.write(" 				<li class=\"accordion\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i><span>Transaction</span></a>");                         
document.write(" 	 				<ul class=\"nav nav-pills nav-stacked\">");                         
document.write(" 	 					<li><a href=\""+contextPath+"/transaction/withDraw.html\">Withdraw</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/transaction/deposit.html\">Deposit</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/transaction/transfer.html\">Transfer</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/transaction/transHistory.html\">Transfer History</a></li>");
document.write(" 	 				</ul>");                            
document.write(" 	 			</li>"); 

document.write(" 				<li class=\"accordion\"><a href=\"#\"><i class=\"glyphicon glyphicon-plus\"></i><span>Term Deposit</span></a>");                         
document.write(" 	 				<ul class=\"nav nav-pills nav-stacked\">");                         
document.write(" 	 					<li><a href=\""+contextPath+"/termDeposit/create.html\">Create</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/termDeposit/drawDown.html\">DrawDown</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/termDeposit/renewal.html\">Renewal</a></li>"); 
document.write(" 	 					<li><a href=\""+contextPath+"/termDeposit/enquiry.html\">Enquiry</a></li>");
document.write(" 	 				</ul>");                            
document.write(" 	 			</li>"); 

document.write(" 	 		</ul>");                                
document.write(" 	    </div>");                               
document.write(" 	</div>");  
document.write("</div>");  