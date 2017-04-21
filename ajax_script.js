function Todo(opencard[], scr) {
    this.opencard = opencard;
    this.score1= scr;
    
}
 var v;                     
var todos = new Array();

window.onload = init;

function init() {
	v = document.getElementById('rows').value;
	for(var i=0;i<v;i++)
	{ for(var j=0;j<v;j++)
	    { var card=[];
	card[i*j]  = document.getElementById("col"+i+j);
          card[i*j].onclick = getdata;
	       getTodoData();}}
}

function getTodoData() {
    var request = new XMLHttpRequest();
    request.open("GET", "data.json");
    request.onreadystatechange = function() {
        if (this.readyState == this.DONE && this.status == 200) {
            if (this.responseText) { 
                parseTodoItems(this.responseText);
                addTodosToPage();
            }
            else {
                console.log("Error: Data is empty");
            }
        }
    };
    request.send();
}

function parseTodoItems(todoJSON) {
    if (dataJSON == null || dadaJSON.trim() == "") {
        return;
    }
    var todoArray = JSON.parse(dataJSON);
    if (todoArray.length == 0) {
        console.log("Error: the to-do list array is empty!");
        return;
    }
    for (var i = 0; i < todoArray.length; i++) {
        var todoItem = todoArray[i];
        todos.push(todoItem);
    }
}

function addTodosToPage() {
	var c=[];
	
       for (var i = 0; i < todos.length; i++) {
           var todoItem = todos[i];
           Grid();
		   
		   for(var i=0;i<v;i++)
	{ for(var j=0;j<v;j++)
	    { 
			for (var p = 0; p < todos.length; i++)
			{ var item=todos[p];
				for(var k=0;k<item.opencard.length;k++)
				{
					if(opencard[k]==="col"i+j)
					{
						 document.getElementById("col"+i+j).className='opencard';
				    }   
			    }
	       
	document.getElementById(score).value=item.score1;}   }  }
        
    }
}
var state[];
var scoreboard;
function getData() {
	
	for(var i=0;i<v;i++)
	{ for(var j=0;j<v;j++)
	    { if(document.getElementById("col"+i+j).className===opencard)
			{
				state.push("col"+i+j);
			}
	}}
	scoreboard=document.getElementById("score").value;
	var item=new Todo(state,scoreboard);
	todos.push(todoItem);
}

}        

             
function saveTodoData() {
    var todoJSON = JSON.stringify(todos);
    var request = new XMLHttpRequest();
    var URL = "save.php?data=" + encodeURI(todoJSON);
    request.open("GET", URL);
    request.setRequestHeader("Content-Type",
                             "text/plain;charset=UTF-8");
    request.send();
}