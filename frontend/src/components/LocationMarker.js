import React from "react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/ev-charger";

export const LocationMarker = () => {
  return (
    <div>
      <Icon
        icon={locationIcon}
        // style={{ color: "#228B22", fontSize: "2.3rem" }}
        style={{ color: "#b2beb5", fontSize: "2.3rem" }}
      />
    </div>
  );
};
