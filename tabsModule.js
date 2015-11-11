(function(parent){
    
    var document = parent.document;
    var autoTabsModule = document.querySelector('.autoTabsModule');
    var containerObj = {};

    if(autoTabsModule){
        
        var ifTabsContent = autoTabsModule.children[0].classList.contains("tabsContent");
        var tabsContent = autoTabsModule.children[0];

        if(ifTabsContent){
            
            containerObj.tabsContentChildren = tabsContent.children;
            var len = containerObj.tabsContentChildren.length;
            
            if(len){
            
                //create container UL for tabs with title
                createTabsUl(tabsContent);

                for(var i=0; i<len; i++){
                    
                    var theTabTitle = containerObj.tabsContentChildren[i].dataset.tabsTitle;
                        
                    if(theTabTitle){
                        createTabsWithTitle(theTabTitle);

                    }else{
                        
                        throw new Error('please check your data-tabs-title attributes');
                        break;
                    }                    
                                      
                }
                
                activeClassInit();
                
                containerObj.tabsControlUl.addEventListener('click',function(event){
                    
                    if(!event.target.classList.contains("active")){

                        removeAllActiveClass(containerObj.tabsControlUl.children);
                        removeAllActiveClass(containerObj.tabsContentChildren);						
                        findIndex(event.target);					
                    }else{
                        console.log("contains active no need to do anything");
                    }	                   
                    
                });
            }
        }
        
        
    }
    
	function findIndex(elem){				

		for(var i=0; i < containerObj.tabsControlUl.children.length;i++){
			
			if(containerObj.tabsControlUl.children[i] === elem){
			  addActive(i);
			}
		}
	}
	
	function addActive(index){
	
		containerObj.tabsControlUl.children[index].classList.add("active");
		containerObj.tabsContentChildren[index].classList.add("active");
	
	}    
       
    
    function activeClassInit(){
        
        containerObj.tabsControlUl.children[0].setAttribute("class","active");
        containerObj.tabsContentChildren[0].setAttribute("class","active");
    }
    
    function createTabsWithTitle(str){
        
        var tabsWithName = document.createElement("LI");
        tabsWithName.setAttribute("class","autoTab");
        tabsWithName.innerHTML = str;

        
        containerObj.tabsControlUl.appendChild(tabsWithName);

    }
    
    function createTabsUl(tabsContent){
        
        var tabsControll = document.createElement("UL");
        tabsControll.setAttribute("class","tabsControl");
        autoTabsModule.insertBefore(tabsControll,tabsContent);
        
        //catch the UL newly created element
        containerObj.tabsControlUl = document.querySelector('.tabsControl');
    }
    
    function removeAllActiveClass(childsArr){
	
		for(var i = 0; i<childsArr.length; i++){
			
			if(childsArr[i].classList.contains("active")){
				childsArr[i].classList.remove("active");					
			}
		}
		
	}
    		


})(window);