import React from "react";
import Iteams from "./Iteams";

function Home() {
  return (
   
      <div className="container my-3">
        <h2>Top headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <Iteams title="clothes" description="place description here" url="https://www.sanasafinaz.com/media/wysiwyg/couture/B-391.jpg"/>
          </div>
          <div className="col-md-4">
            <Iteams title="cricket" description="place description here" url="https://pbs.twimg.com/media/FfQpZ2EXwAAt1jR?format=jpg&name=4096x4096"/>
          </div>
          <div className="col-md-4">
            <Iteams title="Politics" description="place description here" url="https://www.imf.org/external/pubs/ft/fandd/2020/06/images/frieden-1600.jpg"/>
          </div>
        </div>
      </div>
  
  );
}

export default Home;
