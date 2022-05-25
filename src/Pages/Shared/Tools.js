import React from 'react';
import useTools from '../../hook/useTools';
import Tool from './Tool';

const Tools = () => {
     const [tools, setTools] = useTools();
       

    return (
      <div className="px-12">
        <h1 className="text-secondary text-center py-5 text-4xl font-bold">
          NEW PRODUCTS
        </h1>
        <p className='mb-5'>
          Xtra-power manufactures high-quality Power Tools superior-performing
          electric power tools in different categories. The wide variety of
          Power tools like Angle Grinder, Straight Grinder, Marble Cutter, Wall
          Chaser, Drill Machine, Die Grinder, Impact Drill, Wood Cutter, Sander,
          Router, Jig Saw, etc. is known for their reliability in any
          environment. Under professional construction supervision, the
          Professional Power Tools have followed international design standards
          meeting all the requirements. The products guarantee incomparable
          execution and accurate work to produce better output. The project can
          be done without investing too much manual power and the Power Machines
          have impeccable features. The products are lightweight and available
          in different sizes based on tasks. The Power Tools are of two types-
          the traditional one with plugs ins and cordless Power tools enabling
          smooth movement from place to place. The Power Tools assure long
          operational life and precise results.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tools.slice(0, 6).map((tool) => (
            <Tool key={tool._id} tool={tool}></Tool>
          ))}
        </div>
      </div>
    );
};

export default Tools;