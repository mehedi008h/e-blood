import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearErrors, getAllPosts } from "../../actions/postActions";
import Loader from "../../components/loader/Loader";
import { LIKE_POST_RESET } from "../../constants/postConstants";
import Post from "../bloodPost/post/Post";

const Home = () => {
    const dispatch = useDispatch();
    const { loading, posts, error } = useSelector((state) => state.posts);

    const { error: likeError, isLiked } = useSelector((state) => state.post);

    useEffect(() => {
        if (error) {
            return toast.error(error);
        }

        if (likeError) {
            toast.error(likeError);
            dispatch(clearErrors());
        }

        if (isLiked) {
            dispatch({ type: LIKE_POST_RESET });
            toast.success("Like post successfully");
        }

        dispatch(getAllPosts());
    }, [dispatch, error, likeError, isLiked]);
    return (
        <div className="flex min-h-full">
            <div className="w-4/5 mx-auto my-4">
                <div className="grid grid-cols-4 gap-4">
                    <div className="col-span-1">1</div>
                    <div className="col-span-2">
                        {loading ? (
                            <Loader />
                        ) : (
                            <>
                                {posts?.map((post) => (
                                    <Post key={post._id} post={post} />
                                ))}
                            </>
                        )}
                    </div>
                    <div className="col-span-1">3</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
