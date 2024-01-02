import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comments from "./Comments";

function PostDetails() {
  return (
    <div>
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2x1 fomt-bold text-black md:text-3x1">
            10 Uses of Artificial Intelligence in Day
          </h1>
          <div className="flex items-center justify-center space-x-2">
            <p>
              <BiEdit />
            </p>
            <p>
              <MdDelete />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>@snehasishdev</p>
          <div className="flex space-x-2">
            <p>16/06/2023</p>
            <p>16:45</p>
          </div>
        </div>
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/ba/29/5c/img-worlds-of-adventure.jpg?w=1200&h=-1&s=1" alt="Heading_Image"/>
        <p className="mt-8 mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam officia
          fugit voluptatibus magni aliquam doloribus repudiandae cumque maxime
          voluptatum impedit. Nemo quos at itaque nulla omnis aliquid! Officiis
          voluptatem beatae accusamus eaque provident eveniet reiciendis ab
          repellat, doloremque libero sint quas eligendi ad cumque vero. Placeat
          repellat recusandae eos neque asperiores reprehenderit cupiditate
          explicabo est! Eligendi, harum. Magni fugit vitae pariatur error vero
          quas sapiente voluptas. Placeat, iste laudantium, blanditiis pariatur,
          tempora a corporis nulla animi ad earum suscipit explicabo. Quos
          impedit perferendis hic vel sed dolores alias, eius inventore fuga
          praesentium reiciendis quidem illo at sit enim autem esse magni rerum
          aperiam. Ullam non saepe id quia laborum doloremque debitis libero
          eligendi vel a nostrum rerum suscipit necessitatibus, mollitia in
          pariatur neque officia tempora. Doloremque, eligendi fugiat. Nostrum
          debitis neque, numquam dolor, suscipit temporibus adipisci placeat
          eius illum quo et officia! Similique laudantium obcaecati ab velit
          modi nam doloremque.
        </p>
        <div className="flex items-center mt-8 space-x-4 font-semibold">
          <p>Categories:</p>
          <div className="flex justify-center items-center space-x-2">
            <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
            <div className="bg-gray-300 rounded-1g px-3 py-1">Technology</div>
          </div>
        </div>

        {/* Comments */}
        <Comments/>
        {/* Write Comment */}
        <div className="w-full flex flex-col mt-4 md:flex-row">
          <input
            type="text"
            placeholder="Write a comment"
            className="md:w-[88%] outline-none py-2 px-4 mt-4 md:mt-0"
          />
          <button className="text-sm bg-black text-white px-4 py-2 md:w-[20% ] mt-4 md:mt-0">
            Add Comment
          </button>
        </div>
      </div>
    </div>
  );
}

export default PostDetails;
