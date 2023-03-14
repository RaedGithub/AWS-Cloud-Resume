fetch('https://hp7olzeabi.execute-api.us-east-1.amazonaws.com/prod/visitors/')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    const visitorCountElement = document.getElementById('replaceme');
    if (visitorCountElement) {
      visitorCountElement.innerText = data.visitor_count;
    } else {
      console.error('Could not find element with ID "replaceme"');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });