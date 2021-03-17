            import ProductAPI from '../api/productAPI.js';
            import { $ } from '../utils.js';
            import firebase from '../firebase';
            import ListProduct from '../components/ListProduct.js';
            import swal from 'sweetalert';

            const ProductAddPage = {
              render() {
                    return /*html*/ `
                    <form id="form-add" >
                        <div class = "form-group mb-3">
                            <input  type= "text" placeholder=" Tên sản phẩm" id="product-name" class =" form-control" />
                        </div>
                         <div class = "form-group mb-3">
                            <input type= "file"  id="product-image" class =" form-control" />
                         </div>
                        <div class = "form-group mb-3">
                          <input placeholder="Giá sản phẩm"  type= "text"  id="product-price" class =" form-control" />
                         </div>
                         <div class = "form-group mb-3">
                          <input  placeholder="chi tiet san pham"  type= "text"  id="product-chitiet" class =" form-control" />
                         </div>
                        <div class = "form-group mb-3">
                            <input  type= "submit" class=" btn btn-primary" value="Add product" >
                        </div>
                        
                    </form>
                    `
                },
                afterRender() {
                    $("#form-add").addEventListener("submit", (e) => {
                      e.preventDefault();
                      if( $("#product-name").value == "" ){
                        swal("Canh bao", "Ban chua nhap ten san pham", "warning");
                        return false;
                        

                      }
                      if( $("#product-image").value == "" ){
                        swal("Canh bao", "Ban chua nhap anh san pham", "warning");
                        return false;
                        
                      }
                      if( $("#product-price").value == "" ){
                        swal("Canh bao", "Ban chua nhap gia tien", "warning");
                        return false;
                        
                      }
                      if( $("#product-chitiet").value == "" ){
                        swal("Canh bao", "Ban chua nhap chi tiet san pham", "warning");
                        return false;
                        
                      }
                      
                      else{
                        const productImage = $("#product-image").files[0];
                        let stogareRef = firebase.storage().ref(`images/${productImage.name}`);
                        stogareRef.put(productImage).then(function () {
                          
                          stogareRef.getDownloadURL().then((url) => {
                            const product = {
                              id: Math.random().toString(36).substr(2, 9),
                              // categoryID: $("#product-category-id").value,
                              name: $("#product-name").value,
                              image: url,
                             chitiet: $("#product-chitiet").value,
                              price:$("#product-price").value
                            };
                            console.log(product);
                            ProductAPI.add(product);
                            swal("chuc mung", "Them san pham thanh cong", "success");
                            
                            window.location.hash = "/listproduct";
                          });
                        });

                      }
                    
                    });
                  },

            }
            export default ProductAddPage;