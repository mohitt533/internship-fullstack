

var arr = [];
var score=0;
var n;
var status_c=0;



// to create each card
function Grid(){
	arr = [];
	document.getElementsByTagName('h2')[0].style.display='none';
	n = document.getElementById('rows').value;
	
		var arr1=RandomNumbers(((n*n)/2)); //generating random number to store in array
		var arr2= RandomNumbers((n*n)-1);  // generating random index to store above numbers
		arr2.push(0);
		
		//creating array with random number
		
		for(i=0;i<((n*n)/2);i++)   
		{
			arr[arr2[i]]=arr1[i];
			arr[arr2[n*n-i-1]]=arr1[i];
		}
		createGridBox(n);	
	}

// generate random number 

function RandomNumbers(m){
	var arr1=[];
	
while(arr1.length < (m)){
    var randomnumber = Math.ceil(Math.random()*(m))
    if(arr1.indexOf(randomnumber) > -1) continue;
    arr1[arr1.length] = randomnumber;
}
return arr1;
}

// creating the grid layout

function createGridBox(n){
	var i,j,row,col;
	rows=n;
	cols=n; 
	var table = document.getElementsByTagName('table')[0];
	table.innerHTML = '';
	var index = 0;
	for(i=0;i<rows;i++){
		var row =  document.createElement('tr');
		for(j=0;j<cols;j++){
			var col = document.createElement('td');
			col.id='col'+i+j;
			col.innerHTML = arr[index];
			change(col);
			row.appendChild(col);
			index++;
		}
		table.appendChild(row);
	}
}

var  previous= null;
function change(td){                               // this function gets listen to the card that is pressed and checks if previous card and current card is same
	td.addEventListener('click', function(e){
		e.target.className = 'opencard';
		if(!previous){
			previous = e.target;
		}
		else if((previous.innerHTML == e.target.innerHTML) && !(previous.id==e.target.id)){
			status_c++;
			setTimeout(function(){
				e.target.className = previous.className = 'finish';
				Status();
				previous = null;
			},200);
		}
		else{
			previous.className = e.target.className = '';
			previous = null;
		}
	});
}

function Status(){                                            // this function display win status and display score
	if( status_c== ((n*n))/2){
		document.getElementById("win").style.display="block";
		score++;
		document.getElementById("score").innerHTML=score;
		emptyallelement();
		
		
		
	}
}




