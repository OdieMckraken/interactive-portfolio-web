import React from 'react';
import KatchupsCard from './KatchupsCard'
import ScratchCard from './ScratchCard'
import LetsNameTheBabyCard from './LetsNameTheBabyCard'
import CovidTrackerCard from './CovidTrackerCard'

const FolderContent = () => {
  return (
    <div>
      <CovidTrackerCard/>
      <ScratchCard/>
      <LetsNameTheBabyCard/>
      <KatchupsCard/>      
    </div>
  );
};

export default FolderContent;