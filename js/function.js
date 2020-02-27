
var addBtn = document.querySelector('.add');

addBtn.addEventListener("click",appendChild);

function appendChild() {

      /*
          Create Elements
       */


    var main = document.getElementById('main-div');

    var mainDivOuter = main.childNodes[1].outerHTML;


    var childDiv =document.getElementsByClassName('mainContent');


    let newRowDiv = document.createElement('div');

    newRowDiv.classList.add('row');

    newRowDiv.classList.add('content');

    let childDivArr=Array.from(childDiv);

    for (let i=0;i<4;i++){
        newRowDiv.innerHTML += childDivArr[i].outerHTML;
    }



    main.appendChild(newRowDiv);


    var addClass = document.getElementsByClassName('add');

    var last = Array.from(addClass);

    var  lastAddClass =(last[last.length-1]);

    lastAddClass.addEventListener('click',appendChild);


    var selector = document.querySelectorAll('.type');

    var lastSelector = Array.from(selector);

    var  lastAddSelector =(lastSelector[lastSelector.length-1]);

    lastAddSelector.addEventListener('change',check);



}

function  check() {

    var selector =document.querySelector('.type');

        // Parent Of Current Selector

    // var parentNodeList = this.parentNode.parentNode;



    let value = this.value;

    var DivArray = Array.from(this.parentNode.parentNode.childNodes);

    console.log(DivArray);

    if (value==1){

        // let serviceSelect = document.getElementById('serviceId');
        //
        // let qunSelect = document.getElementById('quantityId');
        //
        // let  amountSelect = document.getElementById('amountId');
        //
        //
        // serviceSelect.parentNode.removeChild(serviceSelect)
        // qunSelect.parentNode.removeChild(qunSelect)
        //
        // amountSelect.parentNode.removeChild(amountSelect)

    }
    else if (value == 2){
        appendServices();
    }

    var addSelect = document.getElementsByClassName('type');

    var last = Array.from(addSelect);

    var  lastSelectClass =(last[last.length-1]);


    lastSelectClass.addEventListener('change',check);
}

var  selector = document.querySelector('.type');

selector.addEventListener("change",check);




function  appendServices() {

    var mainDiv = document.getElementById('remove-div');

    var childDiv = mainDiv.childNodes[5];





   let servicesDiv = document.createElement('div');

    servicesDiv.classList.add('col-md-2');



    let label = document.createElement('label');


    label.innerHTML="Services";

    servicesDiv.appendChild(label);

    servicesDiv.appendChild(document.createElement('br'));

    let serviceSelect = document.createElement('select');

    serviceSelect.classList.add('form-control');

    serviceSelect.classList.add('type');

    servicesDiv.setAttribute('id','serviceId');



    let  serviceOption = document.createElement('option');

    serviceOption.setAttribute('value','1');

    serviceOption.innerHTML="Invocie Adjustments";

    serviceSelect.appendChild(serviceOption);

    servicesDiv.appendChild(serviceSelect);



    let quantityDiv = document.createElement('div');

    quantityDiv.setAttribute('id','quantityId');

    quantityDiv.classList.add('col-md-1');

    let quantityLable = document.createElement('label');

    quantityLable.innerHTML="Quantity";



    let quantityInput = document.createElement('input');

    quantityInput.classList.add('form-control');

    quantityInput.classList.add('quan');

    quantityInput.setAttribute('type','text');
    quantityInput.setAttribute('name','qun');

    quantityDiv.appendChild(quantityLable);
    quantityDiv.appendChild(quantityInput);




    let amountDiv = document.createElement('div');

    amountDiv.setAttribute('id','amountId')

    amountDiv.classList.add('col-md-1');

    let amountLable = document.createElement('label');

    amountLable.innerHTML="Amount";



    let amountInput = document.createElement('input');

    amountInput.classList.add('form-control');

    amountInput.classList.add('quan');

    amountInput.setAttribute('type','text');
    amountInput.setAttribute('name','childAmount');

    amountDiv.appendChild(amountLable);
    amountDiv.appendChild(amountInput);



    mainDiv.insertBefore(servicesDiv,childDiv);
    mainDiv.insertBefore(quantityDiv,childDiv);
    mainDiv.insertBefore(amountDiv,childDiv);



}







