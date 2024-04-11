import React from "react";
import {
   CCard,
   CCardBody,
   CCardHeader
} from '@coreui/react'
import CreateCarBrand from "./CreateCarBrand";
import CarBrands from "./CarBrands";

class CRUDCarBrand extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      alldata: [],
      singledata: {
        name: "",
        country: "",
        logo: ""
      }
    };
    this.getCarBrands = this.getCarBrands.bind(this);
    this.getCarBrand = this.getCarBrand.bind(this);
    this.createCarBrand = this.createCarBrand.bind(this);
    this.updateCarBrand = this.updateCarBrand.bind(this);
    this.deleteCarBrand = this.deleteCarBrand.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.local = false;
    this.getCarBrands();
  }

  getCarBrands() {
    fetch("http://localhost:3002/carbrand")
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
    var name = this.state.singledata.name;
    var country = this.state.singledata.country;
    var logo = this.state.singledata.logo;
    switch (event.target.name) {
      case "country":
        country = event.target.value;
        break;
      case "logo":
        logo = event.target.value;
        break;
      default:
        name = event.target.value;
    }
    this.setState({
      singledata: {
        name: name,
        country: country,
        logo: logo
      }
    });
  }

  createCarBrand() {
      fetch("http://localhost:3002/carbrand", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.singledata)
      }).then(
        this.setState({
          singledata: {
            name: "",
            country: "",
            logo: ""
          }
        })
      );                                                                            
      this.setState({ loading: true }, () => this.getCarBrands());
  }

  getCarBrand(id) {
    this.setState(
      {
        singledata: {
          name: "Loading...",
          country: "Loading...",
          logo : "Loading..."
        }
      },
      () => {
          fetch("http://localhost:3002/carbrand/" + id)
            .then(res => res.json())
            .then(result => {
              this.setState({
                singledata: {
                  name: result.name,
                  country: result.country ? result.country : "",
                  logo: (result.logo && result.logo_extension) ? result.logo_extension + "," + result.logo : ""
                }
              });
            });
      }
    );
  }

  updateCarBrand(event, id) {
      fetch("http://localhost:3002/carbrand/" + id, {
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
              name: "",
              country: "",
              logo: ""
            }
          });
          this.setState({ loading: true }, () => this.getCarBrands());
        });
  }

  deleteCarBrand(event, id) {
      fetch("http://localhost:3002/carbrand/" + id, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(() => {
          this.setState({
            singledata: {
              name: "",
              country: "",
              logo: ""
            }
          });
          this.setState({ loading: true }, () => this.getCarBrands());
        });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <CarBrands
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getCarBrand={this.getCarBrand}
        updateCarBrand={this.updateCarBrand}
        deleteCarBrand={this.deleteCarBrand}
        handleChange={this.handleChange}
      />
    );
    return (
      <CCard>
        <CCardHeader>
        <div className="card-header-actions">        
          <CreateCarBrand
            singledata={this.state.singledata}
            createCarBrand={this.createCarBrand}
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

export default CRUDCarBrand;
