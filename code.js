let arr = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];


let content1_1 = document.getElementById('content1');
let content1_2 = document.getElementById('content2');
let content1_3 = document.getElementById('content3');
let content1_4 = document.getElementById('content4');

let content2_1 = document.getElementById('content5');
let content2_2 = document.getElementById('content6');
let content2_3 = document.getElementById('content7');
let content2_4 = document.getElementById('content8');

let content3_1 = document.getElementById('content9');
let content3_2 = document.getElementById('content10');
let content3_3 = document.getElementById('content11');
let content3_4 = document.getElementById('content12');

let content4_1 = document.getElementById('content13');
let content4_2 = document.getElementById('content14');
let content4_3 = document.getElementById('content15');
let content4_4 = document.getElementById('content16');

let content5 = document.getElementById('content17');


(async function (){

    const res = await fetch('https://gulfproduct.herokuapp.com/api/user')
    const data = await res.json();
   
    let k = 1;
    const data2 =   data.forEach(element => {

        let myDiv = document.createElement('div');
        myDiv.id = 'container' + k;
        
        myDiv.classList.add("col-lg-3");
        myDiv.innerHTML = 
        `
            <div >
                <div class="p-3 border bg-gradient text-center rounded my-auto" id="category_root${k}" onclick="clicks('${k}')">
                
                    <p id="text${k}">${element.name}</p>

                </div>
            </div>

            <div class = "col-lg-3" id="content${k}" style="visibility: hidden; height: 0px; padding: 0px; margin: 0px 20px 0px 0px; transition: all 0.8s ease 0s;"> </div>
        `;

        document.getElementById('output').appendChild(myDiv);
        
        k++;
    });


    
 content1_1 = document.getElementById('content1');
 content1_2 = document.getElementById('content2');
 content1_3 = document.getElementById('content3');
 content1_4 = document.getElementById('content4');

 content2_1 = document.getElementById('content5');
 content2_2 = document.getElementById('content6');
 content2_3 = document.getElementById('content7');
 content2_4 = document.getElementById('content8');

 content3_1 = document.getElementById('content9');
 content3_2 = document.getElementById('content10');
 content3_3 = document.getElementById('content11');
 content3_4 = document.getElementById('content12');

 content4_1 = document.getElementById('content13');
 content4_2 = document.getElementById('content14');
 content4_3 = document.getElementById('content15');
 content4_4 = document.getElementById('content16');

 content5 = document.getElementById('content17');

    
})()


// category 1

function hideContent1_1(){
    content1_1.style.visibility = "hidden";
    content1_1.style.height = "0"
    content1_1.style.padding = "0";
    content1_1.style.margin = "0 20px 0 0";
    content1_1.innerHTML = " ";
}

function showContent1_1(){
    content1_1.style.visibility = "visible";
    content1_1.style.height = "fit-content";
    content1_1.style.padding = "20px 10px";
    content1_1.style.margin = "0 20px 20px 0";
}


function hideContent1_2(){
    content1_2.style.visibility = "hidden";
    content1_2.style.height = "0"
    content1_2.style.padding = "0";
    content1_2.style.margin = "0 20px 0 0";
    content1_2.innerHTML = " ";
}

function showContent1_2(){
    content1_2.style.visibility = "visible";
    content1_2.style.height = "fit-content";
    content1_2.style.padding = "20px 10px";
    content1_2.style.margin = "0 20px 20px 0";
  
}

function hideContent1_3(){
    content1_3.style.visibility = "hidden";
    content1_3.style.height = "0"
    content1_3.style.padding = "0";
    content1_3.style.margin = "0 20px 0 0";
    content1_3.innerHTML = " ";
}

function showContent1_3(){
    content1_3.style.visibility = "visible";
    content1_3.style.height = "fit-content";
    content1_3.style.padding = "20px 10px";
    content1_3.style.margin = "0 20px 20px 0";
}

function hideContent1_4(){
    content1_4.style.visibility = "hidden";
    content1_4.style.height = "0"
    content1_4.style.padding = "0";
    content1_4.style.margin = "0 20px 0 0";
    content1_4.innerHTML = " ";
}

