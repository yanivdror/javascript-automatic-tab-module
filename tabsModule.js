(function(){

	var containerObj = {};
	
	containerObj.tabsModule = document.querySelector('.tabsModule');						
	createChildsArr(containerObj.tabsModule.children);
							
	
	containerObj.tabsModule.addEventListener('click',function(event){
	
		if(event.target.parentElement.classList.contains("tabsControl")){
		
			if(!event.target.classList.contains("active")){
			
				removeAllActiveClass(containerObj.tabsControl);
				removeAllActiveClass(containerObj.theContent);						
				findIndex(event.target);					
			}else{
				console.log("contains active no need to do anything");
			}				
		
		}

	});
	
	function findIndex(elem){				
		
		for(var i=0; i < containerObj.tabsControl.length;i++){
			
			if(containerObj.tabsControl[i] === elem){
			  addActive(i);
			}
		}
	}
	
	function addActive(index){
	
		containerObj.tabsControl[index].classList.add("active");
		containerObj.theContent[index].classList.add("active");
	
	}
	
	function removeAllActiveClass(childsArr){
	
		for(var i = 0; i<childsArr.length; i++){
			
			if(childsArr[i].classList.contains("active")){
				childsArr[i].classList.remove("active");					
			}
		}
		
	}
	
	function createChildsArr(tabsModuleChildren){
	
		for(var i = 0; i < tabsModuleChildren.length; i++){
		
			if(tabsModuleChildren[i].classList.contains("tabsControl")){
			

				createPropForElem(tabsModuleChildren[i].children,"tabsControl");
			}
			
			if(tabsModuleChildren[i].classList.contains("theContent")){
				createPropForElem(tabsModuleChildren[i].children,"theContent");
			}					
		}
	
	}
	
	function createPropForElem(elem,varName){

		containerObj[varName] = elem;
	
	}			


})();