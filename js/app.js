if(!localStorage.getItem('token')){
    window.location.href="login.html"
}

fetch('http://webtech-bday.herokuapp.com/views/chat', {
    'headers': {
        'Authorization': 'Bearer' + localStorage.getItem('token')
    }
}).then(result => {
    return result.json();
}).then(json => {
    console.log(json)
}).catch(err => {
    console.log("Error")
})

document.querySelector('.input__btn').addEventListener('click', e => {
    let text = document.querySelector('.input__text').value;

    fetch('http://webtech-bday.herokuapp.com/views/chat', {
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