function showContent1_4(){
    content1_4.style.visibility = "visible";
    content1_4.style.height = "fit-content";
    content1_4.style.padding = "20px 10px";
    content1_4.style.margin = "0 20px 20px 0";
}



// category 2

function hideContent2_1(){
    content2_1.style.visibility = "hidden";
    content2_1.style.height = "0"
    content2_1.style.padding = "0";
    content2_1.style.margin = "0 20px 0 0";
    content2_1.innerHTML = " ";
}

function showContent2_1(){
    content2_1.style.visibility = "visible";
    content2_1.style.height = "fit-content";
    content2_1.style.padding = "20px 10px";
    content2_1.style.margin = "0 20px 20px 0";
}


function hideContent2_2(){
    content2_2.style.visibility = "hidden";
    content2_2.style.height = "0"
    content2_2.style.padding = "0";
    content2_2.style.margin = "0 20px 0 0";
    content2_2.innerHTML = " ";
}

function showContent2_2(){
    content2_2.style.visibility = "visible";
    content2_2.style.height = "fit-content";
    content2_2.style.padding = "20px 10px";
    content2_2.style.margin = "0 20px 20px 0";
}

function hideContent2_3(){
    content2_3.style.visibility = "hidden";
    content2_3.style.height = "0"
    content2_3.style.padding = "0";
    content2_3.style.margin = "0 20px 0 0";
    content2_3.innerHTML = " ";
}

function showContent2_3(){
    content2_3.style.visibility = "visible";
    content2_3.style.height = "fit-content";
    content2_3.style.padding = "20px 10px";
    content2_3.style.margin = "0 20px 20px 0";
}

function hideContent2_4(){
    content2_4.style.visibility = "hidden";
    content2_4.style.height = "0"
    content2_4.style.padding = "0";
    content2_4.style.margin = "0 20px 0 0";
    content2_4.innerHTML = " ";
}

function showContent2_4(){
    content2_4.style.visibility = "visible";
    content2_4.style.height = "fit-content";
    content2_4.style.padding = "20px 10px";
    content2_4.style.margin = "0 20px 20px 0";
}


// category 3
function hideContent3_1(){
    content3_1.style.visibility = "hidden";
    content3_1.style.height = "0"
    content3_1.style.padding = "0";
    content3_1.style.margin = "0 20px 0 0";
    content3_1.innerHTML = " ";
}

function showContent3_1(){
    content3_1.style.visibility = "visible";
    content3_1.style.height = "fit-content";
    content3_1.style.padding = "20px 10px";
    content3_1.style.margin = "0 20px 20px 0";
}


function hideContent3_2(){
    content3_2.style.visibility = "hidden";
    content3_2.style.height = "0"
    content3_2.style.padding = "0";
    content3_2.style.margin = "0 20px 0 0";
    content3_2.innerHTML = " ";
}

function showContent3_2(){
    content3_2.style.visibility = "visible";
    content3_2.style.height = "fit-content";
    content3_2.style.padding = "20px 10px";
    content3_2.style.margin = "0 20px 20px 0";
}

function hideContent3_3(){
    content3_3.style.visibility = "hidden";
    content3_3.style.height = "0"
    content3_3.style.padding = "0";
    content3_3.style.margin = "0 20px 0 0";
    content3_3.innerHTML = " ";
}

function showContent3_3(){
    content3_3.style.visibility = "visible";
    content3_3.style.height = "fit-content";
    content3_3.style.padding = "20px 10px";
    content3_3.style.margin = "0 20px 20px 0";
}

function hideContent3_4(){
    content3_4.style.visibility = "hidden";
    content3_4.style.height = "0"
    content3_4.style.padding = "0";
    content3_4.style.margin = "0 20px 0 0";
    content3_4.innerHTML = " ";
}

function showContent3_4(){
    content3_4.style.visibility = "visible";
    content3_4.style.height = "fit-content";
    content3_4.style.padding = "20px 10px";
    content3_4.style.margin = "0 20px 20px 0";
}



// category 4

function hideContent4_1(){
    content4_1.style.visibility = "hidden";
    content4_1.style.height = "0"
    content4_1.style.padding = "0";
    content4_1.style.margin = "0 20px 0 0";
    content4_1.innerHTML = " ";
}

