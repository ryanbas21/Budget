import React from "react";
import Transaction from "../../components/add-transaction";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { Link } from "@reach/router";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

class Dashboard extends React.Component {
  state = {
    isModalOpen: false
  };
  afterOpenModal = e => {};
  closeModal = e => {
    this.setState({ isModalOpen: false });
  };
  openModal = e => {
    this.setState({ isModalOpen: true });
  };
  render() {
    const { classes } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <Transaction isModalOpen={isModalOpen} closeModal={this.closeModal} />
        <Button
          onClick={this.openModal}
          variant="fab"
          color="primary"
          aria-label="Add"
          className={classes.button}
        >
          <AddIcon />
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
