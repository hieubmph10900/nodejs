import ProductAPI from '../api/productAPI';
import { parseRequesUrl, $ } from '../utils';
const ProductEditPage = {
    async render(){
        const { id }= parseRequesUrl();
const { data: product } = await ProductAPI.get(id);
console.log(product);
        return /*html*/`
        <form id="form-update-product">
  <div class="mb-3">
    <label for="product-name" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="product-name" value="${product.name}" aria-describedby="emailHelp"> 
  </div>
  <div class="mb-3">
    <label for="product-name" class="form-label">Product Name</label>
    <input type="file" class="form-control" id="edit-image" aria-describedby="emailHelp"> 
  </div>
  <div class="mb-3">
    <label for="product-name" class="form-label">Product Name</label>
    <input type="text" class="form-control" id="price" value="${product.price}" aria-describedby="emailHelp"> 
  </div>
  <button type="submit" class="btn btn-primary">Update</button>
 </form>
        `
    },
    async afterRender(){ 
        const { id }= parseRequesUrl();
        const { data: product } = await ProductAPI.get(id);     
        $('#form-update-product').addEventListener('submit', (e) => {
        e.preventDefault();
        console.log('old', product);
        const newProduct = {
            ...product,
            name: $('#product-name').value,
            image: $('#edit-image').value,
            price: $('#price').value
        };
        ProductAPI.update(id, newProduct);
        window.location.hash = '/listproduct'
        })

    }
};
export default ProductEditPage;