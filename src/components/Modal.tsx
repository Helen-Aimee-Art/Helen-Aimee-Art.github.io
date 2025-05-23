import React, { ReactNode } from "react";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../application/App";

type RuleNames = "modalContainer" | "modal";

interface ModalProps {
  closeModal: () => void;
  open: boolean;
  children: ReactNode;
}

const useStyles = createUseStyles<RuleNames, ModalProps, CustomTheme>((theme) => ({
  modalContainer: (props) => ({
    width: "100%",
    height: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    display: props.open ? "block" : "none",
    zIndex: 10000000,
  }),
  modal: {
    display: "flex",
    width: "100%",
    height: "100%",
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
  },
}));

export const Modal = (props: ModalProps) => {
  const { closeModal, children } = props;
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, theme });

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e);
    if ((e.target as HTMLDivElement).id === "modal") {
      closeModal();
    }
  };

  return (
    <div id="modal-container" className={classes.modalContainer} onClick={(e) => handleClick(e)}>
      <div id="modal" className={classes.modal}>
        {children}
      </div>
    </div>
  );
};
