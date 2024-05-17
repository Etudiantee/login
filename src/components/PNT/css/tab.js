
import React from "react";

const Tab = () => {
   

    return (
        <div >
      
     
                <table border={1} cellSpacing={0} style={{ width: '100%' }} className='tableau1'>
                    <thead>
                        <tr>
                            <th rowSpan={3} >Sequence</th>
                            
                            <th rowSpan={3} >Day</th>
                            <th rowSpan={3}>FLT ID</th>                            
                            <th colSpan={2}>Leg</th>
                            <th rowSpan={3}>Pos</th>
                            <th rowSpan={3}>PF ID</th>
                            <th colSpan={7} >Flight Hours UTC</th>
                            <th colSpan={5}>Fuel(Kilograms)</th>
                            <th rowSpan={3}>U plift(Liter)</th>
                            </tr> 
                                <tr>
                                    <th rowSpan={2}>From</th>
                                    <th rowSpan={2}>To</th>
                                    <th rowSpan={2}>Expected Dep Time</th>
                                    <th colSpan={3}>Block times</th>
                                    <th colSpan={3}>Airborne</th>
                                    <th rowSpan={2}>Remain Fuel Previous Leg</th>
                                    <th rowSpan={2}>Added fuel</th>
                                    <th rowSpan={2}>Fuel at Departure </th>
                                    <th rowSpan={2}>Fuel Used</th>
                                    <th rowSpan={2}>Reamin Fuel</th>


                                </tr>
                              <tr>
                                <th >Out</th>
                                <th >In</th>
                                <th >Block Time</th>
                                <th >Off</th>
                                <th >On</th>
                                <th >Flight Time</th>
                                </tr>                           
                    </thead>
                  <tbody>
                    <tr>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                    </tr>
                    <tr>
                <td><input type='text' className='t1'/></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                <td><input type='text' className='t1' /></td>
                    </tr>
                    </tbody>  
                </table>
            </div>
           
    );
  };
  
  export default Tab;