import ProductAPI from "../api/productAPI";
import { reRender, $} from '../utils.js'; 

const ListProduct = {
    async render(){
        const { data : products } = await ProductAPI.getALL();
        return /*html*/`
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>IMG</th>
              <th>Price</th>
              <th> Action</th>
              
            </tr>
          </thead>
          <tbody>
          ${products.map((product, index) =>{
           return `
           <tr>

           <td>${index}</td>
           <td>${product.name}</td>
           <td><img src="${product.image}" alt="" width="70px"></td>
           <td>${product.price}</td>
           <td>
         <a href="/#/editproduct/${product.id}" class="btn btn-primary">Update</a>
         <button class="btn btn-danger btn-remove" data-id="${product.id}">Remove</button>
           </td>
         </tr>
         `

          }).join("")}
           
          </tbody>
        </table>
        `
    },
    async afterRender(){
      const btns = $('#list-products .btn');
      console.log(btns);
      btns.forEach( btn => {
        const id = btn.dataset.id;
        btn.addEventListener('click', function(){
          ProductAPI.remove(id);
          reRender(ListProduct, '#list-products');
        })
      })
    }
}
export default ListProduct;