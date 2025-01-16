let them = document.getElementById("them");
them.onclick = () => {
  if (document.body.classList.contains("dark-mode")) {
    them.src = "assets/icons/dark.webp";
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
    them.src = "assets/icons/light.webp";
  }
};

let userInformation = document.getElementById("user_info");
function getData() {
  let userData = "";
    fetch(`https://api.github.com/users/AbdelrahmanELsokary`)
      .then((res) => res.json())
      .then((user) => {
        userData = `
        <div class="user">
        <img src="${user.avatar_url}">
        <h1>${user.login}</h1>
          <a href="${user.html_url}" target="_blank" style="display: block;" >Github Account</a>
          <span class="bio">${user.bio}</span>
          <div class="follow"><span>Followers: ${user.followers}</span>
          <span>Following: ${user.following}</span>
          </div>
          <h3>${user.location}</h3>
        </div>
          <ol id="repos_data" class="repos_data"></ol>
        `;
        fetch(`https://api.github.com/users/AbdelrahmanELsokary/repos`)
          .then((res) => res.json())
          .then((repostories) => {
            let displayRepos = "";
            for (let i = 0; i < repostories.length; i++) {
              displayRepos += `
              <li>
              <span>${repostories[i].name}</span>
                <br> 
                <a href="${repostories[i].homepage}" target="_blank">View Project</a> 
                <a href="${repostories[i].html_url}" target="_blank">View Code</a></li>
              `;
              document.getElementById("repos_data").innerHTML = displayRepos;
            }
          });
        userInformation.innerHTML = userData;
      });
  }
  getData(userInformation)