import React ,{ useState , useContext, useEffect } from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import TextField from '@material-ui/core/TextField';
import DeleteIcon from '@material-ui/icons/Delete';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Link from '@material-ui/core/Link';
import ResponseContext from './ResponseContext';
import { makeStyles } from '@material-ui/core/styles';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  //file upload css start
  input: {
    display: 'none',
  },
  button: {
    margin: theme.spacing(1),
  },
  uploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: theme.spacing(2)
  },
  heading: {
    marginBottom: theme.spacing(2),
    fontSize: theme.typography.pxToRem(15),
  },
  fileLabel: {
    display: 'flex',
    alignItems: 'center',
  },
  fileName: {
    marginLeft: theme.spacing(1),
  },
  //accordion start
  accordionContainer: {
    display: 'block',
    width: '100%',
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 20,
    width: 20,
  },
  details: {
    display: 'block',
    alignItems: 'center',
  },
  column: {
    // flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  //accordion end
  //priority dropdown start
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  //priority dropdown end 
  //File upload css end 
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

  }
}));

function createSceneData(sceneNo, shootTown, est) {
  return { sceneNo, shootTown, est };
}

const SceneInputComponent = ({ onSubmit }) => {


  const [selectedFile, setSelectedFile] = useState(null);
  const [scenesDataList, setScenesDataList] = useState([]);
  const [state, setState] = useState({
    sceneNo: '',
    shootTown: '',
    shootTime: ''
  });
  const classes = useStyles();
  const [showAccordion, setShowAccordion] = useState(false);
 // const responseContext = useContext(ResponseContext);
 const { setResponseData, responseData } = useContext(ResponseContext);
  const [expanded, setExpanded] = useState(true);
  const [formData, setFormData] = useState([]);

  useEffect(() => {
    console.log('reached', responseData)
      }, [responseData])
  // const data = [{
  //   name: "panel1"
  // }, {
  //   name: "panel2"
  // }, {
  //   name: "panel3"
  // }, {
  //   name: "panel4"
  // }, {
  //   name: "panel5"
  // }];
  const data = [];

  for (let i = 1; i <= 100; i++) {
    const obj = {
      name: `panel${i}`,
    };
    data.push(obj);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
     // Prepare the data to be sent in the request body
  const sceneData = formData.map((item, index) => ({
    sceneNo: index + 1,
    shootTown: item.shootTown,
    shootTime: item.shootTime
  }));
  console.log(sceneData);
  //const sceneData = {responseData:requestBody};
  console.log("sceneData");
  //console.log(...responseContext.sceneData)
  // Set the sceneData in responseData with a specific key
  //responseContext.setResponseData({ ...responseContext.sceneData, sceneData });
  //responseContext.setResponseData({ ...responseContext.responseData, sceneData: requestBody });
  //responseContext.setResponseData({ sceneData: requestBody });
  setResponseData({ sceneData });

  //responseContext.setResponseData(sceneData);
  

  // Make the POST request to the API endpoint
  // fetch('http://127.0.0.1:3000/duration', {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json'
  //   },
  //   body: JSON.stringify(requestBody)
  // })
  //   .then(response => response.json())
  //   .then(data => {
  //     // Handle the response from the API
  //     console.log(data);
  //     // Perform any additional actions based on the response
  //   })
  //   .catch(error => {
  //     // Handle any errors that occur during the request
  //     console.error(error);
  //     // Perform any error handling
  //   });
    onSubmit('shootDuration');
  };
  const handleTownChange = (event) => {
    setState({
      ...state,
      shootTown: event.target.value
    });
    setScenesDataList([...scenesDataList, state]);
  };
  const handleDataChange = (index) => (event) => {
    const { name, value } = event.target;
    const updatedData = [...formData];
    updatedData[index] = { ...updatedData[index], [name]: value };
    setFormData(updatedData);
    // console.log("Before Prateek")
    // console.log(formData);
    // console.log("After prateek")
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setShowAccordion(false);
  };
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  // const handleChangeSelect = (event) => {
  //   const name = event.target.name;
  //   setState({
  //     ...state,
  //     [name]: event.target.value,
  //   });
  // };
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <div className={classes.appBarSpacer} />
      <Container maxWidth="xl" className={classes.container} >
        {/* <Content /> */}
        <Grid spacing={1}>
          <form onSubmit={handleSubmit}>
            {/* Chart */}
            <Grid item xs={12} md={12} lg={12}>
              <Paper>
                {/* <Chart /> */}
                <div className={classes.uploadContainer}>
                  <Typography variant="h5" component="h2" className={classes.heading}>
                    Upload your Script here
                  </Typography>
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="contained-button-file"
                    type="file"
                    onChange={handleFileInput} />
                  <label htmlFor="contained-button-file">
                    <Button
                      variant="contained"
                      color="default"
                      startIcon={<CloudUploadIcon />}
                      className={classes.button}
                      component="span">
                      Upload
                    </Button>
                  </label>
                  {selectedFile && (
                    <>
                      <span className={classes.fileName}>{selectedFile.name}</span>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        startIcon={<DeleteIcon />}
                        onClick={handleRemoveFile}
                      >
                        Remove
                      </Button>
                    </>
                  )}
                  {selectedFile && (
                    <>
                      <div className={classes.accordionContainer}>
                        {data.map((item, index) => (
                          <Accordion key={item.name} expanded={expanded === item.name} onChange={handleChange(item.name)}>
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls={`${item.name}-content`}
                              id={`${item.name}-header`}
                              overlap="rectangular">
                              <div className={classes.column}>
                                <Typography className={classes.heading}>Scene{index + 1}</Typography>
                              </div>
                            </AccordionSummary>
                            <AccordionDetails className={classes.details}>
                              <Grid
                                container
                                direction="row">
                                <Grid item sm={3}>
                                  <Typography>
                                    Shoot Town
                                    <br />
                                    <TextField
                                      label="Town"
                                      variant="outlined"
                                      inputProps={{
                                        name: 'shootTown',
                                        id: item.name + 'Town',
                                      }}
                                      fullWidth 
                                      className={classes.selectEmpty}
                                      onChange={handleDataChange(index)} />
                                  </Typography>
                                </Grid>
                                <Grid item sx={1}>
                                  <Divider orientation="vertical" variant="middle" fullWidth />
                                </Grid>
                                <Grid item sm={2}>
                                  <Typography>
                                    EST Shoot Time:
                                    <br />
                                    <FormControl variant="outlined" fullWidth className={classes.selectEmpty}>
                                      <InputLabel htmlFor="outlined-age-native-simple">Shoot Time</InputLabel>
                                      <Select
                                        native
                                        label={`${item.name}-ShootTime`}
                                        autoWidth
                                        inputProps={{
                                          name: 'shootTime',
                                          id: item.name + 'outlined-age-native-simple',
                                        }}
                                        onChange={handleDataChange(index)}>
                                        <option aria-label="None" value="" />
                                        <option value={1}>1</option>
                                        <option value={2}>2</option>
                                        <option value={3}>3</option>
                                        <option value={4}>4</option>
                                        <option value={5}>5</option>
                                        <option value={6}>6</option>
                                      </Select>
                                    </FormControl>
                                  </Typography>
                                </Grid>
                              </Grid>
                              {/* </div> */}
                            </AccordionDetails>
                            {/* <Divider />
                            <AccordionActions>
                              <Button size="small">Cancel</Button>
                              <Button size="small" color="primary">
                                Save
                              </Button>
                            </AccordionActions> */}
                          </Accordion>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </Paper>
            </Grid>
            <Grid>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                //disabled={(scenesDataList.length != data.length)}
                type="submit">
                Submit
              </Button>
            </Grid>
          </form>
        </Grid>
        <Box pt={4}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
};

export default SceneInputComponent;