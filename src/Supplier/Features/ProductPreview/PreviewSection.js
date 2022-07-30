import React from 'react';
import { useParams } from 'react-router-dom';

const PreviewSection = () => {
    const id = useParams().id;
    console.log(id)
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-12">sdfsdf</div>
        </div>
    </div>
  )
}

export default PreviewSection
