const BlogCard = ({post, date}) => {
    return (
      <>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3 ">
          <div className="mb-10 w-full">
            <div className="mb-8 overflow-hidden rounded">
              <img src={post.photo} alt="" className="w-full" />
            </div>
            <div>
              {date && (
                <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                  {date}
                </span>
              )}
              <h3>
                <a
                  href="/#"
                  className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
                >
                  {post.title}
                </a>
              </h3>
              <p className=" text-base text-body-color dark:text-dark-6">
                {post.desc.slice(0,200)+" ...read more"}
                <div className="flex space-x-6 text-base text-body-color dark:text-dark-6 mt-3">
                <p className="font-bold font-serif">{post.username}</p>
                <p className="font-bold font-serif">22 Dec 2023</p>
                </div>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default BlogCard