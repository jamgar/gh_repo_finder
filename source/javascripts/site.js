var searchRepositories = () => {
  const searchTerms = document.getElementById('searchTerms').value
  fetch(`https://api.github.com/search/repositories?q=${searchTerms}`)
  .then(res => res.json())
  .then(json => showResults(json.items))
}

var showResults = (data) => {
  const results = document.getElementById('results')
  const resultsList = data.map((el) => {
    return (
      `<p>Owner: ${el.owner.login}</p>
      <a href="${el.html_url}">Repo Name: ${el.full_name}</a>
      <hr>`
    )
  }).join('')
  results.innerHTML = `<ul>${resultsList}</ul>`
}
