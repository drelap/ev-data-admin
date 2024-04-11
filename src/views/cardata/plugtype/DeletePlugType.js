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

function DeletePlugType(props) {
    const [modal, setModal] = useState(false);
    const handleOnClick = () => {
      setModal(!modal);
      //props.getPlugType(props.elementId);
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
            <CModalTitle>Delete Plug Type</CModalTitle>
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
              <CLabel htmlFor="name-input">Plug Type</CLabel>
            </CCol>
            <CCol xs="12" md="9">
              <CInput id="name" name="name" value={props.plugtypename} disabled={true} />
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
                onClick={(event)=>props.deletePlugType(event,props.elementId)}
              >Delete</CButton>{false}
          </CModalFooter>
        </CModal>
      </React.Fragment>
    )
    
  }

  export default DeletePlugType;