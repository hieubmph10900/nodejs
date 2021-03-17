import ProductAPI from "../api/productAPI";
import { parseRequesUrl } from "../utils"

const CategoryPage = {
  async render(){
        const { id }= parseRequesUrl();
        console.log(id);
        const { data: products }= await ProductAPI.getALL();
        const result = products.filter(product => product.categoryId == id)
        .map(product =>{
            return`<div><a href="/#/products/${product.id}/>${product.name}</div>`
        }).join("");
        return`${result}`
    }
}
export default CategoryPage;