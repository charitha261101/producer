import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const useStyles = makeStyles((theme) => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(4),
    }
}));

const ShootDurationComponent = ({ onSubmit }) => {
    const styles = useStyles();
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit('characterInput');
    };

    return (
        <div>
            <div className={styles.appBarSpacer}>
                <Container maxWidth="xl" className={styles.container}>
                    <Typography component="h1" variant="h6" color="inherit" noWrap>
                        Shoot Duration Interval
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <Grid item xs={2}>
                                <Typography variant='caption'>
                                    From
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Typography>
                            </Grid>
                            <Grid item xs={1} />
                            <Grid item xs={2}>
                                <Typography variant='caption'>
                                    To
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DemoContainer components={['DatePicker']}>
                                            <DatePicker />
                                        </DemoContainer>
                                    </LocalizationProvider>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid>
                            <Button
                                variant="contained"
                                type="submit"
                                color="primary">
                                Submit
                            </Button>
                        </Grid>
                    </form>
                </Container>
            </div>
        </div>
    );
};

export default ShootDurationComponent;