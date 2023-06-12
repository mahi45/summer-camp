import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { getAllClass } from "../../api/class";
import AllClass from "./AllClass";

const Classes = () => {
  const [allClass, setAllClass] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllClass()
      .then((data) => {
        setAllClass(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <div className="py-6 bg-emerald-50">
        <SectionTitle
          title="All Class"
          subtitle="All instructor class"
          center
        ></SectionTitle>
      </div>
      <div className="p-4 border gap-6">
        {allClass && allClass.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-3">
            {allClass.map((allClass, index) => (
              <AllClass key={index} allClass={allClass} />
            ))}
          </div>
        ) : (
          <div className="pt-12">
            <SectionTitle
              title="No Class Available"
              subtitle="Please create class"
              center={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
