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

function UpdatePlugType(props) {
    const [modal, setModal] = useState(false);
    const handleOnClick = () => {
      setModal(!modal);
      //props.getPlugType(props.elementId);
      props.singledata.name_plug_type = props.plugtypename;
    };
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
            <CModalTitle>Update Plug Type</CModalTitle>
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
                <CInput id="name_plug_type" name="name_plug_type" value={props.singledata.name_plug_type} onChange={props.handleChange} />
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
                onClick={(event)=>props.updatePlugType(event,props.elementId)}
              >Update</CButton>{false}
          </CModalFooter>
        </CModal>
        </React.Fragment>
    )
    
  }

  export default UpdatePlugType;