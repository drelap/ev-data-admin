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
  CModalTitle
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

function DeleteCarModel(props) {
    const [modal, setModal] = useState(false);
    const handleOnClick = () => {
      setModal(!modal);
      props.getCarModel(props.elementId);
    };
    return (
      <React.Fragment>
        <CButton 
        color="link"
        onClick={handleOnClick} 
        className="mr-1"
        ><CIcon name="cil-trash" /></CButton>
        <CModal 
          show={modal}
          onClose={setModal}
        >
          <CModalHeader closeButton>
            <CModalTitle>Delete Model</CModalTitle>
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
              <CLabel>Brand</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="brand_id" name="brand_id" value={props.brandname} disabled={true} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Model</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="name_type" name="name_type" value={props.singledata.name_type} disabled={true} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Plug TYpe</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="plug_type_id" name="plug_type_id" value={props.plugtypename} disabled={true} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Max. Bat. Capacity</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="kapasitas_max_baterai" name="kapasitas_max_baterai" value={props.singledata.kapasitas_max_baterai} disabled={true} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Plug Side</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="plug_side" name="plug_side" value={props.singledata.plug_side} disabled={true} />
            </CCol>
          </CFormGroup>
          <CFormGroup row>
            <CCol md="3">
              <CLabel>Picture</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <p className="form-control-static"><img src={props.singledata.image} height="32" alt="" /></p>
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
                onClick={(event)=>props.deleteCarModel(event,props.elementId)}
              >Delete</CButton>{false}
          </CModalFooter>
        </CModal>
      </React.Fragment>
    )
    
  }

  export default DeleteCarModel;