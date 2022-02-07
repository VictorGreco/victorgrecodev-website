import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    centerContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItem: 'center',
        marginTop: '20px'
    }
})

export const ContainerCentre = ({ children }) => {
    const classes = useStyles();

    return (
        <Grid container className={classes.centerContainer}>
            {children}
        </Grid>
    )
}