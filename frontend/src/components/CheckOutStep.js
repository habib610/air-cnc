import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const CheckOutStep = ({ step1, step2, step3 }) => {
  return (
    <div className="d-flex my-3">
      <p className={step1 ? `text-dark mr-2` : `text-muted`}>
        1. Review house rules{" "}
        <FontAwesomeIcon icon={faChevronRight} className="mx-2" />
      </p>
      <p className={step2 ? `text-dark mr-2` : `text-muted`}>
        2. Who is coming?
        <FontAwesomeIcon icon={faChevronRight} className="mx-2" />
      </p>
      <p className={step3 ? `text-dark mr-2` : `text-muted`}>
        3. Confirm and pay
      </p>
    </div>
  );
};

export default CheckOutStep;
