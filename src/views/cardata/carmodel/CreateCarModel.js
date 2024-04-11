import React, { useState } from "react";
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

function CreateCarModel(props) {
  var brandoptions = [];
  var plugtypeoptions = [];
  const [modal, setModal] = useState(false);
  const handleOnClick = () => {
    setModal(false);
    props.createCarModel();
    document.getElementById('brand_id').value = "";
    document.getElementById('name_type').value = "";
  };
  props.allbranddata.forEach(element => {
    brandoptions.push(
                <option key={element.id} value={element.id}>{element.name}</option>
    );
  });
  props.allplugtypedata.forEach(element => {
    plugtypeoptions.push(
                <option key={element.id} value={element.id}>{element.name_plug_type}</option>
    );
  });
  return (
    <React.Fragment>
      <CButton 
        color="info"
        onClick={() => setModal(!modal)} 
      ><big>+</big></CButton>
      <CModal 
        show={modal}
        onClose={setModal}
      >
        <CModalHeader closeButton>
          <CModalTitle>New Model</CModalTitle>
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
              <CLabel htmlFor="name-input">Brand</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CSelect custom name="brand_id" id="brand_id" onChange={props.handleChange}>
                {brandoptions}
              </CSelect>
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="model-input">Model</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="name_type" name="name_type" placeholder="Model" onChange={props.handleChange} />
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
              <CInput id="kapasitas_max_baterai" name="kapasitas_max_baterai" placeholder="Max. Bat. Capacity" onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="country-input">Plug Side</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="plug_side" name="plug_side" placeholder="Plug Side" onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="country-input">Picture</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="image" name="image" placeholder="Picture Blob" onChange={props.handleChange} />
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
              onClick={handleOnClick}
            >Add</CButton>{false}
        </CModalFooter>
      </CModal>
    </React.Fragment>
  );
}

export default CreateCarModel;
