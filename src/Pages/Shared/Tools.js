import React from 'react';
import useTools from '../../hook/useTools';
import Tool from './Tool';
import divider from '../../images/profile/Ozar_O2-1.png'

const Tools = () => {
     const [tools, setTools] = useTools();
       

    return (
      <div className="px-12">
        <h1 className="text-secondary text-center py-5 text-4xl font-bold">
          NEW PRODUCTS
        </h1>
        <div className="flex  justify-center">
        <img src={divider} alt="" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.slice(0, 6).map((tool) => (
            <Tool key={tool._id} tool={tool}></Tool>
          ))}
        </div>
      </div>
    );
};

export default Tools;