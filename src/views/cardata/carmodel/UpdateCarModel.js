import React, { useState } from 'react';
import {
  CButton,
  CCol,
  CFormGroup,
  CInput,
  CLabel,
  CModal,
  CModalBody,
  CModalFooter,
  CModalHeader,
  CModalTitle,
  CSelect
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function UpdateCarModel(props) {
    var brandoptions = [];
    var plugtypeoptions = [];
    const [modal, setModal] = useState(false);
    const handleOnClick = () => {
      setModal(!modal);
      props.getCarModel(props.elementId);
    };
    props.allbranddata.forEach(element => {
      brandoptions.push(
        props.singledata.brand_id.toString() === element.id.toString() ?
                  <option key={element.id} value={element.id} selected>{element.name}</option>
                :
                  <option key={element.id} value={element.id}>{element.name}</option>
      );
    });
    props.allplugtypedata.forEach(element1 => {
      plugtypeoptions.push(
        props.singledata.plug_type_id.toString() === element1.id.toString() ?
                  <option key={element1.id} value={element1.id} selected>{element1.name_plug_type}</option>
                :
                  <option key={element1.id} value={element1.id}>{element1.name_plug_type}</option>
      );
    });
    return (
      <React.Fragment>
        <CButton 
        color="link"
        onClick={handleOnClick} 
        className="mr-1"
        ><CIcon name="cil-pencil" /></CButton>
        <CModal 
          show={modal} 
          onClose={setModal}
        >
          <CModalHeader closeButton>
            <CModalTitle>Update Model</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <CFormGroup row>
              <CCol md="3">
                <CLabel>#</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <p className="form-control-static">{props.elementId}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="brand-input">Brand</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <CSelect custom name="brand_id" id="brand_id" disabled={true}>
                  {brandoptions}
                </CSelect>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="model-input">Model</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <p className="form-control-static">{props.singledata.name_type}</p>
              </CCol>
            </CFormGroup>
            <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="name-input">Plug Type</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect custom name="plug_type_id" id="plug_type_id" onChange={props.handleChange}>
                {plugtypeoptions}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="country-input">Max. Bat. Capacity</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="kapasitas_max_baterai" name="kapasitas_max_baterai" value={props.singledata.kapasitas_max_baterai} onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="country-input">Plug Side</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="plug_side" name="plug_side" value={props.singledata.plug_side} onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="country-input">Picture</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="image" name="image" value={props.singledata.image} onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          </CModalBody>
          <CModalFooter>
            <CButton 
                color="secondary" 
                onClick={() => setModal(false)}
              >Close</CButton>
              <CButton
                color="primary"
                onClick={(event)=>props.updateCarModel(event,props.elementId)}
              >Update</CButton>{false}
          </CModalFooter>
        </CModal>
        </React.Fragment>
    )
    
  }

  export default UpdateCarModel;