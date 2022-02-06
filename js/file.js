// get input 
let ProductName = document.getElementById("ProductName")
let ProductPrice = document.getElementById("ProductPrice")
let ProductType = document.getElementById("ProductType")
let ProductDetailse = document.getElementById("ProductDetailse")
let productsList = []
function getValue()
{
    if(ProductName==""||ProductPrice==""||ProductType==""||productsList=="")
    {
        alert("fill all input")
        return
    }else
    {
    let products = {
         Name:ProductName.value,
         Price:ProductPrice.value,
         Type:ProductType.value,
         details:ProductDetailse.value
    }
    productsList.push(products)

    // let Name=ProductName.value
    // let Price=ProductPrice.value
    // let Type=ProductType.value
    // let details = ProductDetailse.value
    viewProduct()
    clear()
}
}
function viewProduct()
{
    let box="";
    for (let i = 0; i < productsList.length; i++) {
        box+=`  <tr>
                    <td>${i+1}</td>
                    <td>${productsList[i].Name}</td>
                    <td>${productsList[i].Price}</td>
                    <td>${productsList[i].Type}</td>
                    <td>${productsList[i].details}</td>
                    <td>
                        <div class="operation">
                            <button class="Update"> Update</button>
                            <button class="Delete"> Delete</button> 
                        </div>
                    </td>
                </tr>`
        
    }
    document.getElementById("tableBody").innerHTML=box
}
function clear()
{
   ProductName.value=""
   ProductPrice.value=""
   ProductType.value=""
   ProductDetailse.value=""
}