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
  CModalTitle
} from '@coreui/react'

function CreateCarBrand(props) {
  const [modal, setModal] = useState(false);
  const handleOnClick = () => {
    setModal(false);
    props.createCarBrand();
    document.getElementById('name').value = "";
    document.getElementById('country').value = "";
    document.getElementById('logo').value = "";
    document.getElementById('logo_extension').value = "";
    document.getElementById('logo_size').value = "";
  };
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
          <CModalTitle>New Brand</CModalTitle>
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
              <CLabel htmlFor="name-input">Name</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="name" name="name" placeholder="Name" onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="country-input">Country</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="country" name="country" placeholder="Country" onChange={props.handleChange} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel htmlFor="logo-input">Logo</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="logo" name="logo" placeholder="Logo" onChange={props.handleChange} />
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

export default CreateCarBrand;
