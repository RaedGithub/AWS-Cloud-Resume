fetch("https://hp7olzeabi.execute-api.us-east-1.amazonaws.com/prod/visitors")
.then(response => response.json())
.then(data => {
        document.getElementById('replaceme').innerText = data
})