import React, { useEffect, useState } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { AiOutlineComment, AiOutlineEye } from "react-icons/ai";
import {
    clearErrors,
    getAllPosts,
    likePost,
} from "../../../actions/postActions";
import { LIKE_POST_RESET } from "../../../constants/postConstants";
import { MdThumbUp, MdThumbUpOffAlt } from "react-icons/md";

const Post = ({ post }) => {
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);

    const Likes = () => {
        if (post?.likes?.length > 0) {
            return post.likes.find(
                (like) => like === (user?._id || user?._id)
            ) ? (
                <>
                    <MdThumbUp size={20} />
                    &nbsp;
                    {post.likes.length > 2
                        ? `You and ${post.likes.length - 1} others`
                        : `${post.likes.length} like${
                              post.likes.length > 1 ? "s" : ""
                          }`}
                </>
            ) : (
                <>
                    <MdThumbUpOffAlt size={20} />
                    &nbsp;{post.likes.length}{" "}
                    {post.likes.length === 1 ? "Like" : "Likes"}
                </>
            );
        }

        return (
            <>
                <MdThumbUpOffAlt size={20} fontSize="small" />
                &nbsp;Like
            </>
        );
    };

    // handle likes
    const handleLikes = () => {
        dispatch(likePost(post._id));
    };
    return (
        <div className="bg-white rounded-md mb-4">
            <div className="p-4">
                <h1 className="text-lg font-semibold">{post?.title}</h1>
                <div className="flex justify-between my-2">
                    <p>{moment(post?.createdAt).fromNow()}</p>
                    <div className="flex gap-2">
                        <p className="bg-golden px-4 rounded-lg">
                            {post?.bloodGroup}
                        </p>
                        <p>{post?.type}</p>
                        <p>{post?.status}</p>
                    </div>
                </div>
                <p>{post?.description}</p>
            </div>
            <hr />
            <div className="grid grid-cols-3">
                <div className="col-span-1 py-1 text-center">
                    <div
                        className="flex justify-center items-center"
                        onClick={() => handleLikes()}
                    >
                        <Likes />
                    </div>
                </div>
                <div className="col-span-1 py-1 text-center">
                    <div className="flex justify-center items-center">
                        <AiOutlineComment size={20} />
                    </div>
                </div>
                <div className="col-span-1 py-1 text-center">
                    <div className="flex justify-center items-center">
                        <AiOutlineEye size={20} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