function showContent4_1(){
    content4_1.style.visibility = "visible";
    content4_1.style.height = "fit-content";
    content4_1.style.padding = "20px 10px";
    content4_1.style.margin = "0 20px 20px 0";
}


function hideContent4_2(){
    content4_2.style.visibility = "hidden";
    content4_2.style.height = "0"
    content4_2.style.padding = "0";
    content4_2.style.margin = "0 20px 0 0";
    content4_2.innerHTML = " ";
}

function showContent4_2(){
    content4_2.style.visibility = "visible";
    content4_2.style.height = "fit-content";
    content4_2.style.padding = "20px 10px";
    content4_2.style.margin = "0 20px 20px 0";
}

function hideContent4_3(){
    content4_3.style.visibility = "hidden";
    content4_3.style.height = "0"
    content4_3.style.padding = "0";
    content4_3.style.margin = "0 20px 0 0";
    content4_3.innerHTML = " ";
}

function showContent4_3(){
    content4_3.style.visibility = "visible";
    content4_3.style.height = "fit-content";
    content4_3.style.padding = "20px 10px";
    content4_3.style.margin = "0 20px 20px 0";
}

function hideContent4_4(){
    content4_4.style.visibility = "hidden";
    content4_4.style.height = "0"
    content4_4.style.padding = "0";
    content4_4.style.margin = "0 20px 0 0";
    content4_4.innerHTML = " ";
}

function showContent4_4(){
    content4_4.style.visibility = "visible";
    content4_4.style.height = "fit-content";
    content4_4.style.padding = "20px 10px";
    content4_4.style.margin = "0 20px 20px 0";
}

function hideContent5(){
    content5.style.visibility = "hidden";
    content5.style.height = "0"
    content5.style.padding = "0";
    content5.style.margin = "0 20px 0 0";
    content5.innerHTML = " ";
    content5.style.transition = "0.8s";
}

function showContent5(){
    content5.style.visibility = "visible";
    content5.style.height = "fit-content";
    content5.style.padding = "20px 10px";
    content5.style.margin = "0 20px 20px 0";
    content5.style.transition = "0.8s";
}





