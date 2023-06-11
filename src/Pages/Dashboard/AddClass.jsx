import React, { useContext, useState } from "react";
import AddClassForm from "../../Components/Forms/AddClassForm";
import { imageUpload } from "../../api/utils";
import { AuthContext } from "../../Providers/AuthProvider";
import { addClass } from "../../api/class";
import { toast } from "react-hot-toast";

const AddClass = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [uploadButtonText, setUploadButtonText] =
    useState("Upload Class Image");

  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    const className = event.target.className.value;
    const instructorName = event.target.instructorName.value;
    const instructorEmail = event.target.instructorEmail.value;
    const seats = event.target.seats.value;
    const price = event.target.price.value;
    const status = event.target.status.value;
    const image = event.target.image.files[0];

    // upload image
    imageUpload(image)
      .then((data) => {
        const classData = {
          className,
          instructorName,
          instructorEmail,
          seats,
          price,
          status,
          image: data.data.display_url,
          host: {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email,
          },
        };

        //   Post class data to server
        addClass(classData)
          .then((data) => {
            toast.success("Class added successfully");
          })
          .catch((err) => {
            toast.error("There is some issue to add your class");
            console.log(err.message);
          });

        console.log(classData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
        setLoading(false);
      });
  };

  const handleImageChange = (image) => {
    setUploadButtonText(image.name);
  };
  return (
    <div>
      <AddClassForm
        handleSubmit={handleSubmit}
        loading={loading}
        handleImageChange={handleImageChange}
        uploadButtonText={uploadButtonText}
      ></AddClassForm>
    </div>
  );
};

export default AddClass;
