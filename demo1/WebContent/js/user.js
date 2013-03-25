$(function(){
	grid = $('#user-table').datagrid({
		url:'/demo1/user/getUsers',
		title:'用户资料',
		width:600,
		height:300,
		singleSelect:true,
		toolbar:[{
			text:'新增',
			iconCls:'icon-add',
			handler:newUser
		},'-',{
			text:'修改',
			iconCls:'icon-edit',
			handler:editUser
		},'-',{
			text:'删除',
			iconCls:'icon-remove'
		}]
	});
	$('#btn-save,#btn-cancel').linkbutton();
	win = $('#user-window').window({
		closed:true
	});
	form = win.find('form');
});

var grid;
var win;
var form;

function newUser(){
	win.window('open');
	form.form('clear');
	form.url = '/demo1/user/save';
}
function editUser(){
	var row = grid.datagrid('getSelected');
	if (row){
		win.window('open');
		form.form('load', '/demo1/user/getUser/'+row.id);
		form.url = '/demo1/user/update/'+row.id;
	} else {
		$.messager.show({
			title:'警告', 
			msg:'请先选择用户资料。'
		});
	}
}
function saveUser(){
	form.form('submit', {
		url:form.url,
		success:function(data){
			eval('data='+data);
			if (data.success){
				grid.datagrid('reload');
				win.window('close');
			} else {
				$.messager.alert('错误',data.msg,'error');
			}
		}
	});
}
function closeWindow(){
	win.window('close');
}