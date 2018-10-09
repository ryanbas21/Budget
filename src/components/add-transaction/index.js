import React, { Component } from "react";
import Modal from "@material-ui/core/Modal";
import FormContainer from "./form-container";
import AddForm from "./add.form";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  items: {
    maxWidth: "50%"
  },
  width: {
    width: "100%"
  }
};

class Transaction extends Component {
  validate = e => {};
  render() {
    const { items, width, form } = styles;
    return (
      <Modal
        style={{ alignItems: "center", justifyContent: "center" }}
        open={this.props.isModalOpen}
        onClose={this.props.closeModal}
      >
        <FormContainer
          validate={this.validate}
          closeModal={this.props.closeModal}
          isModalOpen={this.props.isModalOpen}
          initialValues={[]}
          form={form}
          closeModal={this.props.closeModal}
          isModalOpen={this.props.isModalOpen}
        >
          {(
            values,
            errors,
            touched,
            onChange,
            onBlur,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          ) => <AddForm onChange={onChange} />}
        </FormContainer>
      </Modal>
    );
  }
}

export default withStyles(styles.form)(Transaction);
