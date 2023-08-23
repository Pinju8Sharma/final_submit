document.getElementById('loginbtn').addEventListener('click',(e) => {
    e.preventDefault()
    

    user_email=document.getElementById('login_email').value 
    user_password=document.getElementById('login_password').value 
     console.log(user_email);
     console.log(user_password);
     window.localStorage.setItem("mydata",user_email)


     const xhr = new XMLHttpRequest()
     url = `http://localhost:8081/users`
     xhr.open('GET',url)
     xhr.setRequestHeader('Access-Control-Allow-Origin','*')
     xhr.setRequestHeader('Content-Type','application/json')

     xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            res=JSON.parse(xhr.responseText)
            console.log(res);
            // document.location.href = 'http://127.0.0.1:5501/signup.html'
            for(let i=0; i<res.length; i++){
                if (res[i].email==user_email && res[i].password==user_password) {
                   window.open("./index.html");
                }
                else{
                    console.log("user not found");
                    window.open("./signup.html");
                 
                }
            }
            
        }
     }
     xhr.send()
})