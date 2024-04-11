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

function DeleteCarBrand(props) {
    const [modal, setModal] = useState(false);
    const handleOnClick = () => {
      setModal(!modal);
      //props.getCarBrand(props.elementId);
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
            <CModalTitle>Delete Brand</CModalTitle>
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
                {/*<CInput id="name" name="name" value={props.singledata.name} disabled={true} />*/}
                <CInput id="name" name="name" value={props.singleobj.name} disabled={true} />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="country-input">Country</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                {/*<CInput id="country" name="country" value={props.singledata.country} disabled={true} />*/}
                <CInput id="country" name="country" value={props.singleobj.country} disabled={true} />
              </CCol>
            </CFormGroup>
            <CFormGroup row>
              <CCol md="3">
                <CLabel htmlFor="logo-input">Logo</CLabel>
              </CCol>
              <CCol xs="12" md="9">
                <p className="form-control-static"><img src={props.singleobj.logo} height="32" alt="" /></p>
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
                onClick={(event)=>props.deleteCarBrand(event,props.elementId)}
              >Delete</CButton>{false}
          </CModalFooter>
        </CModal>
      </React.Fragment>
    )
    
  }

  export default DeleteCarBrand;