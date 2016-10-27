
;
$(function(){


// create DOM

let container = document.createElement('div');

container.className = "container";
document.body.appendChild(container);

let createDom = {

	createTitle: function(tagname, tagtext, tagclass) {
		let x = document.createElement(tagname);
		x.innerHTML = tagtext;
		x.className = tagclass;
		container.appendChild(x);
	},

	createList: function(tagtext, tagclass, listName) {
		let list = document.createElement('ul');
		list.className = tagclass;
		for (let i = 0; i < tagtext.length; i++) {
			let listElement = document.createElement('li');
			let listLabel = document.createElement('label');
			let listInput = document.createElement('input');

			listInput.setAttribute('type', 'radio');
			listInput.setAttribute('name', listName);
			listInput.setAttribute('value', listName + i);
			listInput.setAttribute('id', listName + i);


			listElement.insertBefore(listLabel, listElement.children[0]);
			listLabel.innerHTML = '<span>' + tagtext[i] + '</span>';
			listLabel.insertBefore(listInput, listLabel.children[0]);
			list.appendChild(listElement);
			container.appendChild(list)
		}
	}
}

let head = 'Тест по программированию'

let titleText = ['1. Вопрос №1', '2. Вопрос №2', '3. Вопрос №3'];

let listText = ['Вариант ответа №1', 'Вариант ответа №2', 'Вариант ответа №3'];

let button = 'Проверить мои результаты';

createDom.createTitle('h2', head, 'text-center');

let count = 0;

for(let item of titleText){

	

	createDom.createTitle('h2', item, 'main__title');

	createDom.createList(listText, 'list', 'ask' + count);
	count++;

}

createDom.createTitle('button', button, 'btn btn-default btn-comp');

//localStorage ready

function returnVal(){

	let count = 0, 
	lsLength = localStorage.length;

	if ( lsLength != 0 ) {
		for (let i of localStorage) {
			
			let ask = 'ask' + count;
			let text = localStorage.getItem(ask);

			$('#' + text).attr("checked","checked");

			console.log(text);
			count++;
		}
	}
}

returnVal();




// test


	$('.list li').on("click", function(){

		let input = $(this).find('input');
		let ask = input.attr('name');
		let answer = input.val();

		localStorage.setItem(ask, answer);
	});

// answers

let answers = [

	"ask01",
	"ask12",
	"ask21"

];

//answers count


function countAnswer(){
	let good = 0, bad = 0;
	
	if (localStorage.ask0 === answers[0]) {
		good++;
	} else {
		bad++;
	}

	if (localStorage.ask1 === answers[1]) {
		good++;
	} else {
		bad++;
	}

	if (localStorage.ask2 === answers[2]) {
		good++;
	} else {
		bad++;
	}

	// console.log("good", good);
	// console.log("bad", bad);

	// modal 

	let html = $('#complete-modal').html();


  // var articles = {
  //     name: ,
  //     status: 'Студент заборостроительного университета',
  //   };

  let content = tmpl(html, {
    data: [good, bad]
  });

  $('body').append(content);


}

$('.btn-comp').on("click", countAnswer);

$('body').on('click', '.btn-reset', function(){
	$('input').removeAttr("checked");
	$('.complete-modal').remove();
	// console.log("saff");
	localStorage.clear();
});


function pow(num, deg){

	var res = 1;
	
	if(deg < 0){
		num = 1 / num;
		deg *= -1;
	}

	for(var i = 0; i < deg; i++){

		res = res * num;

	}

	return res;
}

});

