import React from "react";
import moment from "moment";
import { AiOutlineComment, AiOutlineEye, AiOutlineHeart } from "react-icons/ai";

const Post = ({ post }) => {
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
                    <div className="flex justify-center items-center">
                        <AiOutlineHeart size={20} />
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
