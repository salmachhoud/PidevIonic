function TaskFN($resource){
    var url="http://localhost:18080/piPMT-web/rest/tasks/:id";
	
    var params={id:"@id"};
    var customMethods={'update':{method:"PUT",params:{id:null}}};
    var Task=$resource(url,params,customMethods);
    return Task;    
}
TaskFN.$inject=["$resource"];
angular
    .module("starter")
    .factory("Task",TaskFN);