// const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

test('verifica os repositorios obtidos a partir da da API fornecida', async () => {
    expect.assertions(2);
    const repos = await getRepos('https://api.github.com/users/tryber/repos');


    expect(repos).toContain('sd-03-block10-project-shopping-cart');
    expect(repos).toContain('sd-02-block19-recipes-app-4');
});
