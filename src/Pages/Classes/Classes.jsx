import React, { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import { getAllClass } from "../../api/class";
import AllClass from "../../Components/Classes/AllClass";

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
      <div className="pb-6">
        <SectionTitle
          title="All Class"
          subtitle="All instructor class"
          center
        ></SectionTitle>
      </div>
      <div className="pb-12">
        {allClass && allClass.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-3">
            {allClass.map((allClass, index) => (
              <AllClass key={index} allClass={allClass} />
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
    </div>
  );
};

export default Classes;
