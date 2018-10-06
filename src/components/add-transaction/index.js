import React, { Component } from "react";
import Modal from "react-modal";
import Formik from "formik";

class Transaction extends Component {
  render() {
    return (
      <Modal
        isOpen={this.props.isModalOpen}
        onRequestClose={this.props.closeModal}
      >
        <Formik
          initialValues={[]}
          validate={this.validate}
          render={(
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          ) => (
            <form>
              <button onClick={this.closeModal}>close</button>
              <input type="text" onChange={onChange} onBlur={onBlur} />
            </form>
          )}
        />
      </Modal>
    );
  }
}

export default Transaction;
