import React from 'react';

export default function People(props) {
  return (
    <div className="card text-white relative right-[-80px]">
        <img src={props.image} alt="img"/>
  <div className="text-left relative right-[-20px]">
  <h3>{props.name} </h3>
    <p>{props.roll}</p>
    <p>{props.loc}</p>
    <p>{props.domain}</p>
    <p>Skills:
      <div className="bg-purple-600 h-10 w-20 rounded-xl flex items-center justify-center">
    {props.skills}
    </div>
    </p>
</div>
    <button className="bg-purple-600  h-10 w-24 rounded">Full Profile

    </button>
  </div>
  )
}
