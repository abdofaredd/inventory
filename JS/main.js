

let inputname=document.getElementById('pn');
let inputprice=document.getElementById('pp');
let inputgategory=document.getElementById('pg');
let inputdescription=document.getElementById('pd');
let button=document.getElementById('bbb');
let arrayOfProducts=[];
if (localStorage.getItem('allProducts') != null) {
    arrayOfProducts=JSON.parse(localStorage.getItem('allProducts'));
    displayProducts();
}

if(valdiateName){
 function clickme(){
    let product={
        name:inputname.value,
        price: Number(inputprice.value),
        category:inputgategory.value,
        desc:inputdescription.value
    }
    arrayOfProducts.push(product);
console.log(arrayOfProducts);
localStorage.setItem('allProducts', JSON.stringify(arrayOfProducts));
// console.log(localStorage.getItem('allProducts'));
clearForm();
displayProducts(product);
}
}
function clearForm(){
    inputname.value='';
    inputprice.value='';
    inputgategory.value='';
    inputdescription.value='';

}
function displayProducts(arr){
     let cartona='';
for(let i=0; i<arrayOfProducts.length;i++)
{
    cartona+=`
    <tr>
    <td>${i+1 }</td>
    <td>${arrayOfProducts[i].name }</td>
    <td>${ arrayOfProducts[i].price }</td>
    <td>${ arrayOfProducts[i].category }</td>
    <td>${ arrayOfProducts[i].desc }</td>
    <td onclick="deleteElement(${i})" class=" btn-warning">
    <button>Delete</button>
    </td>
    <td  onclick="updateElement()" class="  btn-danger"
    ><button>Update</button>
    </td>
  </tr>
    `
}
document.getElementById('tbody').innerHTML=cartona;
}

function deleteElement(idx){
    arrayOfProducts.splice(idx,1);
    localStorage.setItem('allProducts', JSON.stringify(arrayOfProducts));
    displayProducts();
}
function updateElement(){
    console.log('updateElement');
}
function searchElement(term){
    //  var term=document.getElementById('in').value;
    let searchEle=[];

     for(var i=0;i<arrayOfProducts.length;i++){
        if(arrayOfProducts[i].name.trim().toLowerCase().includes(term.toLowerCase()) == true ) {
           searchEle.push(arrayOfProducts[i]);
            //     cartona+=`
            //     <tr>
            //     <td>${i+1 }</td>
            //     <td>${arrayOfProducts[i].name }</td>
            //     <td>${ arrayOfProducts[i].price }</td>
            //     <td>${ arrayOfProducts[i].category }</td>
            //     <td>${ arrayOfProducts[i].desc }</td>
            //     <td onclick="deleteElement(${i})" class=" btn-warning">
            //     <button>Delete</button>
            //     </td>
            //     <td  onclick="updateElement()" class="  btn-danger"
            //     ><button>Update</button>
            //     </td>
            //   </tr>
            //     `
            }
            displayProducts(searchEle);
            // document.getElementById('tbody').innerHTML=cartona;

        }
     }
function valdiateName(){
    let valname=/^[A-Z][a-z]{3,7}$/;
    return valname.test(inputname.value);
}




let person= Person("Mona",30);