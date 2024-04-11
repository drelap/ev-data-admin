import React from 'react'
import UpdatePlugType from './UpdatePlugType';
import DeletePlugType from './DeletePlugType';

function PlugTypes(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr key={element.id}>
            <td>{element.id}</td>
            <td>{element.name_plug_type}</td>
            <td><UpdatePlugType
                elementId={element.id}
                singledata={props.singledata}
                plugtypename={element.name_plug_type}
                getPlugType={props.getPlugType}
                updatePlugType={props.updatePlugType}
                handleChange={props.handleChange}></UpdatePlugType></td>
            <td>
                <DeletePlugType
                elementId={element.id}
                singledata={props.singledata}
                plugtypename={element.name_plug_type}
                getPlugType={props.getPlugType}
                deletePlugType={props.deletePlugType}></DeletePlugType>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead>
              <tr>
                  <th>#</th>
                  <th>Plug Type</th>
                  <th width="1%">Edit</th>
                  <th width="1%">Delete</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
}

export default PlugTypes;