fetch("https://fakestoreapi.com/products").then((data)=>{
      // console.log(data)
      return data.json();
     }).then((objectData)=>{
      console.log(objectData[0].title);
      let tableData="";
      objectData.map((values)=>{
        tableData+=`<tr>
        <td><img src="${values.image}" class="animated-image"
        style="height:100px;"
        style="width:200px;"/>
        
        </td>
        <td class="anititle">${values.title}</td>
                <td>${values.price}</td>
                <td>${values.rating.rate}</td>
                <td>${values.rating.count}</td>
  
                <td>${values.description}</td>
  
              </tr>`;
      });
      document.getElementById("table_body").
      innerHTML = tableData;
     }).catch((err)=>{
      console.log(err)
     })