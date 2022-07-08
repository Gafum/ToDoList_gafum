const btn = document.querySelector('#btn')//кнопка 'Додати задачу'
const textFromInput = document.querySelector('#inputes')//ввод тексту
const works = document.querySelector('.myworks')//список задач (зовнішній елемент)

let worksArray = []//список задач

textFromInput.addEventListener('keydown', function(event){//кнопка ентер нажата, для додавання задачі
	if (event.code == 'Enter'){
		addtoarrey();
	}
})

btn.onclick = () => addtoarrey()	//кнопка 'Додати задачу' нажата, для додавання задачі

function addtoarrey(){		//додавання задачі
	if(textFromInput.value){
		worksArray.push(textFromInput.value)	
		createit()
		textFromInput.value=''
	}
}

function delet(wich){			//видалення задачі
	worksArray.splice(wich, 1)	
	createit()
}

function createit(){			//створення списку задач через цикл
	works.innerHTML=''
	for(let i of worksArray){
			works.innerHTML+=(`<div class="work"><button type="button" id="btn" class="btns" onclick="delet(${worksArray.indexOf(i)});"><i class="fa-solid fa-trash"></i></button><p>${i}</p><div>`)//кнопка тест із інпута
		} 
}