const carouselContainer = document.getElementById('carousel-container');
fetch('https://fakestoreapi.com/products')
.then(response=>response.json())
.then(data=>{
  const carouselItems = data.map(values=>`
  <div class= "carousel-item">
  <img src ="${values.image}"
  style="height:280px;"
  style="width:10px;"/>
  <h5>${values.title}</h5>
  <h6 id="price">$${values.price}</h6>

  </div>
  `);
  carouselContainer.innerHTML = carouselItems.join();
  $(carouselContainer).slick({
    infinite:true,
    slidesToShow:3,
    slidesToScroll:3,
    prevArrow:'<button type ="button"class="slick-prev">Previous</button>',
    nextArrow:'<button type ="button"class="slick-next">Next</button>'
  });
});