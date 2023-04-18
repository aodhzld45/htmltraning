var search = document.getElementById('search');
var testBtn = document.querySelector("#testBtn");

// 함수의 인자에서 함수를 호춣한다.
    search.addEventListener("change", function() {
        var txtNode = document.createTextNode(this.value); //요소 노드 생성하기
        // var brtag = document.createElement('br');
        var ptag = document.createElement('p');
        ptag.appendChild(txtNode);
        //document.getElementById('search_value').appendChild(txtNode);
        document.getElementById('search_value').appendChild(ptag);

    });

    var search_remove = document.querySelector("#search_remove");

    search_remove.onclick = () =>{
        var removeNode = document.querySelector('#search_value > p');
        // document.getElementById('search_value').removeChild(removeNode);
       // document.getElementById('search_values').innerHTML = "";
        while(removeNode.firstChild)  {
            removeNode.firstChild.remove();
          }        
    }

    


    






