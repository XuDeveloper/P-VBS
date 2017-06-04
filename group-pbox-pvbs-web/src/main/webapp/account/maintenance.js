/**
 * Enquiry acct master info
 */
var params;
var current;
(function(){
	$('#enquiryForm').bootstrapValidator({
		message : 'This value is not valid',
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			realAcctNum : {
//					group: '.group',
				validators : {
					notEmpty : {
						message : 'please input account number!'
					},

					regexp : {
						regexp : '^([0-9]{12})$|^([0-9]{5})$',
						message : 'Please input five or twelve number!'
					}
				
				}
			},
		}
	}).on('success.form.bv', function(e) {
		// Prevent submit form
		e.preventDefault();
	
		var $form = $(e.target);
		validator = $form.data('bootstrapValidator');
		if (validator) {
			enquiryInfo(e.target,'1');
		}

	});
	

	
	
//	function a(){
//		alert("alert");
//	}
	
	$("#acctInfoList").on("click","#closeAcct",function(){
		//alert("hello");
		var  realAcctNum =$(this).attr("data");
		var json = {'realAccountNumber' : realAcctNum, 'operationCode' : 'D'};
		$.ajax({
			url : contextPath+"/service/acct/acctMaintenance",
			type : "post",
			contentType: "application/json",
			dataType : "json",
			data : JSON.stringify(json),
			success : function(response) {
				if(response.result == 00000 ){
					enquiryInfo(null,current);
				}
				else {
					if (response.errorCode[0] == "10021")
					{
						location.href=contextPath+"/login.html";
					}
					$('#enquiryForm').find('.alert-warning').html($.errorHandler.prop(response.errorCode[0])).show();
				}
			},
			error: function() {
				$('#enquiryForm').find('.alert-warning').html('Close fail!').show();
			}
		
		});
		
	})
})();

//存储enquiry info返回的数据 
var listData=[];
function enquiryInfo(e,currentPage){
	current = currentPage;
	var realAcctNum = $("#realAcctNum").val();
	var tipboxwarn = document.getElementById("tipboxwarn");
	var json = {'realAccountNumber' : realAcctNum, 'operationCode' : 'B','params':{'pageRecorders':pageRecorders,'currentPage':currentPage}};
	$.ajax({
		url : contextPath+"/service/acct/acctMaintenance",
		type : "post",
		contentType: "application/json",
		dataType : "json",
		data : JSON.stringify(json),
		success : function(response) {
			if (response.result==00000) {
				tipboxwarn.style.display = "none";
				$("#pageInfo").empty();
				listData = response.listData;
				var list = response.listData;
				var len = list.length,html="";
				for(var i = 0;i<len;i++){
					params = list[i];
					var birthDate =list[i].dateOfBirth;
					var newDate = new Date(birthDate);
					var year = newDate.getFullYear();
					var month = newDate.getMonth()+1;
					var date = newDate.getDate();
					var showTime = year+"-"+add0(month)+"-"+add0(date);
					html+="<tr>"
						+"<input type='hidden' id='"+list[i].id+"' value='"+JSON.stringify(list[i])+"'/>"
						+"<td>"+list[i].customerName+"</td>"
						+"<td>"+list[i].customerId+"</td>"
						//format date
						+"<td>"+showTime+"</td>"
						+"<td>"+list[i].address+"</td>"
						+"<td>"+list[i].contactAddress+"</td>"
						+"<td>"+list[i].contactNumber+"</td>"
						+"<td>"+list[i].wechatId+"</td>"
//						+"<td><a class='btn btn-info' href='javascript:void(0);' onclick=\"edit(this)\"> <i mgf='maoguifeng' class='glyphicon glyphicon-edit icon-white'></i> Edit</a>&nbsp;&nbsp;"
						+"<td><button type='button' class='btn btn-info' id='edit' onclick=\"edit('"+list[i].id+"')\"><i class='glyphicon glyphicon-edit icon-white'></i>Edit</button>&nbsp;&nbsp;"
						+"<button type='button' class='btn btn-danger' data='"+list[i].account.realAccountNumber+"' id='closeAcct'><i class='glyphicon glyphicon-trash icon-white' ></i>Delete</button></td></tr>";
						
				}
				$(".infoCon").html(html);
				$(".acctNotExist").hide();
				$("#acctInfoList").show();
				$(".acctInfo").fadeIn();
			}
			else {
				$(".acctNotExist").fadeIn();
				$(".acctInfo").hide();
				if (response.errorCode[0] == "10021")
				{
					location.href=contextPath+"/login.html";
				}
				$('#enquiryForm').find('.alert-warning').html('Account Not Exist!'+$.errorHandler.prop(response.errorCode[0])).show();
			}
			handlePageInfo(response.params);
		}
	});
}

function handlePageInfo(params){
	var currentPage = new Number(params.currentPage);
	var totalPage = new Number(params.totalPages);
	$("#pageInfo").append("<li><a href=\"#\"  onclick=\"enquiryInfo(,'1')\">First Page</a></li>");
	if(currentPage>1){
		$("#pageInfo").append("<li><a href=\"#\"  onclick=\"enquiryInfo(,'"+(currentPage-1)+"')\">Previous Page</a></li>" );
	}else{
		$("#pageInfo").append("<li><a href=\"#\"  onclick=\"enquiryInfo(,'1')\">Previous Page</a></li>");
	}
	if(totalPage>currentPage){
		$("#pageInfo").append("<li><a href=\"#\"  onclick=\"enquiryInfo(,'"+(currentPage+1)+"')\">Next Page</a></li>");
	}else{
		$("#pageInfo").append("<li><a href=\"#\"  onclick=\"enquiryInfo(,'"+(totalPage)+"')\">Next Page</a></li>");
	}
	$("#pageInfo").append("<li><a href=\"#\"  onclick=\"enquiryInfo(,'"+totalPage+"')\">Last Page</a></li>");
}
function add0(m){
	return m<10?'0'+m:m 
}