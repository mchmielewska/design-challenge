import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    margin: 0,
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
    backgroundColor: "#5c8498",
    width: 200,
    paddingTop: 50,
    margin: 0,
    position: "fixed",
    top: 0,
    height: "100vh",
  },
  dashboardContainer: {
    padding: "0 5%",
    margin: 0,
    marginLeft: 200,
  },
  root: {
    backgroundColor: "#ADC1CB",
  },
  backgroundDark: {
    backgroundColor: "#85A3B2",
    color: "#EBF0F2",
    textTransform: "uppercase",
    letterSpacing: 5,
    margin: 0,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
    lineHeight: 1.5,
    fontSize: 16,
    fontWeight: "bold",
  },
  tag: {
    backgroundColor: "#85A3B2",
    color: "#EBF0F2",
    textTransform: "uppercase",
    letterSpacing: 5,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  tagsContainer: {
    display: "flex",
    justifyContent: "spaceBetween",
  },
  fullWidth: {
    width: "100%",
    backgroundColor: "#33657E",
  },
}));
