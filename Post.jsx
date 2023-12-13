// const nama = ["Bejo","Banget"];
import classes from './Post.module.css'
function Post(props){
    // const namaTerpilih = Math.random() > 0.5 ? nama[0]:nama[1];
    // return (
    //     <div>
    //         <p>{namaTerpilih}</p>
    //         <p>Belajar di UPGRIS is Awesome!!</p>
    //     </div>
    // )
    return (
        <div className={classes.post}>
            <p className={classes.author}>{props.author}</p>
            <p className={classes.text}>{props.body}</p>
        </div>
    )
}

export default Post;
