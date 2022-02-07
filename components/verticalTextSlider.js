import { Typography, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import styles from '../styles/VerticalTextSlider.module.css';

export const VerticalTextSlider = ({ staticText, dynamicTexts }) => {
    const renderStaticText = (staticText) => {
        if (!staticText) return null;

        return (
            <Typography 
                className={styles.staticText}
                variant='h3'
                component='span'
            >
                {staticText}
            </Typography>
        )
    }

    const renderDynamicTextItem = ({ text }, index) =>  (
        <li className={styles.item} key={index}>
            <Typography variant='h3' component='span' className={styles[`gradientColor${index}`]}>
                {text}
            </Typography>
        </li>
    )

    const renderDynamicTexts = (dynamicTexts) => {
        if (!dynamicTexts) return null;

        return (
            <ul className={styles.dynamicText}>
                {dynamicTexts.map(renderDynamicTextItem)}
            </ul>
        )
    }

    return (
        <div className={styles.container}>
            <Grid container className={styles.textContainer}>
                <Grid item md={5} xs={12} className={styles.staticTextWrapper}>
                    {renderStaticText(staticText)}
                </Grid>
                <Grid item md={7} xs={12} className={styles.dynamicTextsWrapper}>
                    {renderDynamicTexts(dynamicTexts)}
                </Grid>
            </Grid>
        </div>
  );
}