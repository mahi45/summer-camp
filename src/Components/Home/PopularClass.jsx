import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getAllClass } from "../../api/class";
import Card from "./Card";

const PopularClass = () => {
  const [myClass, setMyClass] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllClass()
      .then((data) => {
        setMyClass(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="">
      {myClass && myClass.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 justify-items-center lg:grid-cols-3 gap-3">
          {myClass.map((myClass, index) => (
            <Card key={index} myClass={myClass} />
          ))}
        </div>
      ) : (
        <div className="pt-12">
          <SectionTitle
            title="No Rooms Available In This Category!"
            subtitle="Please Select Other Categories."
            center={true}
          />
        </div>
      )}
    </div>
  );
};

export default PopularClass;
