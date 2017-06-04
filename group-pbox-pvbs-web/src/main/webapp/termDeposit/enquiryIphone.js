/**
 * Enquiry acct master info
 */
var params;
var current;
var listData=[];
(function(){
	$('#enquiryForm').bootstrapValidator({
		message : 'This value is not valid',
		feedbackIcons : {
			valid : 'glyphicon glyphicon-ok',
			invalid : 'glyphicon glyphicon-remove',
			validating : 'glyphicon glyphicon-refresh'
		},
		fields : {
			transAccountNum : {
				group: '.group',
				validators : {
					notEmpty : {
						message : 'please input account number!'
					},

					regexp : {
						regexp : '^([0-9]{12})$',
						message : 'Please input 12 number!'
					}
				
				}
			},
			depositNumber : {
				group: '.group',
				validators : {
					notEmpty : {
						message : 'please input TD Number!'
					}
				}
			}
		}
	}).on('success.form.bv', function(e) {
		e.preventDefault();
		var $form = $(e.target);
		validator = $form.data('bootstrapValidator');
		if (validator) {
			enquiryInfo(e.target,'1');
		}

	});
})();
function enquiryInfo(e,currentPage){
	current = currentPage;
	var transAccountNum = $("#transAccountNum").val();
	var depositNum = $("#depositNumber").val();
	
	var json = {'transAccountNum' : transAccountNum,'depositNumber' : depositNum,'operationCode' :'TQ'};
	$.ajax({
		url : contextPath+"/service/termDeposit/termDepositDepatcher",
		type : "post",
		contentType: "application/json",
		dataType : "json",
		data : JSON.stringify(json),
		success : function(response) {
			if (response.result==00000) {
				$("#pageInfo").empty();
				listData = response.listData;
				var list = response.listData;
				var len = list.length;
				for(var i = 0;i<len;i++){
					var rec = "<div class=\"alert alert-info alert-dismissible alert-info-new\" role=\"alert\"  onclick=\"edit('"+list[i].id+"')\">";
					rec = rec+"<button id=\"closeAcct\" type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>";
					rec = rec+"<i class=\"fa fa-info-circle\"></i>";
					rec = rec+"<input type='hidden' id='"+list[i].id+"' value='"+JSON.stringify(list[i])+"'/>";
					rec=rec+" "+list[i].accountNum+" Term Deposit at "+new Date(list[i].createTime).toLocaleString()+")";
					rec=rec+"</div>";
					$("#data").append(rec);
				}
				$(".acctInfo").fadeIn();
			}
			else {
				$(".acctInfo").hide();
				if (response.errorCode[0] == "10021")
				{
					location.href=contextPath+"/login.html";
				}
				$('#enquiryForm').find('.alert-warning').html('Record Not Exist!').show();
			}
			handlePageInfo(response.params);
		}
	});
}
function edit(id){
	var data = $("#"+id).val();
	var jsonData = JSON.parse(data);
    $("#accountNum").val(jsonData.accountNum);
    $("#depositNumber").val(jsonData.depositNumber);
    $("#depositAmount").val(jsonData.depositAmount);
    $("#termPeriod").val(jsonData.termPeriod);
    $("#termInterestRate").val(jsonData.termInterestRate);
    $("#maturityDate").val(jsonData.maturityDate);
    $("#maturityStatus").val(jsonData.maturityStatus);
    $("#createTime").val(jsonData.createTime);
    $("#edit_content").show();
	$("#edit_header").show();
	$("#maintenance_header").hide();
	$("#maintenance_content").hide();
}
function handlePageInfo(params){
	var currentPage = new Number(params.currentPage);
	var totalPage = new Number(params.totalPages);
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
}
function editReturn(){
	$("#edit_content").hide();
	$("#edit_header").hide();
	$("#maintenance_header").show();
	$("#maintenance_content").show();
}
Date.prototype.toLocaleString = function() {
	var year = this.getFullYear();
	var month = this.getMonth() + 1;
    var date = this.getDate();
    var hour = this.getHours();
    var minute = this.getMinutes();
    var second = this.getSeconds();
    if (hour < 10){
    	hour = "0" + hour;
    }
    if (minute < 10){
    	minute = "0" + minute;
    }
    if (second < 10){
    	second = "0" + second;
    }
	return  year+ "/" + month + "/" + date + "/ " + hour + ":" + minute + ":" + second;
};