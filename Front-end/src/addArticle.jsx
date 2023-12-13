import { Form } from "react-router-dom";

const AddArticle = () =>{
    return (
      <>
        <Form method="POST" className="flex flex-col ">
          <label htmlFor="">Title</label>
          <input
            type="text"
            className="w-1/4 rounded-md px-3 outline-none border-2 border-black"
            placeholder="Title"
            name="title"
          />
          <label htmlFor="">Body</label>
          <input
            type="text"
            className="w-1/4 rounded-md px-3 outline-none border-2 border-black"
            placeholder="body"
            name="body"
          />
          <label htmlFor="">Category</label>
          <input
            type="text"
            className="w-1/4 rounded-md px-3 outline-none border-2 border-black"
            placeholder="Category"
            name="category"
          />
          <label htmlFor="">Author</label>
          <input
            type="text"
            className="w-1/4 rounded-md px-3 outline-none border-2 border-black"
            placeholder="Author"
            name="author"
          />
          <label htmlFor="">Image</label>
          <input
            type="file"
            className="w-1/4 rounded-md px-3 outline-none border-2 border-black"
            placeholder="Title"
            name="img"
          />
          <button type="submit"> ADD</button>
        </Form>
      </>
    );
}

export default AddArticle;