import axios from "../axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface FormData {
  imageUrl?: FileList;
  text: string;
  tags?: string;
  title: string;
}

function AddPost() {
  const { id } = useParams();
  const isEditing = Boolean(id);

  const [fileName, setFileName] = useState("Choose File");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const navigate = useNavigate();

  const handleFileChange = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];

      setFileName(file ? file.name : "Choose File");

      formData.append("image", file);
      const { data } = await axios.post("/uploads", formData);

      setImageUrl(data.url.substring(1));
    } catch (error) {
      console.warn(error);
      alert("Image loading error");
    }
  };

  const onClickRemoveImage = (event: any) => {
    setImageUrl("");
    setFileName("");
  };

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
  });

  const onSubmit = async (values: FormData) => {
    try {
      if (imageUrl) {
        values.imageUrl = (process.env.REACT_APP_API_URL + imageUrl) as any;
      } else {
        values.imageUrl = undefined as any;
      }

      if (tags && tags.trim().split(" ").length > 0) {
        values.tags = tags.trim();
      } else {
        values.tags = undefined as any;
      }

      const { data } = isEditing
        ? await axios.patch(`/posts/${id}`, values)
        : await axios.post("/posts", values);

      const postId = isEditing ? id : data._id;

      navigate(`/posts/${postId}`);
    } catch (error) {
      console.warn(error);
      alert("Post creating error");
    }
  };

  useEffect(() => {
    if (id) {
      axios
        .get(`posts/${id}`)
        .then(({ data }: any) => {
          setValue("title", data.title);
          setValue("text", data.text);
          setTags(data?.tags.join(" "));
          setImageUrl(`uploads/${data?.imageUrl.split("/").slice(-1)[0]}`);
          setFileName(data?.imageUrl.split("/").slice(-1)[0]);
        })
        .catch((e) => {
          if (
            e.message ===
            "Cannot read properties of undefined (reading 'split')"
          ) {
            return;
          }
          console.warn(e);
        });
    }
  }, []);

  return (
    <div className="container mb-4 sm:max-w-[60%] w-90% mx-auto top-24 relative">
      <div className="p-7 border min-w-[320px] mb-10 xsm:max-w-[100%] max-w-md mx-auto bg-white flex justify-center flex-col items-start shadow relative transition-all">
        <form onSubmit={handleSubmit(onSubmit)} className="w-[100%]">
          <div className="my-2">
            <input
              type="file"
              id="files"
              className="file-upload-label"
              onChange={handleFileChange}
              hidden
            />
            {imageUrl && (
              <div className="mb-1">
                <button className="text-red-600 " onClick={onClickRemoveImage}>
                  Delete
                </button>
                <img
                  className="max-w-[150px]"
                  src={`http://localhost:4444/${imageUrl}`}
                  alt="Uploaded"
                />
              </div>
            )}

            <label
              className="px-4 py-2 border-2 rounded border-gray-300 text-blue-800 hover:bg-blue-300 font-bold transition-all file-upload-label"
              htmlFor="files"
            >
              Select file
            </label>
            <span className="ml-2">{fileName}</span>
          </div>
          <div className="my-4 border-b">
            <input
              className="w-[100%] border rounded border-transparent p-2 outline-none focus:border-gray-300 transition-all"
              type="text"
              placeholder="Post Title..."
              {...register("title", {
                required: "Set post title",
                minLength: {
                  value: 3,
                  message: "Write min 3 symbols",
                },
                validate: (value) =>
                  value.trim().length >= 3 || "Write min 3 symbols",
              })}
            />
            {errors.title && (
              <span className="mt-1 text-red-500 text-sm">
                {errors.title?.message}
              </span>
            )}
          </div>
          <div className="my-4 border-b">
            <input
              className="w-[100%] border rounded border-transparent p-2 outline-none focus:border-gray-300 transition-all"
              type="text"
              placeholder="Tags"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>
          <div>
            <textarea
              className="w-[100%] border rounded border-transparent p-2 outline-none focus:border-gray-300 transition-all min-h-[250px]"
              placeholder="Write post text..."
              {...register("text", {
                required: "Set post text",
                minLength: {
                  value: 10,
                  message: "Write min 10 symbols",
                },
                validate: (value) =>
                  value.trim().length >= 10 || "Write min 10 symbols",
              })}
            ></textarea>
            {errors.text && (
              <span className="mt-1 text-red-500 text-sm">
                {errors.text?.message}
              </span>
            )}
          </div>
          <div>
            <button className="px-4 py-2 mr-3 border-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-all">
              {isEditing ? "Save" : "Publish"}
            </button>
            <Link
              to={isEditing ? `/posts/${id}` : "/"}
              type="submit"
              className="text-red-400 underline hover:text-red-700 transition-all"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddPost;
