const URL = 'http://localhost:5000/api/posts';

//POSTS

export const createPost = async (data, token) => {
    try {
        const response = await fetch(`${URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Error creating post:", error);
        throw error;
    }
};

export const getAllPosts = async (token) => {
    try {
        const response = await fetch(`${URL}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json()
    } catch (error) {
        console.error("Error getting posts:", error);
        throw error;
    }
}

export const deletePostById = async (token, id) => {
    try {
        const response = await fetch(`${URL}/${id}`, { 
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
}
