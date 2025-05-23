import { ReactNode, useState } from "react";
import { Button } from "./Button";
import { Dialog } from "./Dialog";
import { Modal } from "./Modal";
import { createUseStyles, useTheme } from "react-jss";
import { CustomTheme } from "../application/App";

type RuleNames = "root" | "bar" | "content" | "arrow";

type DrawerProps =
  | {
      title: string;
      children: ReactNode;
      defaultOpen: boolean;
      locked?: false;
      lockedTitle?: string;
      lockedMessage?: string;
    }
  | {
      title: string;
      children: ReactNode;
      defaultOpen: boolean;
      locked: true;
      lockedTitle: string;
      lockedMessage: string;
    };

const useStyles = createUseStyles<RuleNames, DrawerProps & { open: boolean }, CustomTheme>(
  (theme) => ({
    root: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      userSelect: "none",
      margin: "10px 0",
    },
    bar: (props) => ({
      width: "100%",
      height: 50,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      backgroundColor: theme.colorPrimary,
      color: theme.colorSecondary,
      padding: "0px 25px",
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: props.open ? 0 : 5,
      borderBottomRightRadius: props.open ? 0 : 5,
      cursor: "pointer",
      boxSizing: "border-box",
      transition: "border-radius 0s",
      transitionDelay: props.open ? "0s" : "0.15s",
    }),
    content: (props) => ({
      width: "100%",
      padding: `${props.open ? 25 : 0}px 25px`,
      backgroundColor: theme.colorPrimary,
      color: theme.colorSecondary,
      maxHeight: props.open ? 1200 : 0,
      transition: "max-height 0.15s, padding 0.15s",
      overflow: "hidden",
      boxSizing: "border-box",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
    }),
    arrow: (props) => ({
      width: 25,
      transform: `rotate(${props.open ? 180 : 0}deg)`,
      transition: "transform 0.1s",
    }),
  })
);

export const Drawer = (props: DrawerProps) => {
  const { title, children, defaultOpen, locked, lockedTitle, lockedMessage } = props;
  const [open, setOpen] = useState(defaultOpen || false);
  const [openModal, setOpenModal] = useState(false);
  const theme = useTheme<CustomTheme>();
  const classes = useStyles({ ...props, open, theme });

  const handleExpand = () => {
    if (locked) {
      if (sessionStorage.getItem("over18")) {
        setOpen(!open);
      } else {
        setOpenModal(true);
      }
    } else {
      setOpen(!open);
    }
  };

  const handleButtonClick = () => {
    sessionStorage.setItem("over18", "true");
    setOpenModal(false);
    setOpen(true);
  };

  return (
    <>
      {locked && (
        <Modal open={openModal} closeModal={() => setOpenModal(false)}>
          <Dialog title={lockedTitle} actions={<Button label="OK" click={handleButtonClick} />}>
            <p>{lockedMessage}</p>
          </Dialog>
        </Modal>
      )}
      <div className={classes.root}>
        <div className={classes.bar} onClick={handleExpand}>
          <h3>{title}</h3>
          <img className={classes.arrow} src="/down-arrow.png" alt="down arrow" />
        </div>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};
