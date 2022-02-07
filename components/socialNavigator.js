import { Grid } from "@mui/material";
import { SocialIcon } from 'react-social-icons';
import { ContainerCentre } from "./containerCentre";

const renderSocialIcon = (url, index) => (
        <Grid item xs={1} key={index}>
            <SocialIcon url={url} bgColor={'#ffffff'} />
        </Grid>
    )

const renderSocialIcons = (socialIcons) => socialIcons.map(renderSocialIcon)

export const SocialNavigator = ({ socialIcons }) => {

    if (!socialIcons) return null;

    return (
        <ContainerCentre>
            {renderSocialIcons(socialIcons)}
        </ContainerCentre>
    )
}