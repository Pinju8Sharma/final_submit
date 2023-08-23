document.getElementById('btn').addEventListener('click',(e) =>{
    e.preventDefault()

    const user_name = document.getElementById('name').value
    const user_email  = document.getElementById('email').value
    const user_password = document.getElementById('password').value
    const user_dob = document.getElementById('dob').value

    const user = {
        name: user_name,
        email:user_email,
        password:user_password,
        dob:user_dob
    }

    const url = `http://localhost:8081/users`
    const xhr = new XMLHttpRequest()
    xhr.open('POST',url)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.setRequestHeader('Access-Control-Allow-origin','*')

    
    xhr.onreadystatechange = () =>
    {
        if(xhr.status==200 && xhr.readyState == 4)
        {
            console.log(user)
            console.log(xhr.responseText)
            window.open("./index.html");
        }
    }
    xhr.send(JSON.stringify(user))
})