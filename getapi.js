<body onload="updateCounter()">

    <script>
          function updateCounter(){
              fetch('https://go9gn0766m.execute-api.us-east-1.amazonaws.com/prod/',{
                  method: 'GET'
              })
            .then(response => {
              if (
                  response.ok 
              ) {
                return response.json()
              } else {
                throw new Error('Sorry, something went wrong');
              }
            })
            .then(data => document.getElementById("hits").innerText = data.Visit_Count)
          }
    </script>
    </body>