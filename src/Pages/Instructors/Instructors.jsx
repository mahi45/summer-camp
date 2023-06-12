import React, { useEffect, useState } from "react";
import { getAllInstructor } from "../../api/instructor";
import AllInstructor from "./AllInstructor";

const Instructors = () => {
  const [allInstructor, setAllinstructor] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllInstructor()
      .then((data) => {
        setAllinstructor(data);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="p-4 border gap-6">
        {allInstructor && allInstructor.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-3">
            {allInstructor.map((allInstructor, index) => (
              <AllInstructor key={index} allInstructor={allInstructor} />
            ))}
          </div>
        ) : (
          <div className="pt-12">
            <SectionTitle
              title="No Instructors Available"
              subtitle="Please create an instructor for class"
              center={true}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Instructors;
