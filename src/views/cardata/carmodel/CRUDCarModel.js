import React from "react";
import {
   CCard,
   CCardBody,
   CCardHeader
} from '@coreui/react'
import CreateCarModel from "./CreateCarModel";
import CarModels from "./CarModels";

class CRUDCarModel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      alldata: [],
      singledata: {
        brand_id: "",
        carBrand: {id: "", name:""},
        name_type: "",
        plug_type_id: "",
        plugType: {id: "", name_plug_type: ""},
        kapasitas_max_baterai: "",
        plug_side: ""
      },
      allbranddata: [],
      allplugtypedata: []
    };
    this.getCarModels = this.getCarModels.bind(this);
    this.getCarModel = this.getCarModel.bind(this);
    this.createCarModel = this.createCarModel.bind(this);
    this.updateCarModel = this.updateCarModel.bind(this);
    this.deleteCarModel = this.deleteCarModel.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.local = false;
    this.getCarModels();
    fetch("http://localhost:3002/carbrand")
    .then(res => res.json())
    .then(result =>
    this.setState({
      allbranddata: result
    })
    )
    .catch(console.log);
    fetch("http://localhost:3002/plugtype")
    .then(res => res.json())
    .then(result =>
    this.setState({
      allplugtypedata: result
    })
    )
    .catch(console.log);
  }

  getCarModels() {
      fetch("http://localhost:3002/carmodel")
        .then(res => res.json())
        .then(result =>
          this.setState({
            loading: false,
            alldata: result
          })
        )
        .catch(console.log);
  }

  handleChange(event) {
    var brand_id = this.state.singledata.brand_id;
    var name_type = this.state.singledata.name_type;
    var plug_type_id = this.state.singledata.plug_type_id;
    var plug_side = this.state.singledata.plug_side;
    var kapasitas_max_baterai = this.state.singledata.kapasitas_max_baterai;
    switch (event.target.name) {
      case "name_type":
        name_type = event.target.value;
        break;
      case "plug_type_id":
        plug_type_id = event.target.value;
        break;
      case "kapasitas_max_baterai":
        kapasitas_max_baterai = event.target.value;
        break;
      case "plug_side":
        plug_side = event.target.value;
        break;
      default:
        brand_id = event.target.value;
    }
    this.setState({
      singledata: {
        brand_id: brand_id,
        name_type: name_type,
        plug_type_id: plug_type_id,
        kapasitas_max_baterai: kapasitas_max_baterai,
        plug_side: plug_side
      }
    });
  }

  createCarModel() {
    fetch("http://localhost:3002/carmodel", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.singledata)
    }).then(
        this.setState({
          singledata: {
            brand_id: "",
            name_type: "",
            plug_type_id: "",
            kapasitas_max_baterai: "",
            plug_side: ""
          }
        })
    );
    this.setState({ loading: true }, () => this.getCarModels());
  }

  getCarModel(id) {
    this.setState(
      {
        singledata: {
          brand_id: "Loading...",
          name_type: "Loading...",
          plug_type_id: "Loading...",
          kapasitas_max_baterai: "Loading...",
          plug_side: "Loading..."
        }
      },
      () => {
          fetch("http://localhost:3002/carmodel/" + id)
            .then(res => res.json())
            .then(result => {
              this.setState({
                singledata: {
                  brand_id: result.carBrand.id,
                  name_type: result.name_type,
                  plug_type_id: result.plugType.id,
                  kapasitas_max_baterai: result.kapasitas_max_baterai,
                  plug_side: result.plug_side
                }
              });
            });
      }
    );
  }

  updateCarModel(event, id) {
      fetch("http://localhost:3002/carmodel/" + id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.singledata)
      })
        .then(res => res.json())
        .then(result => {
          this.setState({
            singledata: {
              carBrand: {id: "", name:""},
              plugType: {id: "", name_plug_type: ""},
              brand_id: "",
              name_type: "",
              plug_type_id: "",
              kapasitas_max_baterai: "",
              plug_side: ""
            }
          });
          this.setState({ loading: true }, () => this.getCarModels());
        });
  }

  deleteCarModel(event, id) {
      fetch("http://localhost:3002/carmodel/" + id, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(result => {
          this.setState({
            singledata: {
              brand_id: "",
              name_type: "",
              plug_type_id: "",
              kapasitas_max_baterai: "",
              plug_side: ""
            }
          });
          this.setState({ loading: true }, () => this.getCarModels());
        });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <CarModels
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        allbranddata={this.state.allbranddata}
        allplugtypedata={this.state.allplugtypedata}
        getCarModel={this.getCarModel}
        updateCarModel={this.updateCarModel}
        deleteCarModel={this.deleteCarModel}
        handleChange={this.handleChange}
      />
    );
    return (
      <CCard>
        <CCardHeader>
        <div className="card-header-actions">        
          <CreateCarModel
            singledata={this.state.singledata}
            allbranddata={this.state.allbranddata}
            allplugtypedata={this.state.allplugtypedata}
            createCarModel={this.createCarModel}
            handleChange={this.handleChange}
          />
        </div>
        </CCardHeader>
        <CCardBody>
          {listTable}
        </CCardBody>      
      </CCard>
    );
  }
}

export default CRUDCarModel;