function clicks(i){
    var index = parseInt(i);
    
    if(arr[index-1] == 1 && index == 1){
        console.log("Hello");
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 2){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 3){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 4){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent1_4();
        arr[index-1] = 0;
    }
    
    else if(arr[index-1] === 1 && index === 5){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 6){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 7){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 8){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent2_4();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 9){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 10){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 11){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 12){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent3_4();
        arr[index-1] = 0;
    
    }
    
    
    else if(arr[index-1] == 1 && index == 13){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_1();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 14){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_2();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 15){

        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_3();
        arr[index-1] = 0;
    }
    else if(arr[index-1] == 1 && index == 16){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent4_4();
        arr[index-1] = 0;
    }
    
    else if(arr[index-1] == 1 && index == 17){
        document.getElementById('category_root'+index).style.backgroundColor = "white";
        document.getElementById('text'+index).style.color = "black";
        hideContent5();
        arr[index-1] = 0;
    }
    
    
    else{
        for (let i = 0; i < 17; i++) {
            document.getElementById('category_root'+(i+1)).style.backgroundColor = "white";
            document.getElementById('text'+(i+1)).style.color = "black";
            arr[i] = 0;
        }
        document.getElementById('category_root'+index).style.backgroundColor = "#124193";
        document.getElementById('text'+index).style.color = "white";
        hideContent1_1();
        hideContent1_2();
        hideContent1_3();
        hideContent1_4();
        hideContent2_1();
        hideContent2_2();
        hideContent2_3();
        hideContent2_4();
        hideContent3_1();
        hideContent3_2();
        hideContent3_3();
        hideContent3_4();
        hideContent4_1();
        hideContent4_2();
        hideContent4_3();
        hideContent4_4();
        hideContent5();
        
        switch(index){
            case 1:  hideContent1_1();
            break;
            case 2: 
      

            content1_2.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2441">Россия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2426">Германия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=11608">США</a></li>'+
            '</ul>';


            showContent1_2();
            
            hideContent1_1();
        
            hideContent1_3();
            hideContent1_4();
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 3: content1_3.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2448">Россия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2454">Финляндия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2458">Франция</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2462">Польша</a></li>'+
            '</ul>';
            showContent1_3();
            hideContent1_1();
            hideContent1_2();
        
            hideContent1_4();
    
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 4: content1_4.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=19483">Арматура для ЛЭП</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=19752">Металлоконструкции для ЛЭП</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=20279">Изоляторы</a></li>'+
            '</ul>';
            showContent1_4();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
        
    
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 5: content2_1.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2492">Россия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2496">Германия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2498">Нидерланды</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2500">Швеция</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2502">Италия</a></li>'+
            '</ul>';
           
           
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
        
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            showContent2_1();
            
            break;
            case 6: content2_2.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2538">Казахстан</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2540">Россия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2542">Китай</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2544">Германия</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=2546">Франция</a></li>'+
            '</ul>';
            showContent2_2();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
        
            hideContent2_1();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 7: content2_3.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40734">Газонаполненное оборудование</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40736">Заземлители</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40738">Изделия для ремонтных целей</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40740">Комплектные распределительные устройства</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40743">Комплекты траверс высоковольтных</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40743">Компоновочные решения для ОРУ(ЗРУ)</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40747">Ограничители перенапряжений для контактной сети</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40749">Ограничители перенапряжений нелинейные</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40825">Ошиновка жёсткая 110-750 кВ (УХЛ1)</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40751">Предохранители–разъединители выхлопного типа</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40753">Приводы для оперирования разъединителями и заземлителями</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40755">Разрядники</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40757">Разрядники вентильные</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40759">Разъединители внутренней установки</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40761">Разъединители наружной установки на 10 кВ</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40763">Разъединители наружной установки подвесного типа</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40765">Разъединители наружной установки серии РГ</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40767">Разъединители наружной установки серии РКЖ-3,3 кВ для контактной сети </a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40769">Разъединители наружной установки серии РПГ</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40771">Разъединители пантографного вертикального типа 110-500 кВ</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40773">Разъединители предыдущего поколения</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40775">Шинные опоры</a></li>'+
            '</ul>';
            showContent2_3();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
            
            hideContent2_1();
            hideContent2_2();
    
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            break;
            case 8: 
            content2_4.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40928">Трансформаторные подстанции</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40930">Трансформаторы напряжения (измерительные)</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40932">Трансформаторы тока (измерительные) с азотной изоляцией</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40935">Трансформаторы тока (измерительные) элегазовые</a></li>'+
            '</ul>';
            showContent2_4();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
        
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            
            break;
        
            case 9: content3_1.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=29012">Россия</a></li>'+
            '</ul>';
            showContent3_1();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
    
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();

            break;
            case 10: content3_2.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40969">VIKO</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40975">ТЕКФОР</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40977">TDM</a></li>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40979">NILSON</a></li>'+
            '</ul>';
            showContent3_2();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
        
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
        
            hideContent3_3();
            hideContent3_4();
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();

            break;
            case 11: 
            hideContent3_3();
            break;
            case 12: content3_4.innerHTML = 
            '<ul>'+
                '<li><a href="http://asiaelectro.kz/?page_id=40967">Полиэтиленовые трубы и аксессуары</a></li>'+
            '</ul>';
            showContent3_4();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
    
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            
            hideContent4_1();
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();
            
            break;

            case 13: content4_1.innerHTML = 
            '<ul>'+
                '<li><a href="# ">Стеклопластиковая композитная арматура</a></li>'+
                '<li><a href="# ">Стеклопластиковая композитная сетка</a></li>'+
                '<li><a href="# ">Композитная кладочная сетка</a></li>'+
            '</ul>';
            showContent4_1();
            hideContent1_1();
            hideContent1_2();
            hideContent1_3();
            hideContent1_4();
        
            hideContent2_1();
            hideContent2_2();
            hideContent2_3();
            hideContent2_4();
            hideContent3_1();
            hideContent3_2();
            hideContent3_3();
            hideContent3_4();
        
            hideContent4_2();
            hideContent4_3();
            hideContent4_4();
            hideContent5();

            break;
            case 14: 
            hideContent4_2();
            break;
            case 15: 
            hideContent4_3();
            break;
            case 16: 
            hideContent4_4();
            break;

        }
        
        arr[index-1] = 1;
    }
}


