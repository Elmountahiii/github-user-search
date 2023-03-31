const searchInput = document.querySelector("#search-Input");
const searchButton = document.querySelector(".search-button");

// user info
const fullName = document.querySelector(".user-full-name");
const userName = document.querySelector(".user-username");
const joinDate = document.querySelector(".user-create-date");
const userProfile = document.querySelector(".user-profile");
const userBio = document.querySelector(".user-bio");

// user stats
const repoCount = document.querySelector(".repo-number");
const followersCount = document.querySelector(".followers-number");
const followingCount = document.querySelector(".following-number");

// social media links
const userLocation = document.querySelector(".item-location");
const twitter = document.querySelector(".item-twitter");
const blog = document.querySelector(".item-blog");
const organization = document.querySelector(".item-organization");

const api = "https://api.github.com/users/";

searchButton.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${searchInput.value}`)
    .then((response) => response.json())
    .then((json) => showInformation(json));
});

function showInformation(jsonData) {
  fullName.innerText = jsonData.name;
  userName.innerText = jsonData.login;
  joinDate.innerText = jsonData.created_at;
  if (jsonData.bio !== null) {
    userBio.innerText = jsonData.bio;
  } else {
    userBio.innerText = "user has no bio";
  }

  userProfile.setAttribute("src", jsonData.avatar_url);

  repoCount.innerText = jsonData.public_repos;
  followersCount.innerText = jsonData.followers;
  followingCount.innerText = jsonData.following;

  if (jsonData.location !== null) {
    userLocation.innerText = jsonData.location;
  } else {
    userLocation.innerText = "Not available";
  }

  if (jsonData.company !== null) {
    organization.innerText = jsonData.company;
  } else {
    organization.innerText = "Not available";
  }

  if (jsonData.blog !== null) {
    blog.innerText = jsonData.blog;
  } else {
    blog.innerText = "Not available";
  }

  if (jsonData.twitter_username !== null) {
    twitter.innerText = jsonData.twitter_username;
  } else {
    twitter.innerText = "Not available";
  }
}
