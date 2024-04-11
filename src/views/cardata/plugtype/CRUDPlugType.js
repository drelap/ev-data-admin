import React from "react";
import {
   CCard,
   CCardBody,
   CCardHeader
} from '@coreui/react'
import CreatePlugType from "./CreatePlugType";
import PlugTypes from "./PlugTypes";

class CRUDPlugType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      alldata: [],
      singledata: {
        name_plug_type: "",
      }
    };
    this.getPlugTypes = this.getPlugTypes.bind(this);
    this.getPlugType = this.getPlugType.bind(this);
    this.createPlugType = this.createPlugType.bind(this);
    this.updatePlugType = this.updatePlugType.bind(this);
    this.deletePlugType = this.deletePlugType.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.local = false;
    this.getPlugTypes();
  }

  getPlugTypes() {
      fetch("http://localhost:3002/plugtype")
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
    var name_plug_type = this.state.singledata.name_plug_type;
    name_plug_type = event.target.value;
    this.setState({
      singledata: {
        name_plug_type: name_plug_type
      }
    });
  }

  createPlugType() {
      fetch("http://localhost:3002/plugtype", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state.singledata)
      }).then(
        this.setState({
          singledata: {
            name_plug_type: ""
          }
        })
      );
      this.setState({ loading: true }, () => this.getPlugTypes());
  }

  getPlugType(id) {
    this.setState(
      {
        singledata: {
          name_plug_type: "Loading...",
        }
      },
      () => {
          fetch("http://localhost:3002/plugtype/" + id)
            .then(res => res.json())
            .then(result => {
              this.setState({
                singledata: {
                  name_plug_type: result.name_plug_type,
                }
              });
            });
      }
    );
  }

  updatePlugType(event, id) {
      fetch("http://localhost:3002/plugtype/" + id, {
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
              name_plug_type: ""
            }
          });
          this.setState({ loading: true }, () => this.getPlugTypes());
        });
  }

  deletePlugType(event, id) {
      fetch("http://localhost:3002/plugtype/" + id, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(result => {
          this.setState({
            singledata: {
              name_plug_type: ""
            }
          });
          this.setState({ loading: true }, () => this.getPlugTypes());
        });
  }

  render() {
    const listTable = this.state.loading ? (
      <span>Loading...Is usually slower than localhost...</span>
    ) : (
      <PlugTypes
        alldata={this.state.alldata}
        singledata={this.state.singledata}
        getPlugType={this.getPlugType}
        updatePlugType={this.updatePlugType}
        deletePlugType={this.deletePlugType}
        handleChange={this.handleChange}
      />
    );
    return (
      <CCard>
        <CCardHeader>
        <div className="card-header-actions">        
          <CreatePlugType
            singledata={this.state.singledata}
            createPlugType={this.createPlugType}
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

export default CRUDPlugType;
