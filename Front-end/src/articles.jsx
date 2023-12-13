import { useLoaderData,Link, useLocation, Form } from 'react-router-dom';
import react from './assets/react.svg'
const Articles = () =>{
    const data =useLoaderData();
    const location = useLocation();

    return (
      <>
        <div className="w-full h-full flex p-5 flex-wrap gap-5">
            {data.articles.map(a=>{
                return (
                  <div
                    key={a.id}
                    className="w-[300px] max-w-[300px] h-[385px] max-h-[385px]"
                  >
                    <div className="w-full h-[285px] relative">
                      <Link to={`article-details/${a.id}`}>
                        <img
                          className="object-cover w-full h-full rounded-2xl hover:shadow-xl"
                          src={`http://localhost:5000/Back-end/${a.img}`}
                          alt=""
                        />
                        {location.pathname.includes("dashboard") ? 
                        <div className="absolute top-0 left-0 w-full flex items-center justify-between p-3 text-white">
                          <Link to={`dashboard/articles/edit/${a.id}`}>Edit</Link>
                          <Form method='DELETE'>
                            <input type="hidden" value={`${a.id}`} />
                            <button type='submit'>Delete</button>
                          </Form>
                        </div> : (
                          <form action="/addToFavorite" method="post">
                            <input type="hidden" name="id" />
                            <button
                              type="submit"
                              className="favBtn absolute top-0 right-0 mt-4 mr-4"
                            >
                              <svg
                                id="favHeart"
                                viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden="true"
                                role="presentation"
                                focusable="false"
                                style={{
                                  display: "block",
                                  fill: "rgba(0, 0, 0, 0.5)",
                                  height: 28,
                                  width: 28,
                                  stroke: "#ffffff",
                                  strokeWidth: 2,
                                  overflow: "visible",
                                }}
                              >
                                <path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path>
                              </svg>
                            </button>
                          </form>
                        )}
                      </Link>
                    </div>
                    <div className="pt-3 pl-1">
                      <h1>{a.title}</h1>
                      <p className="text-gray font-light">
                        {`${a.body.substring(0, 20)} ...`}
                        <Link
                          className="text-blue-700"
                          to={`article-details/${a.id}`}
                        >
                          read more
                        </Link>{" "}
                      </p>
                      <p className="mt-1">
                        <b>by {`${a.author}`}</b>
                      </p>
                    </div>
                    <div className="absolute bottom-6 right-6 w-fit h-fit px-3 py-2 bg-black text-white text-3xl rounded-md">
                      <Link to={`add-article`}>Add article</Link>
                    </div>
                  </div>

                );

            })}
         
        </div>
      </>
    );
};
export default Articles;