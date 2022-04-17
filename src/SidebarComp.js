import React from "react";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PeopleIcon from "@mui/icons-material/People";
import { makeStyles } from "@material-ui/core/styles";
import KeyIcon from "@mui/icons-material/Key";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ArticleIcon from "@mui/icons-material/Article";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import WebhookIcon from "@mui/icons-material/Webhook";
import HttpsIcon from "@mui/icons-material/Https";

const useStyles = makeStyles({
  sidebar: {
    boxSizing: "border-box",
    width: "260px",
    marginTop: "12px",
  },
  sidenav: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    position: "static",
    textTransform: "capitalize",
    cursor: "pointer",
    borderRadius: "4px",
    marginBottom: "5px",
    transition: "all 0.5s ease-out",
    padding: "2px 20px",
    "&:hover": {
      backgroundColor:"#CEE3FF",
    }
  },
  icon: {
    backgroundColor: "#CEE3FF",
    color: "#0747f5",
    width: "40px !important",
    height: "40px !important",
    borderRadius: "4px",
    "&:hover": {
      backgroundColor:"#1d82db",
      color:"#fff",
      transition: "all 0.4s ease-in",
    }
  },
  
  textHeading: {
    paddingLeft: "26px",
    fontSize: "20px",
    fontWeight: "400",
    margin: "0px 2px 0px 2px",
  },
});

export default function Classcomp() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidenav}>
        <WidgetsIcon className={classes.icon} />
        <h3 className={classes.textHeading}>overview</h3>
      </div>
      <div className={classes.sidenav}>
        <PeopleIcon className={classes.icon} />
        <h3 className={classes.textHeading}>customers</h3>
      </div>
      <div className={classes.sidenav}>
        <ArticleIcon className={classes.icon} />
        <h3 className={classes.textHeading}>plans</h3>
      </div>
      <div className={classes.sidenav}>
        <LocalOfferIcon className={classes.icon} />
        <h3 className={classes.textHeading}>pricing editors</h3>
      </div>
      <div className={classes.sidenav}>
        <ShoppingBasketIcon className={classes.icon} />
        <h3 className={classes.textHeading}>products</h3>
      </div>
      <div className={classes.sidenav}>
        <HttpsIcon className={classes.icon} />
        <h3 className={classes.textHeading}>integration pipline</h3>
      </div>
      <div className={classes.sidenav}>
        <KeyIcon className={classes.icon} />
        <h3 className={classes.textHeading}>api tokens</h3>
      </div>
      <div className={classes.sidenav}>
        <WebhookIcon className={classes.icon} />
        <h3 className={classes.textHeading}>webhooks</h3>
      </div>
      <div className={classes.sidenav}>
        <HandshakeIcon className={classes.icon} />
        <h3 className={classes.textHeading}>team</h3>
      </div>
    </div>
  );
}
