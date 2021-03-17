
                    const contactPage = {
                        async render() {
                          
                                return /*html*/`
                                
                                <form class="row g-3">
                                  <div class="textt1"> CONTACT </div>
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input required type="email" class="form-control" id="inputEmail4">
                      </div>
                      <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Password</label>
                        <input type="password" class="form-control" id="inputPassword4">
                      </div>
                      <div class="col-12">
                        <label for="inputAddress" class="form-label">Dia Chi</label>
                        <input required type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
                      </div>
                      <div class="col-12">
                        <label for="inputAddress2" class="form-label">Dia Chi</label>
                        <input required type="text" class="form-control" id="inputAddress2" placeholder="">
                      </div>
                      <div class="col-md-6">
                        <label for="inputCity" class="form-label">City</label>
                        <input required type="text" class="form-control" id="inputCity">
                      </div>
                      
                    <div class="col-6 col-md">
                      <h5 class="diachi">Địa chi</h5>
                      <ul class="list-unstyled text-small">
                        <li><a class="link-secondary1" href="#">Địa chỉ: Tầng 3 số 102 Nguyễn Hoàng, p</a></li>
                        <li><a class="link-secondary1" href="#">Điện thoại/ Viber: 0966342792 – 0966342709</a></li>
                        <li><a class="link-secondary1" href="#">Thời gian hoạt động: 9h – 22h</a></li>
                        <li><a class="link-secondary1" href="#">Zalo: 0966342792</a></li>
                      </ul>
                    </div>
                    
                      <!-- How to change your own map point
                      1. Go to Google Maps
                      2. Click on your location point
                      3. Click "Share" and choose "Embed map" tab
                      4. Copy only URL and paste it within the src="" field below
                    -->
                              <div class="tm-container-inner-2 tm-map-section">
                                  <div class="row">
                                      <div class="col-12">
                                          <div class="tm-map">
                                              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11196.961132529668!2d-43.38581128725845!3d-23.011063013218724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bdb695cd967b7%3A0x171cdd035a6a9d84!2sAv.%20L%C3%BAcio%20Costa%20-%20Barra%20da%20Tijuca%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%20Brazil!5e0!3m2!1sen!2sth!4v1568649412152!5m2!1sen!2sth" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                                          </div>
                                      </div>
                                  </div>
                              </div>    
                          </main>
                      </div>
                      <div class="col-12">
                        <div class="form-check">
                          <input class="form-check-input" type="checkbox" id="gridCheck">
                          <label class="form-check-label" for="gridCheck">
                            Check me out
                          </label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                      </div>
                      
                    </form>
                        `

                        },
                    }
                    export default contactPage;