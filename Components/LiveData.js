import React from "react";
import { Fragment } from "react";

const LiveData = () => {
  const looCafeLiveData = {
    Location: "Andheri",
    urinalsMale: "8/10",
    seatsFemale: "3/5",
    seatsMale: "2/5",
  };
  return (
    <Fragment>
      <div className="bg-gray-100 text-left space-y-2 p-7 w-10/12 rounded-lg shadow-xl hover:shadow-2xl cursor-pointer click:">
        <p className="w-full">Location: {looCafeLiveData.location}</p>
        <p className="w-full">Empty urinals: {looCafeLiveData.urinalsMale}</p>
        <p className="w-full">
          Empty female toilets: {looCafeLiveData.seatsFemale}
        </p>
        <p className="w-full">
          Empty male toilets: {looCafeLiveData.seatsMale}
        </p>
        {/* We can add this data from the database as well. Right now i have used object for showing the same functionality. */}
      </div>
    </Fragment>
  );
};

export default LiveData;
