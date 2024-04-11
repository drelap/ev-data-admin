import React from 'react'
import UpdateCarBrand from './UpdateCarBrand';
import DeleteCarBrand from './DeleteCarBrand';

function CarBrands(props) {
    var rows = []; var temp = ""; var tmpobj = {};
    props.alldata.forEach(element => {
        temp = element.logo_extension + ',' + element.logo;
        tmpobj = {
            name: element.name,
            country: element.country,
            logo: temp 
        }
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.name}</td>
            <td>{element.country}</td>
            <td><img src={temp} height="32" alt="" /></td>
            <td><UpdateCarBrand
                elementId={element.id}
                singledata={props.singledata}
                getCarBrand={props.getCarBrand}
                updateCarBrand={props.updateCarBrand}
                handleChange={props.handleChange}></UpdateCarBrand></td>
            <td>
                <DeleteCarBrand
                elementId={element.id}
                singledata={props.singledata}
                singleobj={tmpobj}
                getCarBrand={props.getCarBrand}
                deleteCarBrand={props.deleteCarBrand}></DeleteCarBrand>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Country</th>
                  <th>Logo</th>
                  <th width="1%">Edit</th>
                  <th width="1%">Delete</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default CarBrands;