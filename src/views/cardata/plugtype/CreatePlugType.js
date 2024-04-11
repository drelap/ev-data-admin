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

function CreatePlugType(props) {
  const [modal, setModal] = useState(false);
  const handleOnClick = () => {
    setModal(false);
    props.createPlugType();
    document.getElementById('name_plug_type').value = "";
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
          <CModalTitle>New Plug Type</CModalTitle>
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
              <CLabel htmlFor="name_plug_type-input">Plug Type</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="name_plug_type" name="name_plug_type" placeholder="Plug Type" onChange={props.handleChange} />
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

export default CreatePlugType;
