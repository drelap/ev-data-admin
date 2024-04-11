import React from 'react'
import UpdateCarModel from './UpdateCarModel';
import DeleteCarModel from './DeleteCarModel';

function CarModels(props) {
    var rows = []; var tmpimg = "";
    //var brand = {id: "", name: "", country: ""};
    //var plugtype = {id: "", name_plug_type: ""};
    props.alldata.forEach(element => {
        tmpimg = element.image_extension + ',' + element.image;
        //Object.assign(brand, props.allbranddata.find(obj => obj.id.toString() === element.brand_id));
        //Object.assign(plugtype, props.allplugtypedata.find(obj => obj.id.toString() === element.plug_type_id));
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.carBrand.name}</td>
            <td>{element.name_type}</td>
            <td>{element.plugType.name_plug_type}</td>
            <td>{element.kapasitas_max_baterai}</td>
            <td>{element.plug_side}</td>
            <td><img src={tmpimg} height="32" alt="" /></td>
            <td><UpdateCarModel
                elementId={element.id}
                singledata={props.singledata}
                allbranddata={props.allbranddata}
                allplugtypedata={props.allplugtypedata}
                getCarModel={props.getCarModel}
                updateCarModel={props.updateCarModel}
                handleChange={props.handleChange}></UpdateCarModel></td>
            <td>
                <DeleteCarModel
                elementId={element.id}
                singledata={props.singledata}
                brandname={element.carBrand.name}
                plugtypename={element.plugType.name_plug_type}
                getCarModel={props.getCarModel}
                deleteCarModel={props.deleteCarModel}></DeleteCarModel>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Brand</th>
                  <th>Model</th>
                  <th>Plug Type</th>
                  <th>Max. Bat. Capacity</th>
                  <th>Plug Side</th>
                  <th>Picture</th>
                  <th width="1%">Edit</th>
                  <th width="1%">Delete</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default CarModels;