window.addEventListener('load', (event) => {
    let token = localStorage.getItem('token')

    fetch('http://localhost:3000/views/chat', {
        'headers': {
            'Authorization': 'Bearer' + token
        }
    }).then(result => {
        return result.json();
    }).then(json => {
        console.log(json)
    }).catch(err => {
        window.location.href="login.html"
    })
    
    document.querySelector('.input__btn').addEventListener('click', e => {
        let text = document.querySelector('.input__text').value;
    
        fetch('http://localhost:3000/views/chat', {
            method: 'POST',
            'headers': {
                'Content-type': 'application/json',
                'Authorization': 'Bearer' + localStorage.getItem('token')
            },
            body: JSON.stringify({
                'message': text
            })
        }).then(result => {
            return result.json();
        }).then(json => {
            if (json.status === 'success') {
                console.log(text)
            }
        }).catch(err => {
            console.log(err)
        })
        e.preventDefault();
    })
})