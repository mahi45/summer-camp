import React, { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getAllClass } from "../../api/class";
import { useSearchParams } from "react-router-dom";
import Card from "../Classes/Card";

const PopularClass = () => {
  // const [params, setParams] = useSearchParams();
  // const className = params.get("className");
  // console.log(className);
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
        <div className="grid md:grid-cols-3 gap-3">
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
