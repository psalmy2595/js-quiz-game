
var myQuestions = [
	{
		question: "What is the URL to the HNG BOARD ?",
		answers: {
			a: 'dev.start.ng',
			b: 'start.ng',
			c: 'start.com.ng'
		},
		correctAnswer: 'dev.start.ng'
	},
	{
		question: " Full Meaning of HTML?",
		answers: {
			a: 'Hypertech Madeup Language',
			b: 'Hypertext Madeup Language',
			c: 'Hypertext Markup Language'
		},
		correctAnswer: 'Hypertext Markup Language'
	},
	{
		question: "Who invented the World Wide Web?",
		answers: {
			a: 'Bill Gates',
			b: 'Sir Tim Berners-Lee',
			c: 'Linus Tovald'
		},
		correctAnswer: 'Sir Tim Berners-Lee'
	},
	{
		question: "CSS stands for??",
		answers: {
			a: 'Cascading Sheet Style',
			b: 'Cousera State Course',
			c: 'Cascading Style Sheet'
		},
		correctAnswer: 'Cascading Style Sheet'
	},
	{
		question: "who owns facebook (CEO)",
		answers: {
			a: 'Mark Anthony',
			b: 'Mark Zuckerberg',
			c: 'President Buhari'
		},
		correctAnswer: 'Mark Zuckerberg'
	}        
];
num=1
index=0
mark=0
window.onload=function(){
  document.getElementById('num').innerHTML = num;  
  document.getElementById('question').innerHTML = myQuestions[0].question;
  document.getElementById('opt1').innerHTML= myQuestions[index].answers.a;
  document.getElementById('opt2').innerHTML= myQuestions[index].answers.b;
  document.getElementById('opt3').innerHTML= myQuestions[index].answers.c;
  document.getElementById('ans').innerHTML= myQuestions[index].correctAnswer;
}
function changeQuestion(){
        el = document.getElementsByClassName("options") 
        for(x=0;x<el.length;x++){
            document.getElementsByClassName("options").item(x).style.background="#fff";
            document.getElementsByClassName("options").item(x).style.color="#000";            
        }
        document.getElementById('outcome').innerHTML=""; 
    num++;
    index++
    if(num<6 && index < myQuestions.length){
        document.getElementById('num').innerHTML = num;
        document.getElementById('question').innerHTML = myQuestions[index].question;
        document.getElementById('opt1').innerHTML= myQuestions[index].answers.a;
        document.getElementById('opt2').innerHTML= myQuestions[index].answers.b;
        document.getElementById('opt3').innerHTML= myQuestions[index].answers.c;
        document.getElementById('ans').innerHTML= myQuestions[index].correctAnswer;

        
    }else{
       document.getElementById('quiz').style.display="none" 
       document.getElementById('end').style.display="block" 
       mark =document.getElementById('mark').innerHTML;
       mark=mark * 10;
       document.getElementById('finalScore').innerHTML=mark
    }
    
}
function choose(event){
    option = event.target.innerHTML;
    ans=document.getElementById('ans').innerHTML;
    el = document.getElementsByClassName("options")
    for(x=0;x<el.length;x++){
       y= document.getElementsByClassName("options").item(x).innerHTML
       if(ans==y){
        document.getElementsByClassName("options").item(x).style.background="#00cc33";
        document.getElementsByClassName("options").item(x).style.color="#fff";           
       }else{
        document.getElementsByClassName("options").item(x).style.background="#cc0000";
        document.getElementsByClassName("options").item(x).style.color="#fff";           
       }
    }
//    option = event.target.id;
    ans=document.getElementById('ans').innerHTML;
    choice=event.target.innerHTML
    if(ans===choice){
       document.getElementById('outcome').innerHTML="Correct"; 
       mark++;
       document.getElementById('mark').innerHTML=mark;
    }else{
        document.getElementById('outcome').innerHTML="Wrong"; 
    }
            
}
