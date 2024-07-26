import { useState, useEffect } from "react";
import userProfile from "../../assets/icons/boy.png";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact";

import "./employee.css";

export default function Employees() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="card flex justify-content-center">
        <ProgressSpinner />
      </div>
    );
  }

  return (
    <div className="mainContents">
      <div className="navbar">
        <p>Employees</p>
        <div className="userProfile">
          <img src={userProfile} alt="User Image" height="30" width="30" />
          <p>John Doe</p>
        </div>
      </div>
      <div className="contents">
        <div className="secondaryNav">
          <Button
            type="button"
            label="Requests"
            icon="pi pi-users"
            outlined
            severity="primary"
            badge="2"
            badgeClassName="p-badge-danger"
          />{" "}
          <Button
            type="button"
            label="Add User"
            icon="pi pi-plus"
            outlined
            severity="primary"
          />{" "}
        </div>
      </div>
    </div>
  );
}
