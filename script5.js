async function fetchGitHubUsers() {
    try{
        const response= await fetch("https://api.github.com/users");
        const users= await response.json();

        return users.filter(user=>user.id%2===0).map(user=>
        ({
            username:user.login,
            profileURL:user.html_url
        })
        ).reduce((acc,user)=>
        {
            acc.push(user);
            return acc;
        },[])
    }
    catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}

fetchGitHubUsers().then(users => console.log(users));