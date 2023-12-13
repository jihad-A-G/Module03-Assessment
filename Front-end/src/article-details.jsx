import { useLoaderData } from "react-router";

const ArticleDetails = () =>{
    const data=useLoaderData()
    return (
      <>
        <div className=" py-5 flex flex-col justtify-center items-center">
          <div className=" w-[1000px] rounded-lg ">
            <h1 className="text-3xl mb-4">{data.article.title}</h1>
            <img
              className="w-full h-[400px] bg-contain mb-5 rounded-md"
              src={`http://localhost:5000/Back-end/${data.article.img}`}
              alt=""
            />
            <div className="flex gap-4 relative ">
              <div className="body w-1/2 rounded-lg">
                <h1 className="text-3xl text-black border-b-black border-b-2 ">Content</h1>
                <div className="p-2">{data.article.body}</div>
              </div>
              <div className="body w-1/2 rounded-lg shadow-lg p-3">
                <h1 className="text-3xl text-black mb-3 ">Details</h1>
                <ul className="flex flex-col items-start gap-2">
                  <li>{`author: ${data.article.author}`}</li>
                  <li>{`Category: ${data.article.category}`}</li>
                  <li></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default ArticleDetails;