var p=['Rock','Scissors','Paper','Spock','Lizard',['win','&#10004;'],['lose','&#9760;']]

function g(n){
document.getElementById('g').innerHTML=p[n]; 
var cp=[0,1,2,3,4]
cp.sort(function(a,b){
	return Math.random()-0.5
	});
r=Math.floor(3*(Math.random()));
document.getElementById('i').innerHTML=p[cp[r]];r=cp[r];
	if(r===n){
		w(1);
		return
	} 
	else if((r===0 && n===1) || (r===1 && n==2) || (r==2 && n===0)){
		w(2)
	}
	else{
		w(0)
	}

}
function w(w)
{
pf=document.getElementById('gam'); 
	pftr=pf.getElementsByTagName('tr');
	pftd=pf.getElementsByTagName('td');
    		for(b=0;b<3;b++){
			pftd[b].innerHTML='&nbsp;'
		} 
	w===1?pftd[w].innerHTML='Tie!!':pftd[w].innerHTML='Win!!'
}

