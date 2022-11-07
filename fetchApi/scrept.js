/*console.log('Hello Abhi yadav');

//button witch id myBtn
let myBtn = document.getElementById("myBtn");

//div with id content
let content = document.getElementById("content");
function getData() {
    url = "https://api.github.com/users"
    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {
        console.log(data);
    })
};
getData()*/

//post data request

function postData() {
    url = "http://dummy.restapiexample.com/api/v1/create"
    data = '{"name":"Abhishek841311","salary":"123","age":"23"}'

    paira = {
        method: 'post',
        headers: {
            'content-type': 'application/json'
        },
        body: data

    }

    fetch(url, paira).then(response => response.json())
        .then(data => console.log(data))
}
postData()
