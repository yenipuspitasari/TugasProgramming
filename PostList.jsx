import Post from "./Post";
import NewPost from "./NewPost";
import classes from './PostsList.module.css';

function PostList(){
    return (
        <>
        <NewPost />
        <ul className={classes.posts}>
            <Post author="Yeni Puspitasari" body="20670062" />
            <Post author="Dari" body="Universitas PGRI Semarang" />
            <Post author="Belajar" body="CSS Tidak Sulit" />
            <Post author="Banget" body="Kuliah di Informatika Upgris is Awesome" />
            <Post author="Universitas PGRI Semarang" body="Jaya Jaya Jaya" />
            <Post author="Informatika" body="Universitas PGRI Semarang" />
            
        </ul>

        </>
    )
}

export default PostList;