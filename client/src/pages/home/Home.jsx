import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { getAllPosts } from "../../actions/postActions";
import Post from "../bloodPost/post/Post";

const Home = () => {
    const dispatch = useDispatch();
    const { loading, posts, error } = useSelector((state) => state.posts);

    console.log(posts);

    useEffect(() => {
        if (error) {
            return toast.error(error);
        }

        dispatch(getAllPosts());
    }, [dispatch, error]);
    return (
        <div className="flex min-h-full">
            <div className="w-4/5 mx-auto my-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">1</div>
                    <div className="col-span-2">
                        {posts.map((post) => (
                            <Post key={post._id} post={post} />
                        ))}
                    </div>
                    <div className="col-span-1">3</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
