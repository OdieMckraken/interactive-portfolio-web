import React from 'react';
import ContactText from "./ContactText";
import BusinessCard from "./BusinessCard";

const FolderContent = () => {
  return (
    <div>
      <div id="contactText" className="contactText">
					<ContactText />
				</div>
        <div id="card" className="card">
					<BusinessCard />
				</div>
    </div>
  );
};

export default FolderContent;