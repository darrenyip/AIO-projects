import { data } from "autoprefixer";
import axios from "axios";

export async function fetchPosts() {
    const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return data;
}