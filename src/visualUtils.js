import { makeStyles } from "@material-ui/core/styles";

export const palette = {
  blue10: "#EBF0F2",
  blue20: "#D6E0E5",
  blue40: "#ADC1CB",
  blue60: "#85A3B2",
  blue80: "#5C8498",
  blue100: "#33657E",
  yellow: "#FAE100",
  darkblue: "#002334",
};

export const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    margin: 0,
    marginTop: 50,
    gridGap: "35px",
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
  },
  appRoot: {
    margin: 0,
    padding: 0,
    paddingRight: 10,
    maxWidth: "100%",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  sidebarContainer: {
    backgroundColor: palette.blue80,
    width: 275,
    margin: 0,
    position: "fixed",
    top: 0,
    height: "100vh",
  },
  dashboardContainer: {
    padding: "30px 3%",
    margin: 0,
    marginLeft: 275,
  },
  root: {
    backgroundColor: palette.blue10,
  },
  backgroundDark: {
    backgroundColor: palette.blue60,
    color: palette.blue10,
    textTransform: "uppercase",
    margin: 0,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: "bold",
  },
  tag: {
    backgroundColor: palette.blue20,
    color: palette.darkblue,
    margin: 10,
    marginLeft: 0,
    padding: "7.5px 15px",
    borderRadius: 5,
    transition: "0.5s",
    "&:hover": {
      color: palette.blue10,
      backgroundColor: palette.blue40,
    },
  },
  tagsContainer: {
    margin: "15px 0",
    display: "flex",
    justifyContent: "space-evenly",
  },
  offerDetails: {
    display: "flex",
    justifyContent: "space-between",
  },
  details: {
    backgroundColor: palette.blue20,
    color: palette.darkblue,
    margin: 10,
    marginLeft: 0,
    padding: "7.5px 15px",
    borderRadius: 5,
    transition: "0.5s",
    "&:hover": {
      color: palette.blue10,
      backgroundColor: palette.blue40,
    },
  },
  fullWidth: {
    width: "100%",
    backgroundColor: palette.blue100,
    color: palette.blue10,
    fontWeight: "bold",
    padding: "15px 0",
    transition: "0.5s",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: palette.blue60,
      boxShadow:
        "0px 1px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
  },
  fullWidthButton: {
    width: "100%",
    backgroundColor: palette.yellow,
    justifyContent: "start",
    padding: "10px 20px",
    fontSize: "0.825rem",
    borderRadius: 0,
    marginTop: 5,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: palette.blue100,
      color: palette.yellow,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
  },
  bold: {
    fontWeight: "bold",
  },
  fullWidthContainer: {
    padding: 0,
    display: "flex",
    flexDirection: "column",
    "& > :not(:first-child)": {
      marginLeft: 0,
    },
  },
  offerHeading: {
    backgroundColor: palette.blue40,
    border: "none",
    borderRadius: 5,
    color: palette.darkblue,
    marginTop: 10,
    marginBottom: 10,
    padding: "10px 20px",
    fontSize: 16,
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    transition: "0.5s",
    "&:hover": {
      color: palette.blue10,
      backgroundColor: palette.blue60,
    },
  },
  menuContainer: {
    margin: "20px 0 0 0",
    display: "flex",
    justifyContent: "space-between",
  },
  formRoot: {
    "& input": {
      padding: "8px",
      width: "30ch",
    },
    "& label": {
      fontSize: "0.875rem",
      transform: "translate(10px, 10px) scale(1)",
    },
  },
  menuButton: {
    backgroundColor: palette.blue60,
    color: "white",
    fontWeight: "bold",
    padding: "5px 30px",
    marginLeft: 10,
    transition: "0.5s",
    "&:hover": {
      backgroundColor: palette.blue100,
      color: palette.yellow,
      boxShadow:
        "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
    },
  },
  logo: {
    margin: "45px 25px",
  },
  sortContainer: {
    alignItems: "center",
    "& > span": {
      textTransform: "uppercase",
      padding: 15,
    },
  },
}));
