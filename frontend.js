const response = await fetch('http://localhost:3000/api',{
    method: 'POST ',
    body: JSON.stringify({ username: 'JohnDoe' }),
    headers: {
        'Content-Type': 'application/json'
    }
})