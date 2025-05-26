import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "@/Data/Projects";
import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/Components/Core/Button";

function Show() {
  const { projectId } = useParams();
  const navigate = useNavigate();

  const project = projects.find((p) => p.slug === projectId);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (project?.images?.length) {
      setSelectedImage(project.images[0]);
    }
  }, [project]);

  if (!project) {
    return (
      <div className="flex justify-center items-center bg-black h-screen">
        <div className="text-center">
          <h2 className="mb-2 font-medium text-white text-xl">
            Project not found
          </h2>
          <p className="text-gray-400 text-sm">
            The project doesn't exist or has been removed.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-black min-h-screen text-white">
      <div className="flex items-center gap-4 mx-auto px-6 py-4 border-zinc-800 border-b w-full max-w-screen-lg">
        <Button
          onClick={() => navigate(-1)}
          variant="ghost"
          size="icon"
          className="bg-zinc-800 hover:bg-zinc-700 rounded-full transition"
          aria-label="Volver"
        >
          <FaArrowLeft />
        </Button>
        <h1 className="font-semibold text-xl sm:text-2xl truncate">
          {project.title}
        </h1>
      </div>

      {/* Main Image */}
      <div className="flex flex-1 justify-center items-center px-4 sm:px-6 py-6">
        <div
          className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
          style={{
            width: "590px",
            maxWidth: "90vw",
            maxHeight: "400px",
            height: "auto",
            aspectRatio: "16 / 9",
          }}
        >
          <img
            src={`${project.path}${selectedImage}`}
            alt="Imagen del proyecto"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      {/* Gallery */}
      <div className="mx-auto px-6 pb-6 w-full max-w-screen-lg">
        <div className="flex flex-wrap justify-center gap-1.5">
          {project.images.map((img, index) => (
            <Button
              key={img}
              onClick={() => setSelectedImage(img)}
              variant="ghost"
              className={`w-20 h-20 rounded-md border-2 overflow-hidden p-0 transition ${
                selectedImage === img
                  ? "border-white scale-105"
                  : "border-zinc-800 hover:border-zinc-500"
              }`}
              aria-label={`Imagen ${index + 1}`}
            >
              <img
                src={`${project.path}${img}`}
                alt={`Miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Show;
