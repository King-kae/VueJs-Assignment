import axios from "axios";

export const getRepos = async () => {
    try {
        const repos = await axios.get("https://api.github.com/users/King-kae/repos", {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        });
        return await repos.json()
    } catch (err) {
        console.log(err);
    }
}

export const getRepo = async (name) => {
    try {
        const repo = await axios.get(`https://api.github.com/repos/${name}`, {
            headers: {
                Accept: "application/vnd.github.v3+json"
            }
        });
        return await repo.json();
    } catch (err) {
        console.log(err);
    }
}